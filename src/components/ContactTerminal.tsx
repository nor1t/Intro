import { FC, useEffect, useState } from 'react'

export const ContactTerminal: FC = () => {
  const [typed, setTyped] = useState('')
  const fullText = 'echo "Let\'s build something amazing together" | mail -s "Hello" qnorit@gmail.com'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i))
        i++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '10px',
        overflow: 'hidden',
        maxWidth: '540px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          background: '#16161e',
          padding: '8px 14px',
          display: 'flex',
          gap: '6px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#febc2e' }} />
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840' }} />
      </div>
      <div style={{ padding: '1.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', minHeight: '50px' }}>
        <span style={{ color: 'var(--green)' }}>{typed}</span>
        <span className="boot-cursor"></span>
      </div>
    </div>
  )
}
