import Button from './Button.jsx'
import Icon from './Icon.jsx'
import ProjectPreview from './ProjectPreview.jsx'

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card project-card--${project.accent}`}>
      <div className="project-card__visual">
        <ProjectPreview type={project.visual} />
        <span className="visual-note">Conceptual UI preview</span>
      </div>
      <div className="project-card__body">
        <div className="project-card__meta"><span>FEATURED PROJECT</span><span>{project.number} / 02</span></div>
        <div className="project-card__title"><div><h3>{project.name}</h3><p>{project.type}</p></div><span className="project-card__arrow"><Icon name="arrow" size={19} /></span></div>
        <p className="project-card__description">{project.description}</p>
        <ul className="tag-list" aria-label="Technologies">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        <Button href={project.url} variant="text" icon="arrow">Visit live project</Button>
      </div>
    </article>
  )
}
