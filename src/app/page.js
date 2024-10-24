"use client";

import { useEffect, useState } from "react";

const Page = () => {
  const [timer, setTimer] = useState();
  const [counter, setCounter] = useState(5);
  const [laps, setLaps] = useState([]);
  const addTime = () => {
    const date = new Date();
    setTimer(date.toLocaleTimeString());
  };
  const addCounter = () => {
    return setCounter((prev) => prev + 1);
  };
  const add5ToCounter = () => {
    setCounter((prev) => prev + 5);
  };
  const add30ToCounter = () => {
    setCounter((prev) => prev + 30);
  };
  const addLap = () => {
    setLaps([...laps, FormatTime(minuts) + ":" + FormatTime(sec)]);
  };
  console.log(laps);
  const sec = counter % 60;
  const minuts = Math.floor(counter / 60);
  const FormatTime = (time) => {
    if (time <= 9) {
      return `0` + time;
    } else {
      return time;
    }
  };
  useEffect(() => {
    const interval = setInterval(addCounter, 1000);
    return () => clearInterval(interval);
  }, []);
  setInterval(addTime, 1000);

  return (
    <div className="HTML">
      <div className="InnerDiv">
        <h1>Time is: {timer}</h1>
        <h1>
          Elipse time is min: {FormatTime(minuts)} sec: {FormatTime(sec)}
        </h1>
        <div className="outerDiv">
          <button onClick={() => add5ToCounter()} className="button">
            Add 5 sec
          </button>
          <button onClick={() => add30ToCounter()} className="button">
            Add 30 sec
          </button>
          <button onClick={() => addLap()} className="button">
            Lap
          </button>
        </div>
        <div className="Scroll">
          {laps.map((item, index) => {
            return (
              <h1 key={index} className="Lap">
                {item}
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Page;
