import "./App.css"; 
import Program from "./componets/program/Program"
import HeroSection from "./componets/heroSection/HeroSection";
import Reasons from "./componets/reasons/Reasons";
import Plans from "./componets/plans/Plans";
import Testimonial from "./componets/Testimonial/Testimonial";
import JoinNow from "./componets/Join/JoinNow";
import Footer from "./componets/footer/Footer";
import Bars from "./assets/bars.png"
function App() {
  return (
    <div className="App">
      <HeroSection />
      <Program/>
      <Reasons/>
      <Plans/>
      <Testimonial/>
      <JoinNow/>
      <Footer/>
    </div>
  );
}

export default App;
