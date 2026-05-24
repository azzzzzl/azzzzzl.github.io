// ========================================================
// 1. SWITCHER TEMA DARK / LIGHT (Kesan Personal - SIQ4)
// ========================================================
const themeToggleBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

// Validasi preferensi tema lokal pengguna
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'light') {
        themeToggleBtn.textContent = '☀️';
    }
}

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '🌙';
    } else {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '☀️';
    }
});

// ========================================================
// 2. VALIDASI FORMULIR & INTERAKSI RESPONSIF (SIQ5, SIQ7)
// ========================================================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    // Intersepsi submit bawaan HTML agar tetap berjalan secara statis
    event.preventDefault();
    
    // Penangkapan input elemen form
    const nameInput = document.getElementById('name').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const messageInput = document.getElementById('message').value.trim();
    
    // Validasi kelengkapan isian field logis sebelum feedback dijalankan
    if (nameInput === "" || emailInput === "" || messageInput === "") {
        alert("Kesalahan: Harap lengkapi Riot ID, Email, dan Pesan Anda dengan benar.");
        return;
    }
    
    // Pengiriman umpan balik responsif instan (Aspek Kualitas Interaksi WebQual)
    alert(`Berhasil! Terima kasih ${nameInput}, email Anda telah terdaftar dalam basis data komunitas VCT Pacific Hub.`);
    
    // Reset isian field formulir setelah aksi sukses
    contactForm.reset();
});