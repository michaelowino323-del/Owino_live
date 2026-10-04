export default function Home() {
  return (
    <main>
      <nav>
        <div className="logo">LIVE</div>

        <div className="nav-links">
          <a href="/">Browse</a>
          <a href="/login">Log in</a>
          <a href="/signup">Sign up</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <p className="badge">LIVE STREAMING</p>

          <h1>
            Discover your
            <br />
            next live experience.
          </h1>

          <p className="description">
            Watch live creators, discover new communities,
            and join conversations in real time.
          </p>

          <div className="buttons">
            <a className="primary" href="/signup">
              Create account
            </a>

            <a className="secondary" href="/login">
              Log in
            </a>
          </div>
        </div>
      </section>

      <section className="streams">
        <h2>Live now</h2>

        <div className="stream-grid">
          <div className="stream-card">
            <div className="thumbnail">LIVE</div>
            <h3>Creator One</h3>
            <p>1.2K viewers</p>
          </div>

          <div className="stream-card">
            <div className="thumbnail">LIVE</div>
            <h3>Creator Two</h3>
            <p>856 viewers</p>
          </div>

          <div className="stream-card">
            <div className="thumbnail">LIVE</div>
            <h3>Creator Three</h3>
            <p>431 viewers</p>
          </div>
        </div>
      </section>
    </main>
  );
}
