import "./App.css";

// Import pour pouvoir exécuter les routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages (Routes)
import Home from "./pages/Home";
import Offer from "./pages/Offer";

// Import components (Compossant)
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Offers/:id" element={<Offer />} />
        <Route path="/Header" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
