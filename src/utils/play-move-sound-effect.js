function playMoveSound() {
  const moveSound = new Audio("/sounds/move.mp3");
  moveSound.currentTime = 0;
  moveSound.play();
}

export default playMoveSound;
