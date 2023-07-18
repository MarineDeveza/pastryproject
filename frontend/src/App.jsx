import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./Header.css";
import "./Footer.css";
import Home from "./pages/Home";
import PastryShop from "./pages/PastryShop";
import PastryLessons from "./pages/PastryLessons";
import About from "./pages/About";
import AddPastries from "./components/AddPastries";
import EditPastries from "./components/EditPastries";
import Login from "./components/Login";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pastryshop" element={<PastryShop />} />
          <Route path="/pastrylessons" element={<PastryLessons />} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<AddPastries />} />
          <Route path="/edit/:id" element={<EditPastries />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
