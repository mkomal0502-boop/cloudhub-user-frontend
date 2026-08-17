import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="dashboard-layout">

     <Sidebar activePage="dashboard" />


      {/* Main Dashboard */}
      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>
            <h1>Dashboard</h1>
            <p>Welcome back!</p>
          </div>

          <Link to="/upload" className="upload-btn">
            + Upload APK
          </Link>

        </header>


        {/* Statistics */}
        <section className="stats-grid">

          <div className="stat-card">
            <span className="stat-icon">▦</span>
            <p>Total Apps</p>
            <h2>12</h2>
            <small>Uploaded applications</small>
          </div>

          <div className="stat-card">
            <span className="stat-icon status-dot">●</span>
            <p>Active Sessions</p>
            <h2>3</h2>
            <small>Running right now</small>
          </div>

          <div className="stat-card">
            <span className="stat-icon">↗</span>
            <p>Total Runs</p>
            <h2>58</h2>
            <small>Apps launched</small>
          </div>

          <div className="stat-card">
            <span className="stat-icon">▣</span>
            <p>Storage Used</p>
            <h2>2.4 GB</h2>
            <small>of 10 GB</small>
          </div>

        </section>


        {/* My Applications */}
        <section className="dashboard-section">

          <div className="section-heading">
            <h2>My Applications</h2>

            <Link to="/my-apps">
              View All →
            </Link>
          </div>


          <div className="apps-grid">

            <div className="app-card">

              <div className="app-icon-large">
                C
              </div>

              <h3>Calculator.apk</h3>

              <span className="status ready">
                Ready
              </span>

              <button>
                Launch
              </button>

            </div>


            <div className="app-card">

              <div className="app-icon-large">
                C
              </div>

              <h3>ChatApp.apk</h3>

              <span className="status running">
                Running
              </span>

              <button>
                Open
              </button>

            </div>


            <div className="app-card">

              <div className="app-icon-large">
                B
              </div>

              <h3>Browser.apk</h3>

              <span className="status ready">
                Ready
              </span>

              <button>
                Launch
              </button>

            </div>

          </div>

        </section>


        {/* Recent Sessions */}
        <section className="dashboard-section">

          <div className="section-heading">
            <h2>Recent Sessions</h2>

            <Link to="/sessions">
              View All →
            </Link>
          </div>


          <div className="sessions-card">

            <div className="session-row">

              <div>
                <strong>Calculator.apk</strong>
                <span>Android 13</span>
              </div>

              <span>10:32</span>

              <span className="status running">
                Active
              </span>

            </div>


            <div className="session-row">

              <div>
                <strong>ChatApp.apk</strong>
                <span>Android 13</span>
              </div>

              <span>05:21</span>

              <span className="status completed">
                Completed
              </span>

            </div>


            <div className="session-row">

              <div>
                <strong>Browser.apk</strong>
                <span>Android 12</span>
              </div>

              <span>12:44</span>

              <span className="status stopped">
                Stopped
              </span>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;