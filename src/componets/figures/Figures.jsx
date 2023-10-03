import React from 'react'
import "./style.css"
import CountUp from "react-countup";
const Figures = () => {
  return (
    <div className="figure">
      <div>
        <span>
          <CountUp end={140} start={100} delay="2" prefix="+" />
        </span>
        <span>Expert Coaches</span>
      </div>
      <div>
        <span>
          {" "}
          <CountUp end={978} start={900} delay="2" prefix="+" />
        </span>
        <span>Members Joined</span>
      </div>
      <div>
        <span>
          {" "}
          <CountUp end={50} start={20} delay="2" prefix="+" />
        </span>
        <span>Fitness Programs</span>
      </div>
    </div>
  );
}

export default Figures
