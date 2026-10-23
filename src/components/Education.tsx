const education = [
  {
    school: "Cal Poly San Luis Obispo California",
    logo: "/images/calpoly-seal.jpg",
    copy: (
      <>
        <p>
        I transferred to Cal Poly SLO in Fall 2023, majoring in computer engineering.
          engineering. I remember coming here super nervous because everyone I talked to had said that a four-year university 
          was much more difficult than a community college. For me, this was only somewhat
          true. While there were some very difficult classes (OS, networking, embedded systems, and every EE class because I don't like hardware), 
          I also found some classes to be very easy—not because the work was easy, but because I found it interesting. Coming from a community college, 
          it was nice to experience a sense of community and make different groups of friends. It truly started to feel like a college experience. 
          Some of my best memories are from an embedded systems class where a group of friends and I would spend time in the lab from 10 a.m. to 8 p.m. 
          at least three times a week, trying to finish that week's assignment. I was hesitant about coming to Cal Poly at first, but the second I set 
          foot on campus, it truly felt like home.
          </p>
          <p>
          Side note: While I majored in computer engineering, my main focus was the software side of the major. I tailored my curriculum to focus more on 
          software rather than hardware. Why the switch? Well, when I came to Cal Poly, I quickly learned that I did not enjoy hardware. Debugging
          hardware was not as intuitive as debugging software. I remember spending two hours looking over a circuit I had built, wondering why 
          it wasn't working and switching out various parts, only to realize that the problem was a dead wire. Software doesn't have that issue for the most part.
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
          I spent three years at SBCC as a full-time student.My first two years were completely online, and my last year was a mix 
          of online and in-person classes. I technically started at SBCC as a senior in high school through dual enrollment, but I only took two classes each semester.
          Everything was great during senior year until COVID attacked (Last Airbender joke).
          Yes, most of my time at SBCC was spent online, and it was not too great. School was not fun at all. I got to know absolutely no one because every class was online, 
          and some professors were not tech-savvy and would take their frustration out on students. One example was when I was taking a midterm on Zoom, without Proctorio 
          for some reason, and the professor tried to have students clone a repository from GitHub Classroom for the coding section of the exam.
          We would then push our code, and her automated tests would run and grade it.At least that was her idea. However, she made a mistake when creating the repository, 
          and no student was able to clone it properly. She then threatened to fail the whole class out of anger, but luckily she didn't.
        </p>
        <p>
          I originally enrolled as an electrical engineering major. I had a love-hate relationship with coding after taking AP Computer Science
          junior year of high school. I didn't do too well in that class, and it left me with a negative impression of programming. So, I decided 
          to try the hardware route, as I had some experience with circuitry and breadboards in high school and found them interesting. During my first 
          semester, I was required to take an intro to engineering class. The class was supposed to teach us useful skills, such as using MATLAB, 
          but because this was the beginning of COVID, the professor opted to change the curriculum entirely and instead invite a guest speaker for every lecture. 
          At the time, I thought this class wasn't important, but looking back, it was the class that shaped my academic journey.
          One of the guest speakers was an engineering manager at Raytheon. He talked about his career and how he went from being an engineer to becoming a manager.
          During his talk he uttered two words, computer engineer. I had never heard of this prior to that talk. I was familiar with electrical, mechanical, 
          chemical, software, aerospace, and even nuclear engineering. But I had never heard of computer engineering. I ended up looking it up and found that the 
          major was a combination of EE and CS.I remember thinking at the time that this was perfect for me because it would allow me to try CS again without 
          being solely tied to it. So from that day onward I switched to computer engineering.
        </p>
        <p>
          My final year at SBCC was starting to feel like college, as it was finally in person. For those who are reading this and have never been to community college, 
          it's almost identical to the show Community in terms of the types of people you'll meet. This diversity of 
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
