"use client";

import { useRef, useEffect } from "react";

const experiences = [
    {
        period: "2026",
        role: "Front-End Engineer",
        company: "PT Dayana Energi Nusantara (DEN)",
        companyType: "Freelance · Remote",
        location: "Remote",
        description:
            "Developed the company profile website for PT DEN, a company operating in the energy and infrastructure sector. Built with Next.js and GSAP, the site presents corporate services, capabilities, and identity through a professional, responsive digital experience.",
        tech: ["React", "Next.js", "GSAP", "TypeScript"],
    },
    {
        period: "Apr – Mei 2025",
        role: "IT Internship",
        company: "Dinas Komunikasi dan Informatika Kab. Karanganyar",
        companyType: "Internship",
        location: "Karanganyar",
        description:
            "Developed and maintained an internal information system tailored for departmental needs. Contributed to back-end logic and UI improvements using the Laravel framework during the two-month internship period.",
        tech: ["Laravel", "PHP", "Tailwind CSS"],
    },
    {
        period: "2024",
        role: "UI/UX Designer",
        company: "Philia Adventure Park",
        companyType: "Freelance · Remote",
        location: "Remote",
        description:
            "Designed the website experience for Philia Adventure Park — a responsive multi-page layout that introduces park attractions, provides visitor information, and guides users toward booking activities. Focused on clear information architecture and a visual identity that reflects the park's adventurous spirit.",
        tech: ["Figma"],
    },
    {
        period: "2024",
        role: "Wordpress Engineer",
        company: "Proyek Skrining Autisme \"Anak Tangguh\"",
        companyType: "Freelance",
        location: "Remote",
        description:
            "Built the \"Anak Tangguh\" educational website to help parents access early autism screening information. Developed using WordPress with a child-friendly visual approach to ensure the content is approachable and easy to understand.",
        tech: ["WordPress"],
    },
    {
        period: "2023",
        role: "Visual Asset Creator",
        company: "ATMICUP 2023",
        companyType: "Freelance",
        location: "Sukoharjo",
        description:
            "Created visual assets for ATMICUP 2023 using a pixel art approach inspired by classic games and fantasy characters. A dragon character was developed as the main mascot to convey a competitive, playful, and memorable identity suited to the gaming event's theme.",
        tech: ["Adobe After Effects"],
    },
    {
        period: "2020 – 2021",
        role: "3D Artist",
        company: "Kertas Putih Creative",
        companyType: "Full-Time",
        location: "Solo",
        description:
            "Responsible for creating 3D models, designing spatial arrangements, and executing final rendering processes to deliver optimal visual concepts for client projects.",
        tech: ["Blender"],
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
                position: "relative",
                zIndex: 2,
                padding: "clamp(80px, 10vw, 160px) 24px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                background: "var(--bg-base)",
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
                    Experience Timelines
                </h2>

                {/* Timeline */}
                <div style={{ position: "relative" }}>
                    {/* Vertical line */}
                    <div className="timeline-line" style={{
                        position: "absolute",
                        left: 0,
                        top: 12,
                        bottom: 12,
                        width: 1,
                        background: "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255,0.5) 20%, rgba(255, 255, 255,0.5) 80%, transparent 100%)",
                    }} />

                    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                        {experiences.map((exp, i) => (
                            <div
                                key={i}
                                className="timeline-row"
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
                                <div className="timeline-date" style={{ paddingTop: 14, textAlign: "right" }}>
                                    <span style={{
                                        fontSize: 12, fontFamily: "monospace", color: "var(--fg-muted)",
                                        letterSpacing: "0.05em", whiteSpace: "nowrap",
                                    }}>
                                        {exp.period}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="timeline-content" style={{ position: "relative", paddingLeft: 32 }}>
                                    {/* Dot */}
                                    <div className="timeline-dot" style={{
                                        position: "absolute",
                                        left: -4,
                                        top: 16,
                                        width: 8,
                                        height: 8,
                                        borderRadius: "50%",
                                        background: "var(--accent)",
                                        boxShadow: "0 0 12px rgba(255, 255, 255,0.7)",
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
                                            el.style.borderColor = "rgba(255, 255, 255,0.2)";
                                            el.style.boxShadow = "0 0 0 1px rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.4), 0 0 60px rgba(255, 255, 255,0.08)";
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
                                                    fontSize: 12, color: "rgba(255, 255, 255,0.9)",
                                                    background: "rgba(255, 255, 255,0.08)",
                                                    border: "1px solid rgba(255, 255, 255,0.2)",
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
        @media (max-width: 768px) {
          .timeline-line, .timeline-dot { display: none !important; }
          .timeline-row { grid-template-columns: 1fr !important; gap: 16px !important; padding-bottom: 40px !important; }
          .timeline-date { text-align: left !important; padding-top: 0 !important; }
          .timeline-content { padding-left: 0 !important; }
        }
      `}</style>
        </section>
    );
}
