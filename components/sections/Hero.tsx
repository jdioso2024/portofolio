"use client";

import { useRef, useEffect } from "react";
import { useMouseSpotlight } from "@/hooks/useMouseSpotlight";
import { RibbonFieldBackground } from "@/components/ribbon-field/RibbonFieldBackground";

/* ─── Hero Section ───────────────────────────────────────────
   Full-viewport hero with:
   - 3-layer ambient blob system (CSS animated)
   - Grid + noise texture overlays
   - Gradient headline + accent shimmer sub-phrase  
   - Two CTAs (primary + secondary)
   - GSAP parallax on scroll
──────────────────────────────────────────────────────────── */
export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const { ref: cardRef, spotRef, onMouseMove, onMouseLeave } = useMouseSpotlight();

    useEffect(() => {
        let gsap: typeof import("gsap").gsap;
        let ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;

        (async () => {
            const g = await import("gsap");
            const st = await import("gsap/ScrollTrigger");
            gsap = g.gsap;
            ScrollTrigger = st.ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            if (!heroRef.current || !contentRef.current) return;

            // Entrance animation
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
            tl.fromTo(contentRef.current.children,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 }
            );

            // Scroll parallax removed for stability
        })();

        return () => {
            import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => ScrollTrigger.getAll().forEach(t => t.kill()));
        };
    }, []);

    const handleScrollTo = (id: string) => {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            ref={heroRef}
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--bg-base)",
            }}
        >
            {/* Grid overlay */}
            <div className="grid-overlay" style={{ position: "absolute", inset: 0, zIndex: 0 }} />

            {/* Noise texture */}
            <div className="noise-texture" style={{ position: "absolute", inset: 0, zIndex: 1 }} />

            {/* ── Ambient blobs removed ── */}

            {/* ── Ribbon Field WebGL Background ─────────────────────────────────── */}
            <div style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                opacity: 0.2,
                pointerEvents: "none",
            }}>
                <RibbonFieldBackground
                    speed={1.00}
                    pointerAmount={1.00}
                    smoothing={0.035}
                    hue={0}
                    saturation={0}
                    brightness={1.00}
                    opacity={1.00}
                />
            </div>

            {/* Content */}
            <div
                ref={contentRef}
                style={{
                    position: "relative",
                    zIndex: 10,
                    maxWidth: 860,
                    margin: "0 auto",
                    padding: "120px 24px 80px",
                    textAlign: "center",
                }}
            >
                {/* Label */}
                <div style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "rgba(255, 255, 255,0.10)",
                    border: "1px solid rgba(255, 255, 255,0.25)",
                    borderRadius: 100,
                    padding: "6px 16px",
                    marginBottom: 32,
                }}>
                    <div style={{
                        width: 6, height: 6, borderRadius: "50%",
                        background: "var(--accent)",
                        boxShadow: "0 0 8px rgba(255, 255, 255,0.8)",
                        animation: "pulse-glow 2s ease-in-out infinite",
                    }} />
                    <span style={{ fontSize: 12, fontFamily: "monospace", letterSpacing: "0.1em", color: "var(--accent)", textTransform: "uppercase" }}>
                        Available for work
                    </span>
                </div>

                {/* Headline */}
                <h1
                    className="text-gradient"
                    style={{
                        fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                        fontWeight: 600,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.05,
                        margin: "0 0 24px",
                    }}
                >
                    Building{" "}
                    <span className="text-gradient-accent">elegant</span>
                    <br />
                    digital experiences
                </h1>

                {/* Description */}
                <p style={{
                    fontSize: "clamp(1rem, 2vw, 1.25rem)",
                    color: "var(--fg-muted)",
                    lineHeight: 1.7,
                    maxWidth: 560,
                    margin: "0 auto 48px",
                }}>
                    I&apos;m a frontend engineer who crafts fast, accessible, and beautifully designed interfaces — with obsessive attention to detail.
                </p>

                {/* CTAs */}
                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                    <button
                        onClick={() => handleScrollTo("#work")}
                        style={{
                            background: "var(--accent)",
                            color: "var(--bg-base)",
                            border: "none",
                            borderRadius: 10,
                            padding: "14px 32px",
                            fontSize: 15,
                            fontWeight: 500,
                            cursor: "pointer",
                            fontFamily: "inherit",
                            boxShadow: "0 0 0 1px rgba(255, 255, 255,0.5), 0 4px 20px rgba(255, 255, 255,0.35), inset 0 1px 0 0 rgba(255,255,255,0.15)",
                            transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget;
                            el.style.background = "var(--accent-bright)";
                            el.style.boxShadow = "0 0 0 1px rgba(255, 255, 255,0.6), 0 8px 32px rgba(255, 255, 255,0.45), inset 0 1px 0 0 rgba(255,255,255,0.2)";
                            el.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget;
                            el.style.background = "var(--accent)";
                            el.style.boxShadow = "0 0 0 1px rgba(255, 255, 255,0.5), 0 4px 20px rgba(255, 255, 255,0.35), inset 0 1px 0 0 rgba(255,255,255,0.15)";
                            el.style.transform = "translateY(0)";
                        }}
                        onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.98)"; }}
                        onMouseUp={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                    >
                        View My Work
                    </button>
                    <button
                        onClick={() => handleScrollTo("#contact")}
                        style={{
                            background: "rgba(255,255,255,0.05)",
                            color: "var(--fg)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: 10,
                            padding: "14px 32px",
                            fontSize: 15,
                            fontWeight: 500,
                            cursor: "pointer",
                            fontFamily: "inherit",
                            boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.06)",
                            transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget;
                            el.style.background = "rgba(255,255,255,0.08)";
                            el.style.borderColor = "rgba(255,255,255,0.12)";
                            el.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget;
                            el.style.background = "rgba(255,255,255,0.05)";
                            el.style.borderColor = "rgba(255,255,255,0.08)";
                            el.style.transform = "translateY(0)";
                        }}
                        onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.98)"; }}
                        onMouseUp={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                    >
                        Get In Touch
                    </button>
                </div>

                {/* Scroll hint */}
                <div
                    ref={cardRef as unknown as React.RefObject<HTMLDivElement>}
                    onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                    style={{
                        marginTop: 80,
                        display: "inline-flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 8,
                        opacity: 0.4,
                        position: "relative",
                    }}
                >
                    <div ref={spotRef} style={{ position: "absolute", inset: 0, borderRadius: 8, transition: "opacity 0.3s ease", opacity: 0 }} />
                    <div style={{
                        width: 20, height: 30,
                        border: "1px solid rgba(255,255,255,0.3)",
                        borderRadius: 10,
                        display: "flex", justifyContent: "center", paddingTop: 4,
                    }}>
                        <div style={{
                            width: 3, height: 6, borderRadius: 2, background: "var(--fg)",
                            animation: "float 2s ease-in-out infinite",
                        }} />
                    </div>
                    <span style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--fg-muted)", textTransform: "uppercase", fontFamily: "monospace" }}>
                        scroll
                    </span>
                </div>
            </div>
        </section>
    );
}
