import { FC } from 'react'

interface SkillHexagonProps {
  name: string
  icon: string
  color: string
  level: number
  inView: boolean
}

export const SkillHexagon: FC<SkillHexagonProps> = ({ name, icon, color, level, inView }) => {
  const levelColor = level >= 90 ? 'var(--green)' : level >= 80 ? 'var(--cyan)' : 'var(--yellow)'

  return (
    <div
      className={`skill-hex ${color}`}
      title={`${name}: ${level}%`}
      style={{
        // @ts-ignore
        '--w': `${level}%`,
      }}
    >
      <i className={`${icon} hex-icon`}></i>
      <span className="hex-label">{name}</span>
      {inView && (
        <svg
          style={{
            position: 'absolute',
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          width="40"
          height="6"
          viewBox="0 0 40 6"
        >
          <rect x="0" y="0" width="40" height="6" rx="3" fill="var(--border)" />
          <rect
            x="0"
            y="0"
            width="40"
            height="6"
            rx="3"
            fill={levelColor}
            style={{
              width: 0,
              animation: `barGrow 1.2s ${Math.random() * 0.5}s ease-out forwards`,
            }}
          />
        </svg>
      )}
    </div>
  )
}
