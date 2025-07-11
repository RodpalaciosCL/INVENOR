import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Eye, EyeOff } from "lucide-react";
import aironLogo from "@assets/IRON TECH (100 x 100 px) (5 x 5 cm) (200 x 50 cm) (100 x 50 cm) (9)_1750254619168.png";

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const INVESTOR_PASSWORD = "243678";
  const ADMIN_PASSWORD = "2026123";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    await new Promise(resolve => setTimeout(resolve, 800));

    if (password === INVESTOR_PASSWORD || password === ADMIN_PASSWORD) {
      // Store user type in localStorage for dashboard access
      if (password === ADMIN_PASSWORD) {
        localStorage.setItem('userType', 'admin');
        localStorage.setItem('adminCode', password);
      } else {
        localStorage.setItem('userType', 'investor');
        // Only track investor logins, not admin logins
        try {
          await fetch('/api/login-track', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
          });
        } catch (error) {
          console.error('Failed to track login:', error);
        }
      }
      
      onLogin();
    } else {
      setError("Clave incorrecta. Contacte al equipo Airontech para obtener acceso.");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[var(--dark-bg)] flex items-center justify-center px-6 py-8 md:py-0">
      <div className="max-w-md w-full mt-8 md:mt-0">
        <div className="text-center">
          <motion.div 
            className="mb-0"
            animate={{ 
              opacity: [1, 0.3, 1] 
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src={aironLogo} 
              alt="Airontech Logo"
              className="h-24 md:h-40 mx-auto mt-4 md:mt-8"
            />
          </motion.div>
          <p className="text-[var(--text-secondary)] text-base md:text-lg mb-3 md:mb-4 -mt-4 md:-mt-8">
            Pitch Deck - Acceso Exclusivo Inversores
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-[var(--border-subtle)] rounded-2xl p-6 md:p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-orange-bright)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
              Acceso Restringido
            </h2>
            <p className="text-[var(--text-secondary)]">
              Ingrese la clave de inicio
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Clave de Acceso
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setIsTyping(true);
                    setTimeout(() => setIsTyping(false), 1000);
                  }}
                  onFocus={() => setIsTyping(true)}
                  onBlur={() => setTimeout(() => setIsTyping(false), 500)}
                  className="w-full px-4 py-3 bg-[var(--dark-bg)] border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-orange)] focus:border-transparent"
                  placeholder="Ingrese su clave de acceso"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full relative overflow-hidden text-white font-bold py-3 px-6 rounded-lg transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed group ${
                isTyping 
                  ? 'bg-gradient-to-r from-[var(--accent-orange)] via-[var(--accent-orange-bright)] to-[var(--accent-orange)] bg-[length:200%_100%] animate-[gradient_2s_ease-in-out_infinite] shadow-lg shadow-orange-500/25' 
                  : 'bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-orange-bright)] hover:shadow-lg'
              }`}
            >
              {isTyping && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[slide_1.5s_ease-in-out_infinite]"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-orange-bright)] to-[var(--accent-orange)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Verificando...</span>
                  </div>
                ) : (
                  "Acceder al Pitch Deck"
                )}
              </span>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] text-center">
            <p className="text-[var(--text-secondary)] text-sm mb-2">
              ¿No tienes acceso?
            </p>
            <a
              href="mailto:contacto@airontech.com?subject=Solicitud de Acceso - Pitch Deck"
              className="text-[var(--accent-orange)] hover:text-[var(--accent-orange-bright)] font-medium text-sm transition-colors duration-300"
            >
              Contactar al equipo Airontech
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 px-4 space-y-1">
          <p className="text-[var(--text-muted)] text-xs whitespace-nowrap">
            Prohibida la divulgación del material y datos expuestos en esta presentación a terceros
          </p>
          <p className="text-[var(--text-muted)] text-sm whitespace-nowrap">
            © 2025 Airontech - Tecnología Minera Avanzada
          </p>
        </div>
      </div>
    </div>
  );
}