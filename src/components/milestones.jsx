import { ProjectTrigger } from "./project-gallery";

export default function Milestones() {
  return (
    <>
      <section id={"awards"}>
        <div className={"sec-title"}>
          <h2>Milestones</h2>
          <p className={"mono"}>Recognition &amp; education</p>
        </div>

        <div className={"bento"}>
          <article className={"card award s-7 reveal"}>
            <ProjectTrigger projectId="chandramawa" />
            <div className={"award__top"}>
              <span>MSU Malaysia · 2024</span>
              <span className={"clovers"} aria-hidden={"true"}>
                <svg>
                  <use href={"#clover"} />
                </svg>
                <svg>
                  <use href={"#clover"} />
                </svg>
                <svg>
                  <use href={"#clover"} />
                </svg>
              </span>
            </div>
            <div className={"award__content"}>
              <h3 className={"award__title"}>
                3<i>RD</i>
                <br />
                PLACE
              </h3>
              <p className={"award__comp"}>
                Business
                <br />
                Pitching
                <br />
                Competition
              </p>
              <svg
                className={"award__arrow"}
                viewBox={"0 0 60 60"}
                fill={"none"}
                stroke={"#191919"}
                strokeWidth={"3"}
                strokeLinecap={"round"}
                aria-hidden={"true"}
              >
                <path d={"M6 6 54 54M54 22v32H22"} />
              </svg>
              <p className={"award__role"}>
                Technology Lead · Chandramawa Team
                <span>
                  Owned the application flow and user-interface design, helping
                  the team secure 3rd place at Management and Science University
                  Malaysia <br /> an international-level competition.
                </span>
              </p>
            </div>

            <img
              className={"award__flowers"}
              src={"/Asset%203GG-transparent.png"}
              alt={""}
              loading={"lazy"}
            />
          </article>

          <article className={"card edu s-5 reveal"}>
            <div className={"edu__head"}>
              <h3>Education</h3>
              <svg
                className={"edu__frame"}
                viewBox={"0 0 70 70"}
                aria-hidden={"true"}
              >
                <rect
                  x={"3"}
                  y={"3"}
                  width={"64"}
                  height={"64"}
                  rx={"4"}
                  fill={"#E2B33C"}
                  stroke={"#191919"}
                  strokeWidth={"3"}
                />
                <rect
                  x={"12"}
                  y={"12"}
                  width={"46"}
                  height={"46"}
                  fill={"#6B49EA"}
                  stroke={"#191919"}
                  strokeWidth={"2"}
                />
                <path d={"M35 22 56 31 35 40 14 31Z"} fill={"#191919"} />
                <path d={"M22 35v9q13 7 26 0v-9l-13 5Z"} fill={"#191919"} />
                <path d={"M52 32v12"} stroke={"#F3CF3D"} strokeWidth={"3"} />
                <circle cx={"52"} cy={"46"} r={"3"} fill={"#F3CF3D"} />
              </svg>
            </div>
            <div>
              <p className={"edu__school"}>
                Universitas Muhammadiyah Surakarta
              </p>
              <div className={"edu__row"} style={{ marginTop: "10px" }}>
                <span>Bachelor of Informatics Engineering</span>
                <b>2022 — 2026</b>
              </div>
              <p className={"mono"} style={{ marginTop: "6px" }}>
                Sukoharjo, Central Java
              </p>
            </div>
            <span className={"edu__stamp"}>Graduate · Class of 2026</span>
            <svg
              className={"edu__op"}
              viewBox={"0 0 100 100"}
              aria-hidden={"true"}
            >
              <use href={"#op"} />
            </svg>
            <div className={"gpa"}>
              <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                <path
                  fill={"currentColor"}
                  d={
                    "M12 2l2.6 6.6L21 9.3l-5 4.4 1.5 6.8L12 17l-5.5 3.5L8 13.7 3 9.3l6.4-.7Z"
                  }
                />
              </svg>
              <strong>3.82</strong>
              <small>
                GPA
                <br />
                out of 4.00
              </small>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
