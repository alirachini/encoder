const services = [
  {
    idx: '01 / 04', tag: 'Web', title: 'Web Applications',
    body: 'Full-stack products — from first wireframe to a live URL. Authentication, payments, dashboards, admin tools. We write the code, pick the stack, own the outcome.',
    meta: ['React · Next', 'Node · Postgres', 'Stripe'],
  },
  {
    idx: '02 / 04', tag: 'Mobile', title: 'Mobile Applications',
    body: 'Native-quality apps for iOS and Android from a single codebase. Push, offline, deep-linking, store submissions handled end-to-end.',
    meta: ['React Native', 'Expo · Swift', 'App Store · Play'],
  },
  {
    idx: '03 / 04', tag: 'Infra', title: 'Server Configuration',
    body: "Boringly reliable infrastructure. VPS hardening, reverse proxies, databases, backups, monitoring, CI/CD pipelines — set up to keep running when you're asleep.",
    meta: ['Linux · Docker', 'Nginx · Caddy', 'Redis'],
  },
  {
    idx: '04 / 04', tag: 'Deploy', title: 'Full Deployment',
    body: 'From DNS to domain to production release. SSL, CDN, staging flows, observability — the unglamorous last mile handled end to end.',
    meta: ['AWS · Cloudflare', 'Fly · Railway', 'GitHub Actions'],
  },
]

export default function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section__head reveal">
          <div className="section__label">01 — Services</div>
          <h2 className="section__title">The range. <em>Four disciplines,</em> one studio.</h2>
        </div>

        <div className="services reveal">
          {services.map(s => (
            <article className="service" key={s.idx}>
              <div className="service__idx">{s.idx}</div>
              <div className="service__tag">{s.tag}</div>
              <div className="service__body">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
              <div className="service__meta">{s.meta.map((line, i) => <span key={i}>{i > 0 && <br />}{line}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
