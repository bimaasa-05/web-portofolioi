// Kartu project pada galeri. Dibuka melalui modal detail milik section.
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import Button from './Button'

export default function ProjectCard({ project, onOpenDetail }) {
  const technologies = project.technologies.map((technology) => (
    <span className="badge" key={technology}>
      {technology}
    </span>
  ))

  const sourceLink = project.sourceUrl
    ? {
        href: project.sourceUrl,
        icon: <ArrowUpRight size={16} aria-hidden="true" />,
        label: 'Source',
      }
    : null

  const demoLink = project.demoUrl
    ? {
        href: project.demoUrl,
        icon: <ExternalLink size={16} aria-hidden="true" />,
        label: 'Live Demo',
      }
    : null

  return (
    <article className="project-card">
      <div className="project-card-media">
        <img
          src={project.thumbnail}
          alt={`${project.name} — preview project`}
        />
        {project.status ? (
          <span className="project-card-status">{project.status}</span>
        ) : null}
      </div>

      <div className="project-card-body">
        <div className="project-card-heading">
          <h3>{project.name}</h3>
          <span className="project-card-category">{project.category}</span>
        </div>
        <p className="project-card-description">{project.description}</p>

        <ul className="project-card-technologies">
          {technologies}
        </ul>

        <div className="project-card-actions">
          <Button
            variant="primary"
            onClick={() => onOpenDetail(project)}
          >
            Lihat Detail
          </Button>
          {demoLink ? (
            <Button variant="ghost" href={demoLink.href}>
              {demoLink.label}
              {demoLink.icon}
            </Button>
          ) : null}
          {sourceLink ? (
            <Button variant="ghost" href={sourceLink.href}>
              {sourceLink.label}
              {sourceLink.icon}
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  )
}
