import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

// Import pour pouvoir exécuter les routes
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

// Import components
import Header from "./components/Header";

function App() {}

return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Offer" element={<Offer />} />
      <Route path="/Header" element={<Header />} />
    </Routes>
  </Router>
);

export default App;
