import { ArrowIcon } from "./ArrowIcon";

export function Bio() {
  return (
    <section className="hero" id="bio" aria-labelledby="intro-title">
      <div className="hero-orb" aria-hidden="true" />
      <div className="eyebrow">
        <span /> Hello, I’m Ronan
      </div>
      <h1 id="intro-title">
        I build digital things
        <br />
        <em>with care.</em>
      </h1>
      <div className="bio-row">
        <p>
          I’m a developer who enjoys turning complex ideas into clear, useful
          experiences. I care about the small details, the people using what I
          build, and learning something new along the way.
        </p>
        <a className="text-link" href="mailto:hello@example.com">
          Let’s work together <ArrowIcon />
        </a>
      </div>
      <a
        className="scroll-cue"
        href="#roulette"
        aria-label="Scroll to roulette game"
      >
        <span>Scroll to explore</span>
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
