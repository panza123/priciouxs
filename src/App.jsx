import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import Reservation from "./pages/Reservation";


function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Services/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/reservation' element={<Reservation/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
