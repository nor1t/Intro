import { FC } from 'react'
import { SKILLS } from '../constants'
import { SkillHexagon } from './SkillHexagon'

interface SkillGridProps {
  inView: boolean
}

export const SkillGrid: FC<SkillGridProps> = ({ inView }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '14px',
        justifyContent: 'center',
        maxWidth: '500px',
        margin: '0 auto',
      }}
    >
      {SKILLS.map((skill) => (
        <div key={skill.name}>
          <SkillHexagon name={skill.name} icon={skill.icon} color={skill.color} level={skill.level} inView={inView} />
        </div>
      ))}
    </div>
  )
}
