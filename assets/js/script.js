console.log("Website script loaded successfully!");

// You can add interactive functionality here in the future.
// For example, a mobile menu toggle.

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
    dots.forEach((dot, i) => {
      dot.classList.remove('active');
      if (i === index) {
        dot.classList.add('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);

  dots.forEach(dot => {
    dot.addEventListener('click', (event) => {
      const slideIndex = parseInt(event.target.dataset.slideIndex);
      currentSlide = slideIndex;
      showSlide(currentSlide);
    });
  });

  // Initial display
  showSlide(currentSlide);

  // Auto-play (optional)
  setInterval(nextSlide, 5000); // Change image every 5 seconds
});