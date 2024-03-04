question = document.getElementById("question");
states = Array.from(document.getElementsByName("state"));

for (let state of states) {
  state.addEventListener("change", (e) => {
    document.getElementById("message").innerHTML = "";
    let checkedCheckBoxes = states.reduce(
      (acc, state) => (state.checked ? acc + 1 : acc),
      0
    );
    if (checkedCheckBoxes > 0 && checkedCheckBoxes < 4) {
      question.indeterminate = true;
    } else if (checkedCheckBoxes) {
      question.indeterminate = false;
      question.checked = true;
    } else {
      question.indeterminate = false;
      question.checked = false;
    }
  });
}

function handleSubmit(e) {
  const answers = states
    .filter((state) => state.checked)
    .map((state) => state.value);
  if (answers[0] === "Andhra Pradesh" && answers[1] === "Arunachal Pradesh") {
    document.getElementById("submit").disabled = true;
    document.getElementById("message").innerHTML = "Your answer is correct!!";
    document.getElementById("message").style.color = "green";
  } else {
    document.getElementById("message").innerHTML =
      "Your answer is incorrect, try again";
    document.getElementById("message").style.color = "red";
  }
}

question.addEventListener("change", (e) => {
  if (e.target.checked) {
    Array.from(states).forEach((state) => {
      state.checked = true;
    });
  } else {
    Array.from(states).forEach((state) => {
      state.checked = false;
    });
  }
});
