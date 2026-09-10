import { useMemo, useRef, useState, type CSSProperties, type Dispatch, type SetStateAction } from "react";

const wheelOrder = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23,
  10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];

const redNumbers = new Set([
  1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
]);

const tableNumbers = [
  ...Array.from({ length: 12 }, (_, index) => (index + 1) * 3),
  ...Array.from({ length: 12 }, (_, index) => (index + 1) * 3 - 1),
  ...Array.from({ length: 12 }, (_, index) => (index + 1) * 3 - 2),
];

const chipValues = [5, 25, 100, 500, 1_000];
const segmentAngle = 360 / wheelOrder.length;

const wheelBackground = `conic-gradient(from ${-segmentAngle / 2}deg, ${wheelOrder
  .map((number, index) => {
    const color =
      number === 0 ? "#2b704d" : redNumbers.has(number) ? "#8b2538" : "#171916";
    return `${color} ${index * segmentAngle}deg ${(index + 1) * segmentAngle}deg`;
  })
  .join(", ")})`;

type SpinState = {
  id: number;
  wheelRotation: number;
  ballRotation: number;
};

type BetKey =
  | `number-${number}`
  | "red"
  | "black"
  | "even"
  | "odd"
  | "low"
  | "high"
  | "dozen-1"
  | "dozen-2"
  | "dozen-3"
  | "column-1"
  | "column-2"
  | "column-3";

type BetPlacement = {
  id: number;
  key: BetKey;
  label: string;
  amount: number;
};

type RouletteProps = {
  bankroll: number;
  setBankroll: Dispatch<SetStateAction<number>>;
};

type OutsideBet = {
  key: BetKey;
  label: string;
  shortLabel?: string;
};

const dozenBets: OutsideBet[] = [
  { key: "dozen-1", label: "1st 12" },
  { key: "dozen-2", label: "2nd 12" },
  { key: "dozen-3", label: "3rd 12" },
];

const evenMoneyBets: OutsideBet[] = [
  { key: "low", label: "1 to 18" },
  { key: "even", label: "Even" },
  { key: "red", label: "Red" },
  { key: "black", label: "Black" },
  { key: "odd", label: "Odd" },
  { key: "high", label: "19 to 36" },
];

const columnBets: OutsideBet[] = [
  { key: "column-1", label: "First column", shortLabel: "2 to 1" },
  { key: "column-2", label: "Second column", shortLabel: "2 to 1" },
  { key: "column-3", label: "Third column", shortLabel: "2 to 1" },
];

const moneyFormatter = new Intl.NumberFormat("en-US");

function numberColor(number: number) {
  if (number === 0) return "green";
  return redNumbers.has(number) ? "red" : "black";
}

function betWins(key: BetKey, number: number) {
  if (key.startsWith("number-")) return Number(key.slice(7)) === number;
  if (number === 0) return false;

  switch (key) {
    case "red": return redNumbers.has(number);
    case "black": return !redNumbers.has(number);
    case "even": return number % 2 === 0;
    case "odd": return number % 2 === 1;
    case "low": return number <= 18;
    case "high": return number >= 19;
    case "dozen-1": return number <= 12;
    case "dozen-2": return number >= 13 && number <= 24;
    case "dozen-3": return number >= 25;
    case "column-1": return number % 3 === 1;
    case "column-2": return number % 3 === 2;
    case "column-3": return number % 3 === 0;
  }
}

function payoutMultiplier(key: BetKey) {
  if (key.startsWith("number-")) return 36;
  if (key.startsWith("dozen-") || key.startsWith("column-")) return 3;
  return 2;
}

function BetChip({ amount }: { amount: number }) {
  return (
    <span className="table-chip" aria-label={`${moneyFormatter.format(amount)} dollars bet`}>
      <span>${moneyFormatter.format(amount)}</span>
    </span>
  );
}

export function Roulette({ bankroll, setBankroll }: RouletteProps) {
  const [spin, setSpin] = useState<SpinState>({ id: 0, wheelRotation: 0, ballRotation: 0 });
  const [isSpinning, setIsSpinning] = useState(false);
  const [pendingResult, setPendingResult] = useState<number | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [history, setHistory] = useState<number[]>([]);
  const [selectedChip, setSelectedChip] = useState(25);
  const [placements, setPlacements] = useState<BetPlacement[]>([]);
  const [roundMessage, setRoundMessage] = useState("Choose a chip, then place your bets.");
  const fallbackTimer = useRef<number | null>(null);
  const activeBets = useRef<BetPlacement[]>([]);
  const betId = useRef(0);

  const betsByKey = useMemo(() => {
    return placements.reduce<Record<string, number>>((totals, bet) => {
      totals[bet.key] = (totals[bet.key] ?? 0) + bet.amount;
      return totals;
    }, {});
  }, [placements]);

  const totalBet = placements.reduce((sum, bet) => sum + bet.amount, 0);

  const placeBet = (key: BetKey, label: string) => {
    if (isSpinning || bankroll < selectedChip) return;
    setPlacements((current) => [...current, { id: ++betId.current, key, label, amount: selectedChip }]);
    setBankroll((current) => current - selectedChip);
    setResult(null);
    setRoundMessage(`$${moneyFormatter.format(selectedChip)} placed on ${label}.`);
  };

  const undoLastBet = () => {
    const lastBet = placements.at(-1);
    if (!lastBet || isSpinning) return;
    setPlacements((current) => current.slice(0, -1));
    setBankroll((current) => current + lastBet.amount);
    setRoundMessage(`Removed the $${moneyFormatter.format(lastBet.amount)} bet on ${lastBet.label}.`);
  };

  const clearBets = () => {
    if (!placements.length || isSpinning) return;
    setBankroll((current) => current + totalBet);
    setPlacements([]);
    setRoundMessage("Bets cleared and returned to your bankroll.");
  };

  const completeSpin = (number: number) => {
    if (fallbackTimer.current !== null) {
      window.clearTimeout(fallbackTimer.current);
      fallbackTimer.current = null;
    }

    const staked = activeBets.current.reduce((sum, bet) => sum + bet.amount, 0);
    const returned = activeBets.current.reduce(
      (sum, bet) => sum + (betWins(bet.key, number) ? bet.amount * payoutMultiplier(bet.key) : 0),
      0,
    );

    if (returned > 0) {
      setBankroll((current) => current + returned);
      const profit = returned - staked;
      setRoundMessage(
        profit >= 0
          ? `You won $${moneyFormatter.format(profit)} — $${moneyFormatter.format(returned)} returned.`
          : `$${moneyFormatter.format(returned)} returned from this round.`,
      );
    } else {
      setRoundMessage(`No win this round. $${moneyFormatter.format(staked)} wagered.`);
    }

    activeBets.current = [];
    setPlacements([]);
    setIsSpinning(false);
    setResult(number);
    setPendingResult(null);
    setHistory((current) => [number, ...current].slice(0, 6));
  };

  const handleSpin = () => {
    if (isSpinning || placements.length === 0) return;

    const randomIndex = window.crypto.getRandomValues(new Uint32Array(1))[0] % wheelOrder.length;
    const winningNumber = wheelOrder[randomIndex];
    const wheelRotation = 5 * 360 + Math.floor(Math.random() * 80) + 20;
    const ballRotation = wheelRotation + randomIndex * segmentAngle - 8 * 360;

    activeBets.current = placements.map((bet) => ({ ...bet }));
    setIsSpinning(true);
    setResult(null);
    setPendingResult(winningNumber);
    setRoundMessage(`Bets closed — $${moneyFormatter.format(totalBet)} is in play.`);
    setSpin((current) => ({ id: current.id + 1, wheelRotation: 0, ballRotation: 0 }));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setSpin((current) => ({ ...current, wheelRotation, ballRotation }));
      });
    });

    fallbackTimer.current = window.setTimeout(() => completeSpin(winningNumber), 5900);
  };

  const renderBetButton = (bet: OutsideBet, className = "") => (
    <button
      className={`bet-spot ${className}`.trim()}
      type="button"
      onClick={() => placeBet(bet.key, bet.label)}
      disabled={isSpinning || bankroll < selectedChip}
      aria-label={`${bet.label}, ${betsByKey[bet.key] ?? 0} dollars bet`}
      key={bet.key}
    >
      <span>{bet.shortLabel ?? bet.label}</span>
      {betsByKey[bet.key] ? <BetChip amount={betsByKey[bet.key]} /> : null}
    </button>
  );

  return (
    <section className="section roulette-section" id="roulette" aria-labelledby="roulette-title">
      <div className="roulette-intro">
        <div>
          <p className="section-number">A little intermission</p>
          <h2 id="roulette-title">Feeling lucky?</h2>
        </div>
        <p>
          Pick a chip and place it on the table. Straight numbers pay 35:1,
          dozens and columns pay 2:1, and even-money bets pay 1:1.
        </p>
      </div>

      <div className="roulette-game">
        <div className="wheel-column">
          <button
            className="spin-button"
            type="button"
            onClick={handleSpin}
            disabled={isSpinning || totalBet === 0}
          >
            <span aria-hidden="true">✦</span>
            {isSpinning ? "Spinning…" : totalBet === 0 ? "Place a bet" : "Spin the wheel"}
          </button>

          <div className="roulette-wheel-wrap">
            <div className="roulette-pointer" aria-hidden="true" />
            <div className="roulette-wheel" aria-hidden="true">
              <div
                key={`wheel-${spin.id}`}
                className={`roulette-pockets${isSpinning ? " is-spinning" : ""}`}
                style={{ "--wheel-background": wheelBackground, "--wheel-rotation": `${spin.wheelRotation}deg` } as CSSProperties}
              >
                {wheelOrder.map((number, index) => (
                  <span className="roulette-number-slot" key={number} style={{ transform: `rotate(${index * segmentAngle}deg)` }}>
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
            <span className="result-meta">{roundMessage}</span>
          </div>

          <div className="betting-toolbar">
            <div className="chip-rack" role="group" aria-label="Choose a chip value">
              {chipValues.map((value, index) => (
                <button
                  className={`casino-chip chip-${index + 1}${selectedChip === value ? " is-selected" : ""}`}
                  type="button"
                  onClick={() => setSelectedChip(value)}
                  aria-pressed={selectedChip === value}
                  disabled={isSpinning || bankroll < value}
                  key={value}
                >
                  ${moneyFormatter.format(value)}
                </button>
              ))}
            </div>
            <div className="bet-totals">
              <span>On table <strong>${moneyFormatter.format(totalBet)}</strong></span>
              <div>
                <button type="button" onClick={undoLastBet} disabled={!placements.length || isSpinning}>Undo</button>
                <button type="button" onClick={clearBets} disabled={!placements.length || isSpinning}>Clear</button>
              </div>
            </div>
          </div>

          <div className="number-board" aria-label="European roulette betting table">
            <button
              className="board-zero bet-spot"
              type="button"
              onClick={() => placeBet("number-0", "0")}
              disabled={isSpinning || bankroll < selectedChip}
              aria-label={`0, ${betsByKey["number-0"] ?? 0} dollars bet`}
            >
              <span>0</span>
              {betsByKey["number-0"] ? <BetChip amount={betsByKey["number-0"]} /> : null}
            </button>
            <div className="board-numbers">
              {tableNumbers.map((number) => {
                const key: BetKey = `number-${number}`;
                return (
                  <button
                    className={`bet-spot ${numberColor(number)}`}
                    type="button"
                    onClick={() => placeBet(key, String(number))}
                    disabled={isSpinning || bankroll < selectedChip}
                    aria-label={`${number}, ${betsByKey[key] ?? 0} dollars bet`}
                    key={number}
                  >
                    <span>{number}</span>
                    {betsByKey[key] ? <BetChip amount={betsByKey[key]} /> : null}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="column-bets">{columnBets.map((bet) => renderBetButton(bet))}</div>
          <div className="dozen-bets">{dozenBets.map((bet) => renderBetButton(bet))}</div>
          <div className="outside-bets">
            {evenMoneyBets.map((bet) => renderBetButton(bet, bet.key === "red" || bet.key === "black" ? bet.key : ""))}
          </div>

          <div className="spin-history">
            <span>Recent spins</span>
            <div>
              {history.length ? history.map((number, index) => (
                <span className={numberColor(number)} key={`${number}-${index}`}>{number}</span>
              )) : <small>Your results will appear here</small>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
