export default function Experience() {
  return (
    <>
      <section id={"experience"} className={"card exp reveal"}>
        <div className={"exp__head"}>
          <h2>Experience</h2>
          <span className={"mono"}>Work history · 2020 → 2025</span>
        </div>

        <div className={"exp__list"}>
          <article className={"exp__item"}>
            <div>
              <h3>IT Intern</h3>
              <p className={"exp__org"}>
                Department of Communication and Informatics, Karanganyar Regency
              </p>
              <p className={"exp__desc"}>
                Developed and built information systems for internal
                departmental needs using the Laravel framework.
              </p>
            </div>
            <div className={"exp__meta"}>
              <span className={"exp__date"}>Apr — May 2025</span>
              <span className={"mono"}>Karanganyar, Central Java</span>
            </div>
          </article>
          <article className={"exp__item"}>
            <div>
              <h3>3D Artist</h3>
              <p className={"exp__org"}>Kertas Putih Creative</p>
              <p className={"exp__desc"}>
                Designed and created 3D models aligned with each project's
                visual concept, arranged scene layouts and handled rendering —
                lighting and material adjustments — for polished final visuals.
              </p>
            </div>
            <div className={"exp__meta"}>
              <span className={"exp__date"}>2020 — 2021</span>
              <span className={"mono"}>Surakarta, Central Java</span>
            </div>
          </article>
        </div>

        <svg
          className={"exp__art"}
          viewBox={"0 0 320 300"}
          aria-hidden={"true"}
        >
          <use href={"#pc"} />
          <rect
            x={"88"}
            y={"42"}
            width={"54"}
            height={"7"}
            rx={"3.5"}
            fill={"#DAF65E"}
          />
          <rect
            x={"148"}
            y={"42"}
            width={"34"}
            height={"7"}
            rx={"3.5"}
            fill={"#F2EADB"}
          />
          <rect
            x={"100"}
            y={"58"}
            width={"70"}
            height={"7"}
            rx={"3.5"}
            fill={"#F2557E"}
          />
          <rect
            x={"176"}
            y={"58"}
            width={"40"}
            height={"7"}
            rx={"3.5"}
            fill={"#DAF65E"}
            opacity={".7"}
          />
          <rect
            x={"100"}
            y={"74"}
            width={"36"}
            height={"7"}
            rx={"3.5"}
            fill={"#F3CF3D"}
          />
          <rect
            x={"142"}
            y={"74"}
            width={"62"}
            height={"7"}
            rx={"3.5"}
            fill={"#F2EADB"}
            opacity={".8"}
          />
          <rect
            x={"112"}
            y={"90"}
            width={"88"}
            height={"7"}
            rx={"3.5"}
            fill={"#DAF65E"}
          />
          <rect
            x={"100"}
            y={"106"}
            width={"50"}
            height={"7"}
            rx={"3.5"}
            fill={"#F2EADB"}
          />
          <rect
            x={"88"}
            y={"122"}
            width={"30"}
            height={"7"}
            rx={"3.5"}
            fill={"#DAF65E"}
          />
          <rect
            className={"blink"}
            x={"124"}
            y={"120"}
            width={"8"}
            height={"11"}
            fill={"#F2EADB"}
          />
        </svg>
      </section>
    </>
  );
}
