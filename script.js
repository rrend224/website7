// Logo placeholder
document.addEventListener('DOMContentLoaded', function() {
    // Create logo placeholder
    const logoImg = document.querySelector('.logo img');
    if (logoImg) {
        logoImg.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="%230a4d3c"/><path d="M12,20 Q20,10 28,20 Q20,30 12,20" stroke="white" fill="none" stroke-width="2"/></svg>';
    }
    
    // Create hero background placeholder
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'1000\' height=\'500\' viewBox=\'0 0 1000 500\'><rect width=\'1000\' height=\'500\' fill=\'%23333\'/></svg>")';
    }
    
    // Create service images placeholders
    const serviceImages = document.querySelectorAll('.service-item img');
    const serviceTypes = ['学校施設', '医療施設', '商業施設', 'フィットネスジム', '特殊施設', 'オフィス・ビル'];
    
    serviceImages.forEach((img, index) => {
        const color = index % 2 === 0 ? '%23246' : '%23357';
        const text = serviceTypes[index] || 'サービス';
        img.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='${color}'/><text x='150' y='100' font-family='Arial' font-size='18' fill='white' text-anchor='middle'>${text}</text></svg>`;
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
