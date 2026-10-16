PRD --- SPACE PORTFOLIO
Website Portofolio Profesional Bertema Luar Angkasa dengan React.js
Jenis dokumen: Product Requirements Document (PRD)
Nama produk: Space Portfolio
Platform: Website responsif
Teknologi utama: React.js, Vite, JavaScript, CSS3
Status: Spesifikasi implementasi untuk AI Agent / OpenCode
1. Peran dan Tanggung Jawab AI Agent
Bertindaklah sebagai Senior React.js Developer, UI/UX Designer, Frontend
Engineer, dan Web Performance Specialist.
Tugas utama adalah membangun website portofolio pribadi bertema luar
angkasa (Space / Cosmic / Deep Space) menggunakan React.js dan
JavaScript. Website harus memiliki desain yang khas, elegan, futuristik,
interaktif, mudah digunakan, dan responsif pada desktop, laptop, tablet,
serta smartphone.
Website harus benar-benar dapat dijalankan. Seluruh navigasi, tombol,
filter project, menu mobile, dan interaksi lainnya harus berfungsi
sesuai tujuannya.
Jangan hanya memberikan konsep, screenshot, mockup, atau contoh kode.
Implementasikan website secara langsung pada repository project yang
tersedia.
Aturan pengerjaan
1. Audit repository sebelum mengubah kode.
2. Jika repository sudah memiliki kode, pertahankan struktur dan
   konfigurasi yang masih relevan.
3. Jangan menghapus atau menulis ulang bagian yang tidak perlu.
4. Jangan berhenti setelah membuat hero section; implementasikan
   seluruh section dan interaksi utama.
5. Jangan membuat tombol, link, atau status yang hanya menjadi hiasan.
6. Jangan mengarang data profil, pengalaman, kontak, project, atau
   tautan.
7. Jika data belum tersedia, gunakan placeholder yang jelas dan mudah
   diganti.
8. Laporkan secara jujur fitur yang selesai, konfigurasi yang belum
   tersedia, dan pengujian yang benar-benar sudah dilakukan.
2. Visi, Tujuan, dan Konsep Produk
2.1 Visi
Membangun website portofolio profesional dengan identitas visual luar
angkasa yang kuat, untuk menampilkan profil, kemampuan teknis, karya,
dan informasi kontak pemilik website.
2.2 Tujuan website
Website harus membantu pengunjung untuk:
- Mengenal pemilik portofolio.
- Memahami kemampuan dan teknologi yang digunakan.
- Melihat project yang pernah dibuat.
- Memahami peran pemilik dalam setiap project.
- Membuka demo atau repository project jika tersedia.
- Menghubungi pemilik dengan mudah.
- Mengakses seluruh informasi dengan nyaman dari perangkat desktop
  maupun mobile.
2.3 Konsep visual
Nama konsep: Space Portfolio --- Explore My Digital Universe.
Gunakan inspirasi visual dari:
- Deep space dan galaksi.
- Bintang kecil yang tersebar secara natural.
- Nebula biru dan ungu.
- Planet dan garis orbit.
- Cahaya kosmik yang lembut.
- Panel antarmuka modern.
- Garis tipis dan detail astronomi minimalis.
Tema luar angkasa harus menjadi identitas visual utama, bukan sekadar
background hitam dengan gambar astronaut.
2.4 Karakter desain
- Professional.
- Futuristic.
- Minimalist.
- Elegant.
- Immersive.
- Clean.
- Responsive.
- Human-centered.
- Easy to navigate.
Hindari desain yang terlalu ramai, gradient berlebihan, efek neon di
semua elemen, animasi yang mengganggu, serta dekorasi yang membuat teks
sulit dibaca.
Konten portofolio tetap menjadi fokus utama.
3. Teknologi yang Wajib Digunakan
Gunakan teknologi berikut:
- React.js.
- Vite.
- JavaScript ES6+.
- HTML5 semantik.
- CSS3.
- React Hooks.
- Lucide React untuk ikon.
- CSS Grid dan Flexbox.
- CSS media queries.
- Intersection Observer jika dibutuhkan untuk mendeteksi section yang
  sedang terlihat.
Ketentuan teknis
1. Gunakan JavaScript, bukan TypeScript, untuk project baru.
2. Gunakan CSS biasa atau CSS Modules.
3. Jangan menggunakan Tailwind CSS.
4. Bootstrap 5 tidak wajib; utamakan CSS biasa jika sudah mencukupi.
5. Gunakan komponen React yang dapat digunakan kembali.
6. Pisahkan data profil, skill, dan project dari komponen tampilan.
7. Hindari dependency yang tidak diperlukan.
8. Gunakan React Router hanya jika memang diperlukan.
9. Jangan membuat backend palsu atau mengklaim integrasi telah
   berfungsi jika belum dikonfigurasi.
10. Jangan melakukan manipulasi DOM langsung jika state React sudah
    mencukupi.
11. Jika repository yang tersedia sudah menggunakan konfigurasi yang
    sesuai, pertahankan dan adaptasikan implementasi tanpa merusak
    project.
4. Design System dan Identitas Visual
4.1 Palet warna
Gunakan warna berikut sebagai dasar design system:
  Elemen                Warna
  Background utama      #050816
  Background sekunder   #080D20
  Surface               #0B1228
  Surface alternatif    #101A35
  Primary blue          #3B82F6
  Electric blue         #38BDF8
  Nebula purple         #8B5CF6
  Teks utama            #F8FAFC
  Teks sekunder         #A7B4CC
  Border                #243453
  Success               #34D399
  Error                 #F87171
Gunakan biru sebagai warna interaksi utama. Ungu hanya menjadi aksen
pendukung, bukan warna dominan pada seluruh komponen.
4.2 Background kosmik
Buat background melalui beberapa lapisan visual:
1. Warna dasar deep navy.
2. Radial gradient biru atau ungu dengan intensitas lembut.
3. Bintang kecil dengan tingkat opacity bervariasi.
4. Nebula abstrak yang tidak mengganggu konten.
5. Elemen orbit atau planet pada bagian tertentu.
Gunakan CSS untuk efek sederhana dan ringan. Jika menggunakan gambar
background, pilih aset yang sesuai, optimal, dan mudah diganti.
Jangan membuat terlalu banyak elemen DOM untuk bintang. Gunakan
pseudo-element, CSS background, atau pendekatan ringan lainnya.
Pastikan kontras teks tetap baik.
4.3 Tipografi
Gunakan font modern seperti Inter atau Plus Jakarta Sans.
Ketentuan:
- Heading tegas dan jelas.
- Body text nyaman dibaca.
- Ukuran heading responsif, misalnya menggunakan clamp().
- Line-height paragraf nyaman.
- Lebar paragraf dibatasi agar mudah dibaca.
- Gunakan jumlah ukuran font yang konsisten.
- Hindari font futuristik yang mengorbankan keterbacaan.
4.4 Komponen visual
Gunakan secara konsisten:
- Border tipis berwarna biru gelap.
- Shadow lembut.
- Radius komponen yang konsisten.
- Button dengan kontras tinggi.
- Badge teknologi minimalis.
- Ikon sederhana.
- Spacing teratur.
- Hover, focus, dan active state yang jelas.
Efek glow hanya digunakan pada elemen penting seperti tombol utama,
indikator aktif, atau bagian hero tertentu. Jangan memberikan glow pada
semua card dan teks.
5. Struktur Navigasi Utama
Website wajib memiliki lima fitur utama:
1. Home.
2. Tentang Saya.
3. Project.
4. Contact.
5. Hubungi Saya.
Empat menu pertama menjadi navigasi section utama. Hubungi Saya menjadi
tombol CTA (Call to Action) yang lebih menonjol.
5.1 Navbar desktop
Navbar harus memiliki:
- Logo atau wordmark di sebelah kiri.
- Menu navigasi di bagian tengah atau kanan.
- Tombol Hubungi Saya di sisi kanan.
- Background transparan atau semi-transparan sesuai tema.
- Border bawah halus jika diperlukan.
- Indikator menu aktif.
- Posisi sticky di bagian atas.
Logo cukup menggunakan nama atau wordmark pemilik website. Jangan
membuat branding rumit yang tidak diperlukan.
5.2 Interaksi navbar
- Home menuju section Home.
- Tentang Saya menuju section About.
- Project menuju section Project.
- Contact menuju section Contact.
- Hubungi Saya menuju Contact atau WhatsApp jika telah dikonfigurasi.
- Gunakan smooth scrolling.
- Perhitungkan tinggi navbar ketika menggulir ke section.
- Indikator menu aktif harus sesuai dengan section yang sedang
  terlihat.
- Hindari indikator aktif yang berkedip atau tidak konsisten.
Gunakan Intersection Observer jika diperlukan untuk mendeteksi section
aktif.
5.3 Navbar mobile
Pada smartphone:
- Ubah menu menjadi hamburger.
- Gunakan tombol dengan aria-label yang jelas.
- Tampilkan menu dalam panel yang rapi.
- Gunakan background yang konsisten dengan tema.
- Menu dapat dibuka dan ditutup.
- Menu menutup setelah pengunjung memilih navigasi.
- Menu dapat ditutup menggunakan tombol Escape.
- Panel tidak boleh keluar dari viewport.
- Jangan membuat menu menutupi seluruh layar tanpa alasan.
- Jangan mengandalkan hover untuk menjalankan fungsi.
6. Section Home --- Hero
Hero adalah bagian pertama yang dilihat pengunjung dan harus membentuk
kesan profesional.
6.1 Komposisi hero
Pada desktop, gunakan layout dua kolom jika sesuai.
Kolom kiri:
- Sapaan singkat.
- Nama pemilik.
- Profesi.
- Headline utama.
- Deskripsi singkat.
- Tombol Lihat Project.
- Tombol Hubungi Saya.
- Ikon media sosial yang tersedia.
Kolom kanan:
- Ilustrasi astronaut, planet, atau visual kosmik.
- Elemen orbit tipis.
- Aksen nebula.
- Detail visual yang memperkuat tema.
Pada mobile, susun konten menjadi satu kolom dengan urutan yang logis.
Jangan memaksakan layout dua kolom jika ukuran layar tidak mencukupi.
6.2 Konten hero
Gunakan struktur berikut sebagai contoh awal yang mudah diedit:
Sapaan: Halo, saya
Nama: Bima
Profesi: Web Developer
Headline: Building Digital Experiences Beyond Boundaries.
Deskripsi: Saya seorang Web Developer yang tertarik membangun
aplikasi web yang fungsional, responsif, dan mudah digunakan. Saya terus
mengembangkan kemampuan dalam frontend dan backend untuk menciptakan
solusi digital yang bermanfaat.
Tombol utama:
- Lihat Project.
- Hubungi Saya.
Semua teks harus mudah diubah melalui file konfigurasi profil.
Jangan menambahkan klaim pengalaman profesional, penghargaan, atau
keahlian yang belum dikonfirmasi.
6.3 Visual hero
Gunakan visual astronaut atau planet yang berkualitas dan sesuai tema.
Ketentuan:
- Visual tidak boleh menutupi headline.
- Gunakan gambar dengan kualitas baik.
- Pertahankan rasio gambar.
- Hindari gambar pecah atau terdistorsi.
- Jangan menggunakan terlalu banyak gambar dekoratif yang saling
  bersaing.
- Pastikan area visual tidak menyebabkan layout bergeser ketika
  halaman dimuat.
Jika aset belum tersedia, gunakan placeholder yang mudah diganti. Jangan
mengklaim ilustrasi sebagai foto diri pemilik.
6.4 Animasi hero
Tambahkan animasi halus:
- Headline muncul secara bertahap jika sesuai.
- Visual hero mengalami gerakan ringan jika sesuai.
- Bintang berkedip sangat halus.
- Tombol memiliki hover transition.
- Elemen orbit bergerak perlahan jika tidak mengganggu.
Hindari animasi yang terlalu cepat, berkedip tajam, atau menyebabkan
pusing.
Hormati pengaturan prefers-reduced-motion.
6.5 Perilaku CTA hero
- Lihat Project menggulir ke section Project.
- Hubungi Saya mengarah ke Contact atau membuka WhatsApp jika nomor
  valid telah dikonfigurasi.
- Semua tombol harus memiliki fungsi nyata.
7. Section Tentang Saya
Buat section Tentang Saya yang profesional, personal, dan mudah dibaca.
Jangan membuat section ini seperti CV yang terlalu panjang. Gunakan
paragraf singkat dengan pembagian informasi yang jelas.
7.1 Informasi profil
Tampilkan:
- Foto profil jika tersedia.
- Nama.
- Profesi.
- Deskripsi diri.
- Ketertarikan dalam web development.
- Perjalanan belajar.
- Fokus pengembangan saat ini.
- Pendekatan ketika membangun aplikasi.
Contoh deskripsi awal:
Saya tertarik pada pengembangan aplikasi web, mulai dari merancang
antarmuka hingga membangun fitur yang terhubung dengan database. Saya
senang mempelajari teknologi baru, menyelesaikan masalah, dan
mengembangkan project sebagai bagian dari proses belajar.

Jadikan teks tersebut sebagai konten awal yang dapat disesuaikan.
Jangan mengarang riwayat pendidikan, tempat kerja, sertifikat, atau
pengalaman profesional.
7.2 Layout
Pada desktop:
- Gunakan kombinasi teks dan visual profil.
- Tambahkan panel informasi sederhana jika diperlukan.
- Berikan jarak yang cukup antar-elemen.
- Hindari terlalu banyak card kecil.
Pada mobile:
- Gunakan satu kolom.
- Pastikan paragraf mudah dibaca.
- Batasi ukuran gambar profil.
- Hindari teks terlalu rapat.
7.3 Skill dan teknologi
Kelompokkan skill menjadi beberapa kategori.
Frontend - HTML5. - CSS3. - JavaScript. - React.js. - Bootstrap 5.
Backend - PHP. - Laravel.
Database - MySQL.
Tools - Git. - GitHub. - Visual Studio Code.
Data skill harus dapat diedit dari file konfigurasi.
Tampilkan teknologi sebagai badge, ikon, atau daftar yang rapi. Jangan
membuat progress bar persentase skill yang tidak memiliki dasar
objektif. Jangan menyatakan seluruh teknologi dikuasai secara
profesional jika pemilik belum mengonfirmasi tingkat kemampuannya.
8. Section Project --- Digital Universe
Section Project harus menjadi salah satu bagian paling menonjol dari
portofolio.
Konsep visualnya adalah galeri karya digital dalam sebuah universe.
Setiap project direpresentasikan sebagai kartu yang memiliki preview,
informasi, dan tindakan yang jelas.
8.1 Heading section
Judul contoh: Projects I've Built
Deskripsi contoh:
Beberapa project yang menjadi bagian dari perjalanan saya dalam
mempelajari dan mengembangkan aplikasi web.

Teks harus dapat diubah melalui konfigurasi.
8.2 Layout project
Gunakan grid responsif:
- Desktop lebar: 3 kolom jika ruang mencukupi.
- Laptop atau tablet: 2 kolom.
- Smartphone: 1 kolom.
Setiap card memiliki:
- Thumbnail project.
- Nama project.
- Deskripsi singkat.
- Kategori.
- Teknologi yang digunakan.
- Status project jika relevan.
- Tombol Detail Project.
- Link Live Demo jika tersedia.
- Link GitHub jika tersedia.
Gunakan rasio gambar yang konsisten dan object-fit: cover. Jangan
membuat card terlalu tinggi atau terlalu padat.
8.3 Gaya visual card
- Background surface sedikit berbeda dari halaman.
- Border tipis.
- Shadow lembut.
- Hover dengan perubahan border atau elevasi yang halus.
- Gambar tidak terdistorsi.
- Badge teknologi berukuran konsisten.
- Tombol mudah dikenali.
- Informasi penting tetap terlihat di mobile.
Jangan menggunakan tilt 3D berlebihan atau efek neon yang mengganggu.
8.4 Filter project
Sediakan filter:
- Semua.
- React.js.
- Laravel.
- PHP Native.
- Lainnya.
Filter harus berfungsi menggunakan state React.
Ketentuan:
- Project berubah sesuai kategori yang dipilih.
- Tombol kategori aktif memiliki indikator visual.
- Perubahan filter tidak menyebabkan reload halaman.
- Filter tetap nyaman digunakan di mobile.
- Kategori tanpa project tidak perlu ditampilkan.
- Jika tidak ada hasil, tampilkan empty state yang jelas.
- Kategori harus berasal dari data project agar tidak terjadi
  ketidaksinkronan.
8.5 Detail project
Ketika pengunjung memilih Detail Project, tampilkan halaman detail atau
modal yang aksesibel.
Informasi yang dapat ditampilkan:
- Nama project.
- Screenshot.
- Latar belakang.
- Masalah yang ingin diselesaikan.
- Tujuan.
- Fitur utama.
- Teknologi.
- Peran pemilik.
- Tantangan dan solusi jika tersedia.
- Live demo jika tersedia.
- Repository GitHub jika tersedia.
Jika menggunakan modal:
- Modal dapat ditutup dengan tombol close.
- Tombol Escape berfungsi.
- Fokus keyboard dikelola dengan baik.
- Background tidak dapat di-scroll ketika modal terbuka jika
  diperlukan.
- Modal tetap muat pada smartphone.
Jika menggunakan halaman detail, sediakan navigasi kembali yang jelas.
Jangan membuat tombol detail yang tidak melakukan apa pun.
8.6 Data project awal
Siapkan data project yang mudah diedit. Project awal berikut dapat
dimasukkan sebagai contoh dan harus diverifikasi oleh pemilik.
NeighborHub
- Deskripsi: Konsep aplikasi untuk mendukung pengelolaan lingkungan
  tempat tinggal.
- Teknologi: Laravel, PHP, MySQL.
- Kategori: Laravel.
Kasir Laravel
- Deskripsi: Aplikasi kasir untuk mengelola produk, pelanggan, dan
  transaksi.
- Teknologi: Laravel, PHP, MySQL.
- Kategori: Laravel.
BeautyCare
- Deskripsi: Konsep aplikasi pengelolaan layanan kecantikan, produk,
  dan operasional bisnis.
- Teknologi: Laravel, PHP, JavaScript, MySQL.
- Kategori: Laravel.
Raliva
- Deskripsi: Konsep marketplace fashion dengan pengelolaan toko dan
  proses operasional.
- Teknologi: Laravel, PHP, JavaScript, MySQL.
- Kategori: Laravel.
Project tersebut merupakan data awal yang perlu diverifikasi. Jangan
menyatakan bahwa seluruh project sudah live, selesai, atau digunakan
secara komersial tanpa konfirmasi.
Struktur data harus memungkinkan pemilik menambahkan project React.js,
PHP Native, atau teknologi lain.
8.7 Gambar project
Utamakan screenshot aplikasi asli.
Jika belum tersedia:
- Gunakan placeholder yang konsisten.
- Berikan komentar pada data untuk menunjukkan lokasi penggantian
  gambar.
- Jangan menampilkan gambar yang menyesatkan seolah-olah merupakan
  screenshot aplikasi asli.
- Jangan menggunakan URL gambar yang tidak diketahui validitasnya.
- Pastikan gambar yang gagal dimuat tidak merusak layout.
Simpan data project di src/data/projects.js.
9. Section Contact
Buat section Contact dengan desain profesional yang konsisten dengan
tema luar angkasa.
Tujuan section ini adalah memudahkan pengunjung menghubungi pemilik
portofolio.
9.1 Komposisi layout
Pada desktop, gunakan dua kolom.
Kolom informasi: - Heading. - Deskripsi singkat. - Email. -
GitHub. - LinkedIn jika tersedia. - WhatsApp jika tersedia.
Kolom formulir: - Nama. - Email. - Subjek. - Pesan. - Tombol Kirim
Pesan.
Pada mobile, ubah menjadi satu kolom dengan urutan yang logis.
9.2 Formulir kontak
Field:
- Nama --- wajib diisi.
- Email --- wajib diisi dan divalidasi.
- Subjek --- wajib diisi.
- Pesan --- wajib diisi.
Tambahkan:
- Label input yang jelas.
- Validasi frontend.
- Pesan error yang mudah dipahami.
- Indikator loading.
- Pencegahan pengiriman ganda saat proses berlangsung.
- Status sukses hanya jika layanan benar-benar mengonfirmasi
  pengiriman.
- Status gagal jika pengiriman tidak berhasil.
Jangan mengosongkan formulir sebelum proses pengiriman berhasil.
9.3 Integrasi pengiriman
Jangan membuat formulir yang berpura-pura mengirim pesan.
Pilih mekanisme yang sesuai:
1. EmailJS dengan konfigurasi yang benar.
2. API backend jika tersedia.
3. mailto: sebagai alternatif sederhana.
Jika menggunakan EmailJS:
- Dokumentasikan setup di README.
- Gunakan environment variable untuk konfigurasi yang diperlukan.
- Jangan memasukkan secret key privat ke dalam kode frontend.
- Tangani respons sukses dan gagal dengan benar.
Jika layanan pengiriman belum dikonfigurasi, tampilkan petunjuk yang
jelas dan jangan menampilkan pesan sukses palsu.
9.4 Informasi kontak
Semua informasi kontak harus berasal dari file konfigurasi.
Jangan mengarang email, nomor WhatsApp, URL GitHub, URL LinkedIn, atau
alamat pribadi.
Sembunyikan item yang belum memiliki nilai valid.
10. Tombol Hubungi Saya
Hubungi Saya merupakan CTA utama website dan harus terlihat jelas di
navbar maupun hero.
Perilaku:
- Navbar: menuju section Contact.
- Hero: menuju Contact atau WhatsApp jika dikonfigurasi.
- Detail project: dapat menyediakan CTA tambahan jika relevan.
- Footer: menyediakan tautan menuju Contact.
Jika menggunakan WhatsApp:
- Gunakan nomor yang telah diberikan pemilik.
- Gunakan format internasional yang benar untuk URL WhatsApp.
- Pesan awal dapat diisi otomatis jika diperlukan.
- Jangan menampilkan nomor contoh sebagai nomor asli.
- Jangan membuka tautan WhatsApp yang tidak valid.
Pastikan tombol memiliki hover, focus, dan active state yang jelas.
11. Footer
Buat footer minimalis yang sesuai dengan identitas Space Portfolio.
Isi:
- Nama atau wordmark.
- Deskripsi singkat.
- Navigasi Home, Tentang Saya, Project, dan Contact.
- Link media sosial yang valid.
- Copyright dengan tahun otomatis.
Gunakan background yang menyatu dengan tema halaman. Tambahkan garis
pemisah atau aksen kosmik yang halus jika diperlukan.
Jangan membuat footer terlalu tinggi atau penuh informasi yang tidak
diperlukan.
12. Responsive Design --- Prioritas Utama
Website wajib responsif pada berbagai perangkat.
12.1 Target viewport
- 320 px.
- 360 px.
- 375 px.
- 390 px.
- 430 px.
- 768 px.
- 1024 px.
- 1280 px.
- 1440 px.
- 1920 px.
Gunakan pendekatan mobile-first.
12.2 Ketentuan responsivitas
1. Gunakan CSS Grid dan Flexbox.
2. Gunakan max-width untuk membatasi lebar konten.
3. Gunakan clamp() untuk ukuran yang perlu menyesuaikan viewport.
4. Gunakan rem, %, minmax(), dan unit fleksibel sesuai kebutuhan.
5. Hindari fixed width yang membuat elemen melampaui viewport.
6. Pastikan tidak ada horizontal overflow.
7. Navbar berubah menjadi hamburger pada breakpoint yang sesuai.
8. Hero berubah menjadi satu kolom pada layar kecil.
9. Ukuran gambar menyesuaikan ruang yang tersedia.
10. Grid project berubah menjadi 2 kolom atau 1 kolom sesuai kebutuhan.
11. Tombol nyaman digunakan dengan sentuhan.
12. Formulir mudah digunakan pada smartphone.
13. Modal tetap berada di dalam viewport.
14. Judul tidak terpotong.
15. Badge teknologi dapat membungkus ke baris berikutnya.
16. Background dekoratif tidak menimbulkan scroll horizontal.
17. Informasi penting tidak disembunyikan hanya untuk menyesuaikan
    layar.
18. Semua interaksi penting dapat digunakan tanpa hover.
19. Spacing antar-section disesuaikan untuk mobile.
20. Navigasi tidak menutupi heading ketika pengunjung berpindah section.
Jangan menganggap website responsif hanya karena media query sudah
dibuat. Periksa hasil layout pada ukuran yang ditentukan.
13. Animasi dan Interaksi
Gunakan animasi yang mendukung pengalaman pengguna.
Animasi yang diperbolehkan:
- Smooth scrolling.
- Transisi navbar.
- Hover pada tombol.
- Hover pada project card.
- Fade-in atau slide-up ringan saat section muncul.
- Gerakan dekorasi kosmik yang sangat perlahan.
- Transisi menu mobile.
- Feedback pada filter project.
- Feedback formulir kontak.
Ketentuan:
- Animasi tidak boleh menghalangi klik.
- Animasi tidak boleh membuat teks sulit dibaca.
- Jangan menggunakan animasi terus-menerus pada semua elemen.
- Hindari layout shift.
- Hindari parallax berat.
- Hindari custom cursor yang mengganggu.
- Jangan membuat bintang berkedip berlebihan.
- Gunakan prefers-reduced-motion.
- Gunakan transform dan opacity jika sesuai untuk animasi ringan.
Utamakan performa dan kenyamanan pengguna.
14. Aksesibilitas
Implementasikan standar aksesibilitas dasar:
- HTML semantik.
- Hierarki heading yang benar.
- Label untuk seluruh input.
- Alt text untuk gambar.
- Focus state yang terlihat.
- Kontras warna yang memadai.
- Navigasi keyboard.
- aria-label untuk tombol ikon.
- aria-expanded untuk hamburger menu.
- Pesan error formulir yang jelas.
- Pengelolaan fokus untuk modal.
- Tombol memiliki ukuran klik yang memadai.
Jangan mengandalkan warna saja untuk menunjukkan status atau kesalahan.
Pastikan elemen dekoratif tidak mengganggu pembaca layar.
15. Struktur Folder
Gunakan struktur modular berikut jika project masih baru:
src/
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Button.jsx
│   ├── SectionTitle.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectFilter.jsx
│   └── ContactForm.jsx
├── sections/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── data/
│   ├── profile.js
│   ├── skills.js
│   └── projects.js
├── hooks/
├── styles/
│   ├── variables.css
│   ├── global.css
│   ├── navbar.css
│   ├── home.css
│   ├── about.css
│   ├── projects.css
│   ├── contact.css
│   └── footer.css
├── App.jsx
└── main.jsx

public/
├── images/
└── favicon.svg

index.html
package.json
README.md
.env.example
Struktur ini merupakan panduan, bukan alasan untuk merombak repository
yang sudah berjalan baik.
Jika struktur project yang tersedia sudah sesuai, pertahankan dan
gunakan pola yang konsisten. Jangan membuat terlalu banyak komponen
kecil yang justru membuat kode sulit dipahami.
16. Konfigurasi Data
Buat file konfigurasi yang mudah diedit.
16.1 profile.js
Simpan:
- Nama.
- Profesi.
- Headline.
- Deskripsi.
- Foto profil.
- Email.
- GitHub.
- LinkedIn.
- WhatsApp.
- Resume jika tersedia.
16.2 skills.js
Simpan kategori dan daftar teknologi.
16.3 projects.js
Simpan:
- ID.
- Nama project.
- Slug jika diperlukan.
- Deskripsi.
- Kategori.
- Teknologi.
- Thumbnail.
- Screenshot tambahan.
- Fitur utama.
- Status project jika relevan.
- Link demo.
- Link GitHub.
- Detail project.
Gunakan satu sumber data untuk seluruh tampilan terkait. Jangan menulis
informasi project berulang kali di beberapa komponen.
Jika data tidak tersedia, tampilkan fallback yang wajar atau sembunyikan
elemen terkait.
17. Performa Website
Website harus ringan dan cepat.
Implementasikan:
- Gambar dengan ukuran optimal.
- Lazy loading untuk gambar di luar viewport awal jika relevan.
- Dimensi gambar yang sesuai untuk mengurangi layout shift.
- Komponen yang terstruktur.
- Event listener yang dibersihkan ketika komponen dilepas.
- Intersection Observer yang dibersihkan ketika komponen dilepas.
- Dependency minimal.
- CSS yang terorganisasi.
- Render ulang yang efisien.
- Penanganan error JavaScript yang sesuai.
Hindari:
- Background video berat yang tidak diperlukan.
- Banyak library animasi sekaligus.
- Gambar resolusi sangat tinggi tanpa optimasi.
- Efek blur besar pada terlalu banyak elemen.
- Partikel yang menggunakan terlalu banyak resource.
- Script pihak ketiga yang tidak diperlukan.
Jangan mengorbankan performa hanya demi efek visual.
18. SEO Dasar
Implementasikan:
- Page title yang relevan.
- Meta description.
- Favicon.
- Open Graph metadata dasar.
- HTML semantik.
- Heading terstruktur.
- Alt text gambar.
- URL dan tautan yang benar.
- Bahasa halaman yang sesuai.
- Tampilan preview yang layak ketika dibagikan.
Jangan memasukkan data palsu pada metadata. Jangan mengklaim SEO sudah
optimal hanya karena meta description telah dibuat.
19. Pengujian dan Validasi
Setelah implementasi selesai, lakukan pemeriksaan berikut.
19.1 Pengujian fungsionalitas
- Navbar desktop.
- Hamburger menu mobile.
- Navigasi setiap section.
- Smooth scrolling.
- Tombol Lihat Project.
- Tombol Hubungi Saya.
- Indikator menu aktif.
- Filter kategori project.
- Tombol detail project.
- Modal atau halaman detail jika digunakan.
- Link demo dan GitHub.
- Validasi formulir.
- Status pengiriman formulir.
- Link media sosial.
- Footer.
19.2 Pengujian responsivitas
Periksa pada:
- 320 px.
- 375 px.
- 768 px.
- 1024 px.
- 1440 px.
Pastikan tidak ada:
- Horizontal overflow.
- Teks terpotong.
- Tombol keluar viewport.
- Modal terlalu besar.
- Menu mobile yang tidak dapat ditutup.
- Gambar terdistorsi.
- Section tertutup navbar.
- Formulir yang sulit digunakan.
19.3 Validasi teknis
1. Periksa package.json.
2. Jalankan npm install jika dependency diperlukan.
3. Jalankan npm run dev.
4. Jalankan npm run build.
5. Periksa console browser.
6. Periksa link yang digunakan.
7. Periksa gambar yang gagal dimuat.
8. Periksa state filter dan formulir.
9. Periksa aksesibilitas dasar.
10. Periksa prefers-reduced-motion.
Jika browser automation atau browser preview tersedia, gunakan untuk
menguji interaksi dan viewport.
Jika pengujian tertentu tidak dapat dilakukan, jelaskan secara jujur.
Jangan mengklaim semua pengujian berhasil jika belum dijalankan.
20. Dokumentasi
Buat README.md yang menjelaskan:
- Deskripsi website.
- Teknologi yang digunakan.
- Persyaratan instalasi.
- Cara menginstal dependency.
- Cara menjalankan development server.
- Cara melakukan production build.
- Cara mengubah profil.
- Cara menambahkan project.
- Cara mengganti gambar.
- Cara mengganti tautan media sosial.
- Cara mengonfigurasi formulir kontak.
- Cara mengonfigurasi environment variable.
- Cara deployment secara umum.
Jika konfigurasi eksternal belum tersedia, jelaskan apa yang perlu diisi
oleh pemilik website.
21. Tahapan Pengerjaan
Ikuti urutan berikut.
Tahap 1 --- Audit repository
Periksa struktur project, package.json, konfigurasi, dependency, dan
kode yang sudah ada.
Tahap 2 --- Rancang design system
Tentukan palet warna, tipografi, spacing, komponen, dan breakpoint.
Tahap 3 --- Implementasikan global layout
Buat background kosmik, container, navbar, tombol, dan sistem styling
dasar.
Tahap 4 --- Implementasikan Home
Selesaikan hero, visual utama, headline, deskripsi, dan CTA.
Tahap 5 --- Implementasikan Tentang Saya
Buat profil, deskripsi, dan skill.
Tahap 6 --- Implementasikan Project
Buat card, filter, detail project, dan data terpisah.
Tahap 7 --- Implementasikan Contact
Buat informasi kontak dan formulir dengan mekanisme pengiriman yang
jelas.
Tahap 8 --- Implementasikan Hubungi Saya dan footer
Pastikan seluruh CTA terhubung dengan tujuan yang benar.
Tahap 9 --- Responsivitas dan animasi
Perbaiki layout pada desktop, tablet, dan mobile. Pastikan animasi tidak
mengganggu.
Tahap 10 --- Pengujian
Jalankan build, periksa console, uji navigasi, filter, formulir, dan
layout.
Tahap 11 --- Dokumentasi dan laporan
Lengkapi README serta berikan ringkasan hasil implementasi.
Kerjakan secara bertahap dan pastikan fondasi project benar sebelum
melanjutkan.
22. Kriteria Keberhasilan
Website dinyatakan siap apabila:
- Memiliki tema luar angkasa yang konsisten.
- Terlihat profesional dan tidak generik.
- Memiliki Home, Tentang Saya, Project, Contact, dan Hubungi Saya.
- Navigasi desktop dan mobile berfungsi.
- Filter project berfungsi.
- Detail project dapat dibuka.
- CTA memiliki fungsi yang benar.
- Formulir kontak memiliki mekanisme pengiriman yang jelas.
- Data profil dan project mudah diubah.
- Layout responsif pada seluruh viewport target.
- Tidak ada horizontal overflow pada viewport yang diuji.
- Animasi halus dan tidak mengganggu.
- Kontras dan aksesibilitas dasar diperhatikan.
- Tidak ada link atau data yang dikarang.
- Build berhasil tanpa error yang belum terselesaikan.
- Dokumentasi tersedia.
- Tidak ada fitur utama yang hanya menjadi hiasan.
23. Instruksi Akhir untuk AI Agent
Mulailah dengan mengaudit repository yang tersedia. Setelah itu,
implementasikan website secara langsung berdasarkan seluruh spesifikasi
dalam dokumen ini.
Prioritaskan kualitas desain, responsivitas, fungsionalitas, dan
keterbacaan kode.
Ketentuan akhir:
1. Jangan mengganti tema luar angkasa menjadi desain portfolio generik.
2. Jangan menggunakan Tailwind CSS.
3. Jangan menghapus kode lama yang masih relevan.
4. Jangan membuat tombol palsu, tautan palsu, atau status pengiriman
   palsu.
5. Jangan berhenti setelah membuat hero section.
6. Selesaikan seluruh section dan interaksi utama.
7. Jika informasi profil atau konfigurasi eksternal belum tersedia,
   gunakan placeholder yang mudah diganti dan dokumentasikan kebutuhan
   tersebut.
8. Jangan mengklaim fitur atau pengujian berhasil jika belum
   benar-benar dilakukan.
Setelah selesai, berikan laporan akhir berisi:
- Ringkasan implementasi.
- Struktur file yang dibuat atau diubah.
- Fitur yang berhasil diimplementasikan.
- Cara menjalankan website.
- Hasil pengujian.
- Konfigurasi yang masih diperlukan.
- Kendala yang belum terselesaikan.
Hasil akhir yang diharapkan: website Space Portfolio React.js yang
profesional, responsif, interaktif, ringan, mudah dikembangkan, dan siap
dipersiapkan untuk deployment.