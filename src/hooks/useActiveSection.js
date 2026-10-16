import { useEffect, useState } from 'react'

// Menemukan section aktif berdasarkan Intersection Observer.
// Mengembalikan id section yang sedang terlihat paling banyak.
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return undefined
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element) => element !== null)

    // Bagian tengah halaman dianggap sebagai area aktif.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}
