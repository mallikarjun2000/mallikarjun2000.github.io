const magneticButton = document.getElementsByClassName("magnetic")[0];
magneticButton.addEventListener("mousemove", (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  let btnWidth = magneticButton.clientWidth;
  let btnHeight = magneticButton.clientHeight;
  let tranX = x - btnWidth / 2;
  let tranY = y - btnHeight / 2;
  magneticButton.style.transform = `translateX(${tranX}px) translateY(${tranY}px)`;
});
magneticButton.addEventListener("mouseout", (e) => {
  magneticButton.style.transform = ``;
  magneticButton.style.transform = `translateX(${5}px) translateY(${5}px)`;
  magneticButton.style.transform = ``;
});
