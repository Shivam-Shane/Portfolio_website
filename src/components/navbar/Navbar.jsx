import { useCallback, useEffect, useState } from "react";

const Navbar = () => {
  const [showmenu, setShowmenu] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Initialize AOS and set client-side flag
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({ duration: 1000, offset: 50, once: true });
      });
    }
  }, []);

  const scrollActive = useCallback(() => {
    if (typeof window === "undefined") return;
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset + window.innerHeight / 3;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      const linkElement = document.querySelector(
        `.nav_menu a[href*="${sectionId}"]`
      );

      if (linkElement) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          linkElement.classList.add("active_link");
        } else {
          linkElement.classList.remove("active_link");
        }
      }
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("scroll", scrollActive);

    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (header) {
        if (window.scrollY >= 30) {
          header.classList.add("scroll_header");
        } else {
          header.classList.remove("scroll_header");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", scrollActive);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollActive]);

  const menuHandler = () => setShowmenu(false);

  // Consistent structure for SSR and client-side rendering
  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav_logo" data-aos={isClient && window.innerWidth > 768 ? "fade-left" : undefined}>
          Shivam
        </div>
        <div
          className={showmenu ? "nav_menu show_menu" : "nav_menu"}
          data-aos={isClient && window.innerWidth > 768 ? "fade-left" : undefined}
        >
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#home" className="nav_link" onClick={menuHandler}>
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link" onClick={menuHandler}>
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className="nav_link" onClick={menuHandler}>
                <i className="uil uil-file-alt nav_icon"></i> Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#resume" className="nav_link" onClick={menuHandler}>
                <i className="uil uil-graduation-cap nav_icon"></i> Resume
              </a>
            </li>
            <li className="nav_item">
              <a href="#projects" className="nav_link" onClick={menuHandler}>
                <i className="uil uil-scenery nav_icon"></i> Projects
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav_link" onClick={menuHandler}>
                <i className="uil uil-message nav_icon"></i> Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav_close" onClick={menuHandler}></i>
        </div>
        <div className="nav_toggle" onClick={() => setShowmenu(true)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;