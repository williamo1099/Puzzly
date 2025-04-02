import { useEffect, useState } from "react";

import usePuzzleStore from "../store/usePuzzleStore";

import { STATUSES } from "../constants/statuses";

function Timer() {
  const duration = usePuzzleStore((state) => state.duration);
  const status = usePuzzleStore((state) => state.status);
  const setIsTimeOver = usePuzzleStore((state) => state.setIsTimeOver);

  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    // Stop the timer if there is no time left or status is already win.
    if (status === STATUSES.WIN || timeLeft <= 0) {
      setIsTimeOver(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsTimeOver(true);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, status, setIsTimeOver]);

  return (
    <span className="text-2xl font-semibold">
      {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
    </span>
  );
}

export default Timer;
