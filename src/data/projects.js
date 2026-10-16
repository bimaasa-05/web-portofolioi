// Data project yang ditampilkan pada section Project.
// Konten di bawah ini adalah contoh awal yang dapat diedit. Jangan menganggap
// kategori teknologi, fitur, atau peran sebagai fakta tanpa diverifikasi
// oleh pemilik website.

// Thumbnail project berada di src/assets/images/.
import neighborhubThumbnail from '../assets/images/project-neighborhub.svg'
import kasirLaravelThumbnail from '../assets/images/project-kasir-laravel.svg'
import beautycareThumbnail from '../assets/images/project-beautycare.svg'
import ralivaThumbnail from '../assets/images/project-raliva.svg'

// Kategori yang digunakan untuk filter. Kategori harus berasal dari data
// project agar filter selalu sesuai (lihat ProjectFilter).
export const projects = [
  {
    id: 'neighborhub',
    name: 'NeighborHub',
    description:
      'Konsep aplikasi untuk mendukung pengelolaan lingkungan tempat tinggal.',
    category: 'Laravel',
    technologies: ['Laravel', 'PHP', 'MySQL'],
    thumbnail: neighborhubThumbnail,
    background:
      'Area sekitar tempat tinggal tumbuh menjadi padat dan banyak penduduk yang ingin tetap terhubung tanpa kehilangan informasi.',
    problem:
      'Informasi mengenai komunitas tersebar di grup chat dan forum, sehingga mudah hilang dan tidak terstruktur.',
    objectives:
      'Menyediakan berita, pengumuman, dan aktivitas komunitas dalam satu aplikasi yang terpusat.',
    features: [
      'Kelola berita dan pengumuman komunitas',
      'Kelola aktivitas dan agenda komunitas',
      'Kelola informasi properti dan rumah warga',
    ],
    ownerRole: 'Fullstack development',
    challenges:
      'Sinkronisasi data properti dari banyak sumber menjadi tidak terlalu rumit.',
  },
  {
    id: 'kasir-laravel',
    name: 'Kasir Laravel',
    description:
      'Aplikasi kasir untuk mengelola produk, pelanggan, dan transaksi.',
    category: 'Laravel',
    technologies: ['Laravel', 'PHP', 'MySQL'],
    thumbnail: kasirLaravelThumbnail,
    background:
      'Toko-toko kecil di sekitar sering kehilangan stok produk karena catatan manual di buku kecil.',
    problem:
      'Stok produk dan data pelanggan tidak terdokumentasi secara real-time, sehingga penjualan kadang salah dicatat.',
    objectives:
      'Memperlajari transaksi penjualan, manajemen stok, dan data pelanggan dalam satu aplikasi.',
    features: [
      'Manajemen produk dan stok',
      'Manajemen data pelanggan',
      'Transaksi penjualan dan pembayaran',
      'Laporan penjualan harian',
    ],
    ownerRole: 'Backend development',
    challenges:
      'Perlu diperluas untuk menangani banyak kategori produk sekaligus.',
  },
  {
    id: 'beautycare',
    name: 'BeautyCare',
    description:
      'Konsep aplikasi pengelolaan layanan kecantikan, produk, dan operasional bisnis.',
    category: 'Laravel',
    technologies: ['Laravel', 'PHP', 'JavaScript', 'MySQL'],
    thumbnail: beautycareThumbnail,
    background:
      'Usaha kecantikan menyimpan data pelanggan dan produk secara terpisah antara tim penjualan, stok, dan operasional.',
    problem:
      'Antrian permintaan pelanggan dan pengurusan stok produk tidak terhubung satu sama lain.',
    objectives:
      'Menyatukan layanan kecantikan, produk, dan operasional bisnis dalam satu aplikasi.',
    features: [
      'Kelola layanan dan antrian pelanggan',
      'Kelola produk dan katalog',
      'Kelola stok produk',
      'Kelola operasional bisnis',
    ],
    ownerRole: 'Fullstack development',
    challenges:
      'Menambahkan antarmuka khusus tanpa membuat aplikasi menjadi terlalu berat.',
  },
  {
    id: 'raliva',
    name: 'Raliva',
    description:
      'Konsep marketplace fashion dengan pengelolaan toko dan proses operasional.',
    category: 'Laravel',
    technologies: ['Laravel', 'PHP', 'JavaScript', 'MySQL'],
    thumbnail: ralivaThumbnail,
    background:
      'Pasar fashion lokal sering kehilangan informasi mengenai stok toko dan proses operasional tim penjual.',
    problem:
      'Pengelolaan toko dan proses operasional terputus antara tim penjual, stok, dan kurasi produk.',
    objectives:
      'Menyediakan marketplace dengan pengelolaan toko dan proses operasional yang terpusat.',
    features: [
      'Kelola toko dan produk toko',
      'Proses pengelolaan order',
      'Pantau proses operasional tim',
      'Kelola kurasi produk',
    ],
    ownerRole: 'Frontend development',
    challenges:
      'Menjaga performa pada tampilan katalog yang banyak produk.',
  },
]
