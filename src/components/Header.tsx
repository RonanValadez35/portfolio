function GitHubIcon() {
  return (
    <svg className="github-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2V23c0 .4.2.7.8.6A12 12 0 0 0 12 .3Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="linkedin-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5ZM8 19H5V8h3v11ZM6.5 6.7A1.75 1.75 0 1 1 6.5 3.2a1.75 1.75 0 0 1 0 3.5ZM20 19h-3v-5.6c0-3.4-4-3.1-4 0V19h-3V8h3v1.8c1.4-2.6 7-2.8 7 2.5V19Z" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <nav className="social-nav" aria-label="Social links">
        <a href="https://github.com/RonanValadez35" target="_blank" rel="noreferrer">
          <GitHubIcon />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/ronan-valadez" target="_blank" rel="noreferrer">
          <LinkedInIcon />
          LinkedIn
        </a>
      </nav>
      <nav className="primary-nav" aria-label="Primary navigation">
        <a href="#bio">About</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
      </nav>
    </header>
  );
}
