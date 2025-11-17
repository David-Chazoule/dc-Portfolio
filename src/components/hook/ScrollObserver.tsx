import { useEffect, useRef, useState } from "react";

export default function ScrollObserver() {
  // Tracks whether scrolling was triggered by code instead of the user
  const [isScrollingProgrammatically, setScrollingProgrammatically] =
    useState(false);
  // Stores references to the sections we want to observe
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Creates an IntersectionObserver to detect when sections enter the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Logs only when the user scrolls manually and the section becomes visible
          if (entry.isIntersecting && !isScrollingProgrammatically) {
            console.log("User actually viewed:", entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Section must be at least 50% visible
    );

    // Start observing each registered section
    sectionsRef.current.forEach((section) => observer.observe(section));
    // Cleanup: stop observing when component unmounts
    return () => {
      sectionsRef.current.forEach((section) => observer.unobserve(section));
    };
  }, [isScrollingProgrammatically]);

  // Smoothly scrolls to a specific section by its ID
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return; // If section doesn't exist, exit
    setScrollingProgrammatically(true); // Mark the scroll as programmatic
    el.scrollIntoView({ behavior: "smooth" }); // Smooth auto scroll
    // Reset flag after animation completes
    setTimeout(() => setScrollingProgrammatically(false), 500);
  };
  // Returns the scroll function and the reference list
  return { scrollToSection, sectionsRef };
}
