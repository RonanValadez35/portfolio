import { useRef, useState, type CSSProperties } from "react";

const wheelOrder = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23,
  10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];

const redNumbers = new Set([
  1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
]);

const segmentAngle = 360 / wheelOrder.length;

const wheelBackground = `conic-gradient(from ${-segmentAngle / 2}deg, ${wheelOrder
  .map((number, index) => {
    const color = number === 0 ? "#2b704d" : index % 2 ? "#171916" : "#8b2538";
    return `${color} ${index * segmentAngle}deg ${(index + 1) * segmentAngle}deg`;
  })
  .join(", ")})`;

type SpinState = {
  id: number;
  wheelRotation: number;
  ballRotation: number;
};

function numberColor(number: number) {
  if (number === 0) return "green";
  return redNumbers.has(number) ? "red" : "black";
}

export function Roulette() {
  const [spin, setSpin] = useState<SpinState>({
    id: 0,
    wheelRotation: 0,
    ballRotation: 0,
  });
  const [isSpinning, setIsSpinning] = useState(false);
  const [pendingResult, setPendingResult] = useState<number | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [history, setHistory] = useState<number[]>([]);
  const fallbackTimer = useRef<number | null>(null);

  const completeSpin = (number: number) => {
    if (fallbackTimer.current !== null) {
      window.clearTimeout(fallbackTimer.current);
      fallbackTimer.current = null;
    }

    setIsSpinning(false);
    setResult(number);
    setPendingResult(null);
    setHistory((current) => [number, ...current].slice(0, 6));
  };

  const handleSpin = () => {
    if (isSpinning) return;

    const randomIndex = window.crypto.getRandomValues(new Uint32Array(1))[0] % wheelOrder.length;
    const winningNumber = wheelOrder[randomIndex];
    const wheelRotation = 5 * 360 + Math.floor(Math.random() * 80) + 20;
    const ballRotation = wheelRotation + randomIndex * segmentAngle - 8 * 360;

    setIsSpinning(true);
    setResult(null);
    setPendingResult(winningNumber);
    setSpin((current) => ({
      id: current.id + 1,
      wheelRotation: 0,
      ballRotation: 0,
    }));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setSpin((current) => ({
          ...current,
          wheelRotation,
          ballRotation,
        }));
      });
    });

    fallbackTimer.current = window.setTimeout(() => completeSpin(winningNumber), 5900);
  };

  return (
    <section className="section roulette-section" id="roulette" aria-labelledby="roulette-title">
      <div className="roulette-intro">
        <div>
          <p className="section-number">A little intermission</p>
          <h2 id="roulette-title">Feeling lucky?</h2>
        </div>
        <p>
          Take the wheel for a spin. The ball will choose one of 37 pockets on
          this classic European layout.
        </p>
      </div>

      <div className="roulette-game">
        <div className="wheel-column">
          <button className="spin-button" type="button" onClick={handleSpin} disabled={isSpinning}>
            <span aria-hidden="true">✦</span>
            {isSpinning ? "Spinning…" : "Spin the wheel"}
          </button>

          <div className="roulette-wheel-wrap">
            <div className="roulette-pointer" aria-hidden="true" />
            <div className="roulette-wheel" aria-hidden="true">
              <div
                key={`wheel-${spin.id}`}
                className={`roulette-pockets${isSpinning ? " is-spinning" : ""}`}
                style={
                  {
                    "--wheel-background": wheelBackground,
                    "--wheel-rotation": `${spin.wheelRotation}deg`,
                  } as CSSProperties
                }
              >
                {wheelOrder.map((number, index) => (
                  <span
                    className="roulette-number-slot"
                    key={number}
                    style={{ transform: `rotate(${index * segmentAngle}deg)` }}
                  >
                    <span>{number}</span>
                  </span>
                ))}
                <span className="wheel-bowl" />
                <span className="wheel-hub">RV</span>
              </div>
              <div
                key={`ball-${spin.id}`}
                className={`ball-track${isSpinning ? " is-spinning" : ""}`}
                style={{ "--ball-rotation": `${spin.ballRotation}deg` } as CSSProperties}
                onTransitionEnd={() => {
                  if (isSpinning && pendingResult !== null) completeSpin(pendingResult);
                }}
              >
                <span className="roulette-ball" />
              </div>
            </div>
          </div>
        </div>

        <div className="roulette-table">
          <div className="result-card" aria-live="polite" aria-atomic="true">
            <span className="result-label">Winning number</span>
            <strong className={result === null ? "waiting" : numberColor(result)}>
              {isSpinning ? "—" : result ?? "Place your bets"}
            </strong>
            <span className="result-meta">
              {isSpinning
                ? "The ball is in motion"
                : result === null
                  ? "One spin. Infinite possibility."
                  : `${numberColor(result).toUpperCase()} · ${result === 0 ? "ZERO" : result % 2 ? "ODD" : "EVEN"}`}
            </span>
          </div>

          <div className="number-board" aria-label="European roulette table layout">
            <span className="board-zero">0</span>
            <div className="board-numbers">
              {Array.from({ length: 36 }, (_, index) => index + 1).map((number) => (
                <span className={numberColor(number)} key={number}>
                  {number}
                </span>
              ))}
            </div>
          </div>

          <div className="spin-history">
            <span>Recent spins</span>
            <div>
              {history.length ? (
                history.map((number, index) => (
                  <span className={numberColor(number)} key={`${number}-${index}`}>
                    {number}
                  </span>
                ))
              ) : (
                <small>Your results will appear here</small>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
