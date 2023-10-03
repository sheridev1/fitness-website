import React from 'react'
import './Reason.css'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import nb from "../../assets/nb.png";
import nike from "../../assets/nike.png";
import adidas from "../../assets/adidas.png"
const Reasons = () => {
  return (
    <div className="reason" id="reason">
      <div className="left">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right">
        <span>SOME REASONS</span>
        <div>
          <span className="stroke-text"> WHY </span>
          <span> CHOOSE US?</span>
        </div>
        <div className="detail">
          <div>
            <img src={tick} />
            <span>Over 140+ Expert Coaches</span>
          </div>
          <div>
            <img src={tick} />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} />
            <span>RELIABLE PARTNERS</span>
          </div>
          <div>
            <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
              OUR PARTNERS
            </span>
          </div>
          <div className="partners">
            <img src={nb} alt="" />
            <img src={nike} alt="" />
            <img src={adidas} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reasons
