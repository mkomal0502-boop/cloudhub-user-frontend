import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Billing() {
  return (
    <div className="dashboard-layout">

      {/* COMMON SIDEBAR */}
      <Sidebar activePage="billing" />

      {/* MAIN CONTENT */}
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
        <section className="billing-current">

          <div>
            <span className="billing-label">
              CURRENT PLAN
            </span>

            <h2>Free Plan</h2>

            <p>
              Basic access to CloudHub services.
            </p>
          </div>

          <button className="upgrade-btn">
            Upgrade Plan
          </button>

        </section>


        {/* USAGE */}
        <section className="billing-section">

          <div className="section-heading">

            <div>
              <h2>Usage</h2>

              <p>
                Your current CloudHub resource usage.
              </p>
            </div>

          </div>


          <div className="billing-usage-grid">

            <div className="usage-card">

              <div className="usage-card-header">
                <span>Storage</span>
                <strong>2.4 GB / 10 GB</strong>
              </div>

              <div className="usage-progress">
                <div
                  className="usage-progress-fill"
                  style={{ width: "24%" }}
                ></div>
              </div>

              <small>
                24% of your storage used
              </small>

            </div>


            <div className="usage-card">

              <div className="usage-card-header">
                <span>Sessions</span>
                <strong>3 / 10</strong>
              </div>

              <div className="usage-progress">
                <div
                  className="usage-progress-fill"
                  style={{ width: "30%" }}
                ></div>
              </div>

              <small>
                3 active sessions
              </small>

            </div>


            <div className="usage-card">

              <div className="usage-card-header">
                <span>Applications</span>
                <strong>12 / 25</strong>
              </div>

              <div className="usage-progress">
                <div
                  className="usage-progress-fill"
                  style={{ width: "48%" }}
                ></div>
              </div>

              <small>
                12 applications uploaded
              </small>

            </div>

          </div>

        </section>


        {/* PLANS */}
        <section className="billing-section">

          <div className="section-heading">

            <div>
              <h2>Available Plans</h2>

              <p>
                Choose a plan that fits your needs.
              </p>
            </div>

          </div>


          <div className="plans-grid">

            {/* FREE */}
            <div className="plan-card">

              <span className="plan-name">
                FREE
              </span>

              <h3>
                ₹0
                <small>/month</small>
              </h3>

              <p className="plan-description">
                Good for trying CloudHub.
              </p>

              <ul>
                <li>✓ 10 GB storage</li>
                <li>✓ 25 applications</li>
                <li>✓ 10 sessions</li>
                <li>✓ Basic support</li>
              </ul>

              <button className="plan-btn current">
                Current Plan
              </button>

            </div>


            {/* PRO */}
            <div className="plan-card featured">

              <span className="plan-badge">
                RECOMMENDED
              </span>

              <span className="plan-name">
                PRO
              </span>

              <h3>
                ₹499
                <small>/month</small>
              </h3>

              <p className="plan-description">
                For users who need more resources.
              </p>

              <ul>
                <li>✓ 50 GB storage</li>
                <li>✓ 100 applications</li>
                <li>✓ 25 sessions</li>
                <li>✓ Priority support</li>
              </ul>

              <button className="plan-btn">
                Upgrade to Pro
              </button>

            </div>


            {/* BUSINESS */}
            <div className="plan-card">

              <span className="plan-name">
                BUSINESS
              </span>

              <h3>
                ₹999
                <small>/month</small>
              </h3>

              <p className="plan-description">
                Built for teams and larger workloads.
              </p>

              <ul>
                <li>✓ 150 GB storage</li>
                <li>✓ Unlimited applications</li>
                <li>✓ 50 sessions</li>
                <li>✓ Priority support</li>
              </ul>

              <button className="plan-btn">
                Choose Business
              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Billing;