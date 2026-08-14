import { Link } from "react-router-dom";

function Sessions() {
  const sessions = [
    {
      app: "Calculator",
      device: "Android 13",
      started: "10:30 AM",
      duration: "12 min",
      status: "Active",
      icon: "🧮",
    },
    {
      app: "ChatApp",
      device: "Android 12",
      started: "10:10 AM",
      duration: "32 min",
      status: "Active",
      icon: "💬",
    },
    {
      app: "Browser",
      device: "Android 11",
      started: "09:45 AM",
      duration: "45 min",
      status: "Stopped",
      icon: "🌐",
    },
  ];

  return (
    <div className="dashboard-layout">

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

          <Link to="/sessions" className="active">
            🖥️ Sessions
          </Link>

          <Link to="/billing">
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


      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>
            <h1>Sessions</h1>

            <p>
              View and manage your cloud Android sessions.
            </p>
          </div>

        </header>


        <div className="sessions-card">

          <div className="sessions-header">
            <h2>Recent Sessions</h2>

            <span>
              {sessions.filter(
                (session) => session.status === "Active"
              ).length} Active
            </span>
          </div>


          <div className="session-list">

            {sessions.map((session, index) => (

              <div className="session-row" key={index}>

                <div className="session-app">

                  <div className="session-icon">
                    {session.icon}
                  </div>

                  <div>
                    <strong>
                      {session.app}
                    </strong>

                    <span>
                      {session.device}
                    </span>
                  </div>

                </div>


                <div className="session-info">
                  <span>Started</span>
                  <strong>{session.started}</strong>
                </div>


                <div className="session-info">
                  <span>Duration</span>
                  <strong>{session.duration}</strong>
                </div>


                <div>

                  <span
                    className={
                      session.status === "Active"
                        ? "session-active"
                        : "session-stopped"
                    }
                  >
                    ● {session.status}
                  </span>

                </div>


                <button
                  className={
                    session.status === "Active"
                      ? "open-session-btn"
                      : "disabled-session-btn"
                  }
                  disabled={session.status !== "Active"}
                >
                  {session.status === "Active"
                    ? "Open"
                    : "Stopped"}
                </button>

              </div>

            ))}

          </div>

        </div>

      </main>

    </div>
  );
}

export default Sessions;