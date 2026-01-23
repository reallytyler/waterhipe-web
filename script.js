// Initialize Animations
AOS.init({
    duration: 1000,
    once: true
});

// Click to Copy IP Function
function copyIP() {
    const ipText = document.getElementById('server-ip').innerText;
    const badge = document.querySelector('.copy-badge');
    
    navigator.clipboard.writeText(ipText).then(() => {
        // Change text to notify user
        const originalText = badge.innerHTML;
        badge.innerHTML = '<i class="fas fa-check"></i> Copied to Clipboard!';
        badge.style.color = '#00ff00';
        
        // Reset after 2 seconds
        setTimeout(() => {
            badge.innerHTML = originalText;
            badge.style.color = '';
        }, 2000);
    });
}

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#0a0e14';
        nav.style.padding = '10px 0';
    } else {
        nav.style.background = 'rgba(10, 14, 20, 0.8)';
        nav.style.padding = '20px 0';
    }
});
