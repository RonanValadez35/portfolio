export function Header() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Ronan Valadez, home">
          RV<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#bio">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </nav>
      </header>

      <output className="currency-balance" aria-label="Current bankroll: 12,450 dollars">
        <span className="currency-balance__mark" aria-hidden="true">$</span>
        <span className="currency-balance__copy">
          <span className="currency-balance__label">Bankroll</span>
          <strong className="currency-balance__amount">12,450.00</strong>
          <strong className="currency-balance__amount-short" aria-hidden="true">12.4K</strong>
        </span>
      </output>
    </>
  );
}
