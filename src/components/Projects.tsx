const projects = [
  {
    number: "01",
    name: "PromptEngine",
    category: "Concurrent Systems / AI",
    description:
      "A multithreaded C++20 inference service with an asynchronous job API, a custom thread pool, Ollama integration, and durable PostgreSQL job processing. The redesign doubled concurrent throughput and added crash recovery.",
    tags: ["C++20", "PostgreSQL", "Crow", "Ollama"],
    accent: "oxblood",
    suit: "♠",
  },
  {
    number: "02",
    name: "Pipelined RISC-V CPU",
    category: "Computer Architecture / FPGA",
    description:
      "A five-stage pipelined RISC-V processor built in SystemVerilog for a Basys3 FPGA, including hazard detection, data forwarding, and verification through Vivado simulation and timing analysis.",
    tags: ["SystemVerilog", "RISC-V", "Basys3 FPGA", "Vivado"],
    accent: "gold",
    suit: "♥",
  },
  {
    number: "03",
    name: "Ticket_Board",
    category: "Full-Stack Web Application",
    description:
      "A production-style ticket management platform with account creation, sign-in, ticket ownership, and complete create, edit, and delete workflows backed by tested API endpoints.",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    accent: "black",
    suit: "♣",
    url: "https://github.com/RonanValadez35/Ticket_Board",
  },
  {
    number: "04",
    name: "stock_project",
    category: "Automation / AI Summarization",
    description:
      "A Python pipeline that gathers and deduplicates stock news, uses Ollama to create ticker-specific summaries and key points, formats the result, and delivers the briefing by email.",
    tags: ["Python", "Ollama", "EODHD API", "PyTest"],
    accent: "felt",
    suit: "♦",
    url: "https://github.com/RonanValadez35/stock_project",
  },
];

export function Projects() {
  return (
    <section
      className="section projects-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="section-heading project-heading">
        <div>
          <p className="section-number">02 / Selected projects</p>
          <h2 id="projects-title">A few things I’ve made</h2>
        </div>
        <p className="heading-note">
          A small selection of product work, experiments, and ideas.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div
              className={`project-visual ${project.accent}`}
              aria-hidden="true"
            >
              <span className="project-suit">{project.suit}</span>
              <div className="visual-window">
                <div className="visual-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="visual-copy">
                  <span className="visual-kicker">{project.category}</span>
                  <strong>{project.name}</strong>
                  <span className="visual-line long" />
                  <span className="visual-line" />
                </div>
              </div>
              <span className="project-number">{project.number}</span>
            </div>
            <div className="project-content">
              <p className="project-category">{project.category}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {project.url && (
                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
