// ========================================================
// 1. SWITCHER TEMA DARK / LIGHT (Kesan Personal - SIQ4)
// ========================================================
const themeToggleBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

// Cek apakah ada preferensi tema pengguna yang tersimpan sebelumnya
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
// 2. VALIDASI FORMULIR & FEEDBACK INTERAKTIF (SIQ7)
// ========================================================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    // Mencegah halaman melakukan refresh bawaan form statis HTML
    event.preventDefault();
    
    // Mengambil nilai input
    const nameInput = document.getElementById('name').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const messageInput = document.getElementById('message').value.trim();
    
    // Validasi sederhana logis sebelum dikirim
    if (nameInput === "" || emailInput === "" || messageInput === "") {
        alert("Mohon lengkapi semua kolom formulir sebelum mengirim.");
        return;
    }
    
    // Simulasi interaksi sukses responsif (Aspek WebQual - Kualitas Layanan)
    alert(`Terima kasih atas pesannya, ${nameInput}! Simulasi interaksi berhasil dikirim secara aman.`);
    
    // Reset isi formulir setelah sukses
    contactForm.reset();
});