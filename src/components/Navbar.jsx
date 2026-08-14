function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        ☁️ Cloud<span>Hub</span>
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#pricing">Pricing</a>
      </div>

      <div className="nav-buttons">

       <a href="/login" className="login-btn">
  Login
</a>

        <a href="/register" className="signup-btn">
          Get Started
        </a>

      </div>

    </nav>
  );
}

export default Navbar;