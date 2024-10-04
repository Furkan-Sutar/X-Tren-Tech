import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ScrollToTop from "./helper/ScrollTop";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
