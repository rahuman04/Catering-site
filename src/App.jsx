import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Home2 from "./Pages/Home2";
import Home3 from "./pages/Home3"
import Menu from "./pages/Menu";
import Services3 from "./Pages/Services3";
// import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Home /> 
              
            </>
          }
        />
         <Route path="/home2" element={<Home2 />} />
        <Route path="/about" element={<About />} />
         <Route path="/services" element={<Services />} />
        <Route path="/home3" element={<Home3 />} />
         <Route path="/menu" element={<Menu />} />
         <Route path="/Services3" element={<Services3 />} />
        
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
