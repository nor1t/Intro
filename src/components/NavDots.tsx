import { FC, useEffect, useState } from 'react'

export const NavDots: FC = () => {
  const sections = ['hero', 'stats', 'skills', 'projects', 'contact']
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.4 }
    )

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="nav-dots" role="navigation" aria-label="Section navigation">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`nav-dot ${active === id ? 'active' : ''}`}
          aria-label={`Go to ${id} section`}
          onClick={(e) => {
            e.preventDefault()
            handleClick(id)
          }}
        />
      ))}
    </div>
  )
}
