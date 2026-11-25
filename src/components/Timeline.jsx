import Icon from './Icon.jsx'

export function ExperienceTimeline({ items }) {
  return (
    <div className="timeline timeline--experience">
      {items.map((item) => (
        <article className="timeline-card" key={`${item.company}-${item.role}`}>
          <div className="timeline-card__rail"><span><Icon name="briefcase" size={17} /></span></div>
          <div className="timeline-card__content">
            <div className="timeline-card__top"><div><p className="timeline-card__eyebrow">{item.company} <span>·</span> {item.mode}</p><h3>{item.role}</h3></div><span className="timeline-date"><Icon name="clock" size={14} />{item.date}</span></div>
            <p className="timeline-card__description">{item.description}</p>
            <ul className="check-list">{item.highlights.map((highlight) => <li key={highlight}><Icon name="check" size={15} />{highlight}</li>)}</ul>
          </div>
        </article>
      ))}
    </div>
  )
}

export function EducationTimeline({ items }) {
  return (
    <div className="education-list">
      {items.map((item, index) => (
        <article className={`education-item ${index === 0 ? 'education-item--current' : ''}`} key={item.short}>
          <div className="education-item__year">{item.period}</div>
          <div className="education-item__marker"><Icon name="graduation" size={17} /></div>
          <div className="education-item__body"><span className="education-item__short">{item.short}</span><h3>{item.degree}</h3><p>{item.institution}</p></div>
          <span className="education-item__result">{item.result}</span>
        </article>
      ))}
    </div>
  )
}
