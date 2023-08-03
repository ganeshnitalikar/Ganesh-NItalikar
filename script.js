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

