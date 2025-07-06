import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // تخزين السيكشن النشط

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // إضافة offset للـ navbar

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(`#${sectionId}`);
        }
      });

      // إذا كنا في أعلى الصفحة، اجعل الرئيسية نشطة
      if (scrollPosition < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="nav-size"></div>
      <header className="navbar">
      <a
          className="contact-us"
          href="https://icancoachyou.online/en/coaches/mohamed-1749843538151"
          target="_blank"
        >
          أحجز استشارة <i className="fa-solid fa-calendar-day"></i>
        </a>
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
          <li>
            <a
              href="#"
              className={activeSection === "" ? "active" : ""}
            >
              الرئيسية
            </a>
          </li>
          <li>
            <a
              href="#about-sec"
              className={activeSection === "#about-sec" ? "active" : ""}
            >
              من أنا
            </a>
          </li>
          <li>
            <a
              href="#video-shorts"
              className={activeSection === "#video-shorts" ? "active" : ""}
            >
              منهجية الـ 6PS
            </a>
          </li>
          <li>
            <a
              href="#achievs"
              className={activeSection === "#achievs" ? "active" : ""}
            >
              الإنجازات
            </a>
          </li>
          <li>
            <a
              href="#certificate"
              className={activeSection === "#certificate" ? "active" : ""}
            >
              الشهادات
            </a>
          </li>
          <li>
            <a
              href="#models-sec"
              className={activeSection === "#models-sec" ? "active" : ""}
            >
              نماذج الشباب
            </a>
          </li>
        </ul>

        <Link to="/" className="logo">
          <img src="/assets/Dr.Mohamed.svg" alt="Ausrah-Logo" />
        </Link>
      </header>
    </>
  );
};

export default Navbar;
