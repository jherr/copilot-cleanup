import { useState, useEffect } from "react";

export const useTimer = () => {
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playing) {
      const startTime = Date.now();
      const interval = setInterval(
        () => setTime((Date.now() - startTime) / 1000),
        100
      );
      return () => {
        clearInterval(interval);
      };
    }
  }, [playing]);

  return { start: () => setPlaying(true), stop: () => setPlaying(false), time };
};
