import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import SkillCard from '../components/SkillCard.jsx'
import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <section className="section section--skills" aria-labelledby="skills-heading">
      <div className="container">
        <Reveal><SectionTitle number="02" eyebrow="THE TOOLKIT" title={<>What I work <span>with.</span></>} description="The tools and habits I use to turn ideas into useful, working experiences." /></Reveal>
        <div className="skills-grid">{skillGroups.map((group, index) => <Reveal key={group.number} delay={index * 75}><SkillCard group={group} /></Reveal>)}</div>
        <div className="skills-footnote"><span className="skills-footnote__line" /><p>Always learning. Never done exploring.</p><span className="skills-footnote__spark">✳</span></div>
      </div>
    </section>
  )
}
