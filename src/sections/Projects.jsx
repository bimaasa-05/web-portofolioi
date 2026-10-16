import { useMemo, useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import ProjectDetailModal from '../components/ProjectDetailModal'
import ProjectFilter from '../components/ProjectFilter'
import { projects } from '../data/projects'
import '../styles/projects.css'

const FILTER_ALL = 'all'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState(FILTER_ALL)
  const [selectedProject, setSelectedProject] = useState(null)

  // Kategori disusun dari data project agar filter selalu sesuai.
  const filters = useMemo(() => {
    const categories = []

    projects.forEach((project) => {
      if (!categories.includes(project.category)) {
        categories.push(project.category)
      }
    })

    return [
      { id: FILTER_ALL, label: 'Semua' },
      ...categories.map((category) => ({
        id: category,
        label: category,
      })),
    ]
  }, [])

  const visibleProjects =
    activeFilter === FILTER_ALL
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionTitle
          eyebrow="Karya"
          title="Projects I've Built"
          description="Beberapa project yang menjadi bagian dari perjalanan saya dalam mempelajari dan mengembangkan aplikasi web."
        />

        <ProjectFilter
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {visibleProjects.length > 0 ? (
          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetail={setSelectedProject}
              />
            ))}
          </div>
        ) : (
          <p className="projects-empty">
            Tidak ada project pada kategori yang dipilih.
          </p>
        )}
      </div>

      {selectedProject ? (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : null}
    </section>
  )
}
