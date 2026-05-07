// home.js - Handle efek scroll navbar
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        function checkScroll() {
            // Jika scroll lebih dari 50px, tambahkan class 'scrolled'
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Jalankan saat halaman di-refresh
        checkScroll();
        
        // Jalankan setiap kali user scroll
        window.addEventListener('scroll', checkScroll);
    }
});