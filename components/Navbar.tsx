"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLink = (href: string) => {
        setOpen(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
                background: scrolled ? "rgba(5,5,6,0.85)" : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
            }}
        >
            <div
                style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    padding: "0 24px",
                    height: 64,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo */}
                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    style={{
                        fontWeight: 600,
                        fontSize: 18,
                        letterSpacing: "-0.02em",
                        color: "var(--fg)",
                        textDecoration: "none",
                    }}
                >
                    <span style={{ color: "var(--accent)" }}>{"<"}</span>
                    <span style={{ color: "var(--accent)" }}>{" />"}</span>
                </a>

                {/* Desktop nav */}
                <nav style={{ display: "flex", alignItems: "center", gap: 8 }} className="hidden-mobile">
                    {links.map((l) => (
                        <button
                            key={l.href}
                            onClick={() => handleLink(l.href)}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                color: "var(--fg-muted)",
                                fontSize: 14,
                                padding: "8px 14px",
                                borderRadius: 8,
                                transition: "color 0.2s ease, background 0.2s ease",
                                fontFamily: "inherit",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.color = "var(--fg)";
                                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)";
                                (e.currentTarget as HTMLElement).style.background = "none";
                            }}
                        >
                            {l.label}
                        </button>
                    ))}
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="show-mobile"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    style={{
                        background: "none",
                        border: "none",
                        color: "var(--fg)",
                        cursor: "pointer",
                        padding: 8,
                        borderRadius: 8,
                        display: "none",
                    }}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile dropdown */}
            <div
                style={{
                    overflow: "hidden",
                    maxHeight: open ? 320 : 0,
                    transition: "max-height 0.25s cubic-bezier(0.16,1,0.3,1), opacity 0.2s ease",
                    opacity: open ? 1 : 0,
                    background: "rgba(5,5,6,0.97)",
                    backdropFilter: "blur(24px)",
                    borderBottom: open ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
            >
                <div style={{ padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
                    {links.map((l) => (
                        <button
                            key={l.href}
                            onClick={() => handleLink(l.href)}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                color: "var(--fg-muted)",
                                fontSize: 16,
                                padding: "12px 16px",
                                borderRadius: 10,
                                textAlign: "left",
                                fontFamily: "inherit",
                                transition: "color 0.2s ease, background 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.color = "var(--fg)";
                                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)";
                                (e.currentTarget as HTMLElement).style.background = "none";
                            }}
                        >
                            {l.label}
                        </button>
                    ))}
                    <button
                        onClick={() => handleLink("#contact")}
                        style={{
                            marginTop: 8,
                            background: "var(--accent)",
                            color: "#fff",
                            border: "none",
                            borderRadius: 10,
                            padding: "14px 18px",
                            fontSize: 15,
                            fontWeight: 500,
                            cursor: "pointer",
                            fontFamily: "inherit",
                            boxShadow: "0 0 0 1px rgba(94,106,210,0.5), 0 4px 12px rgba(94,106,210,0.3)",
                        }}
                    >
                        Hire Me
                    </button>
                </div>
            </div>

            <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
        </header>
    );
}
