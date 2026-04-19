import { useState, useEffect, useRef } from 'react'

export default function Billboard() {
  const [frame, setFrame] = useState(1)
  const [hudTR, setHudTR] = useState('Signal · Standby')
  const cursorRef = useRef(null)

  useEffect(() => {
    const id = setInterval(() => setFrame(f => f + 1), 800)
    return () => clearInterval(id)
  }, [])

  function handleMouseMove(e) {
    const r = e.currentTarget.getBoundingClientRect()
    const x = Math.round(e.clientX - r.left)
    const y = Math.round(e.clientY - r.top)
    if (cursorRef.current) {
      cursorRef.current.style.left = x + 'px'
      cursorRef.current.style.top  = y + 'px'
    }
    setHudTR(`X ${String(x).padStart(4, ' ')} · Y ${String(y).padStart(4, ' ')}`)
  }

  function handleMouseLeave() {
    setHudTR('Signal · Standby')
  }

  return (
    <div
      className="billboard"
      aria-hidden="true"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="billboard__cursor" ref={cursorRef} />

      <div className="billboard__chev">
        <svg viewBox="0 0 64 96" preserveAspectRatio="xMidYMid meet">
          <path d="M14 14 L50 48 L14 82" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" />
        </svg>
        <svg viewBox="0 0 64 96" preserveAspectRatio="xMidYMid meet">
          <path d="M14 14 L50 48 L14 82" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" />
        </svg>
      </div>

      <div className="billboard__hud">
        <div className="tl">Encoder / Mark 02</div>
        <div className="tr">{hudTR}</div>
        <div className="bl">Live · <b>Q2 / 2026</b></div>
        <div className="br">Frame <b>{String(frame).padStart(5, '0')}</b></div>
      </div>
    </div>
  )
}
