import { FC } from 'react'

interface ShapeConfig {
  x: string
  y: string
  color: string
  delay: string
  size: number
}

interface FloatingCubeProps {
  config: ShapeConfig
  index: number
}

const FloatingCube: FC<FloatingCubeProps> = ({ config, index }) => {
  const half = config.size / 2

  return (
    <div
      className="shape"
      style={{
        left: config.x,
        top: config.y,
        animationDelay: config.delay,
        animationDuration: `${18 + index * 3}s`,
      }}
    >
      <div className="cube" style={{ width: config.size, height: config.size }}>
        {(['front', 'back', 'left', 'right', 'top', 'bottom'] as const).map((face) => {
          const transforms: { [key in typeof face]: string } = {
            front: `translateZ(${half}px)`,
            back: `translateZ(-${half}px) rotateY(180deg)`,
            left: `translateX(-${half}px) rotateY(-90deg)`,
            right: `translateX(${half}px) rotateY(90deg)`,
            top: `translateY(-${half}px) rotateX(90deg)`,
            bottom: `translateY(${half}px) rotateX(-90deg)`,
          }

          return (
            <div
              key={face}
              className={`face ${face}`}
              style={{
                borderColor: config.color,
                transform: transforms[face],
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export const FloatingShapes: FC = () => {
  const shapes: ShapeConfig[] = [
    { x: '8%', y: '15%', color: 'var(--green)', delay: '0s', size: 30 },
    { x: '85%', y: '25%', color: 'var(--cyan)', delay: '-5s', size: 22 },
    { x: '12%', y: '65%', color: 'var(--pink)', delay: '-10s', size: 26 },
    { x: '90%', y: '70%', color: 'var(--yellow)', delay: '-15s', size: 20 },
    { x: '50%', y: '85%', color: 'var(--green)', delay: '-7s', size: 18 },
    { x: '75%', y: '50%', color: 'var(--cyan)', delay: '-12s', size: 24 },
  ]

  return (
    <div className="floating-shapes">
      {shapes.map((shape, index) => (
        <FloatingCube key={index} config={shape} index={index} />
      ))}
    </div>
  )
}
