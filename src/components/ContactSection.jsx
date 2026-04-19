export default function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="section__head reveal">
          <div className="section__label">04 — Contact</div>
          <h2 className="section__title">Let's <em>build it.</em></h2>
        </div>

        <div className="contact--solo reveal">
          <h3 className="contact__h">Have an idea? <em>We'd like to hear it.</em></h3>
          <a className="contact__mail" href="mailto:info@encoder.click">
            info@encoder.click <span aria-hidden="true">↗</span>
          </a>

          <div className="contact__info">
            <dl>
              <dt>Hours</dt><dd>Mon–Fri · 09:00–18:00</dd>
              <dt>Reply</dt><dd>Within one business day</dd>
              <dt>NDA</dt><dd>Signed before first call</dd>
              <dt>Billing</dt><dd>Fixed-price or weekly</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
