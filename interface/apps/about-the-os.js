const aboutButton = document.getElementById("About-the-OS");

aboutButton.addEventListener("click", function() {
    aboutTheOS();
});


function aboutTheOS() {

    const windows = document.createElement("div");

    windows.classList.add("Windows");

    windows.innerHTML = `
        <div class="Windows-header">
            About the OS
        </div>

        <p>Version: 1.0.0</p>
        <p>Author: Bernardo</p>
        <p>License: MIT</p>
    `;

    document.querySelector(".Desktop").appendChild(windows);

    windows.style.display = "block";
}