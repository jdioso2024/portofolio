export default function Contact() {
  return (
    <>
      <section id={"contact"} className={"card card--open contact reveal"}>
        <div className={"chat"} aria-hidden={"true"}>
          <div className={"chat__head"}>
            <span className={"chat__avatar"}>A</span>
            <div>
              <b>Ariefin, 2026</b>
              <small>● Online</small>
            </div>
          </div>
          <p className={"bubble bubble--in"}>
            Hi Ariefin! Are you open for a new UI/UX or front-end project?
          </p>
          <p className={"bubble bubble--out"}>
            Absolutely — tell me about it. Let's build something great together.
          </p>
          <div className={"voice"}>
            <span className={"voice__btn"}>
              <svg viewBox={"0 0 24 24"}>
                <path fill={"currentColor"} d={"M6 4h4v16H6zM14 4h4v16h-4z"} />
              </svg>
            </span>
            <span className={"wave"}>
              <i style={{ animationDelay: "-.1s" }} />
              <i style={{ animationDelay: "-.5s" }} />
              <i style={{ animationDelay: "-.2s" }} />
              <i style={{ animationDelay: "-.8s" }} />
              <i style={{ animationDelay: "-.3s" }} />
              <i style={{ animationDelay: "-.6s" }} />
              <i style={{ animationDelay: "-.15s" }} />
              <i style={{ animationDelay: "-.9s" }} />
              <i style={{ animationDelay: "-.4s" }} />
              <i style={{ animationDelay: "-.7s" }} />
              <i style={{ animationDelay: "-.25s" }} />
              <i style={{ animationDelay: "-.55s" }} />
              <i style={{ animationDelay: "-.05s" }} />
              <i style={{ animationDelay: "-.85s" }} />
            </span>
            <span className={"mono"}>0:13</span>
          </div>
        </div>

        <div className={"contact__body"}>
          <svg
            className={"contact__star"}
            viewBox={"0 0 100 100"}
            aria-hidden={"true"}
          >
            <use href={"#sparkle"} />
          </svg>
          <h2>
            Let's work <em>together.</em>
          </h2>
          <p>
            Open to freelance projects and full-time roles in UI/UX design and
            front-end development. Drop a message — I usually reply within a
            day.
          </p>
          <div className={"btns"}>
            <a className={"btn btn--solid"} href={"mailto:ariefinnh@gmail.com"}>
              ariefinnh@gmail.com{" "}
              <svg
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"2.4"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                aria-hidden={"true"}
              >
                <path d={"M5 12h14M13 6l6 6-6 6"} />
              </svg>
            </a>
            <a
              className={"btn btn--ghost"}
              href={"https://www.instagram.com/arifinnipin/"}
            >
              @arifinnipin
            </a>
          </div>
        </div>

        <svg
          className={"badge spin"}
          viewBox={"-50 -50 100 100"}
          aria-hidden={"true"}
        >
          <circle
            r={"48"}
            fill={"#F2EADB"}
            stroke={"#191919"}
            strokeWidth={"3"}
          />
          <circle
            r={"40"}
            fill={"none"}
            stroke={"#191919"}
            strokeWidth={"1.5"}
          />
          <use
            href={"#bloom"}
            x={"-31"}
            y={"-31"}
            width={"62"}
            height={"62"}
            color={"#191919"}
          />
        </svg>
      </section>
    </>
  );
}
