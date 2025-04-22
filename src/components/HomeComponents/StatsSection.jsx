import React, { useEffect, useState } from "react";
import "../../styles/global.css";

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // total time for animation (1.5s)
    const incrementTime = 50;
    const step = Math.ceil(end / (duration / incrementTime));

    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end]);

  return <h2>{count}+</h2>;
};

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-item">
        <Counter end={15} />
        <hr />
        <p>Subjects</p>
      </div>
      <div className="stats-item">
        <Counter end={124} />
        <hr />
        <p>Schools</p>
      </div>
      <div className="stats-item">
        <Counter end={52} />
        <hr />
        <p>Certificates</p>
      </div>
      <div className="stats-item">
        <Counter end={250} />
        <hr />
        <p>Teachers</p>
      </div>
    </section>
  );
};

export default StatsSection;
