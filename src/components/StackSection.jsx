import { useEffect } from 'react'

const specs = [
  { key: 'Languages',      val: 'TypeScript · JavaScript · Python · Swift · Go',    note: 'Typed by default' },
  { key: 'Frontend',       val: 'React · Next.js · Vite · Tailwind',                note: 'Stack 2026'       },
  { key: 'Mobile',         val: 'React Native · Expo · Swift interop',              note: 'iOS · Android'    },
  { key: 'Backend',        val: 'Node · Fastify · Postgres · Redis',                note: 'Production grade' },
  { key: 'Infrastructure', val: 'Docker · Nginx · Caddy · Linux (Debian / Alpine)', note: 'Hardened'         },
  { key: 'Cloud',          val: 'AWS · Cloudflare · Fly.io · Railway · Hetzner',   note: 'Region-flexible'  },
  { key: 'Payments',       val: 'Stripe · Paddle',                                  note: 'PCI-safe'         },
  { key: 'Observability',  val: 'Sentry · Grafana · Uptime Kuma',                  note: 'Always-on'        },
]

export default function StackSection() {
  useEffect(() => {
    const rows = document.querySelectorAll('.specs__row')
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = Array.from(rows).indexOf(e.target)
          setTimeout(() => e.target.classList.add('is-in'), idx * 70)
          io.unobserve(e.target)
        }
      })
    }, { rootMargin: '0px 0px -5% 0px', threshold: 0.08 })
    rows.forEach(r => io.observe(r))
    return () => io.disconnect()
  }, [])

  return (
    <section className="section section--dark" id="stack">
      <div className="wrap">
        <div className="section__head reveal">
          <div className="section__label">02 — Stack</div>
          <h2 className="section__title">Technical <em>specifications.</em></h2>
        </div>

        <div className="specs">
          {specs.map(s => (
            <div className="specs__row" key={s.key}>
              <div className="specs__key">{s.key}</div>
              <div className="specs__val">{s.val}</div>
              <div className="specs__note">{s.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
