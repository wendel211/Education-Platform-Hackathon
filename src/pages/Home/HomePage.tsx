import React from "react";
import Navbar from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import FeatureCard from "../../components/Feature/FeatureCard";
import BenefitCard from "../../components/Benefit/BenefitCard";
import { Brain, Rocket, Sparkles, GraduationCap, BookOpen } from "lucide-react";
import "./HomePage.css";



const HomePage = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <Navbar />

    <main className="flex-grow pt-16">
    <main className="flex-grow pt-16">

{/* Hero Section */}
<section className="hero-section">
  <div className="container mx-auto px-6 md:px-12 text-center">
    <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
      Aprenda no seu ritmo com IA
    </h1>
    <p className="hero-description text-xl text-gray-600 mb-8">
      Uma plataforma educacional adaptativa que evolui com você
    </p>
    <button className="primary-button">Comece sua jornada</button>
  </div>
</section>  
</main>


      {/* Features Section */}
<section className="features-section" id="features">
  <div className="container mx-auto px-4">
    <div className="features-grid">
      <FeatureCard
        icon={<Brain className="h-12 w-12 text-blue-600" />}
        title="Aprendizado Adaptativo"
        description="A IA analisa seu progresso e adapta o conteúdo ao seu ritmo de aprendizado"
      />
      <FeatureCard
        icon={<Rocket className="h-12 w-12 text-blue-600" />}
        title="Conteúdo Personalizado"
        description="Receba recomendações de conteúdo baseadas no seu perfil de aprendizagem"
      />
      <FeatureCard
        icon={<Sparkles className="h-12 w-12 text-blue-600" />}
        title="Feedback Inteligente"
        description="Obtenha feedback instantâneo e sugestões de melhoria em tempo real"
      />
    </div>
  </div>
</section>

      {/* Benefits Section */}
      <section className="benefits-section" id="benefits">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Benefícios</h2>
          <div className="benefits-grid">
            <BenefitCard
              icon={<GraduationCap className="h-8 w-8 text-blue-600" />}
              title="Evolução Constante"
              description="Acompanhe seu progresso e veja sua evolução em tempo real"
              action="Saiba mais"
            />
            <BenefitCard
              icon={<BookOpen className="h-8 w-8 text-blue-600" />}
              title="Material Didático Rico"
              description="Acesso a conteúdo diversificado e atualizado regularmente"
              action="Explorar conteúdo"
            />
            <BenefitCard
              icon={<Sparkles className="h-8 w-8 text-blue-600" />}
              title="Contéudos de Qualidade"
              description="Aprenda com especialistas e professores renomados em suas áreas"
              action="Comece agora"
      
            />
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default HomePage;
