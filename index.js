const clockElement = document.getElementById('clock');
const toggleColorButton = document.getElementById('toggleColor');

let isColorToggled = false;

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function toggleColor() {
    if (isColorToggled) {
        document.body.style.backgroundColor = "#282c34";
        clockElement.style.color = "#61dafb","#34495e","#9b59b6","#3498bd","#2ecc71","#1abc9c";
    } else {
        document.body.style.backgroundColor = "#ff5733";
        clockElement.style.color = "#fff";
    }
    isColorToggled = !isColorToggled;
}

setInterval(updateClock, 1000);
toggleColorButton.addEventListener('click', toggleColor);
updateClock(); // Initial call to display clock immediately