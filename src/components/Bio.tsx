import { ArrowIcon } from "./ArrowIcon";

export function Bio() {
  return (
    <section className="hero" id="bio" aria-labelledby="intro-title">
      <div className="hero-orb" aria-hidden="true" />
      <h1 id="intro-title">
        Hello I'm Ronan
        <br />
      </h1>
      <div className="bio-row">
        <p>
          I’m a new grad developer with an interest in backend and Fullstack engineering. My prefered
          programing languages are Python and C++ for backend. Beyond software, this site is a glimpse into who 
          I am, such as my experiences related to software engineering, and other interest.
        </p>
      </div>
      <a
        className="scroll-cue"
        href="#experience"
        aria-label="Scroll to experience"
      >
        <span>Scroll to explore</span>
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
