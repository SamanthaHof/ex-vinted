import "./App.css";
import { useState } from "react";
import Cookies from "js-cookie";

// Import pour pouvoir exécuter les routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages (Routes)
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";

// Import components (Compossant)
import Header from "./components/Header";

function App() {
  const [token, setToken] = useState(Cookies.get("vinted-token") || null);
  const [search, setSearch] = useState("");

  //  Permet de stocker le token dans le state et dans les cookies ou sup le token dans le state et dans les cookies
  const handleToken = (token) => {
    if (token) {
      Cookies.set("vinted-token", token, { expires: 15 });
      setToken(token);
    } else {
      Cookies.remove("vinted-token");
      setToken(null);
    }
  };

  return (
    <Router>
      <Header
        token={token}
        search={search}
        handleToken={handleToken}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/offers/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route path="/publish" element={<Publish token={token} />} />
      </Routes>
    </Router>
  );
}

export default App;
