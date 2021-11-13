export default function initializeClock() {
  const clock = document.querySelector(".time");

  addClock(clock);
  setDayTime();
}

function addClock(clock) {
  clock.innerHTML = new Date().toLocaleTimeString();

  setInterval(() => {
    addClock(clock);
  }, 500);
}

function setDayTime() {
  localStorage.setItem("dayTime", getDayTime());

  setInterval(() => {
    setDayTime();
  }, 600000); // 10 min
}

export function getDayTime() {
  const currentTime = new Date().getHours();

  if (currentTime >= 6 && currentTime < 12) {
    return "morning";
  } else if (currentTime >= 12 && currentTime < 18) {
    return "afternoon";
  } else if (currentTime >= 18 && currentTime <= 23) {
    return "evening";
  } else if (currentTime >= 0 && currentTime < 7) {
    return "night";
  }
}
