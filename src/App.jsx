import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import HomePage from "./pages/Home/HomePage.tsx";
import Learning from "./pages/Learning/AdaptiveLearningPlatform.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";


function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para a tela de Login */}
        <Route path="/login" element={<Login />} />
        {/* Rota para a tela HomePage */}
        <Route path="/home" element={<HomePage />} />
        {/* Rota para a tela de Aprendizagem */}
        <Route path="/learning" element={<Learning />} />y   
        {/* Redirecionar para login se a rota for "/" */}
        <Route path="/" element={<Navigate to="/login" />} />
        {/* Rota para 404: Página não encontrada */}
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
