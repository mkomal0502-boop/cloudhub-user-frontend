import { Link } from "react-router-dom";

function Sidebar({ activePage }) {
  return (
    <aside className="sidebar">

      {/* =========================
          CLOUDHUB LOGO
      ========================= */}

      <div
        className="sidebar-logo"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "0 12px",
          marginBottom: "45px",
          whiteSpace: "nowrap",
        }}
      >

        {/* Cloud - same style as login logo */}
        <svg
          width="34"
          height="22"
          viewBox="0 0 34 22"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            display: "block",
            flexShrink: 0,
          }}
        >
          <defs>
            <linearGradient
              id="cloudLogoGradient"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#ffffff"
              />

              <stop
                offset="100%"
                stopColor="#d9d7ff"
              />
            </linearGradient>
          </defs>

          {/* Left small cloud */}
          <circle
            cx="10"
            cy="13"
            r="7"
            fill="url(#cloudLogoGradient)"
          />

          {/* Right large cloud */}
          <circle
            cx="21"
            cy="10"
            r="9"
            fill="url(#cloudLogoGradient)"
          />

          {/* Bottom cloud */}
          <rect
            x="6"
            y="10"
            width="23"
            height="8"
            rx="4"
            fill="url(#cloudLogoGradient)"
          />
        </svg>


        {/* CloudHub text */}
        <span
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "27px",
            fontWeight: "700",
            letterSpacing: "-0.7px",
            lineHeight: "1",
            color: "#ffffff",
          }}
        >
          Cloud<span style={{ color: "#4f7df3" }}>Hub</span>
        </span>

      </div>


      {/* =========================
          NAVIGATION
      ========================= */}

      <nav className="sidebar-nav">

        <Link
          to="/dashboard"
          className={
            activePage === "dashboard"
              ? "active"
              : ""
          }
        >
          <span className="nav-icon">⌂</span>
          <span>Dashboard</span>
        </Link>


        <Link
          to="/my-apps"
          className={
            activePage === "my-apps"
              ? "active"
              : ""
          }
        >
          <span className="nav-icon">▦</span>
          <span>My Apps</span>
        </Link>


        <Link
          to="/upload"
          className={
            activePage === "upload"
              ? "active"
              : ""
          }
        >
          <span className="nav-icon">↑</span>
          <span>Upload APK</span>
        </Link>


        <Link
          to="/sessions"
          className={
            activePage === "sessions"
              ? "active"
              : ""
          }
        >
          <span className="nav-icon">◉</span>
          <span>Sessions</span>
        </Link>


        <Link
          to="/billing"
          className={
            activePage === "billing"
              ? "active"
              : ""
          }
        >
          <span className="nav-icon">$</span>
          <span>Billing</span>
        </Link>


        <Link
          to="/profile"
          className={
            activePage === "profile"
              ? "active"
              : ""
          }
        >
          <span className="nav-icon">○</span>
          <span>Profile</span>
        </Link>


        <Link
          to="/settings"
          className={
            activePage === "settings"
              ? "active"
              : ""
          }
        >
          <span className="nav-icon">⚙</span>
          <span>Settings</span>
        </Link>

      </nav>


      {/* =========================
          LOGOUT
      ========================= */}

      <div className="sidebar-bottom">

        <Link to="/">
          <span className="nav-icon">↪</span>
          <span>Logout</span>
        </Link>

      </div>

    </aside>
  );
}

export default Sidebar;