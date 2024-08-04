// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Typewriter effect for the intro text
function typeWriter(text, i) {
  if (i < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(text, i), 100);
  }
}

function startTyping() {
  const text = "Ganesh Nitalikar";
  document.getElementById("typed-text").innerHTML = "";
  typeWriter(text, 0);
}

document.addEventListener("DOMContentLoaded", startTyping);

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const req = new XMLHttpRequest();
  req.open("POST", form.action, true);
  req.setRequestHeader("Accept", "application/json");
  req.onreadystatechange = function () {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Oops! Something went wrong.");
      }
    }
  };
  req.send(formData);
});

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", function (e) {
    e.stopPropagation();

    // Close any open project card
    document
      .querySelectorAll(".project-card.expanded")
      .forEach((expandedCard) => {
        if (expandedCard !== this) {
          expandedCard.classList.remove("expanded");
        }
      });

    // Toggle the clicked project card
    this.classList.toggle("expanded");
  });
});
