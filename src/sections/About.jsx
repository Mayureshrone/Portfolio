import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Icon from '../components/Icon.jsx'

const details = [
  { icon: 'graduation', label: 'Education', value: 'BCA Graduate' },
  { icon: 'sparkles', label: 'University', value: 'Mumbai University' },
  { icon: 'pin', label: 'Location', value: 'Vangani, Maharashtra' },
  { icon: 'code', label: 'Career interest', value: 'Frontend / Full Stack' },
]

export default function About() {
  return (
    <section className="section section--about" aria-labelledby="about-heading">
      <div className="container about-layout">
        <Reveal className="about-intro"><SectionTitle number="01" eyebrow="A LITTLE ABOUT ME" title={<>Curiosity first.<br /><span>Code follows.</span></>} /><p>I’m Mayuresh Rone, a Bachelor of Computer Applications graduate from Mumbai University. I enjoy developing modern web applications using HTML, CSS, JavaScript, and React. I’m continuously improving my development skills and exploring new technologies to build practical and meaningful software solutions.</p><p>My career goal is to become a skilled Full Stack Developer and eventually explore cloud computing and DevOps.</p><a className="inline-link" href="#contact">A little more about what I do <Icon name="right" size={16} /></a></Reveal>
        <Reveal className="about-details" delay={100}><div className="about-details__top"><span>AT A GLANCE</span><span>01 — 04</span></div><div className="about-facts">{details.map((detail, index) => <div className="about-fact" key={detail.label}><span className="about-fact__icon"><Icon name={detail.icon} size={18} /></span><div><span>{detail.label}</span><strong>{detail.value}</strong></div><span className="about-fact__index">0{index + 1}</span></div>)}</div><div className="about-details__note"><span className="note-mark">“</span><p>Good software starts with understanding the people who use it.</p></div></Reveal>
      </div>
    </section>
  )
}
