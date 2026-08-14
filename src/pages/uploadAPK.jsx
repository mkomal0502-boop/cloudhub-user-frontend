
import { useState } from "react";
import { Link } from "react-router-dom";

function UploadAPK() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  // Real APK select
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) return;

    if (!selectedFile.name.toLowerCase().endsWith(".apk")) {
      alert("Please select an APK file only.");
      event.target.value = "";
      return;
    }

    setFile(selectedFile);
    setUploaded(false);
  };

  // Demo APK
  const handleDemoAPK = () => {
    setFile({
      name: "Calculator-Demo.apk",
      size: 24 * 1024 * 1024,
    });

    setUploaded(false);
  };

  // Remove file
  const handleRemoveFile = () => {
    setFile(null);
    setUploaded(false);
  };

  // Demo upload
  const handleUpload = () => {
    if (!file) return;

    setUploading(true);
    setUploaded(false);

    setTimeout(() => {
      setUploading(false);
      setUploaded(true);
    }, 2000);
  };

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

          <Link to="/upload" className="active">
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


      {/* MAIN CONTENT */}

      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>
            <h1>Upload APK</h1>

            <p>
              Upload your Android application to CloudHub.
            </p>
          </div>

        </header>


        <div className="upload-page">


          {/* UPLOAD CARD */}

          <div className="upload-card">

            <div className="upload-icon">
              ⬆️
            </div>

            <h2>
              Upload your APK
            </h2>

            <p>
              Select an Android APK file from your computer.
            </p>


            {/* REAL APK FILE PICKER */}

            <label className="drop-zone">

              <input
                type="file"
                accept=".apk,application/vnd.android.package-archive"
                onChange={handleFileChange}
              />

              <div className="drop-icon">
                📦
              </div>

              <strong>
                Click to select APK
              </strong>

              <span>
                Only .apk files are supported
              </span>

            </label>


            {/* DEMO APK BUTTON */}

            <button
              type="button"
              className="demo-apk-btn"
              onClick={handleDemoAPK}
            >
              🧪 Use Demo APK
            </button>


            {/* SELECTED FILE */}

            {file && (
              <div className="selected-file">

                <div>

                  <strong>
                    {file.name}
                  </strong>

                  <span>
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </span>

                </div>

                <button
                  type="button"
                  className="remove-file"
                  onClick={handleRemoveFile}
                >
                  ✕
                </button>

              </div>
            )}


            {/* UPLOAD BUTTON */}

            <button
              type="button"
              className="upload-submit"
              disabled={!file || uploading}
              onClick={handleUpload}
            >

              {uploading
                ? "Uploading..."
                : uploaded
                ? "✓ Upload Successful"
                : "Upload Application"}

            </button>


            {/* SUCCESS */}

            {uploaded && (
              <div className="upload-success">

                <span>
                  ✓ Your APK has been uploaded successfully!
                </span>

                <Link to="/my-apps">
                  View My Apps →
                </Link>

              </div>
            )}

          </div>


          {/* HOW IT WORKS */}

          <div className="upload-info">

            <h3>
              How it works
            </h3>


            <div className="upload-step">

              <span>1</span>

              <div>

                <strong>
                  Select APK
                </strong>

                <p>
                  Choose your Android application.
                </p>

              </div>

            </div>


            <div className="upload-step">

              <span>2</span>

              <div>

                <strong>
                  Upload
                </strong>

                <p>
                  CloudHub stores your application.
                </p>

              </div>

            </div>


            <div className="upload-step">

              <span>3</span>

              <div>

                <strong>
                  Launch
                </strong>

                <p>
                  Run your app in a cloud Android session.
                </p>

              </div>

            </div>


            {/* DEMO INFO */}

            <div className="demo-info">

              <strong>
                🧪 No APK available?
              </strong>

              <p>
                Use the Demo APK button to test the
                CloudHub upload interface.
              </p>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default UploadAPK;