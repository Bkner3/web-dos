const aboutButton = document.getElementById("About-the-OS");

aboutButton.addEventListener("click", function () {

    const windows = document.createElement("div");

    windows.id = "Windows3";
    windows.classList.add("Windows");
    windows.style.cssText = "justify-content: center; align-items: center;";

    windows.innerHTML = `
        <div class="Windows-header">
            About the OS
        </div>

        <p>Version: 1.0.0</p>
        <p>Author: <a href="https://github.com/Bkner3/" target="_blank">Bernardo</a></p>
        <button onclick="window.open('https://github.com/Bkner3/', '_blank')">Open GitHub</button>
        <button class="Close-Button">Close</button>
    `;

    document.querySelector(".Desktop").appendChild(windows);

    windows.style.display = "flex";
});