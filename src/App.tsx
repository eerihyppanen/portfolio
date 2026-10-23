import { useEffect, useRef, useState } from 'react'
import { projects, topics } from './projects'
import type { Project, Topic } from './projects'

const asset = (name: string) => `${import.meta.env.BASE_URL}images/${name}`

function ExternalIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M8 5H19V16M19 5L5 19" /></svg>
}

function GitHubIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
}

function LinkedInIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.71 1.637-2.085 3.37-2.085 3.601 0 4.267 2.37 4.267 4.455v6.286zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
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
          <p className="intro-name">Hi, I’m Eeri.</p>
          <h1 id="intro-heading">I build apps<br />and websites.</h1>
          <p className="intro-text">I study software engineering at LUT University. Most of my projects are mobile apps and small web tools, and I’m especially interested in UI design.</p>
          <a className="primary-link" href="#work">See my projects <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M12 4v16m-6-6 6 6 6-6" /></svg></a>
          <div className="intro-footnote"><span className="location-dot" />Based in Finland</div>
        </div>
      </section>
      <section className="work-section wrap" id="work" aria-labelledby="work-heading">
        <div className="section-heading"><div><h2 id="work-heading">Projects</h2><p>Personal projects and university coursework.</p></div></div>
        <div className="filter-row"><div className="filters" role="group" aria-label="Filter projects by topic">{topics.map(item => <button key={item} aria-pressed={topic === item} onClick={() => selectTopic(item)}>{item}</button>)}</div><p className="result-count" role="status" aria-live="polite">{visible.length} {visible.length === 1 ? 'project' : 'projects'}</p></div>
        <div className="project-grid">{visible.map(project => <ProjectCard key={project.id} project={project} onPreview={setPreview} />)}</div>
      </section>
      <section className="about-section" id="about" aria-labelledby="about-heading"><div className="wrap about-layout">
        <div className="about-title"><h2 id="about-heading">About me</h2></div>
        <div className="about-copy"><p className="about-lead">Most of my projects start from an everyday problem, like logging workouts or checking what’s for lunch on campus.</p><p>I study software engineering at LUT University. I’m most interested in mobile development and UI/UX design.</p><p>I also use AI tools when I code. Training Log, Campus Food, and the Discord bot were built with AI assistance, and working that way has taught me a lot about how the UI, the app logic, and the data fit together.</p>
          <dl className="skills"><div><dt>Interfaces</dt><dd>Kotlin, Jetpack Compose, React, HTML & CSS, responsive design</dd></div><div><dt>Applications</dt><dd>TypeScript, JavaScript, Node.js, Express, REST APIs</dd></div><div><dt>Data & workflow</dt><dd>Room, MongoDB, Git, regression testing, AI-assisted development</dd></div></dl>
        </div>
      </div></section>
      <section className="contact-section wrap" id="contact" aria-labelledby="contact-heading"><div><h2 id="contact-heading">Get in touch</h2><p>The easiest way to reach me is on LinkedIn. My code is on GitHub.</p></div><div className="contact-links"><a href="https://www.linkedin.com/in/eerihyppanen" target="_blank" rel="noreferrer"><span className="contact-label"><LinkedInIcon />LinkedIn</span><ExternalIcon /></a><a href="https://github.com/eerihyppanen" target="_blank" rel="noreferrer"><span className="contact-label"><GitHubIcon />GitHub</span><ExternalIcon /></a></div></section>
    </main>
    <footer className="site-footer wrap"><span>© {new Date().getFullYear()} Eeri Hyppänen</span><a href="#top" onClick={event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }) }}>Back to top ↑</a></footer>
    <ScreenshotDialog project={preview} onClose={() => setPreview(null)} />
  </>
}
