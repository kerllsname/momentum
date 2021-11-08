export default function initializeDate() {
  const date = document.querySelector('.date');

  const fullDate = new Date();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = dayNames[fullDate.getDay()];
  const monthNames = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"];
  const month = monthNames[fullDate.getMonth()];
  const dayDate = fullDate.getDate();

  date.innerHTML = day + ', ' + month + ' ' + dayDate;
}