const clock = document.querySelector(".clock");
const secondsHand = document.querySelector(".seconds-hand");
const minutesHand = document.querySelector(".minutes-hand");
const hoursHand = document.querySelector(".hours-hand");

function addNumbersToClock() {
  const radius = 150; // Radius tempat angka diletakkan dari pusat jam
  const centerX = clock.offsetWidth / 2;
  const centerY = clock.offsetHeight / 2;

  for (let i = 1; i <= 12; i++) {
    const angle = i * 30 * (Math.PI / 180); // Setiap angka 30 derajat
    const x = centerX + radius * Math.sin(angle) - 10; // Offset 10 untuk memusatkan
    const y = centerY - radius * Math.cos(angle) - 10; // Offset 10 untuk memusatkan

    const numberElement = document.createElement("div");
    numberElement.className = "number";
    numberElement.style.left = `${x}px`;
    numberElement.style.top = `${y}px`;
    numberElement.innerText = i;
    clock.appendChild(numberElement);
  }
}

function updateClock() {
  const timeNow = new Date();
  const hours = timeNow.getHours();
  const minutes = timeNow.getMinutes();
  const seconds = timeNow.getSeconds();

  const hourDeg = (hours % 12) * 30 + minutes * 0.5; // Setiap jam = 30 derajat, menit menambah setengah derajat
  const minuteDeg = minutes * 6; // Setiap menit = 6 derajat
  const secondDeg = seconds * 6;

  hoursHand.style.transform = `rotate(${hourDeg}deg)`;
  minutesHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondsHand.style.transform = `rotate(${secondDeg}deg)`;
}

addNumbersToClock();

// Update jarum setiap detik
setInterval(updateClock, 1000);

updateClock();
