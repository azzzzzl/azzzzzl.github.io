// ========================================================
// 1. PENGATUR TEMA (DARK / LIGHT MODE)
// ========================================================
const themeToggleBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

// Cek preferensi tema yang tersimpan di browser
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
// 2. VALIDASI FORMULIR NEWSLETTER
// ========================================================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil isi input data formulir
    const nameInput = document.getElementById('name').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const messageInput = document.getElementById('message').value.trim();
    
    // Cek apakah ada field kosong
    if (!nameInput || !emailInput || !messageInput) {
        alert("Peringatan: Silakan lengkapi seluruh kolom formulir sebelum mengirim.");
        return;
    }
    
    // Beri info sukses ke pengguna
    alert(`Riot ID ${nameInput} berhasil didaftarkan! Update seputar liga akan segera kami kirim ke email Anda.`);
    
    // Kosongkan form kembali
    contactForm.reset();
});