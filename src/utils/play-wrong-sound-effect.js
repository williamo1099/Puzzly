function playWrongSound() {
  const wrongSound = new Audio("/sounds/wrong.mp3");
  wrongSound.currentTime = 0;
  wrongSound.play();
}

export default playWrongSound;
