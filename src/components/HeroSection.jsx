import Billboard from './Billboard'

const HEADLINE = 'We make your ideas come true.'
const ACCENT_WORDS = new Set(['ideas', 'true.', 'true'])

function HeadlineWord({ text, delay, accent }) {
  const word = (
    <span className="word">
      <span style={{ animationDelay: `${delay}s` }}>{text}</span>
    </span>
  )
  return accent ? <em>{word}</em> : word
}

export default function HeroSection() {
  const words = HEADLINE.trim().split(/\s+/)

  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="hero__meta" aria-label="Studio information">
          <div>Model<b>Encoder / 2026</b></div>
          <div>Discipline<b>Software Studio</b></div>
          <div>Origin<b>Remote · Worldwide</b></div>
          <div>
            <span className="dot" aria-hidden="true" />Status
            <b>Accepting new work</b>
          </div>
        </div>

        <div className="hero__stage">
          <div className="hero__eyebrow"><b>The Engineering Studio</b> · Series 01</div>

          <h1 className="hero__headline">
            {words.map((word, i) => (
              <span key={i}>
                {i > 0 && ' '}
                <HeadlineWord
                  text={word}
                  delay={0.06 * i + 0.2}
                  accent={ACCENT_WORDS.has(word.replace(/[.,!?]/g, '').toLowerCase())}
                />
              </span>
            ))}
          </h1>

          <div className="hero__sub">
            <p className="hero__lead">
              Encoder is a <b>precision software studio</b>. We take raw ideas
              and ship them as web apps, mobile apps, and
              production-grade infrastructure — engineered, deployed, maintained.
            </p>

            <dl className="hero__specs">
              <div><dt>Cycle length</dt><dd>4–8 weeks</dd></div>
              <div><dt>First response</dt><dd>≤ 24 hours</dd></div>
              <div><dt>Code ownership</dt><dd>100% yours</dd></div>
              <div><dt>Method</dt><dd>Direct, senior</dd></div>
            </dl>

            <div className="hero__cta-row">
              <a className="btn btn--primary" href="#contact">Start a project <span className="arr">→</span></a>
              <a className="btn btn--ghost" href="#services">View services <span className="arr">↓</span></a>
            </div>
          </div>
        </div>
      </div>

      <Billboard />
    </header>
  )
}
