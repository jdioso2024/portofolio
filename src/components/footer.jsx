export default function Footer() {
  return (
    <>
      <footer className={"foot"}>
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
        <a href={"https://www.instagram.com/arifinnipin/"}>@arifinnipin</a>
        <span>Surakarta, Central Java, Indonesia</span>
        <span>© 2026 Ariefin Nur Hidayat</span>
      </footer>
    </>
  );
}
