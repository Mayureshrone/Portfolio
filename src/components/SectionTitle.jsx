export default function SectionTitle({ id, eyebrow, title, description, number }) {
  const headingId = id || ({
    '01': 'about-heading',
    '02': 'skills-heading',
    '03': 'projects-heading',
    '04': 'experience-heading',
    '05': 'education-heading',
    '06': 'resume-heading',
    '07': 'contact-heading',
  })[number]

  return (
    <div className="section-heading">
      <div className="section-heading__eyebrow">
        <span className="section-heading__number">{number}</span>
        <span>{eyebrow}</span>
      </div>
      <h2 id={headingId}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
