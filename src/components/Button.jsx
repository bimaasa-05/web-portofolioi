// Komponen tombol yang dapat dipakai ulang.
// Memiliki tiga varian: primary, secondary, dan ghost.

export default function Button({
  href,
  children,
  variant = 'primary',
  type = 'button',
  ...rest
}) {
  const className = `btn btn-${variant}`

  if (href) {
    return (
      <a className={className} href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={className} {...rest}>
      {children}
    </button>
  )
}
