function BiteBoxPreview() {
  return (
    <div className="preview preview--bitebox" aria-label="Illustrative BiteBox website preview">
      <div className="preview__top"><span className="preview__brand">bite<span>box</span></span><span className="preview__tiny">⌕　☰</span></div>
      <div className="bite-copy"><span>FRESH · FAST · LOCAL</span><strong>Good food.<br />Good mood.</strong><i>Find your next favourite.</i></div>
      <div className="bite-food" aria-hidden="true"><span className="food food--one">🥗</span><span className="food food--two">🍜</span><span className="food food--three">🥑</span><span className="bite-orbit" /></div>
      <div className="preview__bottom"><span>Popular near you</span><span className="tiny-pill">Explore menu ↗</span></div>
    </div>
  )
}

function WayPointPreview() {
  return (
    <div className="preview preview--waypoint" aria-label="Illustrative WayPoint navigation dashboard preview">
      <div className="waypoint-top"><span className="waypoint-mark">W</span><span>WayPoint <i>Explore</i></span><span className="waypoint-avatar">MR</span></div>
      <div className="waypoint-layout">
        <div className="waypoint-panel"><span className="waypoint-label">YOUR NEXT ROUTE</span><strong>Find your<br />way there.</strong><div className="waypoint-search">⌕ &nbsp; Search a destination</div><div className="waypoint-route"><b>01</b><span><strong>North entrance</strong><small>Scan checkpoint</small></span><em>↗</em></div><div className="waypoint-route"><b>02</b><span><strong>Central courtyard</strong><small>Next checkpoint</small></span><em>↗</em></div></div>
        <div className="waypoint-map"><span className="map-route" /><span className="map-pin map-pin--a">01</span><span className="map-pin map-pin--b">02</span><span className="map-grid" /><span className="map-caption">CAMPUS · ROUTE A</span></div>
      </div>
    </div>
  )
}

export default function ProjectPreview({ type }) {
  return type === 'bitebox' ? <BiteBoxPreview /> : <WayPointPreview />
}
