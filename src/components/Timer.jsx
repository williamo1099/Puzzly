import { useEffect, useState } from "react";

import usePuzzleStore from "../store/usePuzzleStore";

function Timer() {
  const duration = usePuzzleStore((state) => state.duration);
  const status = usePuzzleStore((state) => state.status);
  const setIsTimeOver = usePuzzleStore((state) => state.setIsTimeOver);

  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    // Set time is over.
    if (status === "win" || timeLeft <= 0) {
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
  }, [timeLeft, setIsTimeOver]);

  return (
    <span className="text-2xl font-semibold">
      {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
    </span>
  );
}

export default Timer;
