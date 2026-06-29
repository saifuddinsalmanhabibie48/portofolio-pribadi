// Mengambil elemen halaman dan tombol
const tombolMulai = document.getElementById('startBtn');
const halamanHome = document.getElementById('homePage');
const halamanAbout = document.getElementById('aboutPage');

// Aksi ketika tombol "Mulai" diklik
tombolMulai.addEventListener('click', () => {
    // Sembunyikan halaman Home
    halamanHome.classList.add('hidden');
    // Munculkan halaman About
    halamanAbout.classList.remove('hidden');
});

// Fungsi untuk mengatur sistem perpindahan Tab
function bukaTab(event, namaTab) {
    // 1. Sembunyikan semua konten tab terlebih dahulu
    const semuaKonten = document.getElementsByClassName("tab-content");
    for (let i = 0; i < semuaKonten.length; i++) {
        semuaKonten[i].classList.remove("show");
    }

    // 2. Hilangkan status aktif ('active') dari semua tombol tab
    const semuaTombol = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < semuaTombol.length; i++) {
        semubol = semuaTombol[i].classList.remove("active");
    }

    // 3. Tampilkan konten tab yang sedang diklik
    document.getElementById(namaTab).classList.add("show");

    // 4. Tambahkan status 'active' pada tombol yang baru saja diklik
    event.currentTarget.classList.add("active");
}