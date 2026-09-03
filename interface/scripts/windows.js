const headers = document.querySelectorAll(".Windows-header");

headers.forEach(header => {
    header.innerHTML += `
        <button id="Close-Button" class="Close-Button">×</button>
        <button id="Maximize-Button" class="Maximize-Button">□</button>
        <button id="Minimize-Button" class="Minimize-Button">−</button>

    `;
});


let highestZIndex = 9;


document.addEventListener("mousedown", function(e) {

    const windowElement = e.target.closest(".Windows");

    if (windowElement) {
        highestZIndex++;
        windowElement.style.zIndex = highestZIndex;
    }

    const header = e.target.closest(".Windows-header");

    if (header) {
        const windowElement = header.closest(".Windows");

        if (windowElement) {
            dragElement(windowElement);
        }
    }

});


document.addEventListener("click", function(e) {

    if (e.target.classList.contains("Close-Button")) {

        const windowElement = e.target.closest(".Windows");

        if (windowElement) {
            windowElement.style.display = "none";
        }

    }

});


// Make the DIV element draggable:
async function dragElement(elmnt) {

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    function dragMouseDown(e) {

        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {

        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;

        pos3 = e.clientX;
        pos4 = e.clientY;

        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {

        document.onmouseup = null;
        document.onmousemove = null;

    }

    dragMouseDown(window.event);
}