import { FC } from 'react'
import { EDUCATION } from '../constants'

interface EducationSectionProps {
  onCertificatesClick: () => void
}

export const EducationSection: FC<EducationSectionProps> = ({ onCertificatesClick }) => {
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

      {/* Certificates CTA Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
        <button
          onClick={onCertificatesClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 28px',
            background: 'var(--bg-card)',
            border: '1px solid var(--yellow)',
            borderRadius: '8px',
            color: 'var(--yellow)',
            fontFamily: 'var(--font-display)',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,225,77,0.08)'
            e.currentTarget.style.borderColor = 'var(--yellow)'
            e.currentTarget.style.boxShadow = '0 0 24px rgba(255,225,77,0.15)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--bg-card)'
            e.currentTarget.style.borderColor = 'var(--yellow)'
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          <i className="fa-solid fa-certificate" style={{ fontSize: '1rem' }}></i>
          View Certificates
          <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.7rem' }}></i>
        </button>
      </div>
    </div>
  )
}
