import { navigation } from '../data/navigation.js'
import Icon from './Icon.jsx'

const copyrightYear = new Date().getFullYear()

export default function Footer({ onBackToTop }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-about"><a className="brand" href="#home" aria-label="Mayuresh Rone, home"><span className="brand__mark">M<span>R</span></span><span className="brand__name">Mayuresh Rone<small>Developer portfolio</small></span></a><p>Building thoughtful web experiences, one project at a time.</p></div>
          <div className="footer-nav"><span className="footer-label">EXPLORE</span><div>{navigation.map((item) => <a href={`#${item.id}`} key={item.id}>{item.label}</a>)}</div></div>
          <div className="footer-connect"><span className="footer-label">ELSEWHERE</span><a href="https://github.com/Mayureshrone" target="_blank" rel="noreferrer"><Icon name="github" size={16} /> GitHub <Icon name="arrow" size={13} /></a><a href="https://www.linkedin.com/in/mayureshrone/" target="_blank" rel="noreferrer"><Icon name="linkedin" size={16} /> LinkedIn <Icon name="arrow" size={13} /></a><a href="mailto:mayureshrone416@email.com"><Icon name="mail" size={16} /> Email <Icon name="arrow" size={13} /></a></div>
        </div>
        <div className="footer-bottom"><span>© {copyrightYear} Mayuresh Rone</span><span>Made with care in Maharashtra, India <i aria-hidden="true">✳</i></span><button type="button" onClick={onBackToTop}>Back to top <Icon name="arrow" size={14} /></button></div>
      </div>
    </footer>
  )
}
