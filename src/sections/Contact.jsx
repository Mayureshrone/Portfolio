import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Button from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}
const configured = Object.values(emailConfig).every(Boolean)

export default function Contact() {
  const [status, setStatus] = useState({ type: '', message: '' })
  const [sending, setSending] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    if (!configured) {
      setStatus({ type: 'notice', message: 'The contact form is not configured yet. Please email me directly at mayureshrone416@email.com.' })
      return
    }

    const fields = new FormData(form)
    const payload = {
      service_id: emailConfig.serviceId,
      template_id: emailConfig.templateId,
      user_id: emailConfig.publicKey,
      template_params: {
        name: fields.get('name'),
        email: fields.get('email'),
        reply_to: fields.get('email'),
        subject: fields.get('subject'),
        message: fields.get('message'),
      },
    }

    setSending(true)
    setStatus({ type: '', message: '' })
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw new Error('Email delivery failed. Please try again or email me directly.')
      form.reset()
      setStatus({ type: 'success', message: 'Thanks for reaching out. Your message has been sent.' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Something went wrong. Please email me directly.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="section section--contact" aria-labelledby="contact-heading">
      <div className="container contact-layout"><Reveal className="contact-copy"><SectionTitle number="07" eyebrow="SAY HELLO" title={<>Let’s work<br /><span>together.</span></>} description="Have a project idea, an opportunity, or just want to say hello? My inbox is open." /><div className="contact-details"><a href="mailto:mayureshrone416@email.com"><span className="contact-detail__icon"><Icon name="mail" size={17} /></span><span><small>EMAIL ME</small><strong>mayureshrone416@email.com</strong></span><Icon name="arrow" size={15} /></a><a href="https://www.linkedin.com/in/mayureshrone/" target="_blank" rel="noreferrer"><span className="contact-detail__icon"><Icon name="linkedin" size={17} /></span><span><small>CONNECT ON LINKEDIN</small><strong>linkedin.com/in/mayureshrone</strong></span><Icon name="arrow" size={15} /></a><div className="contact-detail"><span className="contact-detail__icon"><Icon name="pin" size={17} /></span><span><small>BASED IN</small><strong>Vangani, Maharashtra, India</strong></span></div></div><div className="contact-open"><span className="status-dot" /> Open to conversations about frontend and entry-level developer roles</div></Reveal>
        <Reveal className="contact-form-wrap" delay={100}><form className="contact-form" onSubmit={handleSubmit} noValidate><div className="contact-form__heading"><span>DROP A NOTE</span><span>01 — 04</span></div><div className="form-row"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" type="text" placeholder="Jane Smith" autoComplete="name" minLength="2" maxLength="100" required /></div><div className="form-row"><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" placeholder="jane@example.com" autoComplete="email" maxLength="254" required /></div><div className="form-row"><label htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" type="text" placeholder="What would you like to discuss?" minLength="2" maxLength="150" required /></div><div className="form-row"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows="4" placeholder="Tell me a little about it..." minLength="10" maxLength="3000" required /></div><Button type="submit" icon="right" disabled={sending} className="contact-submit">{sending ? 'Sending…' : 'Send message'}</Button><p className={`form-status ${status.type ? `form-status--${status.type}` : ''}`} role="status" aria-live="polite">{status.message}</p>{!configured && <p className="form-setup-note">EmailJS setup is needed to send this form. Direct email is always available.</p>}</form></Reveal>
      </div>
    </section>
  )
}
