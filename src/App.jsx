import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import HomePage from "./pages/Home/HomePage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para a tela de Login */}
        <Route path="/" element={<Login />} />
        {/* Rota para a tela HomePage */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
