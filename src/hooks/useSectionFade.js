// src/hooks/useSectionFade.js
import { useEffect } from 'react';

const useSectionFade = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container');
    const sections = document.querySelectorAll('#mainContent > section');

    const handleScroll = () => {
      const scrollPosition = scrollContainer.scrollTop + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          section.style.opacity = '1';
          section.style.zIndex = 100 + index;
        } else {
          section.style.opacity = '0';
          section.style.zIndex = 10 + index;
        }
      });
    };

    setTimeout(() => {
      handleScroll();
      if (scrollContainer.scrollTop === 0 && sections.length > 0) {
        sections[0].style.opacity = '1';
        sections[0].style.zIndex = '110';
      }
    }, 300);

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useSectionFade;