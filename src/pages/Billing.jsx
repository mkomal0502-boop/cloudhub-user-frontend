import { Link } from "react-router-dom";

function Billing() {
  return (
    <div className="dashboard-layout">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="sidebar-logo">
          ☁️ Cloud<span>Hub</span>
        </div>

        <nav className="sidebar-nav">

          <Link to="/dashboard">
            🏠 Dashboard
          </Link>

          <Link to="/my-apps">
            📱 My Apps
          </Link>

          <Link to="/upload">
            ⬆️ Upload APK
          </Link>

          <Link to="/sessions">
            🖥️ Sessions
          </Link>

          <Link to="/billing" className="active">
            💳 Billing
          </Link>

          <Link to="/profile">
            👤 Profile
          </Link>

          <Link to="/settings">
            ⚙️ Settings
          </Link>

        </nav>

        <div className="sidebar-bottom">
          <Link to="/">
            🚪 Logout
          </Link>
        </div>

      </aside>


      {/* MAIN */}

      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>
            <h1>Billing</h1>

            <p>
              Manage your CloudHub plan and usage.
            </p>
          </div>

        </header>


        {/* CURRENT PLAN */}

        <section className="billing-plan">

          <div>

            <span className="plan-label">
              CURRENT PLAN
            </span>

            <h2>
              Free Plan
            </h2>

            <p>
              Perfect for testing CloudHub.
            </p>

          </div>

          <div className="plan-price">
            <strong>₹0</strong>
            <span>/ month</span>
          </div>

          <button className="upgrade-btn">
            Upgrade Plan
          </button>

        </section>


        {/* USAGE */}

        <h2 className="billing-heading">
          Usage
        </h2>

        <section className="usage-grid">

          <div className="usage-card">

            <div className="usage-top">
              <span>💾 Storage</span>
              <strong>2.4 GB / 10 GB</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "24%" }}
              ></div>
            </div>

            <p>
              24% of your storage used
            </p>

          </div>


          <div className="usage-card">

            <div className="usage-top">
              <span>🖥️ Sessions</span>
              <strong>3 / 10</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "30%" }}
              ></div>
            </div>

            <p>
              3 active sessions
            </p>

          </div>


          <div className="usage-card">

            <div className="usage-top">
              <span>🚀 App Runs</span>
              <strong>58 / 100</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "58%" }}
              ></div>
            </div>

            <p>
              58 app runs this month
            </p>

          </div>

        </section>


        {/* PAYMENT HISTORY */}

        <section className="payment-section">

          <div className="payment-heading">

            <h2>
              Payment History
            </h2>

          </div>

          <div className="payment-table">

            <div className="payment-row payment-header">

              <span>Date</span>
              <span>Description</span>
              <span>Amount</span>
              <span>Status</span>

            </div>


            <div className="payment-row">

              <span>
                14 Aug 2026
              </span>

              <span>
                Free Plan
              </span>

              <span>
                ₹0
              </span>

              <span className="payment-success">
                Paid
              </span>

            </div>


            <div className="payment-row">

              <span>
                14 Jul 2026
              </span>

              <span>
                Free Plan
              </span>

              <span>
                ₹0
              </span>

              <span className="payment-success">
                Paid
              </span>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Billing;