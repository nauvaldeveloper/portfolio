/**
 * DATA PORTFOLIO — tambah project baru cukup dengan menambah satu objek di PROJECTS.
 * Field `links` hanya diisi bila memang ada; tanpa link, tombol tidak ditampilkan sama sekali.
 * `label`: 'Tugas Akhir' | 'Client' | 'Konsep' | 'Produk' | '' (kosong = tanpa label)
 */
window.PORTFOLIO = {
  CATEGORIES: [
    { id: 'all', label: 'Semua' },
    { id: 'bisnis', label: 'Website Bisnis' },
    { id: 'sistem', label: 'Sistem & IoT' },
    { id: 'instansi', label: 'Website Instansi' },
    { id: 'undangan', label: 'Undangan Digital' },
  ],

  PROJECTS: [
    {
      id: 'stm', featured: true, cat: 'sistem', label: 'Tugas Akhir', year: '2026',
      title: 'STM — Smart Traffic Management',
      short: 'Platform lalu lintas Kabupaten Bandung: status jalan real-time dari sensor IoT dan CCTV, pengaduan warga, dan rute aman.',
      role: 'Modul 2 (tim 3 orang): penentuan status titik jalan dari sensor IoT dan analisis video CCTV.',
      stack: ['Laravel 12', 'PHP 8.2', 'MariaDB', 'Tailwind CSS', 'Leaflet', 'Python', 'Flask', 'YOLOv8s', 'OpenCV', 'ESP8266', 'HC-SR04', 'hls.js'],
      images: ['stm-2', 'stm-1', 'stm-3', 'stm-4', 'stm-cctv'],
      highlights: [
        'Status tiap titik jalan (Aman, Padat, Macet, Banjir, Data Tidak Tersedia) ditetapkan otomatis dengan menggabungkan data sensor ketinggian air dan hasil analisis CCTV.',
        'Layanan video menghitung kendaraan di dalam area pantau berbentuk poligon dengan YOLOv8s. Lima frame diambil berjeda 10 detik agar status tidak berubah hanya karena satu siklus lampu merah.',
        'Perangkat ESP8266 + HC-SR04 mengirim ketinggian air setiap 10 detik (median 5 pembacaan) ke API yang diamankan token per perangkat.',
        'Penjadwal Laravel memeriksa status setiap menit, sehingga titik yang sumbernya berhenti mengirim tetap ditandai "Data Tidak Tersedia".',
        'Diuji coba pada lima CCTV Dishub Kabupaten Bandung, termasuk perbandingan YOLOv8n, v8s, dan v8m untuk memilih model yang paling seimbang antara hasil dan kecepatan.',
      ],
      note: 'Platform dikerjakan bersama dua rekan: modul pengaduan warga dengan klasifikasi NLP dan modul rekomendasi rute aman.',
    },
    {
      id: 'absensi', cat: 'sistem', label: '', year: '',
      title: 'Sistem Absensi RFID IoT',
      short: 'Pencatatan kehadiran yang terhubung dengan perangkat RFID dan tampil secara real-time di aplikasi web.',
      role: '', stack: ['Web App', 'RFID', 'IoT'], images: [], highlights: [],
    },
    {
      id: 'thebold', cat: 'bisnis', label: 'Client', year: '2026',
      title: 'The Bold Barbershop',
      short: 'Website dan reservasi online barbershop di Baleendah: pilih tanggal, layanan, dan jam, lalu rincian booking terkirim ke WhatsApp admin.',
      role: 'Desain dan pengembangan', stack: ['HTML', 'Tailwind CSS', 'JavaScript'], images: ['thebold'],
      highlights: ['Alur reservasi 4 langkah yang nyaman di HP.', 'Total harga dihitung otomatis sesuai layanan.', 'Pesan booking ke WhatsApp tersusun rapi tanpa diketik ulang.'],
      links: [{ label: 'Kunjungi website', url: 'https://thebold-barbershop.site.je/' }],
    },
    {
      id: 'playroom', cat: 'bisnis', label: 'Konsep', year: '2026',
      title: 'Respawn Playroom',
      short: 'Rental ruangan PS5 & Nintendo Switch: jadwal live per ruangan dari Google Sheets, cari game, dan booking ke WhatsApp.',
      role: 'Konsep, desain, dan pengembangan', stack: ['HTML', 'CSS', 'JavaScript', 'Google Apps Script'], images: ['respawn-playroom'],
      highlights: ['Pengganti jadwal Canva: admin cukup memperbarui Google Sheets dari HP.', 'Pencarian game untuk tahu ruangan mana yang punya game tertentu.', 'Harga paket dihitung otomatis, lalu pesan booking terisi rapi.'],
      links: [{ label: 'Coba demo', url: 'https://booking-playroom-demo.nauvaldev.my.id/' }],
    },
    {
      id: 'kawa', cat: 'bisnis', label: 'Konsep', year: '2026',
      title: 'Kawa Kebun',
      short: 'Toko online roastery kopi: varian berat dan gilingan, keranjang belanja, dan checkout ke WhatsApp.',
      role: 'Konsep, desain, dan pengembangan', stack: ['HTML', 'CSS', 'JavaScript', 'SVG'], images: ['kawa-kebun'],
      highlights: ['Ilustrasi kemasan dibuat sebagai SVG dari data produk.', 'Jadwal sangrai berikutnya dihitung otomatis.', 'Ongkir gratis aktif otomatis di atas nominal tertentu.'],
      links: [{ label: 'Coba demo', url: 'https://kawa-kebun.nauvaldev.my.id/' }],
    },
    {
      id: 'rute', cat: 'bisnis', label: 'Konsep', year: '2026',
      title: 'Rute Kabut',
      short: 'Website open trip alam sekitar Bandung: jadwal keberangkatan dengan sisa kursi, profil ketinggian rute, dan hitung DP otomatis.',
      role: 'Konsep, desain, dan pengembangan', stack: ['HTML', 'CSS', 'JavaScript'], images: ['rute-kabut'],
      highlights: ['Papan jadwal dengan sisa kursi per keberangkatan.', 'Grafik profil ketinggian tiap rute.', 'Jumlah peserta dibatasi sisa kursi, DP 50% dan tanggal pelunasan terhitung otomatis.'],
      links: [{ label: 'Coba demo', url: 'https://rute-kabut.nauvaldev.my.id/' }],
    },
    {
      id: 'lajur', cat: 'bisnis', label: 'Konsep', year: '2026',
      title: 'Lajur Motor',
      short: 'Showroom motor bekas: filter unit, laporan inspeksi per bagian, simulasi kredit, dan jadwal test ride.',
      role: 'Konsep, desain, dan pengembangan', stack: ['HTML', 'CSS', 'JavaScript', 'SVG'], images: ['lajur-motor'],
      highlights: ['Catatan inspeksi ditampilkan apa adanya per bagian motor.', 'Angsuran dihitung dari DP dan tenor yang dipilih.', 'Ilustrasi motor per tipe mengikuti warna unit.'],
      links: [{ label: 'Coba demo', url: 'https://lajur-motor.nauvaldev.my.id/' }],
    },
    {
      id: 'etalase', cat: 'bisnis', label: 'Konsep', year: '2026',
      title: 'Kelas Etalase',
      short: 'Squeeze page pendaftaran workshop: satu form fokus, kode peserta, dan file kalender otomatis.',
      role: 'Konsep, desain, dan pengembangan', stack: ['HTML', 'CSS', 'JavaScript'], images: ['kelas-etalase'],
      highlights: ['Halaman satu tujuan tanpa navigasi yang mengalihkan.', 'File kalender .ics dengan pengingat H-1.', 'Siap terhubung ke Google Sheets untuk menyimpan pendaftar.'],
      links: [{ label: 'Coba demo', url: 'https://kelas-etalase.nauvaldev.my.id/' }],
    },
    {
      id: 'hurisol', cat: 'bisnis', label: '', year: '',
      title: 'Hurisol',
      short: 'Landing page UMKM camilan homemade dengan foto produk sebagai pusat perhatian dan pemesanan lewat WhatsApp.',
      role: 'Desain dan pengembangan', stack: ['HTML', 'CSS', 'JavaScript'], images: ['hurisol'], highlights: [],
    },
    {
      id: 'palekost', cat: 'bisnis', label: '', year: '',
      title: 'Pale Kost',
      short: 'Website kos eksklusif di Bandung: tipe kamar, fasilitas, harga sewa, dan jadwal survei.',
      role: 'Desain dan pengembangan', stack: ['HTML', 'CSS', 'JavaScript'], images: ['pale-kost'], highlights: [],
    },
    {
      id: 'barbers', cat: 'bisnis', label: '', year: '',
      title: 'Your Barbers',
      short: 'Website barbershop bernuansa tenang dan klasik untuk Baleendah & Buahbatu.',
      role: 'Desain dan pengembangan', stack: ['HTML', 'CSS', 'JavaScript'], images: ['barbers'], highlights: [],
    },
    {
      id: 'mechanic', cat: 'bisnis', label: '', year: '',
      title: 'Mechanic Cuts',
      short: 'Website barbershop bertema industrial dengan layanan, tim, galeri, dan reservasi.',
      role: 'Desain dan pengembangan', stack: ['HTML', 'CSS', 'JavaScript'], images: ['mechanic-cuts'], highlights: [],
    },
    {
      id: 'palebarber', cat: 'bisnis', label: '', year: '',
      title: 'Pale Barber',
      short: 'Website barbershop premium dengan nuansa gelap dan aksen emas.',
      role: 'Desain dan pengembangan', stack: ['HTML', 'CSS', 'JavaScript'], images: ['pale-barber'], highlights: [],
    },
    {
      id: 'perpus', cat: 'instansi', label: '', year: '',
      title: 'Website Perpustakaan Fakultas',
      short: 'Website perpustakaan dengan quick access layanan, rekomendasi buku, katalog, dan statistik koleksi.',
      role: 'Desain dan pengembangan', stack: ['HTML', 'CSS', 'JavaScript'], images: ['perpus-fah', 'perpus-fib'], highlights: [],
    },
    {
      id: 'nauvite', cat: 'undangan', label: 'Produk', year: '',
      title: 'Nauvite',
      short: 'Bisnis undangan pernikahan digital: tema eksklusif, interaktif, dan mudah dibagikan.',
      role: 'Pendiri, desain dan pengembangan', stack: ['Web', 'Undangan Digital'], images: ['nauvite'], highlights: [],
      links: [{ label: 'Kunjungi Nauvite', url: 'https://nauvite.my.id/' }],
    },
    {
      id: 'memoria', cat: 'undangan', label: '', year: '2026',
      title: 'Memoria — Hima SIKC',
      short: 'Undangan acara perayaan perjalanan himpunan dengan nuansa panggung teater.',
      role: 'Desain dan pengembangan', stack: ['HTML', 'CSS', 'JavaScript'], images: ['memoria'], highlights: [],
    },
  ],

  TIMELINE: [
    { when: 'Jun 2023', title: 'Project Manager Team 1 (PKL)', org: 'PT. Inovindo Digital Media', text: 'PKL 3 bulan, memimpin Team 1 SMKN 7 Baleendah dalam alur kerja proyek, koordinasi tim, dan pengembangan sistem web.', img: 'cert-pkl' },
    { when: 'Mar 2024', title: 'Sertifikasi Software Development', org: 'BNSP', text: 'Sertifikasi kompetensi nasional KKNI Level II di bidang rekayasa perangkat lunak.', img: 'cert-bnsp' },
    { when: 'Jul 2024', title: 'Laravel Web Development', org: 'Sanbercode', text: 'Bootcamp dari dasar HTML, CSS, JS, PHP, database, dan Git sampai Laravel (MVC, Eloquent, CRUD, deployment).', img: 'cert-laravel' },
    { when: 'Jun 2025', title: 'FIT Expo 2025', org: 'Telkom University', text: 'Terpilih mendemonstrasikan proyek platform terintegrasi di hadapan civitas akademika dan pengunjung.', img: 'expo-tech' },
    { when: 'Jul 2026', title: 'AI Ready ASEAN', org: 'ASEAN Foundation', text: 'Pelatihan dan sertifikasi keterampilan dasar kecerdasan buatan.', img: 'cert-aiready' },
    { when: '2026', title: 'Nauval Dev & Nauvite', org: 'Bisnis sendiri', text: 'Menjalankan jasa pembuatan website untuk bisnis lokal dan layanan undangan digital.', img: '' },
  ],

  STACK: [
    { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Leaflet'] },
    { group: 'Backend', items: ['PHP', 'Laravel', 'MySQL / MariaDB', 'REST API'] },
    { group: 'Data & AI', items: ['Python', 'Flask', 'YOLOv8', 'OpenCV'] },
    { group: 'IoT', items: ['ESP8266', 'Arduino (C++)', 'Sensor ultrasonik', 'RFID'] },
    { group: 'Tools', items: ['Git & GitHub', 'Vercel', 'Cloudflare', 'Google Apps Script'] },
  ],

  SOCIALS: [
    { label: 'GitHub', url: 'https://github.com/NauvalRafi16' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nauval16/' },
    { label: 'Instagram', url: 'https://www.instagram.com/valrafadput/' },
  ],

  CONTACT_URL: 'https://nauvaldev.my.id/',
};
