import { FC, useState } from 'react'
import {
  AboutSection,
  BootScreen,
  ContactTerminal,
  EducationSection,
  FloatingShapes,
  NavDots,
  PowerBars,
  ProfileCard,
  ProjectShowcase,
  RevealSection,
  SkillGrid,
  StatCounter,
} from './components'
import { ABOUT, PROFILE_DATA, STATS } from './constants'

const App: FC = () => {
  const [booted, setBooted] = useState(false)

  return (
    <>
      {!booted && <BootScreen onDone={() => setBooted(true)} />}

      <div className="grid-bg"></div>
      <FloatingShapes />
      <NavDots />

      <div
        style={{
          opacity: booted ? 1 : 0,
          transition: 'opacity 0.6s ease 0.2s',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* ===== HERO ===== */}
        <section
          id="hero"
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem 1.5rem 2rem',
          }}
        >
          {/* Ambient glow */}
          <div
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '600px',
              height: '400px',
              background:
                'radial-gradient(ellipse, rgba(0,255,136,0.05) 0%, rgba(0,212,255,0.02) 40%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <RevealSection>
            <ProfileCard />
          </RevealSection>

          {/* Scroll hint */}
          <div style={{ marginTop: '3rem', animation: 'floatShape 3s ease-in-out infinite' }}>
            <i
              className="fa-solid fa-chevron-down"
              style={{ color: 'var(--muted)', fontSize: '1.2rem' }}
            ></i>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section id="stats" style={{ padding: '4rem 1.5rem', borderTop: '1px solid var(--border)' }}>
          <RevealSection>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '2rem',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              {STATS.map((stat, i) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  color={['var(--green)', 'var(--cyan)', 'var(--yellow)', 'var(--pink)'][i]}
                  inView={true}
                />
              ))}
            </div>
          </RevealSection>
        </section>

        {/* ===== ABOUT ===== */}
        <section id="about" style={{ padding: '5rem 1.5rem', borderTop: '1px solid var(--border)' }}>
          <RevealSection style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag">{ABOUT.tag}</div>
            <h2 className="section-title" style={{ color: 'var(--text)' }}>
              {ABOUT.title}
            </h2>
          </RevealSection>

          <RevealSection>
            <AboutSection />
          </RevealSection>
        </section>

        {/* ===== SKILLS ===== */}
        <section id="skills" style={{ padding: '5rem 1.5rem', borderTop: '1px solid var(--border)' }}>
          <RevealSection style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag">// MODULES LOADED</div>
            <h2 className="section-title" style={{ color: 'var(--text)' }}>
              SKILL MATRIX
            </h2>
          </RevealSection>

          {/* Hex grid */}
          <RevealSection style={{ marginBottom: '3.5rem' }}>
            {(visible) => <SkillGrid inView={visible} />}
          </RevealSection>

          {/* Power bars */}
          <RevealSection>
            {(visible) => <PowerBars inView={visible} />}
          </RevealSection>
        </section>

        {/* ===== PROJECTS ===== */}
        <section id="projects" style={{ padding: '5rem 1.5rem', borderTop: '1px solid var(--border)' }}>
          <RevealSection style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag">// DEPLOYED ARTIFACTS</div>
            <h2 className="section-title" style={{ color: 'var(--text)' }}>
              PROJECTS
            </h2>
          </RevealSection>

          <RevealSection>
            <ProjectShowcase />
          </RevealSection>
        </section>

        {/* ===== EDUCATION ===== */}
        <section id="education" style={{ padding: '5rem 1.5rem', borderTop: '1px solid var(--border)' }}>
          <RevealSection style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag">// KNOWLEDGE BASE</div>
            <h2 className="section-title" style={{ color: 'var(--text)' }}>
              EDUCATION
            </h2>
          </RevealSection>

          <RevealSection>
            <EducationSection />
          </RevealSection>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact" style={{ padding: '5rem 1.5rem 3rem', borderTop: '1px solid var(--border)' }}>
          <RevealSection style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div className="section-tag">// OPEN CHANNEL</div>
            <h2 className="section-title" style={{ color: 'var(--text)' }}>
              GET IN TOUCH
            </h2>
          </RevealSection>

          <RevealSection>
            <ContactTerminal />
          </RevealSection>

          <RevealSection style={{ marginTop: '2rem', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              {PROFILE_DATA.social.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.url}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    color: 'var(--muted)',
                    fontSize: '0.78rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--green)'
                    e.currentTarget.style.color = 'var(--green)'
                    e.currentTarget.style.background = 'rgba(0,255,136,0.04)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--muted)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  <i className={contact.icon} style={{ width: '16px', textAlign: 'center' }}></i>
                  <span>{contact.value}</span>
                </a>
              ))}
            </div>
          </RevealSection>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 1.5rem', textAlign: 'center' }}>
          <p
            style={{
              color: '#333',
              fontSize: '0.72rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <span style={{ color: 'var(--green)', opacity: 0.5 }}>&lt;/&gt;</span> NORIT_QYQALLA.PROFILE v2.1.0
          </p>
        </footer>
      </div>
    </>
  )
}

export default App
