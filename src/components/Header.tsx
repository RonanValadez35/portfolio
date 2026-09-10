type HeaderProps = {
  bankroll: number;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const compactCurrencyFormatter = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

export function Header({ bankroll }: HeaderProps) {
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

      <output
        className="currency-balance"
        aria-label={`Current bankroll: ${currencyFormatter.format(bankroll)} dollars`}
        aria-live="polite"
      >
        <span className="currency-balance__mark" aria-hidden="true">$</span>
        <span className="currency-balance__copy">
          <span className="currency-balance__label">Bankroll</span>
          <strong className="currency-balance__amount">{currencyFormatter.format(bankroll)}</strong>
          <strong className="currency-balance__amount-short" aria-hidden="true">
            {compactCurrencyFormatter.format(bankroll)}
          </strong>
        </span>
      </output>
    </>
  );
}
