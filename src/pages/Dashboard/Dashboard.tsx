import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  ResponsiveContainer,
} from 'recharts';
import './Dashboard.css'; 
import Navbar from "../../components/Nav/Navbar";

// Dados da projeção de usuários
const userProjectionData = [
  { month: 'Jan', novos_usuarios: 50, usuarios_ativos: 30 },
  { month: 'Fev', novos_usuarios: 75, usuarios_ativos: 45 },
  { month: 'Mar', novos_usuarios: 100, usuarios_ativos: 65 },
  { month: 'Abr', novos_usuarios: 130, usuarios_ativos: 85 },
  { month: 'Mai', novos_usuarios: 160, usuarios_ativos: 110 },
  { month: 'Jun', novos_usuarios: 200, usuarios_ativos: 140 },
];


const userTypeData = [
  { name: 'Matemática', value: 45 },
  { name: 'Português ', value: 35 },
  { name: 'História', value: 15 },
  { name: 'Outros', value: 5 },
];

// Dados de conversão
const conversionData = [
  { name: 'Matemática', value: 1000 },
  { name: 'Português', value: 450 },
  { name: 'História', value: 180 },
];

// Cores para os gráficos
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
      

const Dashboard = () => {

  
  return (
    


    <div className="dashboard-container">
    <div className="min-h-screen bg-gray-50 flex flex-col">
    <Navbar />
     </div>
  
      <h1 className="dashboard-title">Painel de Desempenho - Plataforma Educacional</h1>

      <div className="dashboard-grid">
        {/* Gráfico de Linha: Projeção de Novos Usuários */}
        <div className="card">
          <h2 className="card-titles">Sua Evolução Geral</h2>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userProjectionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="novos_usuarios" stroke="#8884d8" name="Desempenho Individual" />
                <Line type="monotone" dataKey="usuarios_ativos" stroke="#82ca9d" name="Desempenho Individual" />
              </LineChart>
            </ResponsiveContainer>
            
          </div>
        </div>

        {/* Gráfico de Pizza: Distribuição de Tipos de Usuários */}
        <div className="card">
          <h2 className="card-titles">Exercícios realizados</h2>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={userTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {userTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend layout="vertical" verticalAlign="bottom" align="center" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico de Barras: Funil de Conversão */}
        <div className="card">
          <h2 className="card-titles">Desempenho por disciplina</h2>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={conversionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8">
                  {conversionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;