"use client";

import { useRef, useEffect, useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/yourusername" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
    { icon: Mail, label: "Email", href: "mailto:you@example.com" },
];

export default function Contact() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);
        await new Promise((r) => setTimeout(r, 1200));
        setSending(false);
        setSent(true);
    };

    const inputStyle: React.CSSProperties = {
        width: "100%",
        background: "#0F0F12",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 10,
        padding: "14px 16px",
        fontSize: 14,
        color: "#e8e8ee",
        fontFamily: "inherit",
        outline: "none",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        boxSizing: "border-box",
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.currentTarget.style.borderColor = "rgba(94,106,210,0.6)";
        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(94,106,210,0.15)";
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.boxShadow = "none";
    };

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

                    {sent ? (
                        <div style={{
                            textAlign: "center",
                            background: "linear-gradient(to bottom, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                            border: "1px solid rgba(94,106,210,0.3)",
                            borderRadius: 20,
                            padding: "64px 40px",
                            boxShadow: "0 0 60px rgba(94,106,210,0.08)",
                        }}>
                            <div style={{
                                width: 56, height: 56, borderRadius: "50%",
                                background: "rgba(94,106,210,0.15)",
                                border: "1px solid rgba(94,106,210,0.3)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                margin: "0 auto 24px",
                            }}>
                                <Send size={22} color="var(--accent)" />
                            </div>
                            <h3 style={{ fontSize: 22, fontWeight: 600, color: "var(--fg)", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
                                Message sent!
                            </h3>
                            <p style={{ color: "var(--fg-muted)", fontSize: 15, margin: 0 }}>
                                Thanks for reaching out. I&apos;ll be in touch soon.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                    <label style={{ fontSize: 13, color: "var(--fg-muted)", fontWeight: 500 }}>Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        required
                                        style={inputStyle}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                    <label style={{ fontSize: 13, color: "var(--fg-muted)", fontWeight: 500 }}>Email</label>
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        required
                                        style={inputStyle}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                <label style={{ fontSize: 13, color: "var(--fg-muted)", fontWeight: 500 }}>Subject</label>
                                <input
                                    type="text"
                                    placeholder="What's this about?"
                                    style={inputStyle}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                <label style={{ fontSize: 13, color: "var(--fg-muted)", fontWeight: 500 }}>Message</label>
                                <textarea
                                    placeholder="Tell me about your project..."
                                    required
                                    rows={6}
                                    style={{ ...inputStyle, resize: "vertical", minHeight: 140 }}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={sending}
                                style={{
                                    background: sending ? "rgba(94,106,210,0.6)" : "var(--accent)",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: 10,
                                    padding: "16px 32px",
                                    fontSize: 15,
                                    fontWeight: 500,
                                    cursor: sending ? "not-allowed" : "pointer",
                                    fontFamily: "inherit",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 10,
                                    width: "100%",
                                    boxShadow: "0 0 0 1px rgba(94,106,210,0.5), 0 4px 20px rgba(94,106,210,0.3), inset 0 1px 0 0 rgba(255,255,255,0.15)",
                                    transition: "all 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                    if (sending) return;
                                    const el = e.currentTarget;
                                    el.style.background = "var(--accent-bright)";
                                    el.style.boxShadow = "0 0 0 1px rgba(94,106,210,0.6), 0 8px 32px rgba(94,106,210,0.4), inset 0 1px 0 0 rgba(255,255,255,0.2)";
                                    el.style.transform = "translateY(-2px)";
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget;
                                    el.style.background = "var(--accent)";
                                    el.style.boxShadow = "0 0 0 1px rgba(94,106,210,0.5), 0 4px 20px rgba(94,106,210,0.3), inset 0 1px 0 0 rgba(255,255,255,0.15)";
                                    el.style.transform = "translateY(0)";
                                }}
                            >
                                {sending ? (
                                    <>
                                        <div style={{
                                            width: 16, height: 16, borderRadius: "50%",
                                            border: "2px solid rgba(255,255,255,0.3)",
                                            borderTopColor: "#fff",
                                            animation: "spin 0.8s linear infinite",
                                        }} />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={15} />
                                    </>
                                )}
                            </button>
                        </form>
                    )}

                    {/* Social links */}
                    <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 48 }}>
                        {socials.map(({ icon: Icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "flex", alignItems: "center", gap: 8,
                                    color: "var(--fg-muted)", textDecoration: "none",
                                    fontSize: 14,
                                    padding: "10px 16px",
                                    borderRadius: 10,
                                    border: "1px solid rgba(255,255,255,0.06)",
                                    background: "rgba(255,255,255,0.03)",
                                    transition: "all 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget;
                                    el.style.color = "var(--fg)";
                                    el.style.borderColor = "rgba(94,106,210,0.3)";
                                    el.style.background = "rgba(94,106,210,0.06)";
                                    el.style.transform = "translateY(-2px)";
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget;
                                    el.style.color = "var(--fg-muted)";
                                    el.style.borderColor = "rgba(255,255,255,0.06)";
                                    el.style.background = "rgba(255,255,255,0.03)";
                                    el.style.transform = "translateY(0)";
                                }}
                            >
                                <Icon size={16} />
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 540px) {
          form > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
