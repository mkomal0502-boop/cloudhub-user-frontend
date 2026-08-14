function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          ☁️ Cloud<span>Hub</span>
        </div>

        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Create your CloudHub account
        </p>

        <form>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

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
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <label className="terms">
            <input type="checkbox" />
            I agree to the Terms & Conditions
          </label>

          <button type="submit" className="auth-btn">
            Create Account
          </button>

        </form>

        <p className="auth-footer">
          Already have an account?
          <a href="/login"> Login</a>
        </p>

      </div>
    </div>
  );
}

export default Register;