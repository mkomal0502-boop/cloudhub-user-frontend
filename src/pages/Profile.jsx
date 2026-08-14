import { Link } from "react-router-dom";

function Profile() {
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

          <Link to="/profile" className="active">
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
            <h1>My Profile</h1>

            <p>
              Manage your CloudHub account information.
            </p>
          </div>

        </header>


        <div className="profile-page">

          {/* PROFILE CARD */}

          <section className="profile-card">

            <div className="profile-top">

              <div className="profile-avatar">
                K
              </div>

              <div>
                <h2>Komal</h2>
                <p>User Account</p>
              </div>

            </div>


            <div className="profile-divider"></div>


            <div className="profile-form">

              <div className="form-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  value="Komal"
                  readOnly
                />

              </div>


              <div className="form-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  value="user@cloudhub.com"
                  readOnly
                />

              </div>


              <div className="form-group">

                <label>
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="Add phone number"
                />

              </div>


              <button className="save-profile-btn">
                Save Changes
              </button>

            </div>

          </section>


          {/* ACCOUNT INFORMATION */}

          <section className="account-card">

            <h2>
              Account Information
            </h2>

            <div className="account-item">

              <span>
                Account Type
              </span>

              <strong>
                User
              </strong>

            </div>


            <div className="account-item">

              <span>
                Current Plan
              </span>

              <strong>
                Free Plan
              </strong>

            </div>


            <div className="account-item">

              <span>
                Applications
              </span>

              <strong>
                12 Apps
              </strong>

            </div>


            <div className="account-item">

              <span>
                Member Since
              </span>

              <strong>
                August 2026
              </strong>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default Profile;