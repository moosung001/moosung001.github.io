const interests = [
  "Power system dynamics",
  "Frequency stability",
  "Nonlinear dynamics",
  "Complex networks",
  "Model hierarchy validation",
];

const work = [
  {
    number: "01",
    eyebrow: "Accepted paper",
    title: "Frequency synchronization analysis of an oscillator-based power grid",
    description:
      "How inertia and network position jointly shape frequency vulnerability across the Korean power grid.",
    meta: "New Physics: Sae Mulli · 2026",
    href: "https://github.com/moosung001/kpg-swing-analysis",
    label: "View research code",
  },
  {
    number: "02",
    eyebrow: "Research software",
    title: "Power Grid Swing Simulator",
    description:
      "An interactive simulator for exploring disturbance propagation, frequency response, synchronization, and line flows.",
    meta: "Python · Streamlit · Network science",
    href: "https://github.com/moosung001/kpg-swing-simulator",
    label: "Explore the project",
  },
  {
    number: "03",
    eyebrow: "Ongoing research",
    title: "From oscillator networks to detailed power-system models",
    description:
      "A model-hierarchy study tracing which dynamic insights survive—and where they break—as engineering detail is added.",
    meta: "Kuramoto · Swing models · MATLAB/Simulink",
    href: "#contact",
    label: "Ask me about this work",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Moosung Kim, home">
          Moosung Kim
        </a>
        <div className="nav-links">
          <a href="#research">Research</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="kicker">Power systems · Nonlinear dynamics</p>
          <h1>
            Finding what
            <br />
            <em>survives</em> across models.
          </h1>
          <p className="hero-intro">
            I&apos;m <strong>Moosung Kim</strong>, an integrated Master&apos;s and
            Doctoral student at KENTECH. I study power-grid frequency dynamics
            by connecting oscillator-based insight with engineering-grade
            simulation.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Selected work <Arrow />
            </a>
            <a className="button button-secondary" href="mailto:rlaan33@kentech.ac.kr">
              Email me
            </a>
          </div>
        </div>

        <div className="network-card" aria-label="Abstract model hierarchy diagram">
          <div className="network-grid" aria-hidden="true" />
          <span className="node node-a" aria-hidden="true" />
          <span className="node node-b" aria-hidden="true" />
          <span className="node node-c" aria-hidden="true" />
          <span className="node node-d" aria-hidden="true" />
          <span className="node node-e" aria-hidden="true" />
          <span className="orbit orbit-a" aria-hidden="true" />
          <span className="orbit orbit-b" aria-hidden="true" />
          <div className="model-scale">
            <span>OSCILLATOR</span>
            <span className="scale-line" aria-hidden="true" />
            <span>GRID</span>
          </div>
          <div className="card-caption">
            <span>Research focus</span>
            <p>Reduced-order insight, tested against detailed dynamics.</p>
          </div>
        </div>
      </section>

      <section className="conference shell" aria-labelledby="conference-title">
        <div className="conference-index">NOW</div>
        <div>
          <p className="section-label">Presenting at RHINO 2026</p>
          <h2 id="conference-title">Oscillator Centric Analysis of Power Grid Stability</h2>
          <p>Poster presentation · August 2026 · with Heetae Kim</p>
        </div>
      </section>

      <section className="research shell" id="research">
        <div className="section-heading">
          <p className="section-label">Research lens</p>
          <h2>Simple enough to explain.<br />Detailed enough to trust.</h2>
        </div>
        <div className="research-body">
          <p>
            My work asks a practical question: when a power grid is simplified
            into a network of coupled oscillators, which conclusions remain
            meaningful in more detailed engineering models? I use numerical
            experiments, network analysis, and cross-model validation to map
            both preserved insights and failure boundaries.
          </p>
          <ul className="interest-list" aria-label="Research interests">
            {interests.map((interest, index) => (
              <li key={interest}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="section-heading work-heading">
          <div>
            <p className="section-label">Selected work</p>
            <h2>A focused research thread,<br />seen at three scales.</h2>
          </div>
          <p className="work-note">Research, software, and ongoing validation.</p>
        </div>

        <div className="work-list">
          {work.map((item) => (
            <article className="work-item" key={item.number}>
              <span className="work-number">{item.number}</span>
              <div className="work-main">
                <p className="work-eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p className="work-description">{item.description}</p>
              </div>
              <div className="work-meta">
                <p>{item.meta}</p>
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {item.label} <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="shell footer-inner">
          <div>
            <p className="section-label light">Let&apos;s stay in touch</p>
            <h2>Curious about the same systems?</h2>
            <a className="email-link" href="mailto:rlaan33@kentech.ac.kr">
              rlaan33@kentech.ac.kr <Arrow />
            </a>
          </div>
          <div className="footer-profile">
            <p><strong>Moosung Kim</strong></p>
            <p>Grid Complexity Lab</p>
            <p>Department of Energy Engineering</p>
            <p>KENTECH · Naju, Korea</p>
          </div>
        </div>
        <div className="shell footer-bottom">
          <p>© 2026 Moosung Kim</p>
          <div>
            <a href="https://github.com/moosung001" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://orcid.org/0009-0008-3371-724X" target="_blank" rel="noreferrer">ORCID</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
