export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M20 24 L44 48 L20 72" fill="none" stroke="#fff" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
              <path d="M52 24 L76 48 L52 72" fill="none" stroke="var(--accent)" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
            </svg>
            <div className="name">Encoder</div>
            <p>An independent software studio. Ideas, encoded into working software — web, mobile, and the production layer underneath.</p>
          </div>

          <div className="footer__col">
            <h5>Studio</h5>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#stack">Stack</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h5>Direct</h5>
            <ul>
              <li><a href="mailto:info@encoder.click">info@encoder.click</a></li>
              <li><a href="#contact">Start a project</a></li>
              <li><a href="https://github.com/Encoders-Co" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Imprint</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Encoder — All rights reserved</span>
          <span>info@encoder.click</span>
          <span>Built with precision · No frameworks harmed</span>
        </div>
      </div>
    </footer>
  )
}
