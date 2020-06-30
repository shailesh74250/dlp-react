import React from 'react';
import Logo from '../assets/logo.png';
import BlackLogo from '../assets/black-logo.png';

const Navbar = React.memo(function Navbar() {
  return (
    <div className="navbar-area">
      <div className="luvion-responsive-nav">
        <div className="container">
          <div className="luvion-responsive-menu">
            <div className="logo">
              <a href="index.html">
                <img src={Logo} alt="logo" />
                <img src={BlackLogo} alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="luvion-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="index.html">
              <img src={Logo} alt="logo" />
              <img src={BlackLogo} alt="logo" />
            </a>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="index.html" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="about.html" className="nav-link">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="merchants.html" className="nav-link">
                    Merchants
                  </a>
                </li>
                <li className="nav-item">
                  <a href="contact.html" className="nav-link">
                    Need Help?
                  </a>
                </li>
              </ul>
              <div className="others-options">
                <a href="login.html" className="login-btn">
                  <i className="flaticon-user"></i> Log In
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
});

export default Navbar;
