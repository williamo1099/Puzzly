import { PlayIcon } from "@heroicons/react/24/solid";

import Overlay from "./Overlay";
import InfoButton from "../InfoButton";

function PauseOverlay({ playButtonClickHandler }) {
  return (
    <Overlay classNames="bg-overlay-background">
      {/* Title */}
      <h1 className="text-4xl font-bold">Paused</h1>

      {/* Pause button */}
      <InfoButton
        classNames="!static !w-20 !h-20 z-20"
        clickHandler={playButtonClickHandler}
        icon={PlayIcon}
      />
    </Overlay>
  );
}

export default PauseOverlay;
