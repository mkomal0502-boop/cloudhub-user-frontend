import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function MyApps() {
  const apps = [
    {
      name: "Calculator",
      file: "Calculator-Demo.apk",
      size: "24.00 MB",
      status: "Ready",
      icon: "C",
    },
    {
      name: "ChatApp",
      file: "ChatApp.apk",
      size: "32.50 MB",
      status: "Running",
      icon: "C",
    },
    {
      name: "Browser",
      file: "Browser.apk",
      size: "18.20 MB",
      status: "Ready",
      icon: "B",
    },
  ];

  return (
    <div className="dashboard-layout">

      {/* COMMON SIDEBAR */}
      <Sidebar activePage="my-apps" />

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