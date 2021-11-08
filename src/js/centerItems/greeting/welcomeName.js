export default function initializeWelcomeName() {
  const welcomeName = document.querySelector('.name');

  welcomeName.value = localStorage.getItem('name');

  welcomeName.addEventListener('input', saveName);
}

function saveName(welcomeName) {
  localStorage.setItem('name', this.value);
}