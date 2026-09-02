const taskbar = document.querySelector(".Taskbar");
const windows = document.getElementById("Windows");
var currentTime = new Date().toLocaleString();

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    clock.textContent = `${hours}:${minutes}`;
}

async function Boot() {
    updateClock();
    await wait(2000);
    await wait(2000);
    taskbar.style.display = "flex";
    await wait(1000);
    windows.style.display = "block";
}

async function main() {
    await Boot();

    setInterval(updateClock, 1000);
}

main();