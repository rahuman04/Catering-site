import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Home2 from "./Pages/Home2";
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
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
