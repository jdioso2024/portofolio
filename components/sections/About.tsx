"use client";

import { useRef, useEffect } from "react";
import { useMouseSpotlight } from "@/hooks/useMouseSpotlight";

const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "GSAP", "Figma",
    "TailwindCSS", "PostgreSQL", "Docker", "Git",
];

const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Projects Built" },
    { value: "10+", label: "Happy Clients" },
];

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const { ref: cardRef, spotRef, onMouseMove, onMouseLeave } = useMouseSpotlight();

    useEffect(() => {
        (async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
            });
            tl.fromTo(leftRef.current, { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" })
                .fromTo(rightRef.current, { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");
        })();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            style={{
                padding: "clamp(80px, 10vw, 160px) 24px",
                maxWidth: 1200,
                margin: "0 auto",
            }}
        >
            {/* Section label */}
            <div style={{ marginBottom: 64 }}>
                <span style={{
                    fontSize: 11, fontFamily: "monospace", letterSpacing: "0.15em",
                    color: "var(--accent)", textTransform: "uppercase",
                    display: "block", marginBottom: 16,
                }}>
                    01 / About
                </span>
                <div style={{ width: 40, height: 1, background: "var(--accent)", opacity: 0.6 }} />
            </div>

            {/* Two-column layout */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
                gap: 64,
                alignItems: "stretch",
            }}>
                {/* Left: text */}
                <div ref={leftRef} style={{ opacity: 0 }}>
                    <h2
                        className="text-gradient"
                        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 24px" }}
                    >
                        Crafting the web,<br />one pixel at a time
                    </h2>
                    <p style={{ color: "var(--fg-muted)", fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
                        I&apos;m a frontend engineer passionate about building high-quality digital products. I love the intersection of design and engineering — creating interfaces that are not only functional but feel genuinely delightful to use.
                    </p>
                    <p style={{ color: "var(--fg-muted)", fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>
                        With a strong eye for detail, I bring design systems to life through clean, performant code. When I&apos;m not coding, I&apos;m exploring UI design trends, contributing to open source, or perfecting my coffee brewing technique.
                    </p>

                    {/* Skills */}
                    <div>
                        <p style={{ color: "var(--fg-subtle)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 16 }}>
                            Tech I use
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                            {skills.map((skill) => (
                                <span key={skill} style={{
                                    fontSize: 13, color: "var(--fg-muted)",
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    borderRadius: 100,
                                    padding: "5px 14px",
                                    transition: "color 0.2s ease, border-color 0.2s ease",
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: stats card */}
                <div ref={rightRef} style={{ opacity: 0, height: "100%" }}>
                    <div
                        ref={cardRef}
                        onMouseMove={onMouseMove}
                        onMouseLeave={onMouseLeave}
                        style={{
                            position: "relative",
                            overflow: "hidden",
                            borderRadius: 20,
                            background: "linear-gradient(to bottom, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            padding: "32px",
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 2px 20px rgba(0,0,0,0.4), 0 0 60px rgba(0,0,0,0.2)",
                        }}
                    >
                        {/* Spotlight overlay */}
                        <div ref={spotRef} style={{ position: "absolute", inset: 0, transition: "opacity 0.3s ease", opacity: 0, pointerEvents: "none" }} />

                        {/* Top accent line */}
                        <div style={{
                            position: "absolute", top: 0, left: 24, right: 24, height: 1,
                            background: "linear-gradient(to right, transparent, rgba(94,106,210,0.4), transparent)",
                        }} />

                        {/* Profile / Desk Image Placeholder */}
                        <div style={{
                            width: "100%",
                            flexGrow: 1,
                            minHeight: 180,
                            marginBottom: 32,
                            borderRadius: 12,
                            overflow: "hidden",
                            position: "relative",
                            border: "1px solid rgba(255,255,255,0.08)",
                            background: "rgba(0,0,0,0.3)",
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                                alt="Workspace preview"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    opacity: 0.85,
                                    transition: "transform 0.5s ease",
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                            />
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--bg-elevated), transparent)", opacity: 0.4, pointerEvents: "none" }} />
                        </div>

                        {/* Stats grid */}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 32 }}>
                            {stats.map((s, i) => (
                                <div key={i} style={{
                                    display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 8,
                                    borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                                }}>
                                    <div style={{ fontSize: "1.75rem", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--accent)", lineHeight: 1 }}>
                                        {s.value}
                                    </div>
                                    <div style={{ color: "var(--fg-muted)", fontSize: 13, lineHeight: 1.3, maxWidth: 80 }}>{s.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Mini status */}
                        <div style={{
                            display: "flex", alignItems: "center", gap: 10,
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            borderRadius: 10,
                            padding: "12px 16px",
                        }}>
                            <div style={{
                                width: 8, height: 8, borderRadius: "50%",
                                background: "#4ade80",
                                boxShadow: "0 0 8px rgba(74,222,128,0.8)",
                                animation: "pulse-glow 2s ease-in-out infinite",
                                flexShrink: 0,
                            }} />
                            <span style={{ fontSize: 13, color: "var(--fg-muted)" }}>Open to new opportunities</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
