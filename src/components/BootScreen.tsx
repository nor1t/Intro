import { FC, useEffect, useState } from 'react'

interface BootScreenProps {
  onDone: () => void
}

interface BootLine {
  text: string
  class: string
}

export const BootScreen: FC<BootScreenProps> = ({ onDone }) => {
  const [lines, setLines] = useState<BootLine[]>([])
  const [showBar, setShowBar] = useState(false)
  const [barWidth, setBarWidth] = useState(0)
  const [finished, setFinished] = useState(false)

  const bootMessages: BootLine[] = [
    { text: '$ init --profile norit_qyqalla', class: '' },
    { text: '[OK] Loading identity module...', class: 'dim' },
    { text: '[OK] Mounting skill_tree.dat (12 entries)', class: 'dim' },
    { text: '[OK] Connecting to github.com/nor1t', class: 'dim' },
    { text: '> Profile ready. Launching interface...', class: 'cyan' },
  ]

  useEffect(() => {
    let i = 0
    let result: BootLine[] = []
    const timer = setInterval(() => {
      if (i < bootMessages.length) {
        result = [...result, bootMessages[i]]
        setLines([...result])
        i++
      } else {
        clearInterval(timer)
        setShowBar(true)
      }
    }, 350)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!showBar) return

    let w = 0
    const timer = setInterval(() => {
      w += Math.random() * 8 + 2
      if (w >= 100) {
        w = 100
        clearInterval(timer)
        setTimeout(() => setFinished(true), 400)
      }
      setBarWidth(w)
    }, 60)

    return () => clearInterval(timer)
  }, [showBar])

  useEffect(() => {
    if (!finished) return

    const timer = setTimeout(onDone, 500)
    return () => clearTimeout(timer)
  }, [finished, onDone])

  return (
    <div className={`boot-screen ${finished ? 'done' : ''}`}>
      <div className="boot-text">
        {lines.map((line, i) => (
          <div key={i} className={line.class}>
            {line.text}
          </div>
        ))}
        {!finished && <span className="boot-cursor"></span>}
      </div>
      <div className={`boot-bar ${showBar ? 'visible' : ''}`}>
        <div className="boot-bar-fill" style={{ width: `${barWidth}%` }}></div>
      </div>
    </div>
  )
}
