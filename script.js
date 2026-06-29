// --- ELEMEN UTAMA DASHBOARD ---
const navHome = document.getElementById('navHome');
const navAbout = document.getElementById('navAbout');
const navPengalaman = document.getElementById('navPengalaman');
const navContact = document.getElementById('navContact');

// --- ELEMEN HALAMAN KONTEN ---
const halamanHome = document.getElementById('homePage');
const halamanAbout = document.getElementById('aboutPage');
const halamanPengalaman = document.getElementById('pengalamanPage');
const halamanContact = document.getElementById('contactPage');

// --- ELEMEN TOMBOL START & TAB ABOUT ---
const tombolMulai = document.getElementById('startBtn');
const btnLahir = document.getElementById('btnLahir');
const btnTinggal = document.getElementById('btnTinggal');
const tabLahir = document.getElementById('tabLahir');
const tabTinggal = document.getElementById('tabTinggal');

// Kumpulan seluruh halaman dan tombol nav untuk mempermudah perulangan
const semuaHalaman = [halamanHome, halamanAbout, halamanPengalaman, halamanContact];
const semuaNav = [navHome, navAbout, navPengalaman, navContact];

// Fungsi Utama untuk Berpindah Halaman Konten
function pindahHalaman(tombolAktif, halamanTujuan) {
    // 1. Sembunyikan semua halaman konten
    semuaHalaman.forEach(hlm => hlm.classList.add('hidden'));
    // 2. Hilangkan status active dari semua tombol dashboard
    semuaNav.forEach(nav => nav.classList.remove('active'));
    
    // 3. Tampilkan halaman tujuan & aktifkan tombolnya
    halamanTujuan.classList.remove('hidden');
    tombolAktif.classList.add('active');
}

// --- LOGIKA KLIK MENU DASHBOARD ---
navHome.addEventListener('click', () => pindahHalaman(navHome, halamanHome));
navAbout.addEventListener('click', () => pindahHalaman(navAbout, halamanAbout));
navPengalaman.addEventListener('click', () => pindahHalaman(navPengalaman, halamanPengalaman));
navContact.addEventListener('click', () => pindahHalaman(navContact, halamanContact));

// Tombol "Mulai" di halaman Home mengarahkan langsung ke About
tombolMulai.addEventListener('click', () => pindahHalaman(navAbout, halamanAbout));

// --- LOGIKA KLIK TAB DI DALAM ABOUT ---
btnLahir.addEventListener('click', () => {
    btnLahir.classList.add('active');
    btnTinggal.classList.remove('active');
    tabLahir.classList.add('show');
    tabTinggal.classList.remove('show');
});

btnTinggal.addEventListener('click', () => {
    btnTinggal.classList.add('active');
    btnLahir.classList.remove('active');
    tabTinggal.classList.add('show');
    tabLahir.classList.remove('show');
});
// --- LOGIKA TAMBAHAN UNTUK TAB PENGALAMAN VS SKILL ---
const btnIsiPengalaman = document.getElementById('btnIsiPengalaman');
const btnIsiSkill = document.getElementById('btnIsiSkill');
const tabIsiPengalaman = document.getElementById('tabIsiPengalaman');
const tabIsiSkill = document.getElementById('tabIsiSkill');

btnIsiPengalaman.addEventListener('click', () => {
    btnIsiPengalaman.classList.add('active');
    btnIsiSkill.classList.remove('active');
    
    tabIsiPengalaman.classList.add('show');
    tabIsiSkill.classList.remove('show');
});

btnIsiSkill.addEventListener('click', () => {
    btnIsiSkill.classList.add('active');
    btnIsiPengalaman.classList.remove('active');
    
    tabIsiSkill.classList.add('show');
    tabIsiPengalaman.classList.remove('show');
});