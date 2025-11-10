import { useEffect, useRef, useState } from "react";

export default function ScrollObserver() {
  const [isScrollingProgrammatically, setScrollingProgrammatically] =
    useState(false);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrollingProgrammatically) {
            console.log("User actually viewed:", entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((section) => observer.observe(section));

    return () => {
      sectionsRef.current.forEach((section) => observer.unobserve(section));
    };
  }, [isScrollingProgrammatically]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    setScrollingProgrammatically(true);
    el.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => setScrollingProgrammatically(false), 500);
  };

  return { scrollToSection, sectionsRef };
}
