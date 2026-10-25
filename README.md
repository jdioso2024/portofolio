# Portfolio Ariefin — React + Next.js

Migrasi `../index.html` ke React dan Next.js App Router. Tampilan, konten,
CSS responsif, ilustrasi SVG, dan aset asli dipertahankan. Proyek ini berdiri
sendiri; tidak perlu membaca file dari folder induk saat dijalankan.

## Menjalankan

Gunakan Node.js 20.9 atau lebih baru.

```sh
cd portfolio-nextjs
npm install
npm run dev
```

Buka http://localhost:3000. Jika PowerShell memblokir `npm.ps1`, gunakan
`npm.cmd install` dan `npm.cmd run dev`.

## Pemeriksaan dan produksi

```sh
npm run lint
npm run build
```

Build menghasilkan folder `out/` berisi HTML, CSS, JavaScript, dan aset statis.
Untuk preview hasil build, jalankan `npx serve out`. Mode static export memakai
server file statis untuk produksi; `next start` tidak digunakan.

Setelah lockfile tersedia, gunakan `npm ci` untuk instalasi dengan versi yang sama.

## Cloudflare Pages

- Framework preset: **Next.js (Static HTML Export)**.
- Build command: `npm run build`.
- Build output directory: `out`.
- Root directory: kosong jika `package.json` berada di root repository.

Konfigurasi `output: "export"` di `next.config.mjs` membuat folder `out/`
secara otomatis setiap build. Commit dan push perubahan konfigurasi ini sebelum
menjalankan deployment ulang.

## Struktur

- `src/app/page.jsx` — halaman utama yang menyusun seluruh bagian portfolio.
- `src/app/layout.jsx` — metadata SEO, favicon, font, dan layout utama.
- `src/app/globals.css` — stylesheet asli, termasuk breakpoint dan reduced motion.
- `src/components/` — hero, pengalaman, proyek, milestone, toolkit, kontak,
  header, footer, SVG, navigasi, animasi scroll, dan modal galeri.
- `src/data/projects.jsx` — judul, detail, gambar galeri, dan tautan prototype.
- `public/` — gambar portfolio serta `assets/logos` dan `assets/projects`.

Konten halaman memakai Server Components. Modal, carousel, navigasi aktif,
dan animasi scroll memakai Client Components. Modal mendukung tombol panah,
pagination, keyboard, swipe, Escape, penutupan lewat backdrop, dan pengembalian
fokus ke kartu pemicu.

Untuk mengganti galeri atau URL prototype, edit `src/data/projects.jsx`.
Google Fonts dimuat saat halaman dibuka; font sistem menjadi fallback jika
koneksi font tidak tersedia. Build tidak perlu mengunduh Google Fonts.

Referensi struktur: [dokumentasi Next.js](https://nextjs.org/docs/app/getting-started/installation).
