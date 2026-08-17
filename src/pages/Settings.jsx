import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function Settings() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("cloudhub-theme") === "dark";
  });

  const [notifications, setNotifications] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("cloudhub-theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("cloudhub-theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="dashboard-layout">

      <Sidebar activePage="settings" />

      <main className="dashboard-main">

        <header className="dashboard-header">
          <div>
            <h1>Settings</h1>
            <p>Manage your CloudHub preferences.</p>
          </div>
        </header>


        {/* APPEARANCE */}
        <section className="settings-section">

          <div className="settings-section-header">
            <h2>Appearance</h2>
            <p>Customize how CloudHub looks on your device.</p>
          </div>


          <div className="settings-card">

            <div className="setting-row">

              <div className="setting-info">
                <strong>Dark Mode</strong>

                <span>
                  Use a darker theme across the CloudHub dashboard.
                </span>
              </div>


              <button
                type="button"
                className={`toggle-switch ${
                  darkMode ? "on" : ""
                }`}
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
              >
                <span className="toggle-circle"></span>
              </button>

            </div>

          </div>

        </section>


        {/* NOTIFICATIONS */}
        <section className="settings-section">

          <div className="settings-section-header">
            <h2>Notifications</h2>
            <p>Choose which notifications you want to receive.</p>
          </div>


          <div className="settings-card">

            <div className="setting-row">

              <div className="setting-info">
                <strong>Application Notifications</strong>

                <span>
                  Receive notifications about your applications and sessions.
                </span>
              </div>


              <button
                type="button"
                className={`toggle-switch ${
                  notifications ? "on" : ""
                }`}
                onClick={() =>
                  setNotifications(!notifications)
                }
                aria-label="Toggle notifications"
              >
                <span className="toggle-circle"></span>
              </button>

            </div>

          </div>

        </section>


        {/* ACCOUNT */}
        <section className="settings-section">

          <div className="settings-section-header">
            <h2>Account</h2>
            <p>Manage your CloudHub account.</p>
          </div>


          <div className="settings-card">

            <div className="setting-row">

              <div className="setting-info">
                <strong>Account Plan</strong>

                <span>
                  You are currently using the Free Plan.
                </span>
              </div>

              <button className="settings-action-btn">
                Manage Billing
              </button>

            </div>


            <div className="setting-row">

              <div className="setting-info">
                <strong>Delete Account</strong>

                <span>
                  Permanently delete your CloudHub account and data.
                </span>
              </div>

              <button className="delete-btn">
                Delete Account
              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Settings;