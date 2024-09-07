// Select all sections that we want to animate
const sections = document.querySelectorAll('section');

// Create an Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the 'visible' class to the section when it comes into view
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2 // Trigger when 20% of the section is visible
});

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});
