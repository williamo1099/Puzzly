import playSound from "./playSound";

import { SOUND_FILENAMES } from "../constants/soundFilenames";

const withClickSound = (handler) => () => {
  playSound(SOUND_FILENAMES.CLICK);
  if (typeof handler === "function") {
    handler();
  }
};

export default withClickSound;
