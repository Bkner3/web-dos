const calculatorButton = document.getElementById("Calculator-Icon");
const calculatorButton2 = document.getElementById("Calculator");

function openCalculator() {
    
    const windows = document.createElement("div");

    windows.id = "Windows4";
    windows.classList.add("Windows");
    
    windows.style.cssText = "display: flex; flex-direction: column; border: none; padding-bottom: 10px;";

    windows.innerHTML = `
    <div class="Windows-header">
        Calculator
    </div>

    <!-- Div para alinhar o Display e os Botões com a mesma margem interna -->
    <div class="Calculator-Body" style="padding: 10px 10px 0 10px; display: flex; flex-direction: column; align-items: center;">

        <input type="text" class="Calculator-Display" id="Calculator-Display" readonly>

        <div class="Calculator-Buttons">

            <p>
                <button class="Calculator-Button" data-value="C">C</button>
                <button class="Calculator-Button" data-value="%">%</button>
                <button class="Calculator-Button" data-value="backspace">←</button>
                <button class="Calculator-Button" data-value="/">/</button>
            </p>

            <p>
                <button class="Calculator-Button" data-value="7">7</button>
                <button class="Calculator-Button" data-value="8">8</button>
                <button class="Calculator-Button" data-value="9">9</button>
                <button class="Calculator-Button" data-value="*">×</button>
            </p>

            <p>
                <button class="Calculator-Button" data-value="4">4</button>
                <button class="Calculator-Button" data-value="5">5</button>
                <button class="Calculator-Button" data-value="6">6</button>
                <button class="Calculator-Button" data-value="-">−</button>
            </p>

            <p>
                <button class="Calculator-Button" data-value="1">1</button>
                <button class="Calculator-Button" data-value="2">2</button>
                <button class="Calculator-Button" data-value="3">3</button>
                <button class="Calculator-Button" data-value="+">+</button>
            </p>

            <p>
                <button class="Calculator-Button" data-value="0">0</button>
                <button class="Calculator-Button" data-value=".">.</button>
                <button class="Calculator-Button" data-value="=">=</button>
            </p>

        </div>
    </div>
`;

    document.querySelector(".Desktop").appendChild(windows);

    document.querySelectorAll(".Calculator-Display").forEach(el => {
        el.style.cssText = "width: 100%; box-sizing: border-box; height: 40px; border: 1px solid #808080; background-color: #ffffff; color: #000; text-align: right; font-size: 20px; padding: 5px 10px; outline: none; margin-bottom: 5px;";
    });
    
    windows.style.display = "flex";
}

calculatorButton.addEventListener("click", function () {
    openCalculator();
});

calculatorButton2.addEventListener("click", function () {
    openCalculator();
});