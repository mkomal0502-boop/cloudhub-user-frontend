import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          ☁️ Cloud<span>Hub</span>
        </div>

        <h1>Welcome Back!</h1>

        <p className="auth-subtitle">
          Login to access your CloudHub account
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/dashboard");
          }}
        >

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>


          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>


          <div className="form-options">

            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">
              Forgot Password?
            </a>

          </div>


          <button
            type="submit"
            className="auth-btn"
          >
            Login
          </button>

        </form>


        <p className="auth-footer">
          Don't have an account?

          <a href="/register">
            {" "}Sign Up
          </a>
        </p>

      </div>
    </div>
  );
}

export default Login;