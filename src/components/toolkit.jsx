export default function Toolkit() {
  return (
    <>
      <section id={"skills"}>
        <div className={"sec-title"}>
          <h2>Toolkit</h2>
          <p className={"mono"}>Skills &amp; technologies</p>
        </div>

        <div className={"bento"}>
          <article className={"card tools s-7 reveal"}>
            <div className={"tools__visual"}>
              <div className={"tools__monitor"}>
                <svg
                  className={"tools__art"}
                  viewBox={"0 0 320 300"}
                  role={"img"}
                  aria-label={
                    "Retro computer showing design and development tools"
                  }
                >
                  <use href={"#pc"} />
                  <rect
                    x={"77.5"}
                    y={"31.5"}
                    width={"165"}
                    height={"113"}
                    rx={"5"}
                    fill={"url(#xp)"}
                  />
                  <path
                    d={
                      "M78 122c40-22 100-26 164-8v26a5 5 0 0 1-5 5H83a5 5 0 0 1-5-5Z"
                    }
                    fill={"#5DAA3C"}
                  />
                  <g
                    fontFamily={"Space Mono, monospace"}
                    fontSize={"12"}
                    fontWeight={"700"}
                    textAnchor={"middle"}
                    stroke={"#191919"}
                    strokeWidth={"1.6"}
                  >
                    <rect
                      x={"88"}
                      y={"42"}
                      width={"30"}
                      height={"30"}
                      rx={"6"}
                      fill={"#1E1E1E"}
                    />
                    <image
                      href={"/assets/logos/figma.svg"}
                      x={"93"}
                      y={"47"}
                      width={"20"}
                      height={"20"}
                      preserveAspectRatio={"xMidYMid meet"}
                    />
                    <rect
                      x={"126"}
                      y={"42"}
                      width={"30"}
                      height={"30"}
                      rx={"6"}
                      fill={"#001E36"}
                    />
                    <image
                      href={"/assets/logos/photoshop.svg"}
                      x={"129"}
                      y={"45"}
                      width={"24"}
                      height={"24"}
                      preserveAspectRatio={"xMidYMid meet"}
                    />
                    <rect
                      x={"164"}
                      y={"42"}
                      width={"30"}
                      height={"30"}
                      rx={"6"}
                      fill={"#330000"}
                    />
                    <image
                      href={"/assets/logos/illustrator.svg"}
                      x={"167"}
                      y={"45"}
                      width={"24"}
                      height={"24"}
                      preserveAspectRatio={"xMidYMid meet"}
                    />
                    <rect
                      x={"202"}
                      y={"42"}
                      width={"30"}
                      height={"30"}
                      rx={"6"}
                      fill={"#F2EADB"}
                    />
                    <image
                      href={"/assets/logos/canva.svg"}
                      x={"205"}
                      y={"45"}
                      width={"24"}
                      height={"24"}
                      preserveAspectRatio={"xMidYMid meet"}
                    />
                    <rect
                      x={"88"}
                      y={"80"}
                      width={"30"}
                      height={"30"}
                      rx={"6"}
                      fill={"#F2EADB"}
                    />
                    <image
                      href={"/assets/logos/vscode.svg"}
                      x={"92"}
                      y={"84"}
                      width={"22"}
                      height={"22"}
                      preserveAspectRatio={"xMidYMid meet"}
                    />
                    <rect
                      x={"126"}
                      y={"80"}
                      width={"30"}
                      height={"30"}
                      rx={"6"}
                      fill={"#F2EADB"}
                    />
                    <image
                      href={"/assets/logos/blender.svg"}
                      x={"130"}
                      y={"84"}
                      width={"22"}
                      height={"22"}
                      preserveAspectRatio={"xMidYMid meet"}
                    />
                    <rect
                      x={"164"}
                      y={"80"}
                      width={"30"}
                      height={"30"}
                      rx={"6"}
                      fill={"#F2EADB"}
                    />
                    <image
                      href={"/assets/logos/unity.svg"}
                      x={"168"}
                      y={"84"}
                      width={"22"}
                      height={"22"}
                      preserveAspectRatio={"xMidYMid meet"}
                    />
                    <rect
                      x={"202"}
                      y={"80"}
                      width={"30"}
                      height={"30"}
                      rx={"6"}
                      fill={"#F2EADB"}
                    />
                    <text x={"217"} y={"99"} fill={"#191919"} stroke={"none"}>
                      +
                    </text>
                  </g>
                </svg>
              </div>
            </div>
            <div className={"tools__side"}>
              <svg
                className={"tools__cup"}
                viewBox={"0 0 60 70"}
                aria-hidden={"true"}
              >
                <g
                  stroke={"#191919"}
                  strokeWidth={"2.5"}
                  strokeLinejoin={"round"}
                >
                  <rect
                    x={"13"}
                    y={"6"}
                    width={"7"}
                    height={"34"}
                    fill={"#F3CF3D"}
                    transform={"rotate(-12 16 40)"}
                  />
                  <rect
                    x={"26"}
                    y={"2"}
                    width={"7"}
                    height={"38"}
                    fill={"#D9473B"}
                  />
                  <rect
                    x={"39"}
                    y={"8"}
                    width={"7"}
                    height={"32"}
                    fill={"#6B49EA"}
                    transform={"rotate(12 42 40)"}
                  />
                  <path d={"M9 34h42l-5 32H14z"} fill={"#1F4EB4"} />
                </g>
              </svg>
              <h3>
                Software
                <br />
                Skill
              </h3>
              <ul className={"tools__list"}>
                <li>
                  Figma <span>UI/UX design</span>
                </li>
                <li>
                  Canva <span>Visual design</span>
                </li>
                <li>
                  Adobe Creative Suite <span>Graphics</span>
                </li>
                <li>
                  Visual Studio Code <span>Development</span>
                </li>
                <li>
                  Blender &amp; Unity <span>3D &amp; interactive</span>
                </li>
              </ul>
            </div>
          </article>

          <article className={"card stack s-5 reveal"}>
            <h3>
              Languages <em>&amp;</em> Web
            </h3>
            <div className={"stack__group"}>
              <p className={"mono"}>Programming</p>
              <ul className={"pills"}>
                <li className={"pill pill--on"}>JavaScript</li>
                <li className={"pill"}>Python</li>
                <li className={"pill"}>PHP</li>
              </ul>
            </div>
            <div className={"stack__group"}>
              <p className={"mono"}>Web &amp; Software</p>
              <ul className={"pills"}>
                <li className={"pill"}>HTML</li>
                <li className={"pill"}>CSS</li>
                <li className={"pill pill--on"}>React</li>
                <li className={"pill pill--on"}>Laravel</li>
                <li className={"pill"}>WordPress</li>
              </ul>
            </div>
            <div className={"stack__group"}>
              <p className={"mono"}>Design practice</p>
              <ul className={"pills"}>
                <li className={"pill"}>UI Design</li>
                <li className={"pill pill--on"}>Prototyping</li>
                <li className={"pill"}>Responsive Layout</li>
                <li className={"pill"}>3D Modeling</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
