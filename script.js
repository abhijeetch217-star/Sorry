const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let index = 0;

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
  animateText();
}

next.onclick = () => {
  if (index < slide.length - 1) index++;
  updateSlide();
};

prev.onclick = () => {
  if (index > 0) index--;
  updateSlide();
};

function animateText() {
  const activeText = slide[index].querySelector(".text");
  const words = activeText.innerText.split(" ");
  activeText.innerHTML = "";

  words.forEach((word, i) => {
    const span = document.createElement("span");
    span.textContent = word + " ";
    span.classList.add("word");
    span.style.animationDelay = `${i * 0.3}s`;
    activeText.appendChild(span);
  });
}

animateText();
