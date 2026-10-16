import { useEffect, useState } from 'react'
import { Menu, Rocket, X } from 'lucide-react'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import '../styles/navbar.css'

// Section yang dilacak oleh indikator menu aktif.
const NAV_SECTIONS = ['home', 'about', 'projects', 'contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(NAV_SECTIONS)

  // Tutup menu mobile saat pengguna menekan tombol Escape.
  useEffect(() => {
    if (!menuOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const linkClassName = (sectionId) =>
    'navbar-link' + (activeSection === sectionId ? ' active' : '')

  const menuLinks = [
    { sectionId: 'home', label: 'Home' },
    { sectionId: 'about', label: 'Tentang Saya' },
    { sectionId: 'projects', label: 'Project' },
    { sectionId: 'contact', label: 'Contact' },
  ]

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <a
          className="navbar-logo"
          href="#home"
          aria-label={`${profile.name} — beranda`}
        >
          <Rocket size={24} aria-hidden="true" />
          <span className="navbar-logo-name">{profile.name}</span>
        </a>

        <nav className="navbar-nav" aria-label="Navigasi utama">
          <ul className="navbar-menu">
            {menuLinks.map((link) => (
              <li key={link.sectionId}>
                <a
                  className={linkClassName(link.sectionId)}
                  href={'#' + link.sectionId}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn btn-primary navbar-cta" href="#contact">
          Hubungi Saya
        </a>

        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={menuOpen}
          aria-controls="navbar-mobile-menu"
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="navbar-mobile-menu"
        className="navbar-mobile-panel"
        hidden={!menuOpen}
      >
        <nav className="navbar-mobile-nav" aria-label="Navigasi mobile">
          <ul>
            {menuLinks.map((link) => (
              <li key={link.sectionId}>
                <a
                  className={linkClassName(link.sectionId)}
                  href={'#' + link.sectionId}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn-primary navbar-mobile-cta"
            href="#contact"
            onClick={closeMenu}
          >
            Hubungi Saya
          </a>
        </nav>
      </div>
    </header>
  )
}
