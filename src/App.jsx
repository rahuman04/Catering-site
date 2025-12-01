import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Home from "./pages/Home";
import Home3 from "./pages/Home3"
import Menu from "./pages/Menu";
import About from "./pages/About";
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
        <Route path="/home3" element={<Home3 />} />
        <Route path="/about" element={<About />} />
         <Route path="/menu" element={<Menu />} />
        
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
