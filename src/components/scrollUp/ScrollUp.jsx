// src/components/scrollUp/ScrollUp.jsx
import { useEffect } from "react";

const ScrollUp = () => {
  useEffect(() => {
    if (typeof window === "undefined") return; // Skip during SSR

    const handleScroll = () => {
      const scrollUp = document.querySelector(".scroll_up");
      if (!scrollUp) return; // Safe check

      // Log for debugging
      // console.log("Scroll Y:", window.scrollY);
      if (window.scrollY >= 500) {
        scrollUp.classList.add("show_scroll");
      } else {
        scrollUp.classList.remove("show_scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Trigger initial scroll check check in case user starts mid-page
    handleScroll();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#home" className="scroll_up" aria-label="Back to Top">
      <i className="uil uil-arrow-up scroll_up_icon"></i>
    </a>
  );
};

export default ScrollUp;