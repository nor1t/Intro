import { FC } from 'react'
import { useMouseMove3D } from '../hooks'

interface ProjectCardProps {
  name: string
  description: string
  language: string
  languageColor: string
  stars: number
  forks: number
  url: string
  index: number
}

export const ProjectCard: FC<ProjectCardProps> = ({
  name,
  description,
  language,
  languageColor,
  stars,
  forks,
  url,
  index,
}) => {
  const cardRef = useMouseMove3D(6)

  return (
    <div className="holo-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div ref={cardRef} className="holo-card-inner">
        {/* Corner decoration */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '20px',
            height: '20px',
            borderTop: '2px solid var(--green)',
            borderRight: '2px solid var(--green)',
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            width: '20px',
            height: '20px',
            borderBottom: '2px solid var(--green)',
            borderLeft: '2px solid var(--green)',
            opacity: 0.3,
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.6rem' }}>
          <i className="fa-solid fa-cube" style={{ color: 'var(--green)', fontSize: '0.85rem' }}></i>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '1rem',
              color: 'var(--text)',
            }}
          >
            {name}
          </span>
        </div>

        <p
          style={{
            color: 'var(--muted)',
            fontSize: '0.78rem',
            lineHeight: 1.7,
            marginBottom: '1rem',
            minHeight: '44px',
          }}
        >
          {description}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.75rem', color: 'var(--muted)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span
                className="lang-dot"
                style={{
                  background: languageColor,
                  color: languageColor,
                }}
              />
              {language}
            </span>
            <span>
              <i className="fa-regular fa-star" style={{ marginRight: '3px' }}></i>
              {stars.toLocaleString()}
            </span>
            <span>
              <i className="fa-solid fa-code-fork" style={{ marginRight: '3px' }}></i>
              {forks}
            </span>
          </div>
          <a
            href={url}
            style={{
              color: 'var(--green)',
              fontSize: '0.75rem',
              opacity: 0.7,
              textDecoration: 'none',
            }}
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
