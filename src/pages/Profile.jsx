import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Profile() {
  const [name, setName] = useState("Komal");
  const [email, setEmail] = useState("komal@example.com");
  const [company, setCompany] = useState("CloudHub User");

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <div className="dashboard-layout">

      {/* COMMON SIDEBAR */}
      <Sidebar activePage="profile" />

      {/* MAIN CONTENT */}
      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>
            <h1>Profile</h1>

            <p>
              Manage your personal information and account details.
            </p>
          </div>

        </header>


        {/* PROFILE CONTENT */}
        <section className="profile-layout">

          {/* PROFILE CARD */}
          <div className="profile-card">

            <div className="profile-avatar">
              K
            </div>

            <h2>{name}</h2>

            <p>{email}</p>

            <span className="profile-status">
              Active Account
            </span>

            <div className="profile-divider"></div>

            <div className="profile-summary">

              <div>
                <strong>12</strong>
                <span>Applications</span>
              </div>

              <div>
                <strong>58</strong>
                <span>Total Runs</span>
              </div>

              <div>
                <strong>3</strong>
                <span>Sessions</span>
              </div>

            </div>

          </div>


          {/* EDIT PROFILE */}
          <div className="profile-form-card">

            <div className="profile-form-header">

              <h2>Personal Information</h2>

              <p>
                Update your account information below.
              </p>

            </div>


            <form onSubmit={handleSave}>

              <div className="form-row">

                <div className="form-group">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />

                </div>


                <div className="form-group">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />

                </div>

              </div>


              <div className="form-group">

                <label>
                  Account Type
                </label>

                <input
                  type="text"
                  value="Free Plan"
                  disabled
                />

              </div>


              <div className="form-group">

                <label>
                  Organization
                </label>

                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Enter organization name"
                />

              </div>


              <div className="profile-form-actions">

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => window.location.reload()}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="save-profile-btn"
                >
                  Save Changes
                </button>

              </div>

            </form>

          </div>

        </section>


        {/* SECURITY */}
        <section className="security-section">

          <div className="section-heading">

            <div>
              <h2>Security</h2>

              <p>
                Manage your account security settings.
              </p>
            </div>

          </div>


          <div className="security-card">

            <div className="security-item">

              <div>
                <strong>Password</strong>

                <span>
                  Last updated recently
                </span>
              </div>

              <button className="secondary-action-btn">
                Change Password
              </button>

            </div>


            <div className="security-item">

              <div>
                <strong>Two-Factor Authentication</strong>

                <span>
                  Add an extra layer of security to your account.
                </span>
              </div>

              <button className="secondary-action-btn">
                Enable
              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Profile;