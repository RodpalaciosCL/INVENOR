import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Building2, TrendingUp, Cog, Shield } from "lucide-react";

export default function SlideIntroClean() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    setCurrentDate(formattedDate);
  }, []);

  const handleDiscoverMore = () => {
    const sections = ['pruebas-concepto', 'soluciones', 'ia-solutions', 'clientes', 'seguridad', 'finanzas', 'inversion', 'contacto', 'ventajas'];
    let nextSection = 'pruebas-concepto';
    
    const element = document.getElementById(nextSection);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <section 
      id="introduccion" 
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[var(--dark-bg)] via-[var(--dark-bg)] to-[var(--dark-bg)]/95"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 bg-[var(--accent-orange)]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-32 h-32 bg-[var(--accent-orange-bright)]/10 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute top-1/2 left-5 w-1 h-20 bg-gradient-to-b from-[var(--accent-orange)] to-transparent opacity-50"></div>
        <div className="absolute top-1/2 right-5 w-1 h-20 bg-gradient-to-b from-[var(--accent-orange-bright)] to-transparent opacity-50"></div>
      </div>

      {/* Dark overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(135deg, rgba(20, 20, 20, 0.7), rgba(20, 20, 20, 0.9))",
          backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop')"
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-6 py-24">
        {/* Main Title with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mb-16 mt-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-montserrat"
            style={{
              background: "linear-gradient(135deg, var(--accent-orange), var(--accent-orange-bright))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            AIrontech
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Innovación Tecnológica con Foco en Minería
          </motion.p>
        </motion.div>

        {/* Question-Answer Format */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
          {/* Who are we? */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-orange-bright)] rounded-full flex items-center justify-center mr-4">
                <Building2 className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-[var(--accent-orange)] font-montserrat">
                ¿Quiénes somos?
              </h3>
            </div>
            
            <div className="bg-gradient-to-r from-[var(--dark-bg)]/60 to-[var(--dark-bg)]/40 backdrop-blur-sm border border-[var(--accent-orange)]/30 rounded-2xl p-6">
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                Una empresa de desarrollo tecnológico especializada en minería, con 
                <span className="text-[var(--accent-orange)] font-semibold"> Software Factory</span> y 
                <span className="text-[var(--accent-orange-bright)] font-semibold"> consultoría senior </span> 
                para proyectos estratégicos.
              </p>
            </div>
            
            {/* Experience metrics */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gradient-to-br from-[var(--accent-orange)]/20 to-[var(--accent-orange)]/10 border border-[var(--accent-orange)]/30 rounded-xl p-4 text-center">
                <div className="text-[var(--accent-orange)] font-bold text-lg mb-1">20+ años</div>
                <div className="text-[var(--text-secondary)] text-xs">Fortune 500</div>
              </div>
              
              <div className="bg-gradient-to-br from-[var(--accent-orange-bright)]/20 to-[var(--accent-orange-bright)]/10 border border-[var(--accent-orange-bright)]/30 rounded-xl p-4 text-center">
                <div className="text-[var(--accent-orange-bright)] font-bold text-lg mb-1">12 meses</div>
                <div className="text-[var(--text-secondary)] text-xs">= 2 a 5 años</div>
              </div>
              
              <div className="bg-gradient-to-br from-[var(--accent-orange)]/20 to-[var(--accent-orange)]/10 border border-[var(--accent-orange)]/30 rounded-xl p-4 text-center">
                <div className="text-[var(--accent-orange)] font-bold text-lg mb-1">Networking</div>
                <div className="text-[var(--text-secondary)] text-xs">C-Level</div>
              </div>
            </div>
          </motion.div>

          {/* What are we looking for? */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-orange-bright)] to-[var(--accent-orange)] rounded-full flex items-center justify-center mr-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-[var(--accent-orange)] font-montserrat">
                ¿Qué buscamos?
              </h3>
            </div>
            
            <div className="grid gap-4">
              <div className="bg-gradient-to-r from-[var(--accent-orange)]/10 to-[var(--accent-orange-bright)]/5 border border-[var(--accent-orange)]/20 rounded-xl p-4 flex items-start space-x-3">
                <div className="w-8 h-8 bg-[var(--accent-orange)] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <p className="text-[var(--text-secondary)] pt-1">
                  Buscamos un <span className="text-[var(--accent-orange)] font-semibold">partner que quiera participar</span> en uno de los negocios más relevantes para la industria minera.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[var(--accent-orange-bright)]/10 to-[var(--accent-orange)]/5 border border-[var(--accent-orange-bright)]/20 rounded-xl p-4 flex items-start space-x-3">
                <div className="w-8 h-8 bg-[var(--accent-orange-bright)] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <p className="text-[var(--text-secondary)] pt-1">
                  Este es uno de los <span className="text-[var(--accent-orange-bright)] font-semibold">negocios más apetecidos</span> de la industria, desarrollado en <span className="text-[var(--accent-orange)] font-semibold">tiempo récord</span>.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[var(--accent-orange)]/10 to-[var(--accent-orange-bright)]/5 border border-[var(--accent-orange)]/20 rounded-xl p-4 flex items-start space-x-3">
                <div className="w-8 h-8 bg-[var(--accent-orange)] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <p className="text-[var(--text-secondary)] pt-1">
                  Necesitamos un <span className="text-[var(--accent-orange)] font-semibold">segundo empuje financiero</span> para escalar con clientes globales.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[var(--accent-orange-bright)]/10 to-[var(--accent-orange)]/5 border border-[var(--accent-orange-bright)]/20 rounded-xl p-4 flex items-start space-x-3">
                <div className="w-8 h-8 bg-[var(--accent-orange-bright)] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <p className="text-[var(--text-secondary)] pt-1">
                  <span className="text-[var(--accent-orange-bright)] font-semibold">Mayor escalabilidad del grupo</span> con visualización C-level única en la industria.
                </p>
              </div>
            </div>
          </motion.div>
        </div>



        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto mb-10"
        >
          <div className="text-center">
            <p className="text-lg text-[var(--text-secondary)] mb-6 font-medium">
              A continuación presentamos lo que hacemos, qué tenemos, quiénes somos y qué buscamos.
            </p>
          </div>
        </motion.div>
        
        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.6 }}
        >
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            {currentDate}
          </p>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          <motion.button 
            onClick={handleDiscoverMore}
            className="group bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-orange-bright)] text-white px-12 py-4 rounded-full text-xl font-semibold shadow-2xl transition-all duration-300 font-montserrat"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center">
              Descubre más
              <motion.span
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}