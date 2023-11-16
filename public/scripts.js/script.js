document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.image-slider');

    sliders.forEach(slider => {
      let currentSlide = 0;
      const slides = slider.querySelectorAll('img');
      const totalSlides = slides.length;

      function showSlide(index) {
        if (index < 0) {
          currentSlide = totalSlides - 1;
        } else if (index >= totalSlides) {
          currentSlide = 0;
        } else {
          currentSlide = index;
        }

        const transformValue = -currentSlide * 100 + '%';
        slider.style.transform = 'translateX(' + transformValue + ')';
      }

      setInterval(() => {
        showSlide(currentSlide + 1);
      }, 3000); // Change slide every 3 seconds, adjust as needed
    });
  });