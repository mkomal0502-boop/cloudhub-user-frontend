import { useState } from "react";
import { Link } from "react-router-dom";

function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [sessionNotifications, setSessionNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

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

          <Link to="/billing">
            💳 Billing
          </Link>

          <Link to="/profile">
            👤 Profile
          </Link>

          <Link to="/settings" className="active">
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
            <h1>Settings</h1>

            <p>
              Manage your CloudHub preferences.
            </p>
          </div>

        </header>


        <div className="settings-page">


          {/* NOTIFICATIONS */}

          <section className="settings-card">

            <div className="settings-card-header">

              <div>
                <h2>Notifications</h2>

                <p>
                  Choose which notifications you want to receive.
                </p>
              </div>

              <span className="settings-icon">
                🔔
              </span>

            </div>


            <div className="setting-row">

              <div>
                <strong>
                  Email Notifications
                </strong>

                <p>
                  Receive important updates through email.
                </p>
              </div>

              <button
                type="button"
                className={
                  emailNotifications
                    ? "toggle active"
                    : "toggle"
                }
                onClick={() =>
                  setEmailNotifications(!emailNotifications)
                }
              >
                <span></span>
              </button>

            </div>


            <div className="setting-row">

              <div>
                <strong>
                  Session Notifications
                </strong>

                <p>
                  Get notified when your cloud session changes.
                </p>
              </div>

              <button
                type="button"
                className={
                  sessionNotifications
                    ? "toggle active"
                    : "toggle"
                }
                onClick={() =>
                  setSessionNotifications(!sessionNotifications)
                }
              >
                <span></span>
              </button>

            </div>

          </section>


          {/* APPEARANCE */}

          <section className="settings-card">

            <div className="settings-card-header">

              <div>
                <h2>Appearance</h2>

                <p>
                  Customize how CloudHub looks.
                </p>
              </div>

              <span className="settings-icon">
                🎨
              </span>

            </div>


            <div className="setting-row">

              <div>
                <strong>
                  Dark Mode
                </strong>

                <p>
                  Use a darker interface for CloudHub.
                </p>
              </div>

              <button
                type="button"
                className={
                  darkMode
                    ? "toggle active"
                    : "toggle"
                }
                onClick={() => setDarkMode(!darkMode)}
              >
                <span></span>
              </button>

            </div>

          </section>


          {/* SECURITY */}

          <section className="settings-card">

            <div className="settings-card-header">

              <div>
                <h2>Security</h2>

                <p>
                  Manage your account security.
                </p>
              </div>

              <span className="settings-icon">
                🔐
              </span>

            </div>


            <div className="security-row">

              <div>
                <strong>
                  Password
                </strong>

                <p>
                  Last changed recently.
                </p>
              </div>

              <button className="change-password-btn">
                Change Password
              </button>

            </div>


            <div className="security-row">

              <div>
                <strong>
                  Two-Factor Authentication
                </strong>

                <p>
                  Add an extra layer of security to your account.
                </p>
              </div>

              <button className="enable-security-btn">
                Enable
              </button>

            </div>

          </section>


          {/* DANGER ZONE */}

          <section className="settings-card danger-card">

            <h2>
              Account
            </h2>

            <p>
              Logging out will end your current CloudHub session.
            </p>

            <Link to="/" className="logout-settings-btn">
              🚪 Logout
            </Link>

          </section>

        </div>

      </main>

    </div>
  );
}

export default Settings;