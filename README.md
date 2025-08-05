# 👗 Jahitin – Admin Dashboard for Dress Tailor Business

**Jahitin** adalah aplikasi dashboard internal yang membantu pengusaha jasa jahit dress mengelola data pelanggan, menyimpan ukuran tubuh, mencatat pesanan, dan memantau progres jahitan dari awal hingga selesai.

> Dibuat khusus untuk tailor shop yang ingin bertransformasi ke sistem digital tanpa membuat pelanggan repot login atau input ukuran sendiri.

---

## 🚀 Fitur Utama

### ✅ Pelanggan & Pengukuran
- Tambah pelanggan baru dengan cepat
- Simpan dan kelola ukuran tubuh (dada, pinggang, panjang lengan, dll.)
- Data ukuran otomatis terhubung dengan pesanan

### ✅ Manajemen Pesanan
- Tambah pesanan dress baru
- Pilih jenis dress, bahan, dan upload referensi desain
- Estimasi harga otomatis berdasarkan logika harga dasar + bahan + opsi tambahan
- Auto-generate nomor pesanan (contoh: `DRS-20250805-001`)

### ✅ Pelacakan Pesanan (Public Tracking)
- Halaman publik tanpa login
- Pelanggan cukup input nomor pesanan untuk melihat status (contoh: `jahitin.com/lacak/DRS-20250805-001`)

### ✅ Status Produksi
- Atur status pesanan: Masuk → Dalam Proses → Siap Fitting → Selesai
- Catatan internal dan tanggal jadi

### ✅ Notifikasi Manual
- Kirim update progres pesanan ke pelanggan via WhatsApp (opsional/manual)

---

## 🧱 Teknologi yang Digunakan

| Bagian         | Teknologi                      |
|----------------|---------------------------------|
| Frontend       | Next.js + Tailwind CSS          |
| Backend        | Supabase (Database + Auth + File) |
| Auth Admin     | Supabase Auth (Email/Password) |
| Storage Gambar | Supabase Storage               |
| Deploy         | Vercel                         |


---

## 🛠️ Cara Menjalankan (Local)

```bash
# 1. Clone repo
git clone https://github.com/namakamu/jahitin.git
cd jahitin

# 2. Install dependencies
npm install

# 3. Jalankan project
npm run dev
