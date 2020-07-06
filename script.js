console.log("Connected!");
var leftArrow = document.querySelector("#leftArrow");
var rightArrow = document.querySelector("#rightArrow");
var favoriteThings = [];
var submit = document.querySelector("#submit");
var userInput = document.querySelector("#favoriteInput");
var currentIndex = 0;
var counter = document.querySelector("#counter");
var favoriteOutput = document.querySelector("#favoriteOutput");

console.log(userInput);
leftArrow.addEventListener("click", e => {
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = favoriteThings.length - 1;
    favoriteOutput.innerHTML = favoriteThings[currentIndex];
    counter.innerHTML = currentIndex + 1;
  } else {
    favoriteOutput.innerHTML = favoriteThings[currentIndex];
    counter.innerHTML = currentIndex + 1;
  }
});

rightArrow.addEventListener("click", e => {
  currentIndex += 1;
  if (currentIndex >= favoriteThings.length) {
    currentIndex = 0;
    favoriteOutput.innerHTML = favoriteThings[currentIndex];
    counter.innerHTML = currentIndex + 1;
  } else {
    favoriteOutput.innerHTML = favoriteThings[currentIndex];
    counter.innerHTML = currentIndex + 1;
  }
});

submit.addEventListener("click", e => {
  console.log("clicked!");
  favoriteThings.push(userInput.value);
  userInput.value = "";
  console.log(favoriteThings);
  favoriteOutput.innerHTML = favoriteThings[currentIndex];
});
