import { FC } from 'react'
import { ABOUT } from '../constants'

export const AboutSection: FC = () => {
  return (
    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
      {/* Terminal-style header line */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '1.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--muted)',
        }}
      >
        <span style={{ color: 'var(--green)' }}>~/about</span>
        <span>$</span>
        <span>cat identity.log</span>
        <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      </div>

      {/* Paragraphs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
        {ABOUT.paragraphs.map((paragraph, i) => (
          <p
            key={i}
            style={{
              color: 'var(--text)',
              fontSize: '0.88rem',
              lineHeight: 1.85,
              opacity: 0.85,
              paddingLeft: '1rem',
              borderLeft: '2px solid var(--border)',
            }}
          >
            <span style={{ color: 'var(--green)', marginRight: '6px', opacity: 0.6 }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            {paragraph}
          </p>
        ))}
      </div>

      {/* Highlights grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '12px',
          marginTop: '2rem',
        }}
      >
        {ABOUT.highlights.map((highlight) => (
          <div
            key={highlight.label}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '1rem',
              transition: 'all 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,255,136,0.3)'
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <i
              className={highlight.icon}
              style={{ color: 'var(--green)', fontSize: '1.1rem', marginBottom: '0.5rem' }}
            ></i>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: 'var(--text)',
                marginBottom: '0.25rem',
              }}
            >
              {highlight.label}
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{highlight.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}