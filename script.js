document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
function typeWriter(text, i) {
  if (i < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(function () {
      typeWriter(text, i);
    }, 100);
  } 
}

function startTyping() {
  const text = "Ganesh Nitalikar";
  const i = 0;
  document.getElementById("typing-effect").innerHTML = "";
  typeWriter(text, i);
}

document.addEventListener("DOMContentLoaded", startTyping);


const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const req = new XMLHttpRequest();
    req.open('POST', form.action, true);
    req.setRequestHeader('Accept', 'application/json');
    req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE) {
            if (req.status === 200) {
                alert('Message sent successfully!');
                form.reset();
            } else {
                alert('Oops! Something went wrong.');
            }
        }
    };
    req.send(formData);
});