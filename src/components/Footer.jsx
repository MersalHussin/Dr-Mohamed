import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer">
          <Link to="/" className="logo-footer">
            <img
              src="/assets/Logo White.webp"
              alt="logo-footer"
              className="logo-qudraat"
            />
            </Link>
            <div className="social-media">
              <a href="https://www.linkedin.com/in/mohamedharby2020/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/SevenStar1975">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
              <a href="https://www.instagram.com/mohamedharbyy4?fbclid=IwY2xjawK_i-xleHRuA2FlbQIxMABicmlkETE3VmFZeVFPOURHaFlueUtOAR5jCxpQnoVPznoiTYuezuAiZkPpmOtQLRt1dVrgeLP6xjw2SVNt23B1M0kq3Q_aem_l-k8ZCa82Vj34D3kobej3w">
                <i className="fa-brands fa-square-instagram"></i>
              </a>
         
            </div>
            <div className="line"></div>
            <div className="copyright">جميع الحقوق محفوظة لـ د. محمد حربي © 2025</div>
            <div className="made-by">
              صُنع بكل حب بواسطة{' '}
              <a 
                href="https://mersal.top" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mersal-link"
              >
                مرسال
              </a>
            </div>
        </footer>
    );
}

export default Footer;
