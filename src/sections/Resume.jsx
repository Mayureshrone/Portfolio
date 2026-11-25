import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Button from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'

export default function Resume({ resumeUrl }) {
  return (
    <section className="section section--resume" aria-labelledby="resume-heading">
      <div className="container resume-layout"><Reveal className="resume-copy"><SectionTitle number="06" eyebrow="THE FULL PICTURE" title={<>A little more<br /><span>on paper.</span></>} description="For the details, take a look at my resume." /><div className="resume-actions"><Button href={resumeUrl} icon="download" download="Mayuresh-Rone-Resume.pdf">Download resume</Button><Button href={resumeUrl} variant="outline" icon="external" target="_blank" rel="noreferrer">View PDF</Button></div><p className="resume-format"><Icon name="check" size={15} /> PDF · Opens in a new tab or downloads directly</p></Reveal><Reveal className="resume-art" delay={100}><div className="resume-paper"><div className="resume-paper__top"><span>MR</span><span>CURRICULUM VITAE<br />2026</span></div><div className="resume-paper__name">Mayuresh<br />Rone<span>.</span></div><span className="resume-paper__role">FRONTEND DEVELOPER</span><div className="resume-paper__rule" /><div className="resume-paper__columns"><div><b>PROFILE</b><i /><i /><i className="short" /><b>EDUCATION</b><i /><i className="short" /></div><div><b>SKILLS</b><i /><i /><i className="short" /><b>PROJECTS</b><i /><i className="short" /></div></div><div className="resume-paper__bottom"><span>VANGANI, INDIA</span><span>01 / 01</span></div></div><span className="resume-orbit resume-orbit--one" /><span className="resume-orbit resume-orbit--two" /><span className="resume-label">A SNAPSHOT<br />OF MY JOURNEY</span></Reveal></div>
    </section>
  )
}
