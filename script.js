// Typing animation
const typingElement = document.querySelector(".typing");
const words = ["Ayush", "Backend Develop", "AI Enthusiast", "Automation Engineer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const word = words[wordIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingElement.textContent = word.substring(0, charIndex);

  if (!isDeleting && charIndex === word.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 60 : 120);
  }
}
type();

// Modal project viewer
function openProject(text) {
  document.getElementById("modal-text").textContent = text;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Contact form handler
function submitForm(event) {
  event.preventDefault();
  alert("Thank you! Your message has been sent.");
}
