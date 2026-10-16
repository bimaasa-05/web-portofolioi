import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Button from '../components/Button'
import { profile } from '../data/profile'
import '../styles/home.css'

// Koordinat bintang kecil untuk ilustrasi visual hero.
const HERO_STARS = [
  { x: 48, y: 44, size: 2, delay: '0s' },
  { x: 120, y: 120, size: 1, delay: '0.6s' },
  { x: 200, y: 60, size: 2, delay: '1.2s' },
  { x: 320, y: 150, size: 1, delay: '0.3s' },
  { x: 420, y: 40, size: 2, delay: '1s' },
  { x: 500, y: 180, size: 1, delay: '1.6s' },
  { x: 90, y: 220, size: 1, delay: '0.9s' },
  { x: 470, y: 260, size: 2, delay: '0.4s' },
  { x: 240, y: 90, size: 1, delay: '1.4s' },
  { x: 380, y: 240, size: 1, delay: '0.8s' },
  { x: 160, y: 300, size: 2, delay: '1.8s' },
  { x: 440, y: 330, size: 1, delay: '1s' },
]

function SpaceScene() {
  return (
    <svg
      className="hero-scene"
      viewBox="0 0 520 420"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="hero-planet" cx="38%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="55%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </radialGradient>
        <radialGradient id="hero-planet-core" cx="50%" cy="50%" r="55%">
          <stop offset="65%" stopColor="#bfdbfe" />
          <stop offset="100%" stopColor="#2563eb" />
        </radialGradient>
      </defs>

      <circle
        className="hero-planet"
        cx="260"
        cy="205"
        r="105"
        fill="url(#hero-planet)"
      />
      <circle
        className="hero-planet-glow"
        cx="260"
        cy="205"
        r="105"
        fill="none"
        stroke="rgba(125, 211, 252, 0.4)"
        strokeWidth="6"
      />

      <ellipse
        className="hero-ring"
        cx="260"
        cy="205"
        rx="170"
        ry="48"
        fill="none"
        stroke="rgba(56, 189, 248, 0.5)"
        strokeWidth="2.5"
        transform="rotate(-18 260 205)"
      />
      <ellipse
        className="hero-orbit"
        cx="260"
        cy="205"
        rx="235"
        ry="84"
        fill="none"
        stroke="rgba(139, 92, 246, 0.45)"
        strokeWidth="1.5"
        strokeDasharray="3 12"
        transform="rotate(-18 260 205)"
      />

      {HERO_STARS.map((star) => (
        <circle
          key={`${star.x}-${star.y}`}
          className="hero-star"
          cx={star.x}
          cy={star.y}
          r={star.size}
          style={{ animationDelay: star.delay }}
        />
      ))}

      <line
        className="hero-shooting-star"
        x1="60"
        y1="48"
        x2="170"
        y2="132"
        stroke="rgba(255, 255, 255, 0.85)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Home() {
  const socialLinks = [
    profile.githubUrl
      ? { href: profile.githubUrl, label: 'GitHub' }
      : null,
    profile.linkedinUrl
      ? { href: profile.linkedinUrl, label: 'LinkedIn' }
      : null,
  ].filter((link) => link !== null)

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <p
            className="hero-greeting animate-in"
            style={{ animationDelay: '100ms' }}
          >
            {profile.greeting}
          </p>
          <h1
            className="hero-name animate-in"
            style={{ animationDelay: '180ms' }}
          >
            {profile.name}
          </h1>
          <p
            className="hero-role animate-in"
            style={{ animationDelay: '260ms' }}
          >
            {profile.role}
          </p>
          <h2
            className="hero-headline animate-in"
            style={{ animationDelay: '340ms' }}
          >
            {profile.headline}
          </h2>
          <p
            className="hero-description animate-in"
            style={{ animationDelay: '420ms' }}
          >
            {profile.description}
          </p>

          <div
            className="hero-actions animate-in"
            style={{ animationDelay: '500ms' }}
          >
            <Button href="#projects">
              Lihat Project
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button variant="secondary" href="#contact">
              Hubungi Saya
            </Button>
          </div>

          {socialLinks.length > 0 ? (
            <ul
              className="hero-social animate-in"
              style={{ animationDelay: '580ms' }}
            >
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
          ) : null}
        </div>

        <div
          className="hero-visual animate-in"
          style={{ animationDelay: '420ms' }}
        >
          <SpaceScene />
        </div>
      </div>
    </section>
  )
}
