"use client";

import { useEffect } from "react";

export default function ScrollReveals() {
  useEffect(() => {
    const root = document.documentElement;
    const items = [...document.querySelectorAll(".reveal")];
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    // Apply hiding only once JavaScript is ready; server-rendered content stays readable.
    root.classList.add("js");
    const timers = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        let index = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const item = entry.target;
          item.style.transitionDelay = `${index++ * 90}ms`;
          item.classList.add("in");
          const timer = setTimeout(() => {
            item.style.transitionDelay = "";
            timers.delete(timer);
          }, 1200);
          timers.add(timer);
          observer.unobserve(item);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
      root.classList.remove("js");
      items.forEach((item) => {
        item.style.transitionDelay = "";
      });
    };
  }, []);

  return null;
}
