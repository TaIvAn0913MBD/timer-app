"use client";
import { useEffect, useState } from "react";

const Page = () => {
  const [counter, setCounter] = useState(5);

  const addCounter = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const add30secToCounter = () => {
    setCounter((prev) => prev + 30);
  };
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

  return (
    <div>
      <h1>
        Elipse time is min:{FormatTime(minuts)} sec:{FormatTime(sec)}
      </h1>
      <button onClick={() => add30secToCounter()}>add 30</button>
    </div>
  );
};
export default Page;
