import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Check,
  Clock,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Moon,
  Monitor,
  Sparkles,
  Sun,
  Terminal,
  X,
} from 'lucide-react'

const icons = {
  arrow: ArrowUpRight,
  right: ArrowRight,
  download: Download,
  mail: Mail,
  pin: MapPin,
  sun: Sun,
  moon: Moon,
  menu: Menu,
  close: X,
  code: Code2,
  window: Monitor,
  terminal: Terminal,
  sparkles: Sparkles,
  briefcase: Briefcase,
  graduation: GraduationCap,
  check: Check,
  external: ExternalLink,
  clock: Clock,
}

export default function Icon({ name, size = 18, className = '' }) {
  if (name === 'github') {
    return <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 .9A11.1 11.1 0 0 0 8.49 22.52c.55.1.75-.23.75-.53v-1.86c-3.08.67-3.73-1.3-3.73-1.3-.5-1.28-1.23-1.62-1.23-1.62-1-.68.08-.67.08-.67 1.1.08 1.69 1.13 1.69 1.13.98 1.68 2.57 1.2 3.2.91.1-.71.39-1.2.7-1.48-2.46-.28-5.05-1.23-5.05-5.48 0-1.21.43-2.2 1.14-2.97-.11-.28-.5-1.4.11-2.93 0 0 .93-.3 3.05 1.13a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.04-1.13 3.04-1.13.61 1.53.23 2.65.12 2.93.7.77 1.13 1.76 1.13 2.97 0 4.26-2.59 5.2-5.06 5.48.4.35.75 1.03.75 2.08v3.08c0 .3.2.64.76.53A11.1 11.1 0 0 0 12 .9Z" /></svg>
  }
  if (name === 'linkedin') {
    return <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24"><path fill="currentColor" d="M3 2h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z" /><path fill="var(--surface)" d="M6 9h2.6v9H6zm1.3-4.4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 9h2.5v1.2h.1a2.8 2.8 0 0 1 2.5-1.4c2.7 0 3.2 1.8 3.2 4.1V18h-2.6v-4.5c0-1.1 0-2.4-1.5-2.4s-1.7 1.2-1.7 2.3V18H10z" /></svg>
  }
  const IconComponent = icons[name] ?? Sparkles
  return <IconComponent aria-hidden="true" className={className} size={size} strokeWidth={1.7} />
}
