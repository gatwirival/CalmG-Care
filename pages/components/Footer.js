import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} G-Care. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
