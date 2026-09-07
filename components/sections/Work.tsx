"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { useMouseSpotlight } from "@/hooks/useMouseSpotlight";

interface Project {
    title: string;
    description: string;
    tech: string[];
    role: string;
    colSpan?: string;
    rowSpan?: string;
    accentColor?: string;
    hasImage?: boolean;
    link?: string;
    imageUrl?: string;
    overview?: string;
}

const projects: Project[] = [
    {
        title: "Chandramawa",
        description: "A high-performance SaaS dashboard with real-time data visualization and complex state management.",
        tech: ["Next.js", "TypeScript", "GSAP", "Postgres"],
        role: "Lead Engineer",
        colSpan: "col-span-2",
        rowSpan: "row-span-2",
        accentColor: "rgba(94,106,210,0.3)",
        hasImage: true,
        imageUrl: "/projects/Chandramaw.webp",
        overview: "Detailed case study content goes here. You can describe the challenges faced, the architecture decisions made, and the outcome of the project.",
    },
    {
        title: "Phillia Adventure Park",
        description: "Website experience untuk adventure park yang dirancang untuk memperkenalkan wahana, memberikan informasi kunjungan, dan memudahkan pengunjung menemukan aktivitas petualangan mereka.",
        tech: ["Figma"],
        role: "UI/UX Designer",
        accentColor: "rgba(99,102,241,0.25)",
        hasImage: true,
        imageUrl: "/projects/phillia2.webp",
        overview: "Design website ini dirancang dengan pendekatan responsive design agar pengalaman menjelajah tetap nyaman baik melalui desktop maupun mobile.",
    },
    {
        title: "Company Profile PT Dayana Energi Nusantara",
        description: "Mobile-first design system built from scratch, deployed across 3 products.",
        tech: ["React", "NEXT"],
        role: "Design Engineer",
        accentColor: "rgba(139,92,246,0.25)",
        imageUrl: "/projects/DEN.webp",
        overview: "Detailed case study content goes here. You can describe the challenges faced, the architecture decisions made, and the outcome of the project.",
    },
    {
        title: "Project Delta",
        description: "AI-powered writing tool with real-time collaboration and rich-text editing.",
        tech: ["Next.js", "OpenAI", "Y.js", "Supabase"],
        role: "Fullstack",
        colSpan: "col-span-2",
        accentColor: "rgba(79,70,229,0.25)",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        overview: "Detailed case study content goes here. You can describe the challenges faced, the architecture decisions made, and the outcome of the project.",
    },
    {
        title: "Project Epsilon",
        description: "Developer tool CLI + web interface for managing cloud infrastructure.",
        tech: ["Node.js", "React", "Docker", "AWS"],
        role: "Backend + UI",
        accentColor: "rgba(67,56,202,0.25)",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        overview: "Detailed case study content goes here. You can describe the challenges faced, the architecture decisions made, and the outcome of the project.",
    },
];

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick?: () => void }) {
    const { ref, spotRef, onMouseMove, onMouseLeave: spotLeave } = useMouseSpotlight();

    return (
        <div
            ref={ref}
            onClick={onClick}
            onMouseMove={onMouseMove}
            style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 20,
                background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
                padding: 32,
                cursor: "pointer",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 2px 20px rgba(0,0,0,0.3)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: index === 0 ? 360 : 200,
                height: "100%",
            }}
            onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(94,106,210,0.25)";
                el.style.boxShadow = "0 0 0 1px rgba(255,255,255,0.10), 0 8px 40px rgba(0,0,0,0.5), 0 0 80px rgba(94,106,210,0.08)";
                el.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(255,255,255,0.06)";
                el.style.boxShadow = "0 0 0 1px rgba(255,255,255,0.06), 0 2px 20px rgba(0,0,0,0.3)";
                el.style.transform = "translateY(0)";
                spotLeave();
            }}
        >
            {/* Spotlight */}
            <div ref={spotRef} style={{ position: "absolute", inset: 0, transition: "opacity 0.3s ease", opacity: 0, pointerEvents: "none" }} />

            {/* Accent glow blob */}
            <div style={{
                position: "absolute", bottom: -40, right: -40,
                width: 200, height: 200,
                background: `radial-gradient(circle, ${project.accentColor || "rgba(94,106,210,0.2)"} 0%, transparent 70%)`,
                filter: "blur(40px)", pointerEvents: "none",
            }} />

            {/* Top accent line */}
            <div style={{
                position: "absolute", top: 0, left: 24, right: 24, height: 1,
                background: "linear-gradient(to right, transparent, rgba(94,106,210,0.3), transparent)",
            }} />

            {/* Header */}
            <div style={{ position: "relative", zIndex: 2 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <span style={{
                        fontSize: 11, fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase",
                        color: "rgba(94,106,210,0.8)",
                        background: "rgba(94,106,210,0.1)",
                        border: "1px solid rgba(94,106,210,0.2)",
                        borderRadius: 100, padding: "3px 10px",
                    }}>
                        {project.role}
                    </span>
                    <div style={{
                        width: 32, height: 32, borderRadius: 8,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "background 0.2s, border-color 0.2s",
                    }}>
                        <ArrowUpRight size={14} color="var(--fg-muted)" />
                    </div>
                </div>

                <h3 style={{
                    fontSize: index === 0 ? 24 : 18, fontWeight: 600, letterSpacing: "-0.02em",
                    color: "var(--fg)", margin: "0 0 12px",
                }}>
                    {project.title}
                </h3>
                <p style={{ color: "var(--fg-muted)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                    {project.description}
                </p>
            </div>

            {project.hasImage && (
                <div style={{
                    marginTop: 24,
                    flexGrow: 1,
                    background: "rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: 12,
                    position: "relative",
                    overflow: "hidden",
                }}>
                    <img
                        src={project.imageUrl || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"}
                        alt={`${project.title} preview`}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            opacity: 0.8,
                            position: "absolute",
                            inset: 0,
                            transition: "transform 0.5s ease",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                    />
                    {/* Fallback gradient overlay to blend it with the dark theme */}
                    <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, var(--bg-base), transparent)`, opacity: 0.6, pointerEvents: "none" }} />
                </div>
            )}

            {/* Footer */}
            <div style={{ position: "relative", zIndex: 2, marginTop: 24, display: "flex", flexWrap: "wrap", gap: 6 }}>
                {project.tech.map((t) => (
                    <span key={t} style={{
                        fontSize: 12, color: "var(--fg-muted)",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: 100, padding: "3px 10px",
                    }}>
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Work() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<HTMLDivElement[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        (async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);

            gsap.fromTo(
                cardRefs.current,
                { opacity: 0, y: 50, scale: 0.97 },
                {
                    opacity: 1, y: 0, scale: 1,
                    duration: 0.7, ease: "power3.out",
                    stagger: 0.1,
                    scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
                }
            );
        })();
    }, []);

    return (
        <section
            id="work"
            ref={sectionRef}
            style={{
                padding: "clamp(80px, 10vw, 160px) 24px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
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
                        03 / Work
                    </span>
                    <div style={{ width: 40, height: 1, background: "var(--accent)", opacity: 0.6 }} />
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
                    <h2 className="text-gradient" style={{
                        fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 600,
                        letterSpacing: "-0.03em", lineHeight: 1.1, margin: 0,
                    }}>
                        Selected projects
                    </h2>
                    <p style={{ color: "var(--fg-muted)", fontSize: 14, margin: 0, maxWidth: 300 }}>
                        A curated selection of work — placeholder content until the real projects are added.
                    </p>
                </div>

                {/* Bento grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 16,
                    }}
                >
                    {/* Hero card - spans 2 cols, 2 rows */}
                    <div
                        ref={(el) => { if (el) cardRefs.current[0] = el; }}
                        style={{ gridColumn: "span 2", gridRow: "span 2", opacity: 0 }}
                    >
                        <ProjectCard project={projects[0]} index={0} onClick={() => setSelectedProject(projects[0])} />
                    </div>

                    {/* Right top */}
                    <div ref={(el) => { if (el) cardRefs.current[1] = el; }} style={{ opacity: 0 }}>
                        <ProjectCard project={projects[1]} index={1} onClick={() => setSelectedProject(projects[1])} />
                    </div>

                    {/* Right bottom */}
                    <div ref={(el) => { if (el) cardRefs.current[2] = el; }} style={{ opacity: 0 }}>
                        <ProjectCard project={projects[2]} index={2} onClick={() => setSelectedProject(projects[2])} />
                    </div>

                    {/* Bottom left - spans 2 */}
                    <div
                        ref={(el) => { if (el) cardRefs.current[3] = el; }}
                        style={{ gridColumn: "span 2", opacity: 0 }}
                    >
                        <ProjectCard project={projects[3]} index={3} onClick={() => setSelectedProject(projects[3])} />
                    </div>

                    {/* Bottom right */}
                    <div ref={(el) => { if (el) cardRefs.current[4] = el; }} style={{ opacity: 0 }}>
                        <ProjectCard project={projects[4]} index={4} onClick={() => setSelectedProject(projects[4])} />
                    </div>
                </div>

                {/* Mobile: override to single column */}
                <style>{`
          @media (max-width: 768px) {
            #work .bento-grid {
              grid-template-columns: 1fr !important;
            }
            #work .bento-grid > * {
              grid-column: span 1 !important;
              grid-row: span 1 !important;
            }
          }
        `}</style>
            </div>

            {/* Modal Overlay */}
            {selectedProject && (
                <div
                    style={{
                        position: "fixed", inset: 0, zIndex: 100,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        padding: 24,
                        background: "rgba(0,0,0,0.7)", backdropFilter: "blur(12px)",
                        animation: "fadeIn 0.2s ease-out forwards",
                    }}
                    onClick={() => setSelectedProject(null)}
                >
                    {/* Modal Content Wrapper */}
                    <div
                        style={{
                            background: "linear-gradient(135deg, rgba(30,30,35,0.95), rgba(15,15,20,0.95))",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: 24,
                            width: "100%", maxWidth: 1400,
                            maxHeight: "90vh",
                            position: "relative",
                            overflow: "hidden", // Clips the inner scrollbar!
                            boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 100px rgba(94,106,210,0.1)",
                            animation: "slideUp 0.4s cubic-bezier(0.16,1,0.3,1) forwards",
                            display: "flex",
                            flexDirection: "column",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Static Close Button (stays fixed top right) */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            style={{
                                position: "absolute", top: 24, right: 24,
                                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.05)",
                                width: 40, height: 40, borderRadius: "50%",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                cursor: "pointer", color: "var(--fg-muted)", transition: "all 0.2s",
                                zIndex: 10,
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "var(--fg)" }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "var(--fg-muted)" }}
                        >
                            <X size={20} />
                        </button>

                        {/* Scrollable Container */}
                        <div
                            className="custom-scrollbar"
                            style={{
                                flexGrow: 1,
                                overflowY: "auto", overflowX: "hidden",
                                padding: "48px",
                                position: "relative"
                            }}
                        >
                            {/* Abstract glow inside modal */}
                            <div style={{ position: "absolute", top: -100, right: -100, width: 300, height: 300, background: selectedProject.accentColor || "rgba(94,106,210,0.15)", filter: "blur(80px)", borderRadius: "50%", pointerEvents: "none" }} />

                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: 48,
                                alignItems: "start",
                                position: "relative", zIndex: 2
                            }}>
                                {/* Left Column: Square Image */}
                                <div style={{ borderRadius: 16, overflow: "hidden", position: "relative", border: "1px solid rgba(255,255,255,0.05)", aspectRatio: "1 / 1", width: "100%" }}>
                                    <img
                                        src={selectedProject.imageUrl || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"}
                                        alt={selectedProject.title}
                                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                                    />
                                </div>

                                {/* Right Column: Details */}
                                <div>
                                    <div style={{ marginBottom: 32 }}>
                                        <span style={{ fontSize: 13, fontFamily: "monospace", letterSpacing: "0.1em", color: "var(--accent)", textTransform: "uppercase", background: "rgba(94,106,210,0.1)", padding: "4px 12px", borderRadius: 100, border: "1px solid rgba(94,106,210,0.2)" }}>
                                            {selectedProject.role}
                                        </span>
                                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "var(--fg)", margin: "16px 0 24px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                                            {selectedProject.title}
                                        </h2>

                                        {/* CTA Button */}
                                        <a
                                            href={selectedProject.link || "#"}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{
                                                display: "inline-flex", alignItems: "center", gap: 8,
                                                background: "rgba(255,255,255,0.08)", color: "var(--fg)",
                                                border: "1px solid rgba(255,255,255,0.15)",
                                                padding: "12px 24px", borderRadius: 100,
                                                fontSize: 15, fontWeight: 500, textDecoration: "none",
                                                transition: "background 0.2s, transform 0.2s",
                                            }}
                                            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "translateY(-2px)" }}
                                            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)" }}
                                        >
                                            View Prototype <ArrowUpRight size={16} />
                                        </a>
                                    </div>

                                    <p style={{ color: "var(--fg-muted)", fontSize: 17, lineHeight: 1.8, marginBottom: 32 }}>
                                        {selectedProject.description}
                                    </p>

                                    <h4 style={{ color: "var(--fg)", fontSize: 18, fontWeight: 500, marginBottom: 16 }}>Overview</h4>
                                    <p style={{ color: "var(--fg-muted)", fontSize: 16, lineHeight: 1.8, marginBottom: 40, whiteSpace: "pre-wrap" }}>
                                        {selectedProject.overview || "Detailed case study content goes here. You can describe the challenges faced, the architecture decisions made, and the outcome of the project."}
                                    </p>

                                    <h4 style={{ color: "var(--fg)", fontSize: 18, fontWeight: 500, marginBottom: 16 }}>Tech Stack</h4>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                        {selectedProject.tech.map((t) => (
                                            <span key={t} style={{
                                                fontSize: 14, color: "var(--fg-muted)",
                                                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
                                                borderRadius: 100, padding: "6px 16px",
                                            }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fadeIn { from { opacity: 0; backdrop-filter: blur(0px); } to { opacity: 1; backdrop-filter: blur(12px); } }
                @keyframes slideUp { from { opacity: 0, transform: translateY(40px) scale(0.96) } to { opacity: 1, transform: translateY(0) scale(1) } }
                
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </section>
    );
}
