"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "experience", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "awards", label: "Awards", className: "hide-xs" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function NavigationDock() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="dock" aria-label="Sections">
      <a className="dock__home" href="#top" aria-label="Back to top">
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <use href="#sparkle" />
        </svg>
      </a>
      {sections.map(({ id, label, className = "" }) => (
        <a
          key={id}
          href={`#${id}`}
          data-sec={id}
          className={
            `${className}${activeSection === id ? " is-active" : ""}`.trim() ||
            undefined
          }
          aria-current={activeSection === id ? "location" : undefined}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
