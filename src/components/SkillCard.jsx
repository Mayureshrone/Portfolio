import Icon from './Icon.jsx'

export default function SkillCard({ group }) {
  return (
    <article className="skill-card">
      <div className="skill-card__top"><span className="skill-card__icon"><Icon name={group.icon} size={19} /></span><span>{group.number}</span></div>
      <h3>{group.title}</h3>
      <ul>{group.skills.map((skill) => <li key={skill}><span className="skill-dot" />{skill}</li>)}</ul>
    </article>
  )
}
