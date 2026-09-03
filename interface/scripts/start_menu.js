const startButton = document.getElementById("Start-Button");
const startMenu = document.getElementById("Start-Menu");

startButton.addEventListener("click", function() {

    if (startMenu.style.display === "block") {
        startMenu.style.display = "none";
    } else {
        startMenu.style.display = "block";
    }

});