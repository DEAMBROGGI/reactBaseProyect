import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div>
        <h1>useEffect Clock</h1>
        <h2>It is {time.toLocaleTimeString()}.</h2>
    </div>
  );
};

export default Timer;
