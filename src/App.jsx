import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Download,
  ShieldCheck,
  Code2,
  BrainCircuit,
  Database,
  Terminal,
  ExternalLink,
  ChevronDown
} from "lucide-react";
import { profile, skills, projects, certifications, highlights } from "./data";

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <div className="grid-bg" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">&lt;/&gt;</span>
          <span>Shivani<span className="accent">.dev</span></span>
        </a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["home", "about", "skills", "projects", "certifications", "contact"].map((item) => (
            <a key={item} href={`#${item}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a className="nav-cta" href="/Shivani-J-Resume.pdf" download="Shivani-J-Resume.pdf">
  Resume <Download size={15} />
</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="status-pill">
              <span className="pulse-dot" />
              Open to internship opportunities
            </div>

            <p className="hero-kicker">HELLO, WORLD! I&apos;M</p>
            <h1>
              Shivani <span>J.</span>
            </h1>
            <h2>{profile.role}</h2>
            <p className="hero-description">{profile.intro}</p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore My Work <ArrowUpRight size={18} />
              </a>
              <a className="button secondary" href="/Shivani-J-Resume.pdf" download="Shivani-J-Resume.pdf">
  Download Resume <Download size={17} />
</a>
            </div>

            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={19} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={19} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={19} />
              </a>
            </div>
          </div>

          <div className="hero-terminal">
            <div className="terminal-window">
              <div className="terminal-bar">
                <span className="terminal-dots"><i /><i /><i /></span>
                <span>shivani@portfolio:~</span>
                <span className="terminal-lock">●</span>
              </div>
              <div className="terminal-body">
                <p><span className="prompt">shivani@portfolio:~$</span> whoami</p>
                <p className="terminal-output">B.Tech IT Student</p>
                <p><span className="prompt">shivani@portfolio:~$</span> focus</p>
                <p className="terminal-output">Software + Cybersecurity + AI</p>
                <p><span className="prompt">shivani@portfolio:~$</span> skills --top</p>
                <p className="terminal-output">Java · Python · React · Node · Security</p>
                <p><span className="prompt">shivani@portfolio:~$</span> status</p>
                <p className="terminal-output success">building_projects <span className="blink">_</span></p>
              </div>
            </div>

            <div className="floating-card card-one">
              <ShieldCheck size={18} />
              <span>Cybersecurity</span>
            </div>
            <div className="floating-card card-two">
              <Code2 size={18} />
              <span>Full Stack</span>
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown size={17} />
          </a>
        </section>

        <section id="about" className="section about">
          <SectionTitle
            eyebrow="01 / ABOUT"
            title="Building skills by building things."
            text="My approach is simple: learn the fundamentals, build real projects, and keep improving."
          />

          <div className="about-grid">
            <div className="about-card large-card">
              <div className="number-label">01</div>
              <h3>Curious by nature.<br /><span>Builder by choice.</span></h3>
              <p>
                I&apos;m a B.Tech Information Technology student who enjoys turning ideas into
                working applications. My current learning path combines software development,
                data structures, cybersecurity, Python, Java, and AI-powered tools.
              </p>
              <p>
                I&apos;m especially interested in projects where technology solves a practical
                problem — from financial tracking to phishing detection and cybersecurity
                awareness.
              </p>
            </div>

            <div className="about-stack">
              <div className="mini-card">
                <Terminal size={22} />
                <div><strong>Learn</strong><span>Strong CS foundations</span></div>
              </div>
              <div className="mini-card">
                <BrainCircuit size={22} />
                <div><strong>Build</strong><span>Practical projects</span></div>
              </div>
              <div className="mini-card">
                <ShieldCheck size={22} />
                <div><strong>Secure</strong><span>Security-first thinking</span></div>
              </div>
            </div>
          </div>

          <div className="highlight-strip">
            {highlights.map((item, index) => (
              <div className="highlight-item" key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <SectionTitle
            eyebrow="02 / SKILLS"
            title="My technical toolkit."
            text="Technologies I use while learning, building, debugging, and shipping projects."
          />

          <div className="skills-grid">
            {skills.map(([name, group], index) => (
              <div className="skill-card" key={name}>
                <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="skill-icon">
                  {group === "Security" ? <ShieldCheck size={19} /> :
                   group === "Database" ? <Database size={19} /> :
                   group === "Emerging Tech" ? <BrainCircuit size={19} /> :
                   <Code2 size={19} />}
                </div>
                <div>
                  <strong>{name}</strong>
                  <span>{group}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <SectionTitle
            eyebrow="03 / PROJECTS"
            title="Things I&apos;ve been building."
            text="A selection of practical projects combining development, AI, and cybersecurity."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span>{project.number}</span>
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                  View project <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="section">
          <SectionTitle
            eyebrow="04 / LEARNING"
            title="Learning never stops."
            text="Courses and learning milestones that support my technical journey."
          />

          <div className="cert-layout">
            <div className="cert-main">
              {certifications.map((cert, index) => (
                <div className="cert-row" key={cert}>
                  <span className="cert-index">0{index + 1}</span>
                  <div>
                    <h3>{cert}</h3>
                    <span>Learning / Certification</span>
                  </div>
                  <ArrowUpRight size={17} />
                </div>
              ))}
            </div>

            <div className="learning-card">
              <div className="learning-icon"><BrainCircuit size={28} /></div>
              <p className="eyebrow">CURRENT MINDSET</p>
              <h3>Learn → Build → Break → Fix → Repeat.</h3>
              <p>
                I believe the best learning happens when concepts become real applications.
                Every bug is another opportunity to understand the system better.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div>
              <span className="eyebrow">05 / CONTACT</span>
              <h2>Let&apos;s build something useful.</h2>
              <p>
                Looking for internships, project collaborations, and opportunities to learn
                from real-world development teams.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button primary" href={`mailto:${profile.email}`}>
                <Mail size={17} /> Get In Touch
              </a>
              <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <a href="#home" className="brand">
            <span className="brand-mark">&lt;/&gt;</span>
            <span>Shivani<span className="accent">.dev</span></span>
          </a>
          <p>Designed & built with curiosity.</p>
        </div>
        <p>© {new Date().getFullYear()} Shivani J. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;