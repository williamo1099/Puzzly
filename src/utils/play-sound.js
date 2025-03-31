function playSound(src) {
  if (!src) {
    return;
  }

  const sound = new Audio(src);
  sound.currentTime = 0;
  sound.play();
}

export default playSound;
