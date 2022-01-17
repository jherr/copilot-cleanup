import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useInterval } from "usehooks-ts";

import { useTimer } from "./useTimer";

import "./index.scss";

const App = () => {
  const [goodTime, setGoodTime] = useState(0);
  const [playing, setPlaying] = useState(false);

  const { start, stop, time } = useTimer();

  useInterval(
    () => {
      setGoodTime(goodTime + 0.1);
    },
    playing ? 100 : null
  );

  const toggle = () => {
    if (playing) {
      stop();
    } else {
      start();
    }
    setPlaying(!playing);
  };

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl" style={{ zoom: 3 }}>
      <div className="grid grid-cols-2 gap-5">
        <div>Good</div>
        <div>Bad</div>
        <div>{goodTime.toFixed(1)}</div>
        <div>{time.toFixed(1)}</div>
      </div>
      <div>
        <button
          className="px-5 py-2 bg-purple-900 text-white rounded-lg"
          onClick={toggle}
        >
          {playing ? "Stop" : "Play"}
        </button>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
