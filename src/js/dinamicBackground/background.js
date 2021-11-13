export default function displayDinamicBackground() {
  const arrows = document.querySelectorAll(".slider-icon");

  document.addEventListener("backgroundChange", handleBackgroundChange);

  generateInitialBackground();

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", handleArrowClick);
  });
}

function handleBackgroundChange() {
  const imageName = generateImageName(localStorage.getItem("backgroundIndex"));
  const dayTime = localStorage.getItem("dayTime");
  const backgroundImage = document.querySelector("body");
  const img = new Image();

  img.src = `https://raw.githubusercontent.com/kerllsname/stage1-tasks/assets/images/${dayTime}/${imageName}.jpg`;
  img.onload = () => {
    backgroundImage.style.background = `url("https://raw.githubusercontent.com/kerllsname/stage1-tasks/assets/images/${dayTime}/${imageName}.jpg") center/cover, rgba(0, 0, 0, 0.5)`;
  };
}

function generateInitialBackground() {
  const num = Math.floor(Math.random() * 20) + 1;

  setBackgroundIndex(num);
}

function handleArrowClick({ currentTarget: arrow }) {
  let backgroundIndex = localStorage.getItem("backgroundIndex");

  if (arrow.classList.contains("slide-prev")) {
    if (--backgroundIndex == 0) backgroundIndex = 20;
  } else {
    if (++backgroundIndex == 21) backgroundIndex = 1;
  }

  setBackgroundIndex(backgroundIndex);
}

function setBackgroundIndex(index) {
  localStorage.setItem("backgroundIndex", index);

  const event = new Event("backgroundChange");

  document.dispatchEvent(event);
}

function generateImageName(num) {
  return ("0" + num).slice(-2);
}
