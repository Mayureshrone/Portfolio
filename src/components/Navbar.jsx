import { useEffect, useState } from 'react'
import { navigation } from '../data/navigation.js'
import Button from './Button.jsx'
import Icon from './Icon.jsx'

export default function Navbar({ theme, onToggleTheme, resumeUrl }) {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navigation.map(({ id }) => document.getElementById(id)).filter(Boolean)
    if (!('IntersectionObserver' in window)) return undefined
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible[0]) setActive(visible[0].target.id)
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.2, 0.5, 1] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Mayuresh Rone, home"><span className="brand__mark">M<span>R</span></span><span className="brand__name">Mayuresh Rone<small>Developer portfolio</small></span></a>
        <button className="nav__mobile-toggle icon-button" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}><Icon name={menuOpen ? 'close' : 'menu'} size={21} /></button>
        <div className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`} id="primary-navigation">
          {navigation.map((item) => <a key={item.id} className={active === item.id ? 'is-active' : ''} href={`#${item.id}`} onClick={closeMenu}>{item.label}</a>)}
          <div className="nav__mobile-actions">
            <Button href={resumeUrl} variant="outline" icon="download" download="Mayuresh-Rone-Resume.pdf">Resume</Button>
            <button className="icon-button" type="button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} onClick={onToggleTheme}><Icon name={theme === 'dark' ? 'sun' : 'moon'} /></button>
          </div>
        </div>
        <div className="nav__actions"><button className="icon-button theme-toggle" type="button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} onClick={onToggleTheme}><Icon name={theme === 'dark' ? 'sun' : 'moon'} size={17} /></button><Button href={resumeUrl} variant="outline" icon="download" download="Mayuresh-Rone-Resume.pdf">Resume</Button></div>
      </nav>
    </header>
  )
}
