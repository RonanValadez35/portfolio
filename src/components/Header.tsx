export function Header() {
  return (
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
  );
}
