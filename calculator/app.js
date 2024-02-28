const calculator = document.getElementsByClassName("calculator")[0];
const calculation = document.getElementsByClassName(
  "calculator__calculation"
)[0];
const calculationResult =
  document.getElementsByClassName("calculator__result")[0];
const buttons = document.getElementsByClassName("btn");
let currentCalculation = "";
for (let btn of buttons) {
  btn.addEventListener("click", (e) => {
    if (e.target.innerText === "CE") {
      calculation.innerText = "";
      currentCalculation = "";
      return;
    }
    if (e.target.innerText === "=") {
      solve(currentCalculation);
      return;
    }
    currentCalculation += e.target.innerText;
    const node = document.createElement("div");
    if (e.target.innerText !== "*") node.innerText = e.target.innerText;
    else node.innerHTML = "X";
    node.style.display = "inline";
    console.log([...e.target.classList].includes("btn"));
    if ([...e.target.classList].includes("spl")) {
      node.style.color = "#52c9dc";
    }
    calculation.append(node);
  });
}

function solve(history) {
  currentCalculation = eval(currentCalculation);
  calculationResult.innerText = currentCalculation;
  calculation.innerText = "";
}
