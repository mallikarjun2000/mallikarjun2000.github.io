const display = document.getElementsByClassName("display")[0];
const start = document.getElementById("start");
const pause = document.getElementById("stop");
const finish = document.getElementById("reset");
pause.disabled = true;
let interval;
let secondsPassed = 0;
function stopTimer() {
  clearInterval(interval);
  display.innerHTML = `00 : 00 : 00`;
  secondsPassed = 0;
  start.disabled = false;
  pause.disabled = true;
}

function startTimer() {
  interval = setInterval(() => {
    secondsPassed++;
    const time = formatTime(secondsPassed);
    display.innerHTML = `${time.hours < 10 ? "0" + time.hours : time.hours} :
      ${time.minutes < 10 ? "0" + time.minutes : time.minutes} :
      ${time.seconds < 10 ? "0" + time.seconds : time.seconds}`;
  }, 1000);
  start.disabled = true;
  pause.disabled = false;
}

function formatTime(seconds) {
  // Calculate hours
  const hours = Math.floor(seconds / 3600);

  // Calculate remaining seconds after hours
  seconds %= 3600;

  // Calculate minutes
  const minutes = Math.floor(seconds / 60);

  // Calculate remaining seconds after minutes
  seconds %= 60;

  return { hours, minutes, seconds };
}

function pauseOrResume() {
  const status = pause.innerHTML;
  if (status === "Pause") {
    clearInterval(interval);
    pause.innerHTML = "Resume";
  } else {
    startTimer();
    pause.innerHTML = "Pause";
  }
}

function createRipple(event) {
  const button = event.target;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  console.log(
    `${event.clientY - (button.offsetTop + radius)}px`,
    `${event.clientX - (button.offsetLeft + radius)}px`
  );
  circle.style.left = `${event.clientX - 40}px`;
  circle.style.top = `${event.clientY - 40}px`;
  console.log(circle.style);
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];
  if (ripple) {
    ripple.remove();
  }
  button.appendChild(circle);
}

start.addEventListener("click", (e) => {
  startTimer();
  createRipple(e);
});
pause.addEventListener("click", (e) => {
  pauseOrResume();
  createRipple(e);
  console.log("clicked pause/resume");
});
finish.addEventListener("click", (e) => {
  stopTimer();
  createRipple(e);
});

// isInMouse = true;
// start.onmouseenter = (e) => {
//   isInMouse = true;
// };
// start.onmouseleave = (e) => {
//   isInMouse = false;
// };
// start.onmousemove = (e) => {
//   if (isInMouse) {
//     console.log("moving inside mouse");
//     console.log(e.clientX, e.clientY);
//     start.style.left = e.clientX;
//     start.style.top = e.clientY;
//   } else {
//     console.log("moving outisde the mouse");
//   }
// };
