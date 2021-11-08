import { getDayTime } from "../clock/clock.js";

export default function initializeWelcomeText() {
  const greetingText = document.querySelector('.greeting');
  const dayTime = getDayTime();

  greetingText.innerHTML = `Good ${dayTime}`
}