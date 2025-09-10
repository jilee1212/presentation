document.addEventListener('DOMContentLoaded', function() {

    // Presentation logic
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const startBtn = document.getElementById('start-journey-btn');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.classList.remove('active', 'show-portfolio');
        });
        
        const newSlide = slides[index];
        newSlide.classList.add('active');

        if (newSlide.classList.contains('service-slide')) {
            setTimeout(() => {
                if (newSlide.classList.contains('active')) {
                   newSlide.classList.add('show-portfolio');
                }
            }, 600); // Wait for card movement to complete
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    if(prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }

    if (startBtn) {
        startBtn.addEventListener('click', nextSlide);
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

});
