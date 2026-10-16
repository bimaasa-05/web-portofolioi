// Data profil pemilik website.
// Semua nilai di bawah ini adalah placeholder yang dapat diedit langsung.
// Item yang tidak memiliki nilai valid akan disembunyikan di antarmuka.

// Foto profil. Jika belum tersedia, komponen akan menampilkan placeholder.
import profileAvatar from '../assets/images/profile-avatar.svg'

export const profile = {
  // Nama pemilik, digunakan pada hero, navbar, dan footer.
  name: 'Bima',

  // Sapaan singkat yang muncul di hero.
  greeting: 'Halo, saya',

  // Profesi singkat.
  role: 'Web Developer',

  // Headline utama pada hero.
  headline: 'Building Digital Experiences Beyond Boundaries.',

  // Deskripsi singkat yang menjelaskan apa yang dipelajari dan dipromosikan.
  description:
    'Saya seorang Web Developer yang tertarik membangun aplikasi web yang fungsional, responsif, dan mudah digunakan. Saya terus mengembangkan kemampuan dalam frontend dan backend untuk menciptakan solusi digital yang bermanfaat.',

  // Foto profil yang dapat diedit. Gunakan gambar sekitar 400x400.
  avatar: profileAvatar,

  // Ketertarikan dalam pengembangan aplikasi web.
  interests:
    'Pengembangan aplikasi web dan desain antarmuka yang rapi.',

  // Perjalanan belajar.
  learningPath:
    'Mulai dari HTML dasar, lalu JavaScript, React.js, hingga backend dengan PHP dan Laravel.',

  // Fokus pengembangan saat ini.
  currentFocus: 'Memperdalam React.js dan pengembangan backend dengan Laravel.',

  // Pendekatan saat membangun aplikasi.
  approach:
    'Menyelesaikan masalah dari perencanaan, membangun komponen yang dapat digunakan, hingga menguji di berbagai perangkat.',

  // Email yang digunakan sebagai tujuan pengiriman formulir kontak.
  // Gunakan nilai contoh (example.com) sampai dikonfigurasi oleh pemilik.
  email: 'bima@example.com',

  // Media sosial. Kosongkan nilai agar link disembunyikan di antarmuka.
  githubUrl: '',
  linkedinUrl: '',
  // Resume PDF yang dapat diedit. Kosongkan jika tidak tersedia.
  resumeUrl: '',
}
