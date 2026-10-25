import { ProjectTrigger } from "./project-gallery";

export default function Projects() {
  return (
    <>
      <section id={"projects"}>
        <div className={"sec-title"}>
          <h2>
            Selected Projects<sup>(04)</sup>
          </h2>
          <p className={"mono"}>
            Freelance work across UI/UX design and front-end engineering · 2024
            — 2026
          </p>
        </div>

        <div className={"pgrid"}>
          <article className={"card card--open p-den reveal"}>
            <ProjectTrigger projectId="den" />
            <div className={"p-top"}>
              <svg
                width={"30"}
                height={"30"}
                aria-hidden={"true"}
                style={{ color: "var(--lime)" }}
              >
                <use href={"#sparkle"} />
              </svg>
              <span className={"p-tag"}>
                UI/UX <span aria-hidden={"true"}>×</span> Front-End
              </span>
            </div>

            <figure className={"project-mockup p-den__art"}>
              <img
                src={"/DEN.webp"}
                alt={"PT DEN website mockup on laptop and mobile"}
                width={"1254"}
                height={"1254"}
                loading={"lazy"}
                decoding={"async"}
              />
            </figure>

            <h3 className={"p-den__title"}>PT DEN</h3>
            <p className={"p-den__org"}>Dayana Energi Nusantara</p>
            <p className={"p-role"}>Frontend Developer · 2026 · Freelance</p>
            <ul>
              <li>
                Designed intuitive, responsive user interfaces and experiences.
              </li>
              <li>
                Implemented the designs into front-end code with a focus on
                functionality and accessibility.
              </li>
            </ul>

            <svg
              className={"badge spin"}
              viewBox={"-50 -50 100 100"}
              aria-hidden={"true"}
            >
              <circle
                r={"48"}
                fill={"#6B49EA"}
                stroke={"#F2EADB"}
                strokeWidth={"3"}
              />
              <circle
                r={"40"}
                fill={"none"}
                stroke={"#F2EADB"}
                strokeWidth={"1.5"}
              />
              <use
                href={"#bloom"}
                x={"-31"}
                y={"-31"}
                width={"62"}
                height={"62"}
                color={"#F2EADB"}
              />
            </svg>
          </article>

          <article className={"card p-dik reveal"}>
            <ProjectTrigger projectId="dikari" />
            <div className={"p-top"}>
              <svg aria-hidden={"true"}>
                <use href={"#clover"} />
              </svg>
              <span className={"p-tag"}>UI/UX x Front-End</span>
            </div>
            <h3 className={"p-dik__title"}>
              DIKARI
              <br />
              STRATEGIC
            </h3>
            <div className={"p-dik__body"}>
              <p className={"p-role"}>Front-End Developer · 2026 · Freelance</p>
              <p className={"p-desc"}>
                Built front-end pages from UI designs and styled responsive
                layouts so the site runs smoothly on both desktop and mobile.
              </p>
            </div>
            <figure className={"project-mockup p-dik__art"}>
              <img
                src={"/dikari.webp"}
                alt={"Dikari Strategic website mockup on laptop and mobile"}
                width={"1254"}
                height={"1254"}
                loading={"lazy"}
                decoding={"async"}
              />
            </figure>
          </article>

          <article className={"card p-phi reveal"}>
            <ProjectTrigger projectId="philia" />
            <div className={"p-top"}>
              <span className={"mono"}>Freelance · Remote</span>
              <span className={"p-tag"}>UI/UX Designer</span>
            </div>
            <h3 className={"p-phi__title"}>
              PHILIA
              <span className="p-phi__subtitle">Adventure Land</span>
            </h3>
            <figure className={"project-mockup p-phi__art"}>
              <img
                src={"/phillia.webp"}
                alt={
                  "Philia Adventure Land website mockup on laptop and mobile"
                }
                width={"1402"}
                height={"1122"}
                loading={"lazy"}
                decoding={"async"}
              />
            </figure>
            <div className={"p-phi__cols"}>
              <p className={"p-role"}>
                UI/UX Designer &middot; 2024 &middot; Freelance
              </p>
              <p>
                <b>Designed</b> user interfaces for the app
              </p>
              <p>
                <b>Built</b> interactive prototypes
              </p>
              <p>
                <b>Improved</b> usability &amp; overall UX
              </p>
            </div>
          </article>

          <article className={"card p-ana reveal"}>
            <ProjectTrigger projectId="anak-tangguh" />
            <div className={"p-ana__text"}>
              <h3 className={"p-ana__title"}>
                anak
                <br />
                tangguh
              </h3>
              <p className={"p-ana__list"}>
                Autism screening tool
                <br />
                Website on WordPress
                <br />
                Surakarta · 2024
              </p>
              <div>
                <p className={"p-role"}>WordPress Developer · Freelance</p>
                <p className={"p-desc"}>
                  Managed, designed and developed the website for the “Anak
                  Tangguh” autism screening tool project.
                </p>
              </div>
            </div>
            <div className={"p-ana__art"}>
              <svg className={"ast"} aria-hidden={"true"}>
                <use href={"#asterisk"} />
              </svg>
              <img
                src={"/AnakTangguh.webp"}
                alt={"Anak Tangguh screening website mockup on laptop"}
                width={"1254"}
                height={"1254"}
                loading={"lazy"}
                decoding={"async"}
              />
            </div>
          </article>

          <article
            className={"card p-stp reveal"}
            aria-label={"Design and build since 2020"}
          >
            <p className={"chunky"} aria-hidden={"true"}>
              Design
              <svg>
                <use href={"#asterisk"} />
              </svg>
              Build
              <br />
              Since 2020
            </p>
            <p className={"mono"}>From 3D scenes to interfaces to code</p>
          </article>
        </div>
      </section>
    </>
  );
}
