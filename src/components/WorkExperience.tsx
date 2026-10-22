const experience = [
  {
    period: "June 2025 — September 2025",
    title: "Software Engineer Intern at Amazon",
    image: "/images/AUS16.jpeg",
    imageAlt: "The glass Amazon Spheres at the company’s Seattle campus",
    description: (
      <>
      <p>
      This was a major milestone in my career, learning, and life. I gained many new life experiences from Amazon that I had never experienced before. Examples
      include flying on a plane, leaving California, staying in an Air BNB, and being in Texas. I remember everyone I spoke to telling me that the heat and humidity 
      was going to be unbearable, but when I got there it was not that bad. Some context, the previous summer I worked for a wedding company, and part of my work entailed 
      setting up the ceremony, which was held on the beach in Southern California. So I was carrying chairs, and parts for the stage on sand in 100 degree weather. So anything
      was basically better than that.
      </p>
      <p>
      I had trouble with my internship prior to the start, I ordered my laptop to my house a month in advanced, but it did not arrive until I boarded my flight. I emailed my
      manager during my layover and he ended up shipping my laptop to my house in Austin, and told me to not come in to the office till I recieved it. I ended up recieving
      it the Saturday before my scheduled start date and emailed my manager I got laptop but he did not reply. So following Amazon's leadership princple I decided to 
      have a bias for action and show up to the office on my original start date. Luckily my roommate was interning at Amazon, for a different team, and he showed me where
      to go to get my blue badge. My mentor ended up contacting me halfway through the day and then brought me to a different building where the team was. 

      </p>
      </>
    )
  },
  {
    period: "January 2023 — September 2023",
    title: "Electrical & Software Intern at Dos Pueblos Engineering Academy(DPEA)",
    image: "/images/dpea-workshop.jpg",
    imageAlt: "The hands-on engineering workshop at Dos Pueblos High School",
    description:
      (
        <>
        <p>
          I was fortunate enough where my high school had a stellar engineering program where students would enroll in a class every year,
          and senior year they would enroll in a minimum of two engineering classes working on their senior project. During senior year you can be
          put into three seperate groups: manufacturing, product and design, and lastly electrical and software. My senior year I decided to go with
          product and design even though I was split between that and the electrical and software team. Sadly all great things come to an end, and COVID struck,
          ending my senior year of high school. I never got to finish my senior project, but it was not the end of my relationship with the DPEA.
        </p>
        <p>
          If DPEA alumni attened Santa Barbara City College, they were allowed to come back and work for the DPEA as a paid intern. Sadly because of COVID, I had to
          wait three whole years after I had graduated to start working. As an intern, I was placed in the electrical and software team where I worked on a variety
          of different tasks. I touched anything from soldering electrical components to pcbs, to shrink wrapping wires, to coding arduino boards and raspberry pis in Python.
          As an alumni I was also asked to use my other skills that I gained in the academy such as machining on industrial grade lathes and mills, using solid works to make 
          models of parts and projects, and writing technical documentation on how to use a new laser cutter.
          It wasn't until about a month in that I got a larger project, one could say this was my actual intern project that you would see at any regular internship.
        </p>
        <p>
          Generally seniors that join the electrical and software team have zero experience with coding in Python. The DPEA teaches coding with arduino in C++, and maybe some
          students come in knowing Java after taking AP Computer Science
        </p>
        </>
      )
  },
];

export function WorkExperience() {
  return (
    <section
      className="section experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section-heading">
        <p className="section-number">01 / Experience</p>
        <h2 id="experience-title">Where I’ve worked</h2>
      </div>
      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-item" key={item.title}>
            <div className="experience-image-frame">
              <img
                className="experience-image"
                src={item.image}
                alt={item.imageAlt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3>{item.title}</h3>
            <p className="period">{item.period}</p>
            <div className="description">{item.description}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
