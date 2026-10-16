// Filter kategori project. Kategori berasal dari data project.

export default function ProjectFilter({ filters, activeFilter, onFilterChange }) {
  return (
    <div className="project-filters" role="group" aria-label="Filter project">
      {filters.map((filter) => {
        const isActive = filter.id === activeFilter

        return (
          <button
            key={filter.id}
            type="button"
            className={'filter-btn' + (isActive ? ' active' : '')}
            aria-pressed={isActive}
            onClick={() => onFilterChange(filter.id)}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}
