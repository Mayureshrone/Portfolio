import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { EducationTimeline } from '../components/Timeline.jsx'
import { education } from '../data/education.js'

export default function Education() {
  return (
    <section className="section section--education" aria-labelledby="education-heading">
      <div className="container education-layout"><Reveal><SectionTitle number="05" eyebrow="THE FOUNDATION" title={<>Built on a strong<br /><span>foundation.</span></>} description="My academic journey in computer applications and beyond." /></Reveal><Reveal delay={100}><EducationTimeline items={education} /></Reveal></div>
    </section>
  )
}
