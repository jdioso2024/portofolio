"use client";

import { useRef, useEffect } from "react";

const experiences = [
    {
        period: "2024 — Present",
        role: "Senior Frontend Engineer",
        company: "Company Name",
        companyType: "Full-time",
        description:
            "Led the redesign of the core product dashboard, improving load performance by 40%. Built and maintained a shared component library used across 3 product teams. Championed design-system adoption and mentored junior engineers.",
        tech: ["React", "TypeScript", "Next.js", "GSAP", "Figma"],
    },
    {
        period: "2023 — 2024",
        role: "Frontend Engineer",
        company: "Another Company",
        companyType: "Full-time",
        description:
            "Developed responsive marketing pages and internal tooling. Collaborated closely with designers to implement pixel-perfect UIs at high velocity. Introduced Storybook for component documentation.",
        tech: ["React", "Tailwind CSS", "GraphQL", "Figma"],
    },
    {
        period: "2022 — 2023",
        role: "UI Developer",
        company: "Agency Name",
        companyType: "Contract",
        description:
            "Built interactive landing pages and e-commerce storefronts for various clients. Focused on performance optimization, animation, and cross-browser compatibility.",
        tech: ["HTML/CSS", "JavaScript", "GSAP", "WordPress"],
    },
    {
        period: "2021 — 2022",
        role: "Junior Frontend Developer",
        company: "Startup Name",
        companyType: "Full-time",
        description:
            "Contributed to the MVP of a SaaS product. Implemented feature flags, user authentication flows, and the onboarding experience.",
        tech: ["React", "Redux", "Sass", "Node.js"],
    },
];

export default function Experience() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        (async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);

            itemRefs.current.forEach((el) => {
                if (!el) return;
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
                        scrollTrigger: { trigger: el, start: "top 85%", once: true },
                    }
                );
            });
        })();
    }, []);

    return (
        <section
            id="experience"
            ref={sectionRef}
            style={{
                padding: "clamp(80px, 10vw, 160px) 24px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                background: "linear-gradient(to bottom, rgba(10,10,15,0.4) 0%, transparent 100%)",
            }}
        >
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                {/* Label */}
                <div style={{ marginBottom: 64 }}>
                    <span style={{
                        fontSize: 11, fontFamily: "monospace", letterSpacing: "0.15em",
                        color: "var(--accent)", textTransform: "uppercase",
                        display: "block", marginBottom: 16,
                    }}>
                        02 / Experience
                    </span>
                    <div style={{ width: 40, height: 1, background: "var(--accent)", opacity: 0.6 }} />
                </div>

                <h2 className="text-gradient" style={{
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 600,
                    letterSpacing: "-0.03em", lineHeight: 1.1,
                    margin: "0 0 64px",
                }}>
                    Where I&apos;ve worked
                </h2>

                {/* Timeline */}
                <div style={{ position: "relative" }}>
                    {/* Vertical line */}
                    <div style={{
                        position: "absolute",
                        left: 0,
                        top: 12,
                        bottom: 12,
                        width: 1,
                        background: "linear-gradient(to bottom, transparent 0%, rgba(94,106,210,0.5) 20%, rgba(94,106,210,0.5) 80%, transparent 100%)",
                    }} />

                    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                        {experiences.map((exp, i) => (
                            <div
                                key={i}
                                ref={(el) => { if (el) itemRefs.current[i] = el; }}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "minmax(0, 140px) 1fr",
                                    gap: "0 40px",
                                    paddingBottom: i < experiences.length - 1 ? 56 : 0,
                                    opacity: 0,
                                }}
                            >
                                {/* Date */}
                                <div style={{ paddingTop: 14, textAlign: "right" }}>
                                    <span style={{
                                        fontSize: 12, fontFamily: "monospace", color: "var(--fg-muted)",
                                        letterSpacing: "0.05em", whiteSpace: "nowrap",
                                    }}>
                                        {exp.period}
                                    </span>
                                </div>

                                {/* Content */}
                                <div style={{ position: "relative", paddingLeft: 32 }}>
                                    {/* Dot */}
                                    <div style={{
                                        position: "absolute",
                                        left: -4,
                                        top: 16,
                                        width: 8,
                                        height: 8,
                                        borderRadius: "50%",
                                        background: "var(--accent)",
                                        boxShadow: "0 0 12px rgba(94,106,210,0.7)",
                                        border: "2px solid var(--bg-base)",
                                    }} />

                                    {/* Card */}
                                    <div style={{
                                        background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                        borderRadius: 16,
                                        padding: "28px 32px",
                                        boxShadow: "0 2px 20px rgba(0,0,0,0.3)",
                                        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                                    }}
                                        onMouseEnter={(e) => {
                                            const el = e.currentTarget;
                                            el.style.borderColor = "rgba(94,106,210,0.2)";
                                            el.style.boxShadow = "0 0 0 1px rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.4), 0 0 60px rgba(94,106,210,0.08)";
                                        }}
                                        onMouseLeave={(e) => {
                                            const el = e.currentTarget;
                                            el.style.borderColor = "rgba(255,255,255,0.06)";
                                            el.style.boxShadow = "0 2px 20px rgba(0,0,0,0.3)";
                                        }}
                                    >
                                        {/* Role + company */}
                                        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                                            <div>
                                                <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--fg)", margin: 0, marginBottom: 4 }}>
                                                    {exp.role}
                                                </h3>
                                                <p style={{ fontSize: 14, color: "var(--accent)", margin: 0 }}>{exp.company}</p>
                                            </div>
                                            <span style={{
                                                fontSize: 11, fontFamily: "monospace", letterSpacing: "0.08em",
                                                color: "var(--fg-muted)", textTransform: "uppercase",
                                                background: "rgba(255,255,255,0.04)",
                                                border: "1px solid rgba(255,255,255,0.08)",
                                                borderRadius: 100, padding: "4px 10px", whiteSpace: "nowrap",
                                            }}>
                                                {exp.companyType}
                                            </span>
                                        </div>

                                        <p style={{ color: "var(--fg-muted)", fontSize: 14, lineHeight: 1.75, margin: "0 0 20px" }}>
                                            {exp.description}
                                        </p>

                                        {/* Tech badges */}
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                            {exp.tech.map((t) => (
                                                <span key={t} style={{
                                                    fontSize: 12, color: "rgba(94,106,210,0.9)",
                                                    background: "rgba(94,106,210,0.08)",
                                                    border: "1px solid rgba(94,106,210,0.2)",
                                                    borderRadius: 100, padding: "3px 10px",
                                                }}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile styles for timeline */}
            <style>{`
        @media (max-width: 640px) {
          .timeline-grid { grid-template-columns: 1fr !important; }
          .timeline-date { text-align: left !important; padding-top: 0 !important; padding-bottom: 8px; }
        }
      `}</style>
        </section>
    );
}
