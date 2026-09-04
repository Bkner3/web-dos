function addWindowButtons(windowElement) {

    const header = windowElement.querySelector(".Windows-header");

    if (!header) return;

    // Não adicionar os botões novamente
    if (header.querySelector(".Close-Button")) return;

    header.innerHTML += `
        <button class="Close-Button">×</button>
        <button class="Maximize-Button">□</button>
        <button class="Minimize-Button">−</button>
    `;
}


// Adiciona os botões às janelas que já existem
document.querySelectorAll(".Windows").forEach(windowElement => {
    addWindowButtons(windowElement);
});


// Observa novas janelas criadas pelo JavaScript
const desktop = document.querySelector(".Desktop");

const observer = new MutationObserver(function (mutations) {

    mutations.forEach(function (mutation) {

        mutation.addedNodes.forEach(function (node) {

            if (node.nodeType !== 1) return;

            // Se o próprio elemento criado é uma janela
            if (node.classList.contains("Windows")) {
                addWindowButtons(node);
            }

            // Se dentro do elemento criado existir uma janela
            node.querySelectorAll?.(".Windows").forEach(windowElement => {
                addWindowButtons(windowElement);
            });

        });

    });

});

observer.observe(desktop, {
    childList: true,
    subtree: true
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