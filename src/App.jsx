import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Icon from './components/Icon.jsx'
import './App.css'

const About = lazy(() => import('./sections/About.jsx'))
const Skills = lazy(() => import('./sections/Skills.jsx'))
const Projects = lazy(() => import('./sections/Projects.jsx'))
const Experience = lazy(() => import('./sections/Experience.jsx'))
const Education = lazy(() => import('./sections/Education.jsx'))
const Resume = lazy(() => import('./sections/Resume.jsx'))
const Contact = lazy(() => import('./sections/Contact.jsx'))

const resumeUrl = '/resume/Mayuresh-Rone-Resume.pdf'

function getSavedTheme() {
  try {
    return window.localStorage.getItem('mayuresh-theme') || 'dark'
  } catch {
    return 'dark'
  }
}

function LazySection({ id, component: Component, reserve = '520px' }) {
  const shell = useRef(null)
  const [ready, setReady] = useState(() => !('IntersectionObserver' in window))

  useEffect(() => {
    const element = shell.current
    if (!element) return undefined
    if (!('IntersectionObserver' in window)) return undefined
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setReady(true)
        observer.unobserve(element)
      }
    }, { rootMargin: '700px 0px' })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div id={id} ref={shell} className={`lazy-section-shell ${ready ? 'lazy-section-shell--ready' : ''}`} style={{ '--section-reserve': reserve }}>
      {ready ? <Suspense fallback={<div className="section-loading" aria-label="Loading section"><span /><span /><span /></div>}><Component resumeUrl={resumeUrl} /></Suspense> : <div className="section-placeholder" aria-hidden="true" />}
    </div>
  )
}

function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 560)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return <button className={`back-to-top ${visible ? 'back-to-top--visible' : ''}`} type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><Icon name="arrow" size={18} /></button>
}

export default function App() {
  const [theme, setTheme] = useState(getSavedTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      window.localStorage.setItem('mayuresh-theme', theme)
    } catch {
      // Theme still works for the current page when storage is unavailable.
    }
  }, [theme])

  function toggleTheme() {
    setTheme((current) => current === 'dark' ? 'light' : 'dark')
  }

  function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} resumeUrl={resumeUrl} />
      <main id="main-content">
        <div id="home"><Hero resumeUrl={resumeUrl} /></div>
        <LazySection id="about" component={About} reserve="650px" />
        <LazySection id="skills" component={Skills} reserve="600px" />
        <LazySection id="projects" component={Projects} reserve="880px" />
        <LazySection id="experience" component={Experience} reserve="570px" />
        <LazySection id="education" component={Education} reserve="600px" />
        <LazySection id="resume" component={Resume} reserve="650px" />
        <LazySection id="contact" component={Contact} reserve="780px" />
      </main>
      <Footer onBackToTop={backToTop} />
      <BackToTop />
    </div>
  )
}
