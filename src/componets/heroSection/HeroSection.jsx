import Header from "../Header/Header";
import "./style.css";
import JoinButton from "../Button/JoinButton";
import MainText from "../MainText/MainText";
import Figures from "../figures/Figures";
import HeartRate from "../heartRate/heartRate";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";
const HeroSection = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile=window.innerWidth<=768 ? true :false;
  return (
    <div className="hero" id="hero">
      <div className="blur blur-hero "></div>
      <div className="left-h">
        <Header />
        <div className="the-best-add">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px " }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The BEST FITNESS CLUB IN THE TOWN</span>
        </div>
        <MainText />
        <Figures />
        <div className="main-buttons">
          <JoinButton
            name={"Get Started"}
            style={{
              backgroundColor: "var(--orange)",
              border: "4px solid transparent",
              color: "white",
            }}
          />
          <JoinButton
            name={"Learn More"}
            style={{
              backgroundColor: "transparent",
              border: "2px solid orange",
              color: "white",
            }}
          />
        </div>
      </div>
      <div className="right-h">
        <JoinButton
          name={"Join Now"}
          style={{
            backgroundColor: "white",
            color: "black",
            border: "2px solid transparent",
            position: "absolute",
            right: "3rem",
            top: "2rem",
          }}
        />
        <HeartRate />

        <img src={hero_image} alt="hero_image" className="hero_image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt="hero_image_back"
          className="hero_image_back"
        />
        <motion.div
          className="calories"
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>
              {" "}
              <CountUp end={220} start={150} delay="2" suffix="Kcal" />
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
