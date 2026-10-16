import { useEffect, useRef } from 'react'
import { ArrowUpRight, ExternalLink, X } from 'lucide-react'
import Button from './Button'

// Elemen yang dapat menerima fokus keyboard.
const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

export default function ProjectDetailModal({ project, onClose }) {
  const dialogRef = useRef(null)
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog) {
      return undefined
    }

    const previouslyFocused = document.activeElement
    const getFocusableElements = () =>
      Array.from(dialog.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
        (element) => element.getClientRects().length > 0,
      )

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onCloseRef.current()
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const focusableElements = getFocusableElements()

      if (focusableElements.length === 0) {
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
        return
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    dialog.focus()
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      previouslyFocused?.focus?.()
    }
  }, [])

  const technologies = project.technologies.map((technology) => (
    <span className="badge" key={technology}>
      {technology}
    </span>
  ))

  const demoLink = project.demoUrl
    ? {
        href: project.demoUrl,
        icon: <ExternalLink size={16} aria-hidden="true" />,
        label: 'Live Demo',
      }
    : null

  const sourceLink = project.sourceUrl
    ? {
        href: project.sourceUrl,
        icon: <ArrowUpRight size={16} aria-hidden="true" />,
        label: 'Source',
      }
    : null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={dialogRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-title"
        tabIndex={-1}
      >
        <button
          type="button"
          className="modal-close"
          aria-label="Tutup detail project"
          onClick={onClose}
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div className="modal-body">
          <img
            className="modal-preview"
            src={project.thumbnail}
            alt={`${project.name} — preview project`}
          />

          <p className="modal-category">{project.category}</p>
          <h3 className="modal-title" id="project-detail-title">
            {project.name}
          </h3>
          <p className="modal-description">{project.description}</p>

          <section className="modal-section">
            <h4>Latar belakang</h4>
            <p>{project.background}</p>
          </section>

          <section className="modal-section">
            <h4>Problema yang ingin diselesaikan</h4>
            <p>{project.problem}</p>
          </section>

          <section className="modal-section">
            <h4>Tujuan</h4>
            <p>{project.objectives}</p>
          </section>

          <section className="modal-section">
            <h4>Fitur utama</h4>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className="modal-section">
            <h4>Peran saya</h4>
            <p>{project.ownerRole}</p>
          </section>

          <section className="modal-section">
            <h4>Teknologi</h4>
            <ul className="modal-technologies">{technologies}</ul>
          </section>

          {project.challenges ? (
            <section className="modal-section">
              <h4>Tantangan dan solusi</h4>
              <p>{project.challenges}</p>
            </section>
          ) : null}

          <div className="modal-links">
            {demoLink ? (
              <Button variant="secondary" href={demoLink.href}>
                {demoLink.label}
                {demoLink.icon}
              </Button>
            ) : null}
            {sourceLink ? (
              <Button variant="secondary" href={sourceLink.href}>
                {sourceLink.label}
                {sourceLink.icon}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
