document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects for social links
    const socialLinks = document.querySelectorAll('.social-icon');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-5px)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });
}); 