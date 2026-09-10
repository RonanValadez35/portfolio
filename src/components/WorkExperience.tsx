const experience = [
  {
    period: "June 2025 — September 2025",
    company: "Amazon",
    role: "Software Engineer Intern · On-site",
    description:
      "Developed a Java Slack chatbot for Amazon’s ASR team, built a few-shot classifier for support questions, and implemented a RAG framework with AWS Bedrock, S3, and Kendra to generate context-aware answers from internal documentation.",
  },
  {
    period: "January 2023 — September 2023",
    company: "Dos Pueblos Engineering Academy",
    role: "Electrical and Software Intern · On-site",
    description:
      "Built a Python interface demonstrating Raspberry Pi hardware integrations and programmed Arduino boards to control motors, drivers, sensors, and an RGB button for the academy’s senior showcase.",
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
          <article className="experience-item" key={item.company}>
            <p className="period">{item.period}</p>
            <div>
              <h3>{item.company}</h3>
              <p className="role">{item.role}</p>
            </div>
            <p className="description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
