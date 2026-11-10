# Nauval Rafi — Portfolio v3

Portofolio pribadi: web developer & pendiri Nauval Dev dan Nauvite.
HTML/CSS/JS biasa (tanpa build tool, tanpa Tailwind CDN). Buka `index.html` langsung di browser.

## Struktur
```
index.html
assets/css/style.css
assets/js/data.js   ← SEMUA isi: project, timeline, stack, sosial media, link kontak
assets/js/app.js    ← render, filter, detail project, menu
assets/img/work/    ← screenshot project (WebP)
assets/img/cert/    ← sertifikat & dokumentasi
assets/img/me/      ← foto
```

## Menambah project
Tambahkan satu objek di `PROJECTS` pada `assets/js/data.js`, lalu taruh gambarnya di `assets/img/work/<nama>.webp`.

| Field | Isi |
|---|---|
| `cat` | `bisnis` · `sistem` · `instansi` · `undangan` |
| `label` | `Client` · `Konsep` · `Tugas Akhir` · `Produk` · kosongkan bila tidak perlu |
| `images` | nama file tanpa `.webp`; gambar pertama jadi gambar kartu |
| `links` | isi hanya bila memang ada; tanpa link, tombol tidak ditampilkan |
| `featured` | `true` untuk project unggulan di atas grid (cukup satu) |

## Catatan
- Tidak menampilkan nomor telepon atau email; tombol kontak mengarah ke nauvaldev.my.id.
- CV hanya penanda "tersedia atas permintaan", tidak bisa diunduh.
