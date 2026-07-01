import { FC } from 'react'
import { PROJECTS } from '../constants'
import { ProjectCard } from './ProjectCard'

export const ProjectShowcase: FC = () => {
  const featured = PROJECTS.filter((p) => p.featured)
  const rest = PROJECTS.filter((p) => !p.featured)

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Featured projects */}
      {featured.length > 0 && (
        <div style={{ marginBottom: '2.5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--yellow)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
            }}
          >
            <i className="fa-solid fa-star" style={{ fontSize: '0.65rem' }}></i>
            <span>Featured</span>
            <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '16px',
            }}
          >
            {featured.map((project, i) => (
              <div key={project.name}>
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  language={project.language}
                  languageColor={project.languageColor}
                  stars={project.stars}
                  forks={project.forks}
                  url={project.url}
                  index={i}
                />
                {/* Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginTop: '10px',
                    paddingLeft: '4px',
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.65rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--muted)',
                        padding: '3px 8px',
                        border: '1px solid var(--border)',
                        borderRadius: '4px',
                        background: 'var(--bg-card)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Rest of projects */}
      {rest.length > 0 && (
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
            }}
          >
            <i className="fa-solid fa-cube" style={{ fontSize: '0.65rem' }}></i>
            <span>More Projects</span>
            <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px',
            }}
          >
            {rest.map((project, i) => (
              <div key={project.name}>
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  language={project.language}
                  languageColor={project.languageColor}
                  stars={project.stars}
                  forks={project.forks}
                  url={project.url}
                  index={i + featured.length}
                />
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginTop: '10px',
                    paddingLeft: '4px',
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.65rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--muted)',
                        padding: '3px 8px',
                        border: '1px solid var(--border)',
                        borderRadius: '4px',
                        background: 'var(--bg-card)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}