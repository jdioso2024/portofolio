"use client";

import { useRef, useEffect } from "react";
import { useMouseSpotlight } from "@/hooks/useMouseSpotlight";

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

            // Scroll parallax
            gsap.to(contentRef.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
                opacity: 0,
                scale: 0.95,
                y: 100,
            });
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
                overflow: "hidden",
                background: "radial-gradient(ellipse at top, #0a0a0f 0%, #050506 50%, #020203 100%)",
            }}
        >
            {/* Grid overlay */}
            <div className="grid-overlay" style={{ position: "absolute", inset: 0, zIndex: 0 }} />

            {/* Noise texture */}
            <div className="noise-texture" style={{ position: "absolute", inset: 0, zIndex: 1 }} />

            {/* ── Ambient blobs ── */}
            {/* Primary blob */}
            <div style={{
                position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)",
                width: 900, height: 700,
                background: "radial-gradient(ellipse at center, rgba(94,106,210,0.25) 0%, transparent 70%)",
                filter: "blur(120px)",
                animation: "float 9s ease-in-out infinite",
                zIndex: 1, pointerEvents: "none",
            }} />
            {/* Secondary blob */}
            <div style={{
                position: "absolute", top: "20%", left: "-10%",
                width: 600, height: 800,
                background: "radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%)",
                filter: "blur(120px)",
                animation: "float-reverse 10s ease-in-out infinite",
                zIndex: 1, pointerEvents: "none",
            }} />
            {/* Tertiary blob */}
            <div style={{
                position: "absolute", top: "30%", right: "-5%",
                width: 500, height: 700,
                background: "radial-gradient(ellipse at center, rgba(79,70,229,0.12) 0%, transparent 70%)",
                filter: "blur(100px)",
                animation: "float-slow 12s ease-in-out infinite",
                zIndex: 1, pointerEvents: "none",
            }} />
            {/* Bottom pulse */}
            <div style={{
                position: "absolute", bottom: "5%", left: "50%", transform: "translateX(-50%)",
                width: 800, height: 200,
                background: "radial-gradient(ellipse at center, rgba(94,106,210,0.10) 0%, transparent 70%)",
                filter: "blur(80px)",
                animation: "pulse-glow 6s ease-in-out infinite",
                zIndex: 1, pointerEvents: "none",
            }} />

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
                    background: "rgba(94,106,210,0.10)",
                    border: "1px solid rgba(94,106,210,0.25)",
                    borderRadius: 100,
                    padding: "6px 16px",
                    marginBottom: 32,
                }}>
                    <div style={{
                        width: 6, height: 6, borderRadius: "50%",
                        background: "var(--accent)",
                        boxShadow: "0 0 8px rgba(94,106,210,0.8)",
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
                            color: "#fff",
                            border: "none",
                            borderRadius: 10,
                            padding: "14px 32px",
                            fontSize: 15,
                            fontWeight: 500,
                            cursor: "pointer",
                            fontFamily: "inherit",
                            boxShadow: "0 0 0 1px rgba(94,106,210,0.5), 0 4px 20px rgba(94,106,210,0.35), inset 0 1px 0 0 rgba(255,255,255,0.15)",
                            transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget;
                            el.style.background = "var(--accent-bright)";
                            el.style.boxShadow = "0 0 0 1px rgba(94,106,210,0.6), 0 8px 32px rgba(94,106,210,0.45), inset 0 1px 0 0 rgba(255,255,255,0.2)";
                            el.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget;
                            el.style.background = "var(--accent)";
                            el.style.boxShadow = "0 0 0 1px rgba(94,106,210,0.5), 0 4px 20px rgba(94,106,210,0.35), inset 0 1px 0 0 rgba(255,255,255,0.15)";
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
