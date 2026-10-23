const experience = [
  {
    period: "June 2025 — September 2025",
    title: "Software Engineer Intern at Amazon",
    image: "/images/AUS16.jpeg",
    imageAlt: "The glass Amazon Spheres at the company’s Seattle campus",
    description: (
      <>
      <p>
      This was a major milestone in my career, education, and personal life. My internship at Amazon gave me many new life experiences. Examples
      include flying on a plane, leaving California, staying in an Airbnb, and being in Texas. I remember everyone I spoke to telling me that the heat and humidity 
      were going to be unbearable, but when I got there, it wasn't that bad. For some context, the previous summer, I worked for a wedding company, and part of my 
      work entailed setting up ceremonies held on beaches in Southern California. I was carrying chairs and stage components across the sand in 100 degree weather.
      </p>
      <p>
      I had trouble with my internship before it even started. I ordered my laptop to my house a month in advance, but it didn't arrive until I boarded my flight. I emailed my 
      manager during my layover, and he ended up shipping my laptop to my house in Austin. He told me not to come into the office until I received it. I ended up receiving it the 
      Saturday before my scheduled start date and emailed my manager to let him know I got my laptop, but he was on vactation and didn't reply. So, following Amazon's Leadership 
      Principle of Bias for Action, I decided to show up at the office on my original start date. Luckily, my roommate was interning at Amazon on a different team, 
      and he showed me where to go to get my blue badge. My mentor eventually contacted me halfway through the day and brought me to a different building where my team was located.
      </p>
      </>
    )
  },
  {
    period: "January 2023 — September 2023",
    title: "Electrical & Software Intern at Dos Pueblos Engineering Academy (DPEA)",
    image: "/images/dpea-workshop.jpg",
    imageAlt: "The hands-on engineering workshop at Dos Pueblos High School",
    description:
      (
        <>
        <p>
          I was fortunate enough to attend a high school with a stellar engineering program where students enrolled in an engineering class every year. 
          During their senior year, students enrolled in at least two engineering classes while working on their senior projects. During senior year, students 
          could join one of three separate groups: manufacturing, product and design, or electrical and software. I decided to go with
          product and design my senior year, even though I was split between that and the electrical and software team. Sadly, all great things come to an end, 
          and COVID struck, cutting my senior year of high school short. I never got to finish my senior project, but it was not the end of my relationship with the DPEA.
        </p>
        <p>
          DPEA alumni who attended Santa Barbara City College were eligible to return to DPEA as paid interns. Sadly because of COVID, I had to
          wait three whole years after I had graduated to start working. As an intern, I was placed on the electrical and software team, where I worked on a variety of tasks.
          I worked on everything from soldering electrical components to PCBs and shrink-wrapping wires to programming Arduino boards and Raspberry Pis.
          As an almuni, I was also asked to use other skills I had gained in the academy, such as machining on industrial-grade lathes and mills, using SolidWorks to 
          model parts and projects, and writing technical documentation on how to use a new laser cutter.
          It wasn't until about a month into my internship that I received a larger project. One could say this was my first traditional internship project.
        </p>
        <p>
          Generally seniors that join the electrical and software team have zero experience with coding in Python. The DPEA teaches programming with Arduino in C++, 
          and some students may already know Java from taking AP Computer Science.
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
