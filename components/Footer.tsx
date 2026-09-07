"use client";

export default function Footer() {
    const year = new Date().getFullYear();

    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Work", href: "#work" },
        { label: "Contact", href: "#contact" },
    ];

    const handleNav = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer
            style={{
                background: "var(--bg-deep)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                padding: "32px 24px",
            }}
        >
            <div
                style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 16,
                }}
            >
                {/* Logo */}
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: "-0.02em", color: "var(--fg)" }}>
                        <span style={{ color: "var(--accent)" }}>{"<"}</span>
                        YN
                        <span style={{ color: "var(--accent)" }}>{" />"}</span>
                    </span>
                    <span style={{ color: "var(--fg-subtle)", fontSize: 13 }}>
                        © {year} · Made with obsessive attention to detail
                    </span>
                </div>

                {/* Nav links */}
                <nav style={{ display: "flex", gap: 4 }}>
                    {navLinks.map((l) => (
                        <button
                            key={l.href}
                            onClick={() => handleNav(l.href)}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                color: "var(--fg-muted)",
                                fontSize: 13,
                                padding: "6px 12px",
                                borderRadius: 6,
                                fontFamily: "inherit",
                                transition: "color 0.2s ease",
                            }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--fg)"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)"; }}
                        >
                            {l.label}
                        </button>
                    ))}
                </nav>
            </div>
        </footer>
    );
}
