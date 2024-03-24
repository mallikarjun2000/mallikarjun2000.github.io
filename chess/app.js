const chessBoxes = [...Array(8)].map(() => Array(8));
function generateChessBoard() {
    const grid = document.getElementById("grid");
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const singleBox = createBox(i, j);
            grid.appendChild(singleBox);
            chessBoxes[i][j] = singleBox;
        }
    }
    grid.addEventListener("click", (e) => handleClick(e));
    document.addEventListener(
        "click",
        (e) => {
            if (!Array(e.target.classList).includes("chess-box")) {
                clearHighlighter();
            }
        },
        {
            capture: true,
        }
    );
}

function isIndexValid(i, j) {
    return i >= 0 && j >= 0 && i < 8 && j < 8;
}

function handleClick(e) {
    clearHighlighter();
    let { row, col } = e.target.dataset;
    row = Number(row);
    col = Number(col);
    generateDiagonals(row, col, 1, 1);
    generateDiagonals(row, col, -1, -1);
    generateDiagonals(row, col, -1, 1);
    generateDiagonals(row, col, 1, -1);
}

function generateDiagonals(row, col, rowDiff, colDiff) {
    while (isIndexValid(row, col)) {
        chessBoxes[row][col].classList.add("highlight");
        row = row + rowDiff;
        col = col + colDiff;
    }
}

function clearHighlighter() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            chessBoxes[i][j].classList.remove("highlight");
        }
    }
}

function createBox(row, col) {
    const box = document.createElement("div");
    box.dataset.row = row;
    box.dataset.col = col;
    box.classList.add("chess-box");
    if (row % 2 === 0) {
        if (col % 2 === 0) {
            box.classList.add("black");
        } else {
            box.classList.add("white");
        }
    } else {
        if (col % 2 === 0) {
            box.classList.add("white");
        } else {
            box.classList.add("black");
        }
    }
    return box;
}
