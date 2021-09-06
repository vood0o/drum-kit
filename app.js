window.addEventListener("keydown", playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const keys = document.querySelectorAll(".key");
  !audio ? false : true;
  audio.play();
  key.classList.add("playing");
  keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
}

function removeTransition(e) {
  e.propertyName !== "transform" ? false : true;
  this.classList.remove("playing");
}
