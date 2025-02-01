// Add scroll event listener to toggle the navbar class
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelectorAll('.nav-link');

    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
        navbar.classList.remove('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scrolled');
        navbar.classList.add('navbar-scroll');
    }
});

// Function to toggle feature details
function toggleDetails(detailsId) {
    const details = document.getElementById(detailsId);
    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  }

document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.nextElementSibling;
    const isOpen = answer.style.display === 'block';
    document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
    document.querySelectorAll('.faq-question span').forEach(span => span.textContent = '+');
    answer.style.display = isOpen ? 'none' : 'block';
    item.querySelector('span').textContent = isOpen ? '+' : '-';
  });
});

function toggleDetails(detailsId) {
  const details = document.getElementById(detailsId);
  const button = details.previousElementSibling;
  
  if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
      button.textContent = "Show Less";
  } else {
      details.style.display = "none";
      button.textContent = "Learn More";
  }
}
