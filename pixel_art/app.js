const colors = [
    "red",
    "green",
    "blue",
    "white",
    "grey",
    "black",
    "brown",
    "yellow",
    "violet",
    "indigo",
];
let selectedColor = "";
let isMouseDown = false;
const colorPanel = document.getElementById("color-panel");
const selectedColorDiv = document.getElementById("selected-color-div");
function pixelArt(id, rows, columns) {
    const grid = document.getElementById(id);
    for (let i = 0; i < 10; i++) {
        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");
        colorBox.dataset.color = colors[i];
        colorBox.style.backgroundColor = colors[i];
        colorPanel.appendChild(colorBox);
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const paintBox = document.createElement("div");
            paintBox.classList.add("paint-box");
            grid.appendChild(paintBox);
        }
    }
    grid.addEventListener("click", (e) => {
        e.target.style.backgroundColor = selectedColor;
    });
    grid.addEventListener("mousedown", (e) => {
        isMouseDown = true;
    });
    grid.addEventListener("mouseup", (e) => {
        isMouseDown = false;
    });
    grid.addEventListener("mouseover", (e) => {
        if (isMouseDown) {
            e.target.style.backgroundColor = selectedColor;
        } else {
            // Do nothing
        }
    });
    colorPanel.addEventListener("click", (e) => {
        const box = e.target;
        selectedColor = box.dataset.color;
        selectedColorDiv.innerHTML = `selected color <b>${selectedColor}</b>`;
    });
}
