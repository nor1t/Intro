import { FC } from 'react'
import { SKILLS } from '../constants'

interface PowerBarsProps {
  inView: boolean
}

export const PowerBars: FC<PowerBarsProps> = ({ inView }) => {
  const topSkills = SKILLS.slice(0, 6)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '500px', margin: '0 auto' }}>
      {topSkills.map((skill, i) => {
        const barColor = skill.level >= 90 ? 'var(--green)' : skill.level >= 80 ? 'var(--cyan)' : 'var(--yellow)'

        return (
          <div key={skill.name}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '6px',
              }}
            >
              <span style={{ fontSize: '0.8rem', color: 'var(--text)' }}>
                <i
                  className={skill.icon}
                  style={{
                    marginRight: '6px',
                    color: barColor,
                    width: '16px',
                    textAlign: 'center',
                  }}
                ></i>
                {skill.name}
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  color: barColor,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                }}
              >
                {skill.level}%
              </span>
            </div>
            <div className="power-bar">
              <div
                className="power-bar-fill"
                style={{
                  background: `linear-gradient(90deg, ${barColor}44, ${barColor})`,
                  width: inView ? `${skill.level}%` : '0%',
                  transitionDelay: `${i * 0.1}s`,
                }}
              ></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
