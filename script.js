const bt = document.getElementById("Boot-Terminal");

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    await wait(1000);
    bt.innerHTML += "<p>Starting WEB-DOS...</p>";
    await wait(2000);
    bt.innerHTML += "<p>HIMEM is testing extended memory...</p>";
    await wait(2000);
    bt.lastElementChild.remove();
    bt.innerHTML += "<p>HIMEM is testing extended memory... done.</p>";
    await wait(500);
    bt.innerHTML += "<p>Starting Interface 85...</p>";
    await wait(3000);
    window.location.href = "./interface/";
}
main();