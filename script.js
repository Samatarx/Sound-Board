const sounds = [
  "applause",
  "boo",
  "gasp", //"tada", "victory",
  "wrong",
];

sounds.forEach((sound) => {
  //create button
  const btn = document.createElement("button");
  //add btn class
  btn.classList.add("btn");
  //add text to button
  btn.innerText = sound;

  //create an event to play and pause sounds
  btn.addEventListener("click", () => {
    stopSongs();
    //plays the audio
    document.getElementById(sound).play();
  });
  //creates the button
  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    //HTML 5 api allows you to pause and reset the audio
    song.pause();
    song.currentTime = 0;
  });
}
