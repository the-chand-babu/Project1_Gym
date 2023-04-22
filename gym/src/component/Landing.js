import About from "../Pages/About/About";
import Footer from "../Pages/Footer/Footer";
import Home from "../Pages/Home/Home";
import PricingSection from "../Pages/PricingSection/PricingSection";
import TrainerSection from "../Pages/Trainer/TrainerSection";
import TrainingProgram from "../Pages/Training Program/TrainingProgram";
import Navbar from "./Navbar/Navbar";



function Landing(){
    return(
        <div>
        <Navbar />
        <Home />
        <About />
        <TrainingProgram />
        <PricingSection />
        <TrainerSection />
        <Footer />

        </div>
    )    
    }   
 export default Landing;
