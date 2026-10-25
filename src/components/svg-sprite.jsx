export default function SvgSprite() {
  return (
    <svg className={"sprite"} aria-hidden={"true"} focusable={"false"}>
      <defs>
        <pattern
          id={"keys"}
          width={"14"}
          height={"11"}
          patternUnits={"userSpaceOnUse"}
        >
          <rect
            x={"1.5"}
            y={"1.5"}
            width={"11"}
            height={"8"}
            rx={"2"}
            fill={"#D7CDB7"}
            stroke={"#191919"}
            strokeWidth={"1.2"}
          />
        </pattern>
        <pattern
          id={"dots"}
          width={"8"}
          height={"8"}
          patternUnits={"userSpaceOnUse"}
        >
          <circle cx={"4"} cy={"4"} r={"1.6"} fill={"#191919"} opacity={".4"} />
        </pattern>
        <linearGradient id={"xp"} x1={"0"} y1={"0"} x2={"0"} y2={"1"}>
          <stop offset={"0"} stopColor={"#3D8BEA"} />
          <stop offset={"1"} stopColor={"#A9D8FF"} />
        </linearGradient>
        <clipPath id={"sunclip"}>
          <circle cx={"285"} cy={"95"} r={"62"} />
        </clipPath>

        <symbol id={"sparkle"} viewBox={"0 0 100 100"}>
          <path
            fill={"currentColor"}
            d={
              "M50 0C54 34 66 46 100 50C66 54 54 66 50 100C46 66 34 54 0 50C34 46 46 34 50 0Z"
            }
          />
        </symbol>

        <symbol id={"clover"} viewBox={"-24 -24 48 48"}>
          <g fill={"currentColor"}>
            <circle cy={"-11"} r={"10"} />
            <circle cx={"11"} r={"10"} />
            <circle cy={"11"} r={"10"} />
            <circle cx={"-11"} r={"10"} />
            <circle r={"7"} />
          </g>
        </symbol>

        <symbol id={"asterisk"} viewBox={"-20 -20 40 40"}>
          <g stroke={"currentColor"} strokeWidth={"7"} strokeLinecap={"round"}>
            <path d={"M0-16V16M-14-8L14 8M-14 8L14-8"} />
          </g>
        </symbol>

        <symbol id={"bloom"} viewBox={"-50 -50 100 100"}>
          <g fill={"currentColor"}>
            <ellipse cy={"-24"} rx={"11"} ry={"21"} />
            <ellipse cy={"-24"} rx={"11"} ry={"21"} transform={"rotate(45)"} />
            <ellipse cy={"-24"} rx={"11"} ry={"21"} transform={"rotate(90)"} />
            <ellipse cy={"-24"} rx={"11"} ry={"21"} transform={"rotate(135)"} />
            <ellipse cy={"-24"} rx={"11"} ry={"21"} transform={"rotate(180)"} />
            <ellipse cy={"-24"} rx={"11"} ry={"21"} transform={"rotate(225)"} />
            <ellipse cy={"-24"} rx={"11"} ry={"21"} transform={"rotate(270)"} />
            <ellipse cy={"-24"} rx={"11"} ry={"21"} transform={"rotate(315)"} />
            <circle r={"12"} />
          </g>
        </symbol>

        <symbol id={"smiley"} viewBox={"0 0 100 100"}>
          <circle
            cx={"50"}
            cy={"50"}
            r={"44"}
            stroke={"currentColor"}
            strokeWidth={"7"}
            style={{ fill: "var(--fill,none)" }}
          />
          <ellipse
            cx={"36"}
            cy={"40"}
            rx={"5"}
            ry={"8"}
            fill={"currentColor"}
          />
          <ellipse
            cx={"64"}
            cy={"40"}
            rx={"5"}
            ry={"8"}
            fill={"currentColor"}
          />
          <path
            d={"M28 58Q50 82 72 58"}
            fill={"none"}
            stroke={"currentColor"}
            strokeWidth={"7"}
            strokeLinecap={"round"}
          />
        </symbol>

        <symbol id={"petals"} viewBox={"-60 -60 120 120"}>
          <g
            stroke={"#191919"}
            strokeWidth={"2.6"}
            style={{ fill: "var(--petal,#fff)" }}
          >
            <ellipse cy={"-32"} rx={"12"} ry={"22"} />
            <ellipse cy={"-32"} rx={"12"} ry={"22"} transform={"rotate(36)"} />
            <ellipse cy={"-32"} rx={"12"} ry={"22"} transform={"rotate(72)"} />
            <ellipse cy={"-32"} rx={"12"} ry={"22"} transform={"rotate(108)"} />
            <ellipse cy={"-32"} rx={"12"} ry={"22"} transform={"rotate(144)"} />
            <ellipse cy={"-32"} rx={"12"} ry={"22"} transform={"rotate(180)"} />
            <ellipse cy={"-32"} rx={"12"} ry={"22"} transform={"rotate(216)"} />
            <ellipse cy={"-32"} rx={"12"} ry={"22"} transform={"rotate(252)"} />
            <ellipse cy={"-32"} rx={"12"} ry={"22"} transform={"rotate(288)"} />
            <ellipse cy={"-32"} rx={"12"} ry={"22"} transform={"rotate(324)"} />
          </g>
          <circle
            r={"19"}
            stroke={"#191919"}
            strokeWidth={"2.6"}
            style={{ fill: "var(--core,#F3CF3D)" }}
          />
        </symbol>
        <symbol id={"face-happy"} viewBox={"-60 -60 120 120"}>
          <g
            fill={"none"}
            stroke={"#191919"}
            strokeWidth={"2.8"}
            strokeLinecap={"round"}
          >
            <path d={"M-12-3q4-6 8 0M4-3q4-6 8 0M-10 5q10 11 20 0"} />
          </g>
        </symbol>
        <symbol id={"face-smile"} viewBox={"-60 -60 120 120"}>
          <circle cx={"-6"} cy={"-4"} r={"2.6"} fill={"#191919"} />
          <circle cx={"6"} cy={"-4"} r={"2.6"} fill={"#191919"} />
          <path
            d={"M-9 5q9 9 18 0"}
            fill={"none"}
            stroke={"#191919"}
            strokeWidth={"2.8"}
            strokeLinecap={"round"}
          />
        </symbol>
        <symbol id={"face-wobble"} viewBox={"-60 -60 120 120"}>
          <g
            fill={"none"}
            stroke={"#191919"}
            strokeWidth={"2.8"}
            strokeLinecap={"round"}
          >
            <path
              d={"M-12-2q4-5 8 0M4-2q4-5 8 0M-9 8q3-4 6 0q3 4 6 0q3-4 6 0"}
            />
          </g>
        </symbol>
        <symbol id={"face-x"} viewBox={"-60 -60 120 120"}>
          <g
            fill={"none"}
            stroke={"#191919"}
            strokeWidth={"2.8"}
            strokeLinecap={"round"}
          >
            <path d={"M-12-9l7 7M-5-9l-7 7M5-9l7 7M12-9l-7 7M-6 8h12"} />
          </g>
        </symbol>

        <symbol id={"op"} viewBox={"0 0 100 100"}>
          <circle cx={"50"} cy={"50"} r={"48"} fill={"#191919"} />
          <circle cx={"51.8"} cy={"48.5"} r={"42"} fill={"#F2EADB"} />
          <circle cx={"53.6"} cy={"47"} r={"36"} fill={"#191919"} />
          <circle cx={"55.4"} cy={"45.5"} r={"30"} fill={"#F2EADB"} />
          <circle cx={"57.2"} cy={"44"} r={"24"} fill={"#191919"} />
          <circle cx={"59"} cy={"42.5"} r={"18"} fill={"#F2EADB"} />
          <circle cx={"60.8"} cy={"41"} r={"12"} fill={"#191919"} />
          <circle cx={"62.6"} cy={"39.5"} r={"6"} fill={"#F2EADB"} />
        </symbol>

        <symbol id={"pc"} viewBox={"0 0 320 300"}>
          <g fill={"#191919"} transform={"translate(8 8)"}>
            <rect x={"50"} y={"8"} width={"220"} height={"182"} rx={"16"} />
            <path d={"M118 190h84l10 22H108z"} />
            <path d={"M34 232h252l22 52H12z"} />
          </g>
          <g stroke={"#191919"} strokeWidth={"3"} strokeLinejoin={"round"}>
            <rect
              x={"50"}
              y={"8"}
              width={"220"}
              height={"182"}
              rx={"16"}
              fill={"#ECE4D2"}
            />
            <rect
              x={"66"}
              y={"22"}
              width={"188"}
              height={"132"}
              rx={"10"}
              fill={"#CFC5B0"}
            />
            <rect
              x={"76"}
              y={"30"}
              width={"168"}
              height={"116"}
              rx={"6"}
              fill={"#2D47D8"}
            />
            <rect
              x={"192"}
              y={"164"}
              width={"50"}
              height={"9"}
              rx={"3"}
              fill={"#CFC5B0"}
            />
            <circle cx={"76"} cy={"169"} r={"5"} fill={"#86B66E"} />
            <path d={"M118 190h84l10 22H108z"} fill={"#DCD2BD"} />
            <path d={"M34 232h252l22 52H12z"} fill={"#ECE4D2"} />
            <path
              d={"M44 240h232l14 34H30z"}
              fill={"url(#keys)"}
              strokeWidth={"2"}
            />
          </g>
          <rect
            x={"92"}
            y={"161"}
            width={"34"}
            height={"15"}
            rx={"4"}
            fill={"#DAF65E"}
            stroke={"#191919"}
            strokeWidth={"2"}
          />
          <text
            x={"109"}
            y={"172"}
            textAnchor={"middle"}
            fontFamily={"Space Mono, monospace"}
            fontSize={"10"}
            fontWeight={"700"}
            fill={"#191919"}
          >
            &lt;/&gt;
          </text>
        </symbol>
      </defs>
    </svg>
  );
}
