"use client";

import { useRef, useEffect } from "react";
import { Github, Linkedin, Twitter, Instagram, X } from "lucide-react";

const socials = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ariefin-nur-hidayat-0a96aa248/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/arifinnipin/" },
    { icon: X, label: "X", href: "https://x.com/tobi_kadachi_?s=11&t=3JCpxNB_oRj6LxXmGwoVBQ" },
    { icon: Github, label: "GitHub", href: "https://github.com/jdioso2024" },
];

export default function Contact() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        (async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);

            gsap.fromTo(formRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
                }
            );
        })();
    }, []);

    return (
        <section
            id="contact"
            ref={sectionRef}
            style={{
                padding: "clamp(80px, 10vw, 160px) 24px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                position: "relative",
                overflow: "hidden",
                background: "linear-gradient(to bottom, transparent, rgba(5,5,10,0.5))",
            }}
        >
            {/* Ambient glow behind form */}
            <div style={{
                position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
                width: 600, height: 400,
                background: "radial-gradient(ellipse at center, rgba(94,106,210,0.12) 0%, transparent 70%)",
                filter: "blur(80px)", pointerEvents: "none", zIndex: 0,
            }} />

            <div style={{ maxWidth: 640, margin: "0 auto", position: "relative", zIndex: 1 }}>
                {/* Label */}
                <div style={{ marginBottom: 48 }}>
                    <span style={{
                        fontSize: 11, fontFamily: "monospace", letterSpacing: "0.15em",
                        color: "var(--accent)", textTransform: "uppercase",
                        display: "block", marginBottom: 16,
                    }}>
                        04 / Contact
                    </span>
                    <div style={{ width: 40, height: 1, background: "var(--accent)", opacity: 0.6 }} />
                </div>

                <div ref={formRef} style={{ opacity: 0 }}>
                    <h2 className="text-gradient" style={{
                        fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600,
                        letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 16px",
                    }}>
                        Let&apos;s work together
                    </h2>
                    <p style={{ color: "var(--fg-muted)", fontSize: 16, lineHeight: 1.7, marginBottom: 48 }}>
                        Have a project in mind or just want to chat? I&apos;d love to hear from you. I&apos;ll get back within 24 hours.
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, marginTop: 48 }}>
                        {socials.map(({ icon: Icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                style={{
                                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16,
                                    background: "rgba(255,255,255,0.02)",
                                    border: "1px solid rgba(255,255,255,0.05)",
                                    borderRadius: 24,
                                    padding: "48px 24px",
                                    color: "var(--fg)", textDecoration: "none",
                                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget;
                                    el.style.borderColor = "rgba(94,106,210,0.4)";
                                    el.style.background = "rgba(94,106,210,0.06)";
                                    el.style.transform = "translateY(-6px)";
                                    el.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3), 0 0 40px rgba(94,106,210,0.15)";
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget;
                                    el.style.borderColor = "rgba(255,255,255,0.05)";
                                    el.style.background = "rgba(255,255,255,0.02)";
                                    el.style.transform = "translateY(0)";
                                    el.style.boxShadow = "none";
                                }}
                            >
                                <div style={{
                                    width: 80, height: 80, borderRadius: "50%",
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    marginBottom: 8, transition: "background 0.3s ease",
                                }}>
                                    <Icon size={32} color="var(--accent)" />
                                </div>
                                <span style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.01em" }}>{label}</span>
                                <span style={{ fontSize: 14, color: "var(--fg-muted)" }}>Let's connect</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
