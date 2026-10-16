import { useState } from 'react'
import { AlertCircle } from 'lucide-react'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' }

export default function ContactForm({ emailAddress }) {
  const [values, setValues] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [isSending, setIsSending] = useState(false)
  const [feedback, setFeedback] = useState(null)

  const updateField = (event) => {
    const { name, value } = event.target

    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: null }))
  }

  const validate = (formValues) => {
    const nextErrors = {}

    if (formValues.name.trim() === '') {
      nextErrors.name = 'Nama wajib diisi.'
    }
    if (!EMAIL_PATTERN.test(formValues.email.trim())) {
      nextErrors.email = 'Masukkan alamat email yang valid.'
    }
    if (formValues.subject.trim() === '') {
      nextErrors.subject = 'Subjek wajib diisi.'
    }
    if (formValues.message.trim() === '') {
      nextErrors.message = 'Pesan wajib diisi.'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = validate(values)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setFeedback(null)
      return
    }

    setErrors({})
    setIsSending(true)
    setFeedback(null)

    const subject = encodeURIComponent(
      `Pesan dari portofolio — ${values.name}`,
    )
    const body = encodeURIComponent(
      `${values.message}\n\nDari: ${values.email}`,
    )

    // Belum ada layanan pengiriman email yang dikonfigurasi, sehingga
    // formulir mengarahkan pengunjung ke klien email pada perangkatnya.
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`

    setFeedback({
      type: 'info',
      message:
        'Klien email Anda telah terbuka. Sila lengkapi pengiriman pesan dari aplikasi email tersebut.',
    })
    setIsSending(false)
  }

  const errorMessageId = (fieldName) => `contact-${fieldName}-error`

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-name">Nama</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={updateField}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? errorMessageId('name') : undefined}
          />
          {errors.name ? (
            <p className="form-error" id={errorMessageId('name')}>
              <AlertCircle size={16} aria-hidden="true" />
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={updateField}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? errorMessageId('email') : undefined}
          />
          {errors.email ? (
            <p className="form-error" id={errorMessageId('email')}>
              <AlertCircle size={16} aria-hidden="true" />
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="contact-subject">Subjek</label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={updateField}
          aria-invalid={errors.subject ? 'true' : 'false'}
          aria-describedby={errors.subject ? errorMessageId('subject') : undefined}
        />
        {errors.subject ? (
          <p className="form-error" id={errorMessageId('subject')}>
            <AlertCircle size={16} aria-hidden="true" />
            {errors.subject}
          </p>
        ) : null}
      </div>

      <div className="form-field">
        <label htmlFor="contact-message">Pesan</label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={values.message}
          onChange={updateField}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? errorMessageId('message') : undefined}
        />
        {errors.message ? (
          <p className="form-error" id={errorMessageId('message')}>
            <AlertCircle size={16} aria-hidden="true" />
            {errors.message}
          </p>
        ) : null}
      </div>

      <button className="btn btn-primary" type="submit" disabled={isSending}>
        {isSending ? 'Mengirim...' : 'Kirim Pesan'}
      </button>

      {feedback ? (
        <p
          className={`form-feedback form-feedback-${feedback.type}`}
          role="status"
        >
          {feedback.message}
        </p>
      ) : null}
    </form>
  )
}
