import Icon from './Icon.jsx'

export default function Button({
  href,
  children,
  icon,
  variant = 'primary',
  className = '',
  ...props
}) {
  const classes = `button button--${variant} ${className}`.trim()
  const content = <>{children}{icon && <Icon name={icon} size={16} />}</>

  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        className={classes}
        href={href}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...props}
      >
        {content}
      </a>
    )
  }

  return <button className={classes} {...props}>{content}</button>
}
