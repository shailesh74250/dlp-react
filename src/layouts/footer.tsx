import React from 'react';
import Map from '../assets/map.png';
import BlackLogo from '../assets/black-logo.png';

const Footer = React.memo(function Footer() {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-footer-widget">
              <div className="logo">
                <a href="index.html">
                  <img src={BlackLogo} alt="logo" />
                </a>
                <p>
                  Dobzin is a digital payment solution to provide app based
                  credit line.
                </p>
              </div>
              <ul className="social-links">
                <li>
                  <a
                    href="https://www.facebook.com/dobzinindia"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/dobzinindia" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/dobzin/" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/dobzin"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-footer-widget pl-5">
              <h3>Company</h3>
              <ul className="list">
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="merchants.html">Merchants</a>
                </li>
                <li>
                  <a href="partner.html">Partner With Us</a>
                </li>
                <li>
                  <a href="https://angel.co/company/dobzin/jobs">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-footer-widget">
              <h3>Quick Links</h3>
              <ul className="list">
                <li>
                  <a href="faq.html">FAQ's</a>
                </li>
                <li>
                  <a href="privacy-policy.html">Privacy Policy</a>
                </li>
                <li>
                  <a href="terms.html">Terms & Condition</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-footer-widget">
              <h3>Address</h3>
              <ul className="footer-contact-info">
                <li>
                  <span>Location :</span> Innov8, ILD Trade Tower, Sector-47,
                  Sohna Road, Gurugram, Haryana 122018
                </li>
                <li>
                  <span>Email :</span>{' '}
                  <a href="mailto:support@dobzin.in">support@dobzin.in</a>
                </li>
                <li>
                  <span>Call Us :</span> <a>+91 9015355470</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <p>
            Copyright @2020 <a>DOBZIN</a>. All rights reserved
          </p>
        </div>
      </div>
      <div className="map-image">
        <img src={Map} alt="map" />
      </div>
    </footer>
  );
});

export default Footer;
