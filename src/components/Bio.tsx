import { ArrowIcon } from "./ArrowIcon";

export function Bio() {
  return (
    <section className="hero" id="bio" aria-labelledby="intro-title">
      <div className="hero-orb" aria-hidden="true" />
      <h1 id="intro-title">
        Hello, I'm Ronan
        <br />
      </h1>
      <div className="bio-row">
        <p>
          I’m a new grad developer with an interest in backend and full-stack engineering. My preferred
          programming languages are Python and C++ for backend development. Beyond software, this site offers 
          a glimpse into who I am, including my experiences in software engineering and my other interests.
        </p>
        <p>
          Outside of software, I enjoy being active. Top activities include surfing, hiking
          and doing martial arts. I grew up doing Aikido and a little Brazilian Jiu Jitsu, and continued to train in other martial
          arts such as wrestling at Cal Poly, and then Muay Thai and more Brazilian Jiu Jitsu in Austin when I was interning at Amazon.
          I love video games, but haven't had as much time to play them like I used to have. My top 5 games would be Destiny, Halo (for nostalgia, it was my first
          fps I played with my dad too), Elden Ring, Skyrim and Maplestory. I will be surprised if anyone reading this knows Maplestory. It is my guilty pleasure
          game for sure.
        </p>
      </div>
      <a
        className="scroll-cue"
        href="#experience"
        aria-label="Scroll to experience"
      >
        <span>Scroll to explore</span>
      </a>
    </section>
  );
}
