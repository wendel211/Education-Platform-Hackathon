import { BookOpen, Award, Settings, User, Globe2, Book } from "lucide-react";
import React, { useState, useEffect, useMemo } from "react";
import "./AdaptiveLearningPlatform.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Nav/Navbar";

const AdaptiveLearningPlatform = () => {
  const [currentContent, setCurrentContent] = useState(null);
  const [userProgress, setUserProgress] = useState({
    mathematics: 0,
    portuguese: 0,
  });
  const [selectedModule, setSelectedModule] = useState("intro");
  const [language, setLanguage] = useState("pt");
  const [selectedSubject, setSelectedSubject] = useState("mathematics");

  const mathContent = useMemo(
    () => ({
      intro: {
        pt: {
          title: "Introdução à Matemática",
          difficulty: 1,
          content:
            "Bem-vindo ao módulo introdutório de matemática! Neste curso, você aprenderá os fundamentos essenciais que servirão como base para todo seu aprendizado futuro.",
          exercises: [
            "Realize operações básicas com números naturais",
            "Identifique propriedades dos números inteiros",
            "Pratique problemas de raciocínio lógico",
          ],
        },
        en: {
          title: "Introduction to Mathematics",
          difficulty: 1,
          content:
            "Welcome to the introductory mathematics module! In this course, you'll learn the essential fundamentals that will serve as the foundation for all your future learning.",
          exercises: [
            "Perform basic operations with natural numbers",
            "Identify properties of integers",
            "Practice logical reasoning problems",
          ],
        },
      },
      basic: {
        pt: {
          title: "Conceitos Básicos de Matemática",
          difficulty: 2,
          content:
            "Neste módulo, vamos explorar os fundamentos da álgebra básica, geometria e estatística.",
          exercises: [
            "Resolva equações de primeiro grau",
            "Calcule áreas de figuras planas",
            "Interprete gráficos básicos",
          ],
        },
        en: {
          title: "Basic Math Concepts",
          difficulty: 2,
          content:
            "In this module, we'll explore the fundamentals of basic algebra, geometry, and statistics.",
          exercises: [
            "Solve first-degree equations",
            "Calculate areas of plane figures",
            "Interpret basic graphs",
          ],
        },
      },
      advanced: {
        pt: {
          title: "Matemática Avançada",
          difficulty: 3,
          content:
            "Este módulo aborda tópicos mais avançados, incluindo cálculo, álgebra linear e probabilidade.",
          exercises: [
            "Derive funções polinomiais",
            "Resolva sistemas de equações lineares",
            "Calcule probabilidades e estatísticas",
          ],
        },
        en: {
          title: "Advanced Mathematics",
          difficulty: 3,
          content:
            "This module covers more advanced topics, including calculus, linear algebra, and probability.",
          exercises: [
            "Derive polynomial functions",
            "Solve systems of linear equations",
            "Calculate probabilities and statistics",
          ],
        },
      },  
    }),
    []
  );

  const portugueseContent = useMemo(
    () => ({
      intro: {
        pt: {
          title: "Introdução à Língua Portuguesa",
          difficulty: 1,
          content:
            "Bem-vindo ao módulo introdutório de português! Aqui você aprenderá os fundamentos da língua portuguesa, incluindo gramática básica e estruturação textual.",
          exercises: [
            "Identifique classes gramaticais",
            "Pratique concordância verbal",
            "Analise estruturas textuais simples",
          ],
        },
        en: {
          title: "Introduction to Portuguese Language",
          difficulty: 1,
          content:
            "Welcome to the Portuguese language introductory module! Here you'll learn the fundamentals of Portuguese, including basic grammar and text structure.",
          exercises: [
            "Identify grammatical classes",
            "Practice verbal agreement",
            "Analyze simple text structures",
          ],
        },
      },
      basic: {
        pt: {
          title: "Gramática e Composição",
          difficulty: 2,
          content:
            "Neste módulo, exploraremos aspectos mais complexos da gramática portuguesa e técnicas de composição textual.",
          exercises: [
            "Aplique regras de acentuação",
            "Construa parágrafos coesos",
            "Pratique diferentes tipos de texto",
          ],
        },
        en: {
          title: "Grammar and Composition",
          difficulty: 2,
          content:
            "In this module, we'll explore more complex aspects of Portuguese grammar and text composition techniques.",
          exercises: [
            "Apply accent rules",
            "Build cohesive paragraphs",
            "Practice different types of text",
          ],
        },
      },
      advanced: {
        pt: {
          title: "Literatura e Redação Avançada",
          difficulty: 3,
          content:
            "Este módulo foca em análise literária e técnicas avançadas de redação, incluindo diferentes gêneros textuais.",
          exercises: [
            "Analise obras literárias clássicas",
            "Desenvolva textos argumentativos",
            "Crie narrativas complexas",
          ],
        },
        en: {
          title: "Literature and Advanced Writing",
          difficulty: 3,
          content:
            "This module focuses on literary analysis and advanced writing techniques, including different textual genres.",
          exercises: [
            "Analyze classical literary works",
            "Develop argumentative texts",
            "Create complex narratives",
          ],
        },
      },
    }),
    []
  );

  const content = useMemo(
    () => ({
      mathematics: mathContent,
      portuguese: portugueseContent,
    }),
    [mathContent, portugueseContent]
  );

  useEffect(() => {
    setCurrentContent(content[selectedSubject][selectedModule][language]);
  }, [content, selectedModule, language, selectedSubject]);

   return (
    <div className="learning-platform">
      <Navbar />
      <div className="header-wrapper">
        <header className="platform-header">
          
          <div className="header-container">
   
            <div className="header-left">
              <h1>
                {language === "pt"
                  ? "  Recomendação de Conteúdo Baseado em seu Perfil:"
                  : "  Content Recommendation Based on Your Profile:"}
              </h1>
            </div>
    
          </div>
          <nav className="subject-nav">
            <div className="subject-nav-container">
              <button
                className={`nav-button ${
                  selectedSubject === "mathematics" ? "active" : ""
                }`}
                onClick={() => setSelectedSubject("mathematics")}
              >
                {language === "pt" ? "Matemática" : "Mathematics"}
              </button>
              <button
                className={`nav-button ${
                  selectedSubject === "portuguese" ? "active" : ""
                }`}
                onClick={() => setSelectedSubject("portuguese")}
              >
                {language === "pt" ? "Português" : "Portuguese"}
              </button>
            </div>
          </nav>
        </header>
      </div>

      <main className="platform-main">
        <aside className="platform-sidebar">
          <nav className="module-navigation">
            {Object.keys(content[selectedSubject]).map((module) => (
              <button
                key={module}
                onClick={() => setSelectedModule(module)}
                className={`nav-button ${
                  selectedModule === module ? "selected" : ""
                }`}
              >
                <BookOpen className="nav-icon" />
                <span>{content[selectedSubject][module][language].title}</span>
              </button>
            ))}
          </nav>

          <div className="progress-section">
            <h3>{language === "pt" ? "Seu Progresso" : "Your Progress"}</h3>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${userProgress[selectedSubject]}%` }}
              ></div>
            </div>
            <button
          className="language-button"
          onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
        >

          <span>{language === "pt" ? "EN" : "PT"}</span>
        </button>
          </div>
        </aside>

        <section className="content-section">
          {currentContent && (
            <div className="content-container">
              <h2>{currentContent.title}</h2>

              <div className="difficulty-indicator">
                <Award className="award-icon" />
                <span>
                  {language === "pt"
                    ? "Nível de dificuldade: "
                    : "Difficulty level: "}
                  {currentContent.difficulty}
                </span>
              </div>

              <p className="content-text">{currentContent.content}</p>

              <div className="exercises-section">
                <h3>{language === "pt" ? "Exercícios:" : "Exercises:"}</h3>
                <ul className="exercises-list">
                  {currentContent.exercises.map((exercise, index) => (
                    <li key={index}>{exercise}</li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  setUserProgress((prev) => ({
                    ...prev,
                    [selectedSubject]: Math.min(prev[selectedSubject] + 10, 100),
                  }));
                }}
                className="complete-button"
              >
                {language === "pt" ? "Completar Lição" : "Complete Lesson"}
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default AdaptiveLearningPlatform;
