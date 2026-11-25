import { useEffect, useState } from 'react'
import Button from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'

const roles = ['Frontend Developer', 'React Developer', 'Aspiring Full Stack Developer']

function useRoleText() {
  const [role, setRole] = useState(roles[0])
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    let roleIndex = 0
    let character = roles[0].length
    let deleting = true
    let timer
    const tick = () => {
      const currentRole = roles[roleIndex]
      let delay = deleting ? 65 : 95
      if (deleting) {
        character -= 1
        setRole(currentRole.slice(0, character))
        if (character <= 0) {
          character = 0
          deleting = false
          roleIndex = (roleIndex + 1) % roles.length
          delay = 320
        }
      } else {
        character += 1
        setRole(currentRole.slice(0, character))
        if (character >= currentRole.length) {
          character = currentRole.length
          deleting = true
          delay = 1450
        }
      }
      timer = window.setTimeout(tick, delay)
    }
    timer = window.setTimeout(tick, 1500)
    return () => window.clearTimeout(timer)
  }, [])
  return role
}

export default function Hero({ resumeUrl }) {
  const role = useRoleText()

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-glow hero-glow--one" /><div className="hero-glow hero-glow--two" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="status-dot" /> PERSONAL PORTFOLIO <span className="hero-kicker__line" /> 2026</div>
          <p className="hero-pretitle">Hi, I’m</p>
          <h1 id="hero-title" aria-label="Hi, I’m Mayuresh Rone">Mayuresh<br /><span>Rone</span><b className="hero-period">.</b></h1>
          <div className="hero-role"><span className="hero-role__prefix">I’m a</span><span className="role-text" aria-hidden="true">{role}</span><span className="typing-caret" aria-hidden="true" /><span className="sr-only">Frontend Developer, React Developer, Aspiring Full Stack Developer</span></div>
          <p className="hero-description">A BCA graduate passionate about building responsive, user-friendly web applications and solving real-world problems through technology.</p>
          <div className="hero-actions"><Button href="#projects" icon="right">Explore my work</Button><Button href="#contact" variant="text">Let’s connect <Icon name="arrow" size={15} /></Button></div>
          <div className="hero-socials"><span>FIND ME ON</span><a href="https://github.com/Mayureshrone" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Icon name="github" size={17} /></a><a href="https://www.linkedin.com/in/mayureshrone/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Icon name="linkedin" size={17} /></a><span className="hero-socials__divider" /><a href={resumeUrl} download="Mayuresh-Rone-Resume.pdf" className="hero-resume"><Icon name="download" size={15} /> Download resume</a></div>
        </div>
        <div className="hero-art" aria-label="Abstract monogram illustration for Mayuresh Rone">
          <div className="art-orbit art-orbit--outer" /><div className="art-orbit art-orbit--inner" />
          <div className="art-grid" />
          <div className="art-card art-card--main"><div className="art-card__top"><span>MR / 01</span><span className="art-card__live"><i /> AVAILABLE TO CONNECT</span></div><div className="monogram">M<span>R</span><b>.</b></div><div className="art-card__bottom"><span>DEVELOPER<br />IN PROGRESS</span><span className="art-card__year">2026</span></div></div>
          <div className="float-chip float-chip--react"><span className="react-mark">⚛</span><span>React.js</span></div><div className="float-chip float-chip--js"><span className="js-mark">JS</span><span>JavaScript</span></div>
          <div className="hero-coordinate" aria-hidden="true">19°09' N<br />73°15' E</div>
          <div className="hero-caption"><span>01 — INTRODUCTION</span><span>VANGANI, INDIA</span></div>
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><i /></a>
    </section>
  )
}
