import { ArrowUpRight, Rocket } from 'lucide-react'
import { profile } from '../data/profile'
import '../styles/footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    profile.githubUrl
      ? { href: profile.githubUrl, label: 'GitHub' }
      : null,
    profile.linkedinUrl
      ? { href: profile.linkedinUrl, label: 'LinkedIn' }
      : null,
  ].filter((link) => link !== null)

  const navigationLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Tentang Saya' },
    { href: '#projects', label: 'Project' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a className="footer-logo" href="#home">
            <Rocket size={22} aria-hidden="true" />
            <span>{profile.name}</span>
          </a>
          <p className="footer-tagline">
            Portofolio profesional dengan identitas luar angkasa.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Navigasi footer">
          <h2 className="footer-title">Navigasi</h2>
          <ul className="footer-links">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {socialLinks.length > 0 ? (
          <div className="footer-social">
            <h2 className="footer-title">Media Sosial</h2>
            <ul className="footer-social-links">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${link.label} — buka di tab baru`}
                  >
                    {link.label}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="container footer-bottom">
        <p>© {currentYear} {profile.name}. Hak cipta dilindungi.</p>
      </div>
    </footer>
  )
}
