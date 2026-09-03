const taskbar = document.querySelector(".Taskbar");
const windows = document.getElementById("Windows");
const windows2 = document.getElementById("Windows2");

var currentTime = new Date().toLocaleString();

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function Boot() {

    await wait(4000);

    taskbar.style.display = "flex";

    await wait(1000);

    windows.style.display = "block";
    windows2.style.display = "block";
}

async function main() {
    await Boot();
}

main();