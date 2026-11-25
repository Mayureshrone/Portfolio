import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { ExperienceTimeline } from '../components/Timeline.jsx'
import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <section className="section section--experience" aria-labelledby="experience-heading">
      <div className="container experience-layout"><Reveal className="experience-title"><SectionTitle number="04" eyebrow="WHERE I’VE LEARNED" title={<>Learning by<br /><span>doing.</span></>} description="Hands-on work with real datasets during my internship." /></Reveal><Reveal className="experience-content" delay={100}><ExperienceTimeline items={experience} /></Reveal></div>
    </section>
  )
}
