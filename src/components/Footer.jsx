import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer">
          <Link to="/" className="logo-footer">
            <img
              src="/assets/Ausrah-Footer.svg"
              alt="logo-footer"
              className="logo-qudraat"
            />
            </Link>
            <div className="social-media">
              <a href="https://www.tiktok.com/@aus.rah?is_from_webapp=1&sender_device=pc">
                <img src="/assets/tiktok.svg" alt="Tiktok" target="_blank" />
              </a>
              <a href="https://www.facebook.com/Qudraat/">
                <img src="/assets/Facebook.svg" alt="Facebook" target="_blank" />
              </a>
              <a href="https://www.instagram.com/aus.rah?igsh=YnN1MzN1a29ueGp5">
                <img src="/assets/Insta.svg" target="_blank" alt="Insta" />
              </a>
              <a href="https://wa.me/+201040031584">
                <img src="/assets/Whatsapp.svg" target="_blank" alt="Whatsapp" />
              </a>
            </div>
            <div className="line"></div>
            <div className="copyright">جميع الحقوق محفوظة لـ أسرة © 2025</div>
        </footer>
    );
}

export default Footer;
