import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import HomePage from "./pages/Home/HomePage.tsx";
import Learning from "./pages/Learning/AdaptiveLearningPlatform.jsx";



function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para a tela de Login */}
        <Route path="/login" element={<Login />} />
        {/* Rota para a tela HomePage */}
        <Route path="/home" element={<HomePage />} />
        {/* Rota para a tela de Aprendizagem */}
        <Route path="/learning" element={<Learning />} />
      </Routes>
    </Router>
  );
}

export default App;
