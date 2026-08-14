import { Link } from "react-router-dom";

function MyApps() {
  const apps = [
    {
      name: "Calculator",
      file: "Calculator-Demo.apk",
      size: "24.00 MB",
      status: "Ready",
      icon: "🧮",
    },
    {
      name: "ChatApp",
      file: "ChatApp.apk",
      size: "32.50 MB",
      status: "Running",
      icon: "💬",
    },
    {
      name: "Browser",
      file: "Browser.apk",
      size: "18.20 MB",
      status: "Ready",
      icon: "🌐",
    },
  ];

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

          <Link to="/my-apps" className="active">
            📱 My Apps
          </Link>

          <Link to="/upload">
            ⬆️ Upload APK
          </Link>

          <Link to="/sessions">
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


      {/* MAIN */}

      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>
            <h1>My Apps</h1>

            <p>
              Manage and launch your Android applications.
            </p>
          </div>

          <Link to="/upload" className="upload-header-btn">
            + Upload APK
          </Link>

        </header>


        {/* APP GRID */}

        <div className="apps-grid">

          {apps.map((app, index) => (

            <div className="app-card" key={index}>

              <div className="app-card-top">

                <div className="app-icon">
                  {app.icon}
                </div>

     <button className="app-menu-btn">
  ⋮
</button>

              </div>


              <h3>
                {app.name}
              </h3>

              <p className="app-file">
                {app.file}
              </p>

              <p className="app-size">
                {app.size}
              </p>


              <div className="app-status">

                <span
                  className={
                    app.status === "Running"
                      ? "status-running"
                      : "status-ready"
                  }
                >
                  ● {app.status}
                </span>

              </div>


              <button className="launch-btn">
                {app.status === "Running"
                  ? "Open"
                  : "Launch"}
              </button>

            </div>

          ))}


          {/* ADD APP CARD */}

          <Link to="/upload" className="add-app-card">

            <div className="add-app-icon">
              +
            </div>

            <strong>
              Upload New APK
            </strong>

            <span>
              Add another Android application
            </span>

          </Link>

        </div>

      </main>

    </div>
  );
}

export default MyApps;