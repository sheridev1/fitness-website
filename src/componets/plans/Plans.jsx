import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans" id="plans">
      <div className="blur blur-plan-1 "></div>
      <div className="blur blur-plan-2 "></div>
      <div className="plans-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
      <div className="plans">
        {plansData.map((plans) => (
          <div className="plan-category" key={plans.id}>
            {plans.icon}
            <span>{plans.name}</span>
            <span>${plans.price}</span>
            <div className="plan-features">
              {plans.features.map((feature, id) => (
                <div className="feature" key={id}>
                  <img src={whiteTick} alt="Tick" />
                  <div>{feature}</div>
                </div>
              ))}
            </div>
            <div>
              <span>See More benefits -> </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
