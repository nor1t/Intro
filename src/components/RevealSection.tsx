import { FC, ReactNode } from 'react'
import { useIntersectionObserver } from '../hooks'

interface RevealSectionProps {
  children: ReactNode | ((visible: boolean) => ReactNode)
  className?: string
  style?: React.CSSProperties
}

export const RevealSection: FC<RevealSectionProps> = ({ children, className = '', style = {} }) => {
  const { ref, isVisible } = useIntersectionObserver(0.15)

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} ${className}`}
      style={style}
    >
      {typeof children === 'function' ? children(isVisible) : children}
    </div>
  )
}
