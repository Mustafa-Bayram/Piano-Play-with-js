const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");
let allKeys = [],
  audio = new Audio("tunes/d.wav");
const playTune = (key) => {

  audio.src = `tunes/${key}.wav`; // passing audio src based on key pressed
  audio.play(); // playing audio
  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active"); // adding active class to the key
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};
pianoKeys.forEach(key => {
  allKeys.push(key.dataset.key); // adding data-key value to allKeys array
  // calling playTune function with data-key value as an argument
  key.addEventListener("click", () => playTune(key.dataset.key));
});
const handleVolume = (e) => {
  audio.volume = e.target.value; // passing volume value to audio
}
const showHideKeys = (e) => {
pianoKeys.forEach(key => key.classList.toggle("hide"));
}
const pressedKey = (e) => {
  if (allKeys.includes(e.key)) playTune(e.key); // checking if key pressed is in allKeys array
};
keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input",handleVolume);
document.addEventListener("keydown", pressedKey);
