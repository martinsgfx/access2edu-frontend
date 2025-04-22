import React from "react";
import "../../styles/global.css"; // or wherever your CSS file is located

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Mission Section */}
        <div className="footer-section mission">
          <h3>Our Mission</h3>
          <p>
            We are focused on empowering students with the tools needed to excel in their educational journey by offering affordable, and high-quality learning experience. We partner with top educational institutions and exam bodies to provide accredited learning experiences.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span>📧 :</span>
              <span>Access2Edu001@gmail.com</span>
            </div>
            <div className="contact-item">
              <span>📞 :</span>
              <span>+234 9112465677</span>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Terms & Policies Section */}
        <div className="footer-section">
          <h4>Terms & policies</h4>
          <ul>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Community Guidelines</a></li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="footer-section">
          <h4>Our Socials</h4>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagram-icon.png" alt="Instagram" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/images/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook-icon.png" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <div className="back-to-top" onClick={scrollToTop}>
        Back to top <span className="arrow">→</span>
      </div>
    </footer>
  );
};

export default Footer;
