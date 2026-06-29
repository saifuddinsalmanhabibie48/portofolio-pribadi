// Ambil elemen halaman dan tombol Mulai
const tombolMulai = document.getElementById('startBtn');
const halamanHome = document.getElementById('homePage');
const halamanAbout = document.getElementById('aboutPage');

// Ambil elemen tombol Tab dan konten Tab
const btnLahir = document.getElementById('btnLahir');
const btnTinggal = document.getElementById('btnTinggal');
const tabLahir = document.getElementById('tabLahir');
const tabTinggal = document.getElementById('tabTinggal');

// Event saat tombol "Mulai" diklik
tombolMulai.addEventListener('click', () => {
    halamanHome.classList.add('hidden');
    halamanAbout.classList.remove('hidden');
});

// Event saat Tab Tanggal Lahir diklik
btnLahir.addEventListener('click', () => {
    btnLahir.classList.add('active');
    btnTinggal.classList.remove('active');
    
    tabLahir.classList.add('show');
    tabTinggal.classList.remove('show');
});

// Event saat Tab Tempat Tinggal diklik
btnTinggal.addEventListener('click', () => {
    btnTinggal.classList.add('active');
    btnLahir.classList.remove('active');
    
    tabTinggal.classList.add('show');
    tabLahir.classList.remove('show');
});