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

document.querySelector('.contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting in the traditional way

  // Get the form data
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  // Dummy email sending logic (you can replace this with a real email API integration)
  const dummyEmail = "dummy@example.com"; // This is a placeholder email

  // Log the form data to the console (for demo purposes)
  console.log("Sending message to:", dummyEmail);
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Simulate email sending delay (optional)
  setTimeout(() => {
      showSuccessPopup();
  }, 1000); // 1-second delay to simulate email sending
});

function showSuccessPopup() {
  // Create success popup element
  const popup = document.createElement('div');
  popup.classList.add('success-popup');
  popup.innerHTML = "<strong>Success!</strong> Your message has been sent successfully!";

  // Append popup to the body
  document.body.appendChild(popup);

  // Remove the popup after 4 seconds with smooth fade-out
  setTimeout(() => {
      popup.classList.add('fade-out');
      setTimeout(() => popup.remove(), 500); // Delay removal for fade effect
  }, 3000);
}
