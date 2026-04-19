import { useState, useEffect } from 'react'

const SECTIONS = ['top', 'services', 'stack', 'about', 'contact']

export default function SiteNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('')

  useEffect(() => {
    function update() {
      const y = window.scrollY
      setIsScrolled(y > 8)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (y / total) * 100 : 0)
      let cur = ''
      SECTIONS.forEach(id => {
        const el = document.getElementById(id)
        if (el && el.offsetTop - 100 <= y) cur = id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <nav className={`nav${isScrolled ? ' is-scrolled' : ''}`} id="nav" aria-label="Primary navigation">
      <div className="nav__progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <div className="wrap nav__row">
        <a className="nav__brand" href="#top" aria-label="Encoder — home">
          <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M20 24 L44 48 L20 72" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
            <path d="M52 24 L76 48 L52 72" fill="none" stroke="var(--accent)" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
          </svg>
          <span className="nav__brand-name">Encoder</span>
        </a>

        <div className="nav__links" role="list">
          {[['#services', 'Services'], ['#stack', 'Stack'], ['#about', 'Studio'], ['#contact', 'Contact']].map(([href, label]) => (
            <a key={href} href={href} role="listitem" className={active === href.slice(1) ? 'is-active' : ''}>{label}</a>
          ))}
        </div>

        <div className="nav__right">
          <a className="nav__cta" href="#contact">Start a project</a>
        </div>
      </div>
    </nav>
  )
}
