import PosterPreview from "./PosterPreview";

const interests = [
  "Power system dynamics",
  "Frequency stability",
  "Nonlinear dynamics",
  "Complex networks",
  "Model comparison",
];

const work = [
  {
    type: "Accepted paper",
    title: "Frequency synchronization analysis of an oscillator-based power grid",
    description:
      "A study of how inertia and network position shape frequency vulnerability across the Korean power grid.",
    meta: "New Physics: Sae Mulli · 2026",
    href: "https://github.com/moosung001/kpg-swing-analysis",
    label: "Code",
  },
  {
    type: "Research software",
    title: "Power Grid Swing Simulator",
    description:
      "An interactive tool for exploring disturbance propagation, frequency response, synchronization, and line flows.",
    meta: "Python · Streamlit",
    href: "https://github.com/moosung001/kpg-swing-simulator",
    label: "Project",
  },
  {
    type: "Ongoing work",
    title: "Comparing oscillator and detailed power-system models",
    description:
      "Current work on understanding which observations remain consistent as more engineering detail is added to a model.",
    meta: "Kuramoto · Swing models · MATLAB/Simulink",
    href: null,
    label: null,
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header container">
        <a className="site-name" href="#top">Moosung Kim</a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="intro container" id="top">
        <div>
          <h1>Moosung Kim</h1>
          <p className="role">Integrated Master&apos;s and Doctoral Student</p>
          <p className="affiliation">
            Grid Complexity Lab · Department of Energy Engineering · KENTECH
          </p>
          <p className="summary">
            I study power-system dynamics and frequency stability using
            oscillator-based models, network analysis, and numerical simulation.
          </p>
          <div className="profile-links" aria-label="Profile links">
            <a href="mailto:rlaan33@kentech.ac.kr">Email</a>
            <a href="https://github.com/moosung001" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://orcid.org/0009-0008-3371-724X" target="_blank" rel="noreferrer">ORCID</a>
            <a href="https://www.linkedin.com/in/moosung-kim-hi/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <aside className="poster-preview" aria-labelledby="poster-title">
          <PosterPreview />
          <p className="item-type">RHINO 2026 poster</p>
          <h2 id="poster-title">Oscillator-Centric Analysis of Power Grid Stability</h2>
          <p>Moosung Kim · Heetae Kim · Yokohama · August 2026</p>
          <div className="poster-links">
            <a href="/rhino-2026-poster-moosung-kim.pdf" target="_blank" rel="noreferrer">View PDF</a>
            <a href="/rhino-2026-poster-moosung-kim.pdf" download>Download</a>
          </div>
        </aside>
      </section>

      <section className="section container" id="research">
        <h2>Research</h2>
        <div className="section-content">
          <p>
            My current research looks at frequency dynamics in power grids and
            compares reduced oscillator models with more detailed engineering
            models. I am particularly interested in where simplified models are
            useful and where their conclusions stop carrying over.
          </p>
          <ul className="interest-list" aria-label="Research interests">
            {interests.map((interest) => <li key={interest}>{interest}</li>)}
          </ul>
        </div>
      </section>

      <section className="section container" id="work">
        <h2>Selected work</h2>
        <div className="work-list">
          {work.map((item) => (
            <article className="work-item" key={item.title}>
              <p className="item-type">{item.type}</p>
              <h3>{item.title}</h3>
              <p className="work-description">{item.description}</p>
              <div className="work-details">
                <span>{item.meta}</span>
                {item.href && item.label ? (
                  <a href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer container" id="contact">
        <div>
          <h2>Contact</h2>
          <a href="mailto:rlaan33@kentech.ac.kr">rlaan33@kentech.ac.kr</a>
        </div>
        <div className="footer-meta">
          <p>Grid Complexity Lab, KENTECH</p>
          <p>This website is a work in progress.</p>
        </div>
      </footer>
    </main>
  );
}
