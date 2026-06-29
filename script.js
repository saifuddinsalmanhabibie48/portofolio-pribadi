// Mengambil elemen tombol berdasarkan ID yang ada di HTML
const tombolMulai = document.getElementById('startBtn');

// Memberikan aksi interaktif ketika tombol diklik
tombolMulai.addEventListener('click', () => {
    alert('Terima kasih! Portofolio siap dijelajahi.');
    
    // Tips: Jika nanti halaman "About" atau "Projects" sudah siap, 
    // Anda bisa mengganti alert di atas dengan baris di bawah ini 
    // untuk mengarahkan pengguna langsung ke halaman berikutnya:
    // window.location.href = 'about.html'; 
});
