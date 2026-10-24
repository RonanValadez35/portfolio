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
      included flying on a plane, leaving California, staying in an Airbnb, and being in Texas. I remember everyone I spoke to telling me that the heat and humidity
      were going to be unbearable, but when I got there, it wasn't that bad. For some context, the previous summer, I worked for a wedding company, and part of my 
      work entailed setting up ceremonies held on beaches in Southern California. I was carrying chairs and stage components across the sand in 100-degree weather.
      </p>
      <p>
      I had trouble with my internship before it even started. I ordered my laptop to be delivered to my house a month in advance, but it didn't arrive until I boarded my flight. I emailed my
      manager during my layover, and he ended up shipping my laptop to my house in Austin. He told me not to come into the office until I received it. I ended up receiving it the 
      Saturday before my scheduled start date and emailed my manager to let him know I got my laptop, but he was on vacation and didn't reply. So, following Amazon's Leadership
      Principle of Bias for Action, I decided to show up at the office on my original start date. Luckily, my roommate was interning at Amazon on a different team, 
      and he showed me where to go to get my blue badge. My mentor eventually contacted me halfway through the day and brought me to a different building where my team was located.
      It was my first time ever working in an office, let alone a multistory building. All the interns on my floor would work in a conference room, so it was nice having a little
      intern community.
      </p>
      <p>
        Amazon was not what I expected it to be like. All of the horror stories I had heard were not true in the slightest, at least for a non-AWS team. My team was nothing
        but helpful. Everyone on the team was always available to answer any questions I had, and they all put in the effort to make sure the interns felt welcome. The first five weeks
        of the internship were spent onboarding. I had come into Amazon thinking it was a well-oiled machine, but it was far from that. I had a lot of issues setting up the environments
        for the onboarding tutorials; oftentimes, I would be blocked for an hour because BuilderHub was failing. The onboarding content was not really the best either, at least in my
        opinion. I felt like I didn't really understand things, and the tutorials did not really explain what they were doing; they just did stuff.
      </p>
      <p>
        My project involved creating a chatbot that would be able to answer customer questions for my team and reduce the on-call engineer's workload. I was a part of
        the Amazon Security Reviewers team (ASR), which created a tool that made sure all non-AWS code followed Amazon's security requirements. Traditionally, the
        on-call engineer would receive a high volume of questions from customers—other Amazon SDEs—trying to troubleshoot
        issues with and responses from the tool. The majority of these questions could be answered if the customer referenced the team's FAQ document or read other documentation on the tool.
        That is where my project came in. Originally, the team wanted me to connect my chatbot to their Slack channel and Amazon's ticketing system. My mentor and manager realized early on
        that this was too large of a project for the time frame I had, so we reduced it to just implementing the Slack side. While I did not implement the ticketing side,
        I designed the project so that my existing architecture could be connected to the ticketing system; someone would just have to create the integration.
      </p>
      <p>
        The first step Amazon has you do is create a design doc for the project. This was my first time ever creating a document like this and I was really nervous because
        at this point in my internship, I had no idea which AWS tools I should use or what they even did. I also had never used the Slack API or integrated third-party
        software, so there was a lot to research and learn in a short amount of time. My design doc went well; I was able to answer every question the team had except for
        one, but that was because the question revolved around one of Amazon's internal tools, which I had never heard of prior to that conversation. My mentor ended up interjecting
        and then told me afterward that we were not using the tool and not to worry about it because he didn't think it was good.
      </p>
      <p>From then on, it was grind time. I was the last of three interns to join the team, so I was unfortunately placed on the first intern's timeline. This meant that less than one
        week after my design doc presentation, I had to come up with something worthy of a demo, while my counterparts had had a whole month to prepare. This was a common occurrence for me:
        having to scramble and pull all-nighters to meet deadlines because a director or another manager would only be able to view demos on a particular day. Good thing I have a strong
        work ethic, as I was able to meet this standard regularly. I did have two major hiccups during the project, the first being that I struggled to connect my Slack app to my RAG chatbot
        backend. To keep it short, I was using one of Amazon's internal frameworks, and there were issues connecting it to a third party like Slack.
        I spent about a week reading internal docs and trying to find a solution, but was ultimately unable to. This week was extremely hard for me, as my mentor was also
        assigned to be on call for that week, so he couldn't really help. I had a meeting with my mentor that Thursday at the end of the day, where we sat in silence for an hour
        in a conference room while he tried to find the solution himself. He ended up stopping after an hour of silence, closed his laptop, and then apologized to me. He told me
        that if he, as a mid-level engineer, could not figure out the issue, then it was not right for me, as an intern, to try to figure it out. We ended up redesigning the architecture
        to avoid using the framework, and voilà, it worked.
      </p>
      <p>
        The second bug ended up happening during my second-to-last week, and it was not 100% reproducible. I had read through so many CloudWatch logs and seen a Lambda timeout error,
        but I was unable to determine why it was timing out. It wasn't until I finally saw an out-of-memory error that I realized I needed to increase the allocated memory for one
        of my Lambda functions, as it was set to the default value. Once I fixed that, the project worked beautifully. My demo went great, and my manager and team loved the tool.
        While the project was only intended to be a proof of concept, it seemed like the team was going to take over and get it to production.
      </p>
      <p>
        I learned so much from Amazon, and it showed me how much more I have to learn. I am forever grateful to the team, my mentor, and my manager for supporting me throughout
        my internship. If any of them ever read this, thank you for all you did for me.
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
          During their senior year, students enrolled in at least two engineering classes while working on their senior projects. As seniors, students
          could join one of three separate groups: manufacturing, product and design, or electrical and software. I decided to go with
          product and design my senior year, even though I was torn between that and the electrical and software team. Sadly, all great things come to an end,
          and COVID struck, cutting my senior year of high school short. I never got to finish my senior project, but it was not the end of my relationship with the DPEA.
        </p>
        <p>
          DPEA alumni who attended Santa Barbara City College were eligible to return to DPEA as paid interns. Sadly, because of COVID, I had to
          wait until three years after I graduated before I could start working. As an intern, I was placed on the electrical and software team, where I worked on a variety of tasks.
          I worked on everything from soldering electrical components to PCBs and shrink-wrapping wires to programming Arduino boards and Raspberry Pis.
          As an alumnus, I was also asked to use other skills I had gained in the academy, such as machining on industrial-grade lathes and mills, using SolidWorks to
          model parts and projects, and writing technical documentation on how to use a new laser cutter.
          It wasn't until about a month into my internship that I was assigned a larger project. One could say this was my first traditional internship project.
        </p>
        <p>
          Generally, seniors who join the electrical and software team have no experience coding in Python. The DPEA teaches programming with Arduino in C++,
          and some students may already know Java from taking AP Computer Science. The knowledge gap is significant: students may have experience with neither software nor the electrical
          components used by the DPEA, so my job was to ease that burden. I developed an app that demonstrated the capabilities of most of the electrical components seniors
          would program. I essentially built a Scratch-like application where students could program the hardware through buttons and dials. This would allow the students
          to visualize and understand what each component was and how to use it properly. I remember that after I completed the first part of the project, I had my mentor come over
          to test the app. He was the teacher for the electrical and software team, so I thought that if he could not understand how to use the app, then no student would
          be able to. He ended up crashing the app when he first started using it. I remember this taught me a valuable lesson, as it was embarrassing that my app broke. That lesson
          was to assume that your customer has no clue whatsoever how to use your software. You need to build it in such a way that it is intuitive and cannot be broken easily.
        </p>
        <p>
          After I finished the project, I ended up working on a couple of senior projects, programming motors and other hardware components. Soon enough, it was the end of the school
          year, and I was off to Cal Poly. The DPEA staff members have an important place in my life, as they are the ones who set me on this journey. To all the DPEA staff, thank you for your hard
          work and support.
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
