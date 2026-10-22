# React To-Do List App

Aplikasi pengelola daftar tugas sederhana, responsif, dan interaktif yang dibangun menggunakan **React** dan **Vite**. Data tugas disimpan langsung di peramban menggunakan **LocalStorage**, sehingga daftar tugas tidak akan hilang saat halaman dimuat ulang.

---

## Fitur Utama

- **Tambah Tugas**: Menambahkan aktivitas atau rencana baru dengan cepat.
- **Tandai Selesai**: Centang checkbox untuk menandai tugas yang sudah selesai dikerjakan.
- **Hapus Tugas**: Menghapus item tugas yang tidak lagi dibutuhkan.
- **Status Tugas**: Menampilkan jumlah tugas yang belum diselesaikan secara dinamis (_real-time_).
- **Penyimpanan Lokal (LocalStorage)**: Tugas tersimpan otomatis di browser, data tetap aman meski peramban ditutup.
- **Cepat & Ringan**: Didukung oleh build tool modern Vite.

---

## Teknologi yang Digunakan

- **Frontend**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: Vanilla CSS (Modern, clean, dan responsif)
- **Penyimpanan**: Web Storage API (`localStorage`)

---

## Struktur Proyek

```plaintext
todo-list/
├── public/                 # File aset publik
├── src/
│   ├── assets/             # Aset gambar & ikon
│   ├── components/         # Komponen modular React
│   │   ├── TodoForm.jsx    # Form untuk input tugas baru
│   │   ├── TodoItem.jsx    # Item tugas individu (checkbox & hapus)
│   │   └── TodoList.jsx    # Daftar penampung to-do items
│   ├── App.jsx             # Komponen utama & state management
│   ├── index.css           # Styling utama aplikasi
│   └── main.jsx            # Entry point React
├── index.html              # Template HTML utama
├── package.json            # Daftar dependensi & scripts
└── vite.config.js          # Konfigurasi Vite
```

---

## Cara Menjalankan di Lokal

Ikuti langkah-langkah berikut untuk menjalankan proyek di komputer lokal:

### 1. Klon Repositori

```bash
git clone https://github.com/Naufal-Zain/react-todo-list.git
cd react-todo-list
```

### 2. Instal Dependensi

Pastikan [Node.js](https://nodejs.org/) sudah terinstal di perangkat Anda, lalu jalankan:

```bash
npm install
```

### 3. Jalankan Server Pengembangan

```bash
npm run dev
```

Buka URL lokal yang muncul di terminal (biasanya `http://localhost:5173`) melalui browser pilihan Anda.

---

## Build untuk Produksi

Untuk menghasilkan bundle yang siap digunakan di server hosting/produksi:

```bash
npm run build
```

Hasil build akan disimpan di folder `dist/`.

---

## Lisensi

Proyek ini dibuat untuk tujuan pembelajaran dan latihan pengembangan web. Bebas digunakan dan dimodifikasi untuk kebutuhan belajar Anda.
