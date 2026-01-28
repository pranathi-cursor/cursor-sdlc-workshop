const Slide04SdlcOverview = () => (
  <>
    <h2>The Software Development Lifecycle</h2>
    <div className="sdlc-flow">
      <div className="sdlc-item">
        <div className="sdlc-icon">01</div>
        <div className="sdlc-name">Plan</div>
        <div className="sdlc-desc">
          Decide what
          <br />
          to build
        </div>
      </div>
      <div className="sdlc-arrow">→</div>
      <div className="sdlc-item">
        <div className="sdlc-icon">02</div>
        <div className="sdlc-name">Design</div>
        <div className="sdlc-desc">
          Sketch out
          <br />
          how it works
        </div>
      </div>
      <div className="sdlc-arrow">→</div>
      <div className="sdlc-item">
        <div className="sdlc-icon">03</div>
        <div className="sdlc-name">Develop</div>
        <div className="sdlc-desc">
          Write the
          <br />
          actual code
        </div>
      </div>
      <div className="sdlc-arrow">→</div>
      <div className="sdlc-item">
        <div className="sdlc-icon">04</div>
        <div className="sdlc-name">Test</div>
        <div className="sdlc-desc">
          Make sure
          <br />
          it works
        </div>
      </div>
      <div className="sdlc-arrow">→</div>
      <div className="sdlc-item">
        <div className="sdlc-icon">05</div>
        <div className="sdlc-name">Review</div>
        <div className="sdlc-desc">
          Get feedback
          <br />
          from teammates
        </div>
      </div>
      <div className="sdlc-arrow">→</div>
      <div className="sdlc-item">
        <div className="sdlc-icon">06</div>
        <div className="sdlc-name">Deploy</div>
        <div className="sdlc-desc">
          Ship it to
          <br />
          real users
        </div>
      </div>
    </div>
    <p
      style={{
        textAlign: 'center',
        color: 'var(--text-secondary)',
        marginTop: '2rem',
        fontSize: '1.2rem',
      }}
    >
      Today you'll experience <span className="highlight">every stage</span> — and
      learn how Cursor helps at each one.
    </p>
  </>
)

export default Slide04SdlcOverview
