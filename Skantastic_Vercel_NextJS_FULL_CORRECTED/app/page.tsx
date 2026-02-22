const APP_STORE_URL = "https://apps.apple.com/app/idYOURAPPID"; // replace after approval // replace when approved
const SUPPORT_EMAIL = "support@skantastic.com"; // adjust if different

function AppStoreButton() {
  return (
    <a className="btn btnPrimary" href={APP_STORE_URL} rel="noopener noreferrer">
      Download on the App Store
    </a>
  );
}

export default function Page() {
  return (
    <main className="wrap">
      <nav className="nav">
        <div className="brand">
          <span aria-hidden style={{ width: 12, height: 12, borderRadius: 999, background: "var(--teal)", display: "inline-block" }} />
          <span>Skantastic</span>
        </div>
        <div className="pillRow">
          <a className="pill" href="#how">How it works</a>
          <a className="pill" href="#why">Why Skantastic</a>
          <a className="pill" href="#faq">FAQ</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <div className="badge">Food label scanner for families • Calm, supportive ingredient clarity</div>
          <h1 className="h1">Scan smarter. Shop confidently.</h1>
          <p className="sub">
            Skantastic helps you understand ingredients in seconds—so you can make choices that feel right for your family.
            No fear tactics. Just better information.
          </p>

          <div className="ctaRow">
            <AppStoreButton />
            <a className="btn btnGhost" href="#screens">See screenshots</a>
          </div>

          <p className="note" style={{ marginTop: 10 }}>
            7‑day free trial • Unlimited scans • Cancel anytime
          </p>

          <div className="pillRow" style={{ marginTop: 14 }}>
            <span className="pill">Barcode scanning</span>
            <span className="pill">Ingredient guidance</span>
            <span className="pill">Strong Choice results</span>
            <span className="pill">Shareable findings</span>
          </div>
        </div>

        <div className="card">
          <div className="kicker">What you get</div>
          <h2 className="h2">Confidence in the aisle</h2>
          <p className="p">
            Scan a product and get clear, supportive guidance—so you can decide fast and feel good about it.
          </p>

          <div className="section" style={{ paddingBottom: 0 }}>
            <div className="grid3">
              <div className="card" style={{ padding: 14 }}>
                <div className="kicker">1</div>
                <p className="p"><strong style={{ color: "var(--text)" }}>Scan</strong><br/>Point and scan any food barcode.</p>
              </div>
              <div className="card" style={{ padding: 14 }}>
                <div className="kicker">2</div>
                <p className="p"><strong style={{ color: "var(--text)" }}>Understand</strong><br/>Clear ingredient breakdowns.</p>
              </div>
              <div className="card" style={{ padding: 14 }}>
                <div className="kicker">3</div>
                <p className="p"><strong style={{ color: "var(--text)" }}>Choose</strong><br/>Make a confident call—fast.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="section">
        <div className="kicker">How it works</div>
        <h2 className="h2">Three steps. No overwhelm.</h2>
        <p className="p">Built for real grocery trips: quick clarity, calm guidance, and choices you can trust.</p>
      </section>

      <section id="screens" className="section">
        <div className="kicker">Screenshots</div>
        <h2 className="h2">Designed to feel premium—and friendly</h2>
        <p className="p">Preview of the iOS experience—built to feel premium and friendly.</p>

                <div className="screens" style={{ marginTop: 14 }}>
          <img className="shotImg" src="/screenshots/s1.png" alt="Skantastic screenshot 1" />
          <img className="shotImg" src="/screenshots/s2.png" alt="Skantastic screenshot 2" />
          <img className="shotImg" src="/screenshots/s3.png" alt="Skantastic screenshot 3" />
          <img className="shotImg" src="/screenshots/s4.png" alt="Skantastic screenshot 4" />
          <img className="shotImg" src="/screenshots/s5.png" alt="Skantastic screenshot 5" />
        </div>


        <div className="ctaRow" style={{ marginTop: 16 }}>
          <AppStoreButton />
          <a className="btn btnGhost" href="#faq">Questions?</a>
        </div>
      </section>

      <section id="why" className="section">
        <div className="kicker">Why Skantastic</div>
        <h2 className="h2">Supportive, not alarmist</h2>

        <div className="grid3" style={{ marginTop: 14 }}>
          <div className="card">
            <h3 style={{ margin: 0, fontWeight: 950 }}>Clear ingredient guidance</h3>
            <p className="p" style={{ marginTop: 8 }}>Simple language so you can decide quickly.</p>
          </div>
          <div className="card">
            <h3 style={{ margin: 0, fontWeight: 950 }}>Made for families</h3>
            <p className="p" style={{ marginTop: 8 }}>Designed for busy moms and real life.</p>
          </div>
          <div className="card">
            <h3 style={{ margin: 0, fontWeight: 950 }}>Shareable results</h3>
            <p className="p" style={{ marginTop: 8 }}>Post your “Strong Choice” finds with one tap.</p>
          </div>
        </div>

        <div className="split" style={{ marginTop: 14 }}>
          <div className="card">
            <h3 style={{ margin: 0, fontWeight: 950 }}>Transparent pricing</h3>
            <p className="p" style={{ marginTop: 8 }}>7‑day free trial • Unlimited scans • Cancel anytime.</p>
          </div>
          <div className="card">
            <h3 style={{ margin: 0, fontWeight: 950 }}>Privacy-first</h3>
            <p className="p" style={{ marginTop: 8 }}>We keep this simple. No scare tactics. No medical claims.</p>
          </div>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="kicker">FAQ</div>
        <h2 className="h2">Quick answers</h2>

        <div style={{ display: "grid", gap: 12, marginTop: 14 }}>
          <details>
            <summary>Is Skantastic medical advice?</summary>
            <p className="p" style={{ marginTop: 8 }}>
              No. Skantastic provides ingredient information and supportive guidance to help you make confident shopping choices.
            </p>
          </details>

          <details>
            <summary>How does the free trial work?</summary>
            <p className="p" style={{ marginTop: 8 }}>
              You get a 7‑day free trial with unlimited scans. After that, you can subscribe for continued access. Cancel anytime in App Store settings.
            </p>
          </details>

          <details>
            <summary>How can I get help?</summary>
            <p className="p" style={{ marginTop: 8 }}>
              Email us at <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: "var(--teal)", fontWeight: 950 }}>{SUPPORT_EMAIL}</a>.
            </p>
          </details>
        </div>
      </section>

      <footer className="footer">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", alignItems: "center" }}>
          <div>© {new Date().getFullYear()} Skantastic</div>
          <div className="small">
            <a href={`mailto:${SUPPORT_EMAIL}`}>Support</a> •{" "}
            <a href="/privacy">Privacy</a> •{" "}
            <a href="/terms">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
