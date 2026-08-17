import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

function UploadAPK() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".apk")) {
      alert("Please select an APK file.");
      return;
    }

    if (file.size > 500 * 1024 * 1024) {
      alert("File size must be less than 500 MB.");
      return;
    }

    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please choose an APK file first.");
      return;
    }

    alert(`${selectedFile.name} selected successfully!`);

    // Backend connect hone ke baad yahan actual upload API aayegi.
  };

  return (
    <div className="dashboard-layout">

      {/* SIDEBAR */}
      <Sidebar activePage="upload" />

      {/* MAIN CONTENT */}
      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>
            <h1>Upload APK</h1>

            <p>
              Upload your Android application to CloudHub.
            </p>
          </div>

          <Link to="/my-apps" className="upload-header-btn">
            My Apps
          </Link>

        </header>


        {/* UPLOAD SECTION */}
        <section className="upload-section">

          <div className="upload-card">

            <div className="upload-icon">
              ↑
            </div>

            <h2>Upload your APK</h2>

            <p>
              Select an Android APK file from your device.
            </p>


            <label className="file-upload-btn">

              Choose APK

              <input
                type="file"
                accept=".apk"
                onChange={handleFileChange}
              />

            </label>


            {selectedFile && (
              <div className="selected-file">

                <strong>
                  Selected file
                </strong>

                <span>
                  {selectedFile.name}
                </span>

                <small>
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </small>

              </div>
            )}


            <button
              className="upload-submit-btn"
              onClick={handleUpload}
            >
              Upload Application
            </button>


            <small className="upload-limit">
              APK files only · Maximum size: 500 MB
            </small>

          </div>


          {/* INFORMATION */}
          <div className="upload-info">

            <h3>Before uploading</h3>


            <div className="info-item">

              <strong>APK Format</strong>

              <span>
                Only Android APK files are supported.
              </span>

            </div>


            <div className="info-item">

              <strong>File Size</strong>

              <span>
                Maximum allowed size is 500 MB.
              </span>

            </div>


            <div className="info-item">

              <strong>Security</strong>

              <span>
                Your application will run inside an isolated environment.
              </span>

            </div>

          </div>

        </section>


        {/* DEMO APPLICATIONS */}
        <section className="demo-section">

          <div className="section-heading">

            <div>
              <h2>Demo Applications</h2>

              <p>
                Try CloudHub with these sample applications.
              </p>
            </div>

          </div>


          <div className="demo-grid">

            <div className="demo-card">

              <div className="demo-icon">
                C
              </div>

              <div>
                <h3>Calculator</h3>

                <p>
                  Calculator-Demo.apk
                </p>
              </div>

              <span className="status ready">
                Ready
              </span>

            </div>


            <div className="demo-card">

              <div className="demo-icon">
                C
              </div>

              <div>
                <h3>ChatApp</h3>

                <p>
                  ChatApp.apk
                </p>
              </div>

              <span className="status running">
                Running
              </span>

            </div>


            <div className="demo-card">

              <div className="demo-icon">
                B
              </div>

              <div>
                <h3>Browser</h3>

                <p>
                  Browser.apk
                </p>
              </div>

              <span className="status ready">
                Ready
              </span>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default UploadAPK;