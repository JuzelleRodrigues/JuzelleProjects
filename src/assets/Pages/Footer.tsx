import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-title">
          Have a project in mind? Let us work together
        </div>
        <div className="footer-buttons">
          <div className="button view-resume">
            <span>View my resume</span>
          </div>
          <div className="button send-mail">
            <span>send mail</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="divider" />
        <div className="footer-info">
          <div className="footer-text">© 2024 JuzelleRodrigues. All rights reserved.</div>
          <div className="social-links">
            <div className="social-icon"></div>
            <div className="social-icon small-icon"></div>
            <div className="social-icon">
              <div className="small-circle"></div>
              <div className="small-circle second-circle"></div>
            </div>
            <div className="social-icon small-icon"></div>
            <div className="social-icon"></div>
          </div>
          <div className="footer-links">
            <div className="footer-link">About</div>
            <div className="footer-link">Blog</div>
            <div className="footer-link">Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
