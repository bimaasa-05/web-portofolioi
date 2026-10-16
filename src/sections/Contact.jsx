import { ArrowUpRight, Mail } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'
import { profile } from '../data/profile'
import '../styles/contact.css'

export default function Contact() {
  const contactDetails = [
    profile.email
      ? {
          icon: Mail,
          label: 'Email',
          value: profile.email,
          href: 'mailto:' + profile.email,
        }
      : null,
    profile.githubUrl
      ? {
          icon: ArrowUpRight,
          label: 'GitHub',
          value: profile.githubUrl,
          href: profile.githubUrl,
        }
      : null,
    profile.linkedinUrl
      ? {
          icon: ArrowUpRight,
          label: 'LinkedIn',
          value: profile.linkedinUrl,
          href: profile.linkedinUrl,
        }
      : null,
  ].filter((detail) => detail !== null)

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionTitle
          eyebrow="Kontak"
          title="Contact"
          description="Ada pertanyaan, penawaran proyek, atau sekadar ingin berkenalan? Silakan hubungi saya."
        />

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-info-title">Informasi kontak</h3>

            {contactDetails.length > 0 ? (
              <ul className="contact-details">
                {contactDetails.map((detail) => {
                  const DetailIcon = detail.icon

                  return (
                    <li className="contact-detail" key={detail.label}>
                      <DetailIcon size={20} aria-hidden="true" />
                      <a href={detail.href}>{detail.value}</a>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <p className="contact-empty">
                Informasi kontak belum tersedia. Silakan gunakan formulir di sisi
                lain.
              </p>
            )}
          </div>

          <div className="contact-form-wrapper">
            <ContactForm emailAddress={profile.email} />
          </div>
        </div>
      </div>
    </section>
  )
}
