import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import TrainingProgram from "./Pages/Training Program/TrainingProgram";
import TrainerSection from "./Pages/Trainer/TrainerSection";
import PricingSection from "./Pages/PricingSection/PricingSection";
import Footer from "./Pages/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";


function App() {
  return (
    <div className="App">
     
     <>
      
      
      

    
     <Navbar />
      <Home />
      <About />
      <Footer/>

      </>
      
     
    </div>
  );
}

export default App;
