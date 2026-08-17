import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Sessions() {
  const sessions = [
    {
      app: "Calculator.apk",
      android: "Android 13",
      start: "10:22 AM",
      duration: "10:32",
      status: "Active",
    },
    {
      app: "ChatApp.apk",
      android: "Android 13",
      start: "09:45 AM",
      duration: "05:21",
      status: "Completed",
    },
    {
      app: "Browser.apk",
      android: "Android 12",
      start: "08:30 AM",
      duration: "12:44",
      status: "Stopped",
    },
    {
      app: "Calculator.apk",
      android: "Android 13",
      start: "Yesterday",
      duration: "08:16",
      status: "Completed",
    },
  ];

  return (
    <div className="dashboard-layout">

      {/* COMMON SIDEBAR */}
      <Sidebar activePage="sessions" />

      {/* MAIN CONTENT */}
      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>
            <h1>Sessions</h1>

            <p>
              Monitor and manage your Android application sessions.
            </p>
          </div>

          <Link to="/my-apps" className="upload-header-btn">
            My Apps
          </Link>

        </header>


        {/* SESSION SUMMARY */}
        <section className="stats-grid">

          <div className="stat-card">
            <span className="stat-icon">●</span>
            <p>Active Sessions</p>
            <h2>1</h2>
            <small>Currently running</small>
          </div>

          <div className="stat-card">
            <span className="stat-icon">✓</span>
            <p>Completed</p>
            <h2>2</h2>
            <small>Successfully finished</small>
          </div>

          <div className="stat-card">
            <span className="stat-icon">◷</span>
            <p>Total Runtime</p>
            <h2>36m</h2>
            <small>Across all sessions</small>
          </div>

          <div className="stat-card">
            <span className="stat-icon">◉</span>
            <p>Total Sessions</p>
            <h2>4</h2>
            <small>All recorded sessions</small>
          </div>

        </section>


        {/* SESSION LIST */}
        <section className="dashboard-section">

          <div className="section-heading">

            <div>
              <h2>Recent Sessions</h2>

              <p>
                Your latest Android application activity.
              </p>
            </div>

          </div>


          <div className="sessions-card">

            {/* TABLE HEADER */}
            <div className="session-table-header">

              <span>Application</span>
              <span>Android</span>
              <span>Started</span>
              <span>Duration</span>
              <span>Status</span>
              <span>Action</span>

            </div>


            {/* SESSION ROWS */}
            {sessions.map((session, index) => (

              <div className="session-table-row" key={index}>

                <div className="session-app">

                  <div className="session-app-icon">
                    {session.app.charAt(0)}
                  </div>

                  <strong>
                    {session.app}
                  </strong>

                </div>


                <span>
                  {session.android}
                </span>


                <span>
                  {session.start}
                </span>


                <span>
                  {session.duration}
                </span>


                <span>

                  <span
                    className={
                      session.status === "Active"
                        ? "status-running"
                        : session.status === "Completed"
                        ? "status-completed"
                        : "status-stopped"
                    }
                  >
                    ● {session.status}
                  </span>

                </span>


                <div>

                  {session.status === "Active" ? (

                    <button className="session-action-btn">
                      Open
                    </button>

                  ) : (

                    <button className="session-action-btn secondary">
                      View
                    </button>

                  )}

                </div>

              </div>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}

export default Sessions;