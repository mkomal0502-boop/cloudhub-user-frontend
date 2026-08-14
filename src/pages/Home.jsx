import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <section className="hero">
        <div className="hero-content">

          <div className="badge">
            ☁️ Android Apps in the Cloud
          </div>

          <h1>
            Run Your Android Apps
            <br />
            <span>in the Cloud</span>
          </h1>

          <p>
            Upload your Android application and access it
            through your browser without depending completely
            on your local device.
          </p>

          <div className="hero-buttons">
            <a href="/register" className="primary-btn">
              Get Started →
            </a>

            <a href="#how-it-works" className="secondary-btn">
              Learn More
            </a>
          </div>

        </div>

        <div className="hero-visual">
          <div className="cloud-card">
            ☁️
            <h3>Cloud Android</h3>
            <p>App Running</p>

            <div className="phone-screen">
              <div className="app-icon">▦</div>
              <div className="app-icon">◉</div>
              <div className="app-icon">●</div>
              <div className="app-icon">▶</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Why CloudHub?</h2>

        <div className="feature-container">

          <div className="feature-card">
            <div>☁️</div>
            <h3>Cloud Based</h3>
            <p>
              Run Android applications in a cloud environment.
            </p>
          </div>

          <div className="feature-card">
            <div>⚡</div>
            <h3>Easy Access</h3>
            <p>
              Access your applications directly from your browser.
            </p>
          </div>

          <div className="feature-card">
            <div>📱</div>
            <h3>No Installation</h3>
            <p>
              Use applications remotely without relying completely
              on local installation.
            </p>
          </div>

          <div className="feature-card">
            <div>🔒</div>
            <h3>Secure Sessions</h3>
            <p>
              Manage your applications and sessions from one place.
            </p>
          </div>

        </div>
      </section>

      <section id="how-it-works" className="how-section">
        <h2>How CloudHub Works</h2>

        <div className="steps">

          <div className="step">
            <span>01</span>
            <h3>Upload APK</h3>
            <p>Upload your Android application.</p>
          </div>

          <div className="step">
            <span>02</span>
            <h3>Cloud Execution</h3>
            <p>
              CloudHub prepares the application for cloud execution.
            </p>
          </div>

          <div className="step">
            <span>03</span>
            <h3>Run</h3>
            <p>
              Your application runs in a cloud Android environment.
            </p>
          </div>

          <div className="step">
            <span>04</span>
            <h3>Access</h3>
            <p>
              Use the running application through your browser.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;