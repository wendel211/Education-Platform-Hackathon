import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import styles from "../Login/Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const validateForm = () => {
    if (!formData.username.trim()) {
      setError("Por favor, insira um nome de usuário.");
      return false;
    }
    if (formData.password.length < 7) {
      setError("A senha deve ter pelo menos 7 caracteres.");
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Simular uma pequena espera para dar feedback visual
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Se a validação passar, navega para a plataforma
      navigate("/home", { 
        state: { username: formData.username }  // Passa o nome do usuário como state
      });
      
    } catch (error) {
      setError("Erro ao realizar login. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginHeader}>
          <h1 className={styles.loginTitle}>Bem-vindo!</h1>
          <p className={styles.loginSubtitle}>Faça login para continuar</p>
        </div>
        
        <form onSubmit={handleLogin}>
          <div className={styles.loginContent}>
            {error && (
              <div className={styles.errorAlert}>
                <p>{error}</p>
              </div>
            )}
            
            <div className={styles.inputWrapper}>
              <User className={styles.inputIcon} />
              <input
                type="text"
                name="username"
                placeholder="Nome de usuário"
                value={formData.username}
                onChange={handleInputChange}
                className={styles.inputField}
                autoComplete="username"
              />
            </div>

            <div className={styles.inputWrapper}>
              <Lock className={styles.inputIcon} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Senha"
                value={formData.password}
                onChange={handleInputChange}
                className={styles.inputField}
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.passwordToggle}
              >
                {showPassword ? (
                  <EyeOff className={styles.toggleIcon} />
                ) : (
                  <Eye className={styles.toggleIcon} />
                )}
              </button>
            </div>

            {/* Indicador de força da senha */}
            {formData.password && (
              <div className={styles.passwordStrength}>
                <div 
                  className={`${styles.strengthBar} ${
                    formData.password.length >= 7 ? styles.strengthGood : styles.strengthWeak
                  }`}
                />
                <span className={styles.strengthText}>
                  {formData.password.length >= 7 
                    ? "Senha válida" 
                    : `Faltam ${7 - formData.password.length} caracteres`
                  }
                </span>
              </div>
            )}

            <div className={styles.forgotPasswordWrapper}>
              <button
                type="button"
                className={styles.forgotPasswordLink}
              >
                Esqueceu a senha?
              </button>
            </div>
          </div>

          <div className={styles.loginFooter}>
            <button
              type="submit"
              className={styles.loginButton}
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </button>
            
            <p className={styles.signupText}>
              Não tem uma conta?{" "}
              <button
                type="button"
                className={styles.signupLink}
              >
                Cadastre-se
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;