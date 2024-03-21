const ratingParent = document.getElementsByClassName("rating_parent");
const ratingValue = document.getElementsByClassName("rating_value");
let stars;
let selectedRating = 0;
function getStarElement(index) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.dataset.index = index;
  return star;
}

function init() {
  for (let i = 0; i < 5; i++) {
    ratingParent[0].appendChild(getStarElement(i + 1));
  }
  stars = ratingParent[0].childNodes;
  initEvents();
}

function initEvents() {
  ratingParent[0].addEventListener(
    "mouseenter",
    (e) => {
      clearRating();
      updateRatingUI(e.target.dataset.index + 1);
      ratingValue[0].innerHTML = `Rating is ${e.target.dataset.index}`;
    },
    { capture: true }
  );
  ratingParent[0].addEventListener("mouseover", (e) => {
    updateRatingUI(e.target.dataset.index + 1);
    ratingValue[0].innerHTML = `Rating is ${e.target.dataset.index}`;
  });
  ratingParent[0].addEventListener("mouseout", (e) => {
    if (!selectedRating) {
      clearRating();
      ratingValue[0].innerHTML = `Rating is ${0}`;
    } else {
      updateRatingUI(selectedRating);
      updateRatingValue(selectedRating);
    }
  });
  ratingParent[0].addEventListener("click", (e) => {
    updateRatingValue(e.target.dataset.index);
    updateRatingUI(e.target.dataset.index);
  });
}

function updateRatingValue(rating) {
  selectedRating = rating;
  ratingValue[0].innerHTML = `Rating is ${rating}`;
}

function updateRatingUI(rating) {
  for (let star of stars) {
    if (star.dataset.index <= rating) {
      star.classList.add("is-included");
    }
  }
}

function clearRating(rating = 0) {
  for (let star of stars) {
    star.classList.remove("is-included");
  }
  updateRatingValue(0);
}

init();
