import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section className="section section--projects" aria-labelledby="projects-heading">
      <div className="container">
        <Reveal className="projects-heading-row"><SectionTitle number="03" eyebrow="SELECTED WORK" title={<>A few things I’ve <span>built.</span></>} description="Small, purposeful projects built while learning by doing." /><span className="project-count">02 <i>PROJECTS</i></span></Reveal>
        <div className="projects-grid">{projects.map((project, index) => <Reveal key={project.number} delay={index * 110}><ProjectCard project={project} /></Reveal>)}</div>
        <p className="projects-note"><span>↳</span> Each preview is an original visual representation of the project, not a screenshot.</p>
      </div>
    </section>
  )
}
