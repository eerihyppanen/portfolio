import { useEffect, useRef, useState } from 'react'
import { projects, topics } from './projects'
import type { Project, Topic } from './projects'

const asset = (name: string) => `${import.meta.env.BASE_URL}images/${name}`

function ExternalIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M8 5H19V16M19 5L5 19" /></svg>
}

function ProjectCard({ project, onPreview }: { project: Project; onPreview: (project: Project) => void }) {
  return (
    <article className={`project project--${project.id}`} id={project.id}>
      <button className="project-visual" onClick={() => onPreview(project)} aria-label={`Enlarge ${project.title} screenshot`}>
        {project.id === 'training-log' ? (
          <div className="training-screens">
            <img src={asset('training-workout.png')} alt="Training Log workout entry screen" loading="lazy" width="362" height="748" />
            <img src={asset(project.image)} alt={project.imageAlt} loading="lazy" />
          </div>
        ) : <div className="browser-frame"><div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>{project.title}</span></div><img src={asset(project.image)} alt={project.imageAlt} loading="lazy" /></div>}
        <span className="enlarge-label">View screenshot <span aria-hidden="true">＋</span></span>
      </button>
      <div className="project-copy">
        <div className="project-meta"><span>{project.category}</span>{project.topics.includes('AI-assisted') && <span className="ai-label">AI-assisted</span>}</div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="stack" aria-label="Technologies">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div>
        <details className="contribution">
          <summary>My contribution <span aria-hidden="true">＋</span></summary>
          <p>{project.contribution}</p>
          <ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
        </details>
        <div className="project-links">{project.links.map(link => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label}<ExternalIcon /><span className="sr-only"> for {project.title} (opens in a new tab)</span></a>)}</div>
        {project.note && <p className="project-note">{project.note}</p>}
      </div>
    </article>
  )
}

function ScreenshotDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    if (project) {
      dialog.current?.showModal()
      const previous = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = previous; dialog.current?.close() }
    }
  }, [project])
  return <dialog ref={dialog} className="image-dialog" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose() }} aria-labelledby="screenshot-title">
    {project && <div className="dialog-content">
      <div className="dialog-header"><div><h2 id="screenshot-title">{project.title}</h2><p>{project.caption}</p></div><button onClick={onClose} aria-label="Close screenshot" autoFocus>×</button></div>
      <div className={`dialog-images ${project.id === 'training-log' ? 'dialog-images--mobile' : ''}`}>
        {project.id === 'training-log' && <img src={asset('training-workout.png')} alt="Actual Training Log workout entry screen" />}
        <img src={asset(project.image)} alt={project.imageAlt} />
      </div>
    </div>}
  </dialog>
}

function readTopic(): Topic {
  const query = new URLSearchParams(window.location.search).get('topic')
  return topics.find(topic => topic === query) ?? 'All work'
}

export default function App() {
  const [topic, setTopic] = useState<Topic>(readTopic)
  const [preview, setPreview] = useState<Project | null>(null)
  useEffect(() => {
    const sync = () => setTopic(readTopic())
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])

  function selectTopic(next: Topic) {
    setTopic(next)
    const url = new URL(window.location.href)
    if (next === 'All work') url.searchParams.delete('topic')
    else url.searchParams.set('topic', next)
    window.history.pushState(null, '', url)
  }

  const visible = projects.filter(project => topic === 'All work' || project.topics.includes(topic))
  return <>
    <a className="skip-link" href="#work">Skip to projects</a>
    <header className="site-header wrap">
      <a className="brand" href={import.meta.env.BASE_URL} aria-label="Eeri Hyppänen home"><span className="monogram" aria-hidden="true">eh.</span><span>Eeri Hyppänen</span></a>
      <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a><a className="nav-github" href="https://github.com/eerihyppanen" target="_blank" rel="noreferrer">GitHub<ExternalIcon /></a></nav>
    </header>
    <main>
      <section className="hero wrap" aria-labelledby="intro-heading">
        <div className="hero-copy">
          <p className="intro-name">Hello, I’m Eeri.</p>
          <h1 id="intro-heading">Ideas into<br />everyday use.</h1>
          <p className="intro-text">Software engineering student at LUT University. I build mobile apps, web experiences, and useful little tools—with a soft spot for thoughtful interfaces.</p>
          <a className="primary-link" href="#work">Explore my work <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M12 4v16m-6-6 6 6 6-6" /></svg></a>
          <div className="intro-footnote"><span className="location-dot" />Based in Finland<span className="footnote-divider" />Building & learning</div>
        </div>
        <a className="hero-art" href="#training-log" onClick={() => { if (topic !== 'All work') selectTopic('All work') }} aria-label="Explore Training Log, an AI-assisted Android app">
          <div className="hero-orbit" aria-hidden="true" />
          <img className="hero-phone hero-phone--back" src={asset('training-workout.png')} alt="Training Log workout entry interface" width="362" height="748" fetchPriority="high" />
          <img className="hero-phone hero-phone--front" src={asset('training-progress.png')} alt="Training Log exercise progress interface" fetchPriority="high" />
          <span className="hero-caption"><span>Built for a better routine.</span><span>Training Log / Android</span></span>
          <span className="hero-open" aria-hidden="true"><ExternalIcon /></span>
        </a>
      </section>
      <section className="work-section wrap" id="work" aria-labelledby="work-heading">
        <div className="section-heading"><div><h2 id="work-heading">Selected work</h2><p>Different problems. A hands-on approach.</p></div><span className="work-count">Four featured projects + one more</span></div>
        <div className="filter-row"><div className="filters" role="group" aria-label="Filter projects by topic">{topics.map(item => <button key={item} aria-pressed={topic === item} onClick={() => selectTopic(item)}>{item}</button>)}</div><p className="result-count" role="status" aria-live="polite">{visible.length} {visible.length === 1 ? 'project' : 'projects'}</p></div>
        <div className="project-grid">{visible.map(project => <ProjectCard key={project.id} project={project} onPreview={setPreview} />)}</div>
      </section>
      <section className="about-section" id="about" aria-labelledby="about-heading"><div className="wrap about-layout">
        <div className="about-title"><span className="section-kicker">A little about me</span><h2 id="about-heading">Curious by nature.<br />Practical by design.</h2><p className="signature">Eeri Hyppänen</p></div>
        <div className="about-copy"><p className="about-lead">I like turning a real need into something people can use.</p><p>I’m studying software engineering at LUT University, with an interest in mobile development and UI/UX. My projects range from keeping track of a workout to making public data—and campus lunch menus—easier to explore.</p><p>I’m also exploring AI-assisted development. Training Log is part of that learning: building with AI while learning how the interface, application logic, and data fit together.</p>
          <dl className="skills"><div><dt>Interfaces</dt><dd>Kotlin, Jetpack Compose, React, HTML & CSS, responsive design</dd></div><div><dt>Applications</dt><dd>TypeScript, JavaScript, Node.js, Express, REST APIs</dd></div><div><dt>Data & workflow</dt><dd>Room, MongoDB, Git, regression testing, AI-assisted development</dd></div></dl>
        </div>
      </div></section>
      <section className="contact-section wrap" id="contact" aria-labelledby="contact-heading"><div><p className="section-kicker">Let’s connect</p><h2 id="contact-heading">Have something in mind?</h2><p>I’d be happy to talk about my projects, development, or what comes next.</p></div><div className="contact-links"><a href="https://www.linkedin.com/in/eerihyppanen" target="_blank" rel="noreferrer">Find me on LinkedIn<ExternalIcon /></a><a href="https://github.com/eerihyppanen" target="_blank" rel="noreferrer">Explore my GitHub<ExternalIcon /></a></div></section>
    </main>
    <footer className="site-footer wrap"><span>© {new Date().getFullYear()} Eeri Hyppänen</span><span>Made with care, in Finland.</span><a href="#top" onClick={event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }) }}>Back to top ↑</a></footer>
    <ScreenshotDialog project={preview} onClose={() => setPreview(null)} />
  </>
}
