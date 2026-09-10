import { ArrowIcon } from "./ArrowIcon";

export function Footer() {
  return (
    <footer>
      <p>Have a project in mind?</p>
      <a href="mailto:hello@example.com">
        hello@example.com <ArrowIcon />
      </a>
      <div className="footer-bottom">
        <span>© 2026 Ronan Valadez</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
