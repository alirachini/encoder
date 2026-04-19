export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section__head reveal">
          <div className="section__label">03 — Studio</div>
          <h2 className="section__title">Small studio. <em>Direct line.</em></h2>
        </div>

        <div className="about reveal">
          <div className="about__copy">
            <h4>Built by engineers, for people with ideas.</h4>
            <p>Encoder is an independent software studio. No account managers, no slide-deck middlemen — you talk to the person writing the code.</p>
            <p>We work with founders shipping a first product and with established teams who need a sharp pair of hands for a specific, well-scoped problem. Short cycles. Tight feedback loops. Everything checked into a repo you own on day one.</p>
            <p>If the idea is clear enough to describe in a paragraph, it's usually clear enough to prototype in a week.</p>
            <p className="about__founder">— <b>Ali Rachini</b>, Founder</p>

            <dl className="about__stats">
              <div className="about__stat"><dt>Founded</dt><dd>2024</dd></div>
              <div className="about__stat"><dt>Shipped</dt><dd>12<sub>+</sub></dd></div>
              <div className="about__stat"><dt>Avg. cycle</dt><dd>6<sub>wks</sub></dd></div>
              <div className="about__stat"><dt>Response</dt><dd>24<sub>hr</sub></dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
