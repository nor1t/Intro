import { FC } from 'react'
import { EDUCATION } from '../constants'

export const EducationSection: FC = () => {
  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative' }}>
      {/* Timeline line */}
      <div
        style={{
          position: 'absolute',
          left: '23px',
          top: '12px',
          bottom: '12px',
          width: '1px',
          background: 'linear-gradient(180deg, var(--green), var(--cyan), var(--pink))',
          opacity: 0.3,
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {EDUCATION.map((edu, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              gap: '1.25rem',
              alignItems: 'flex-start',
              position: 'relative',
            }}
          >
            {/* Node */}
            <div
              style={{
                flexShrink: 0,
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: `1px solid ${edu.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
                boxShadow: `0 0 16px ${edu.color.replace('var(', 'rgba(').replace(')', ',0.15)')}`,
              }}
            >
              <i className={edu.icon} style={{ color: edu.color, fontSize: '1.1rem' }}></i>
            </div>

            {/* Content card */}
            <div
              style={{
                flex: 1,
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1.25rem 1.5rem',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,255,136,0.25)'
                e.currentTarget.style.transform = 'translateX(4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '0.4rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--text)',
                  }}
                >
                  {edu.institution}
                </h3>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: edu.color,
                    padding: '3px 10px',
                    border: `1px solid ${edu.color}`,
                    borderRadius: '20px',
                    opacity: 0.8,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {edu.period}
                </span>
              </div>

              <div
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--cyan)',
                  marginBottom: '0.6rem',
                  fontWeight: 500,
                }}
              >
                {edu.degree}
              </div>

              <p
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--muted)',
                  lineHeight: 1.7,
                }}
              >
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}