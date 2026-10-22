const education = [
  {
    school: "Cal Poly San Luis Obispo California",
    logo: "/images/calpoly-seal.jpg",
    copy: (
      <>
        <p>
          I transfered to Cal Poly SLO Fall 2023 majoring in computer
          engineering. I remember coming here super nervouse because everyone I talked to
          had said a four year university is much more difficult than a city college. For me this was only semi
          true. While there were very difficult classes(OS, Networks, Embedded, Every EE class because I don't like hardware) I also 
          found some classes to be very easy not because the work was easy but because the work was interesting. Coming from a community college, 
          it was nice to experience a community, different groups of friends. It truely started to feel like a college experience. Some of my best memories
          are working on an embedded class where me and a group of friends would be in the lab from 10am to 8pm at least three times a week trying to finish 
          the assignment for the week. I was hesitant comimg to Cal Poly at first, but the second I set foot on campus it truely felt like my home.
          </p>
          <p>
          Side note while I majored in Computer Engineering, my main area of focus was the software side of the major. I tailored my curriculum 
          to focus more on software rather than the hardware. Why the switch? Well when I can to Cal Poly I quickly learned that I did not enjoy software. Debugging
          hardware was not as intuitive as debugging software. I remember spending 2 hours looking over a circuit I had built wondering why it was not working, swithcing
          out various parts only to realize it was a dead wire. Software doesn't have that issue for the most part.
          </p>


        {/* Add another <p> element here for an additional paragraph. */}
      </>
    ),
  },
  {
    school: "Santa Barbara City College",
    logo: "/images/sbcc-logo.jpeg",
    copy: (
      <>
        <p>
          I spent three years at SBCC enrolled as a full time student. My first two years were completly online and my last year was a mix of both. 
          I technically started SBCC as a senior in high school as I did dual enrollment, but I was only enrolled in two classes for each semester
          of senior year. Everything was great during senior year till the Covid attacked(Last Airbender joke). Yes, most of my time at SBCC was
          spent online, and it was not too great. School was not fun at all, I got to know absolutely no one because every class was online,
          and some professors were not tech savy and they would take their frustration out on you. An example of this was when I was taking
          a midterm on Zoom, but no proctorio for some reason, and the professor tried to have students git clone a repo from github classroom for the coding section of the exam. 
          We would then push our code and her auto tests would run our code and grade it. At least that was her idea, however she messed up in creating the repo
          and no student was able to properly clone the repo. She then threatened to fail the whole class out of anger, but luckily she didn't.
        </p>
        <p>
          I originally came in majoring in electrical engineering. I had a love hate relationship with coding after taking AP computer science
          Junior year of high school. I didn't do too well in that class and it had put a sour taste in my mind about programming so I decided to
          try the hardware route as I had had some experience with circuitry and breadboards in high school and found it interesting. During my first 
          semester, I was required to take an intro to engineering class. The class was supposed to teach us useful skills such as using MatLab,
          but because this was the begining of Covid the professor opted to change the curriculum entirely and instead invite a guest speaker for
          every lecture. At the time I thought this class was not important, but looking back this is the class that shaped my academic journey.
          One of the guest speakers was an engineering manager at Raytheon, he was talking about his story, and how he went from an engineer to
          a manager. During his talk he uttered two words, computer engineer. I had never heard of this prior to that talk, I was familiar with electrical,
          mechanical, chemical, software, aerospace, and even nuclear. But never had I heard of computer. I ended up looking it up and found that the 
          major was a combination of EE and CS. I remember thinking at the time that this was perfect for me, as it would allow me to try CS again,
          but not be soley tied to it. So from that day onward I switched to computer engineering.
        </p>
        <p>
          My final year at SBCC was starting to feel like college, as it was finally in person. For those that are reading this and have never been 
          to Community College, it is almost identical to the show Community in regards to the type of people that you will meet. This diversity of 
          people made it fun and a unique experience for me. 
        </p>
        {/* Add another <p> element here for an additional paragraph. */}
      </>
    ),
  },
];

export function Education() {
  return (
    <section
      className="section education-section"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="section-heading education-heading">
        <p className="section-number">02 / Education</p>
        <div>
          <h2 id="education-title">Where I’ve studied</h2>
        </div>
      </div>
      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={item.school}>
            <div className="education-logo-frame">
              <img
                className="education-logo"
                src={item.logo}
                alt=""
                aria-hidden="true"
              />
            </div>
            <h3>{item.school}</h3>
            <div className="education-copy">{item.copy}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
