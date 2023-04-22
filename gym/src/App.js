// import TrainerSection from './Pages/Trainer/TrainerSection'
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import TrainerSection from "./Pages/Trainer/TrainerSection";
import PricingSection from "./Pages/PricingSection/PricingSection";
import Footer from "./Pages/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import TrainingProgram from "./Pages/Training Program/TrainingProgram";
// import PricingSection from './Pages/PricingSection/PricingSection';
import 'react-multi-carousel/lib/styles.css';
import WholeTeam from './component/WholeTeam/WholeTeam'
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Loginpage/Login";
import Register from "./Pages/Registration/Registration";
import Landing from "./component/Landing";



function App() {
  return (
    <div className="App">

      
       
        <Routes>
           <Route  path='/' element={<Landing />}/>
           <Route  path='/login' element={<Login />} />
            <Route  path='/Register' element={<Register />} />
            <Route  path='/Team' element={<WholeTeam />} />
        </Routes>


    
    </div>
  );
}

export default App;
