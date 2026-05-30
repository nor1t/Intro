import { FC } from 'react'
import { useCountUp } from '../hooks'

interface StatCounterProps {
  value: number
  suffix: string
  label: string
  color: string
  inView: boolean
}

export const StatCounter: FC<StatCounterProps> = ({ value, suffix, label, color, inView }) => {
  const count = useCountUp(value, inView)

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="stat-num" style={{ color }}>
        {count}
        {suffix}
      </div>
      <div style={{ color: 'var(--muted)', fontSize: '0.72rem', marginTop: '4px', letterSpacing: '0.05em' }}>
        {label}
      </div>
    </div>
  )
}
