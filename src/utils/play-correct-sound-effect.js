function playCorrectSound() {
  const correctSound = new Audio("/sounds/correct.mp3");
  correctSound.currentTime = 0;
  correctSound.play();
}

export default playCorrectSound;
