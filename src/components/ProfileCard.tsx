import { FC } from 'react'
import { useMouseMove3D } from '../hooks'
import { PROFILE_DATA } from '../constants'

export const ProfileCard: FC = () => {
  const cardRef = useMouseMove3D(8)

  return (
    <div className="profile-card-wrapper" style={{ maxWidth: '480px', width: '100%', margin: '0 auto' }}>
      <div ref={cardRef} className="profile-card">
        <div className="profile-card-inner" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <div className="avatar-3d">
              <img src={PROFILE_DATA.avatar} alt={PROFILE_DATA.name} />
            </div>
          </div>

          <h1
            className="glitch"
            data-text={PROFILE_DATA.name}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.8rem',
              letterSpacing: '0.08em',
              marginBottom: '0.4rem',
            }}
          >
            {PROFILE_DATA.name}
          </h1>

          <p
            style={{
              color: 'var(--cyan)',
              fontSize: '0.8rem',
              fontWeight: 500,
              marginBottom: '1rem',
              letterSpacing: '0.05em',
            }}
          >
            {PROFILE_DATA.title}
          </p>

          <p
            style={{
              color: 'var(--muted)',
              fontSize: '0.78rem',
              lineHeight: 1.8,
              maxWidth: '320px',
              margin: '0 auto 1.25rem',
            }}
          >
            {PROFILE_DATA.description}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            {PROFILE_DATA.social.map((social) => (
              <a
                key={social.label}
                href={social.url}
                aria-label={social.label}
                title={social.label}
                style={{
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  color: 'var(--muted)',
                  fontSize: '0.95rem',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--green)'
                  e.currentTarget.style.borderColor = 'var(--green)'
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0,255,136,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--muted)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
