const track = (
  <span>
    Web <i>·</i> Mobile <i>·</i> Infrastructure <i>·</i> Deployment <i>·</i> Precision engineered software <i>·</i> <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>Ideas, encoded.</em> <i>·</i>
  </span>
)

export default function MarqueeStrip() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {track}
        {track}
      </div>
    </div>
  )
}
