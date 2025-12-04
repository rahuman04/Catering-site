import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Services2 from "./Pages/Services2";
import Home2 from "./Pages/Home2";
import Contact from "./Pages/Contact";
import Home3 from "./Pages/Home3";
import Menu from "./Pages/Menu";
import Services3 from "./Pages/Services3";
import Contact2 from "./Pages/Contact2";
function App() {
  return (
    <>
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
          <Route path="/services2" element={<Services2 />} />
          <Route path="/home3" element={<Home3 />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/Services3" element={<Services3 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact2" element={<Contact2 />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
