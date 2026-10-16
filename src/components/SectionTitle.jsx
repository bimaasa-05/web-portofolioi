// Judul section: eyebrow, heading utama, dan deskripsi singkat.
// Eyebrow dan deskripsi bersifat opsional.

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      {eyebrow ? <p className="section-title-eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title-heading">{title}</h2>
      {description ? (
        <p className="section-title-description">{description}</p>
      ) : null}
    </div>
  )
}
