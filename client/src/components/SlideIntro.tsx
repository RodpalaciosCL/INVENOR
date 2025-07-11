import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Cog, Shield, TrendingUp, Building2 } from "lucide-react";
import SlideReadyToSell from "./SlideReadyToSell";
import SlideSolucionesIA from "./SlideSolucionesIA";
import SlideClientesProspectos from "./SlideClientesProspectos";
import SlideSeguridadMinera from "./SlideSeguridadMinera";
import SlideResultadosFinancieros from "./SlideResultadosFinancieros";
import SlideOportunidadInversion from "./SlideOportunidadInversion";
import SlideEquipoContacto from "./SlideEquipoContacto";

export default function SlideIntro() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    };
    setCurrentDate(now.toLocaleDateString('es-ES', options));
  }, []);

  useEffect(() => {
    const sections = ['introduccion', 'soluciones', 'ia-solutions', 'clientes', 'seguridad', 'finanzas', 'inversion', 'contacto', 'ventajas', 'portafolio'];
    let currentSectionIndex = 0;

    const getCurrentSectionIndex = () => {
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          return i;
        }
      }
      return 0;
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      currentSectionIndex = getCurrentSectionIndex();
      
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        const nextIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
        const nextSection = document.getElementById(sections[nextIndex]);
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        const prevIndex = Math.max(currentSectionIndex - 1, 0);
        const prevSection = document.getElementById(sections[prevIndex]);
        if (prevSection) {
          prevSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleDiscoverMore = () => {
    console.log('Discover more clicked - navigating to next section');
    const solucionesSection = document.getElementById('soluciones');
    if (solucionesSection) {
      solucionesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Introducción Section */}
      <section 
        id="introduccion" 
        className="min-h-screen py-8 relative overflow-hidden mining-pattern tech-grid"
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--dark-bg)]/80 via-[var(--dark-bg)]/90 to-[var(--dark-bg)]/95 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" 
          style={{
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
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 gradient-text leading-tight font-montserrat">
              AIrontech
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-[var(--text-primary)]/80 font-montserrat">
              Innovación Tecnológica con Foco en Minería
            </h2>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Who are we? */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-left"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-orange-bright)] rounded-full flex items-center justify-center mr-4">
                  <Building2 className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-[var(--accent-orange)] font-montserrat">
                  ¿Quiénes somos?
                </h3>
              </div>

              <div className="bg-gradient-to-r from-[var(--dark-bg)]/60 to-[var(--dark-bg)]/40 backdrop-blur-sm border border-[var(--accent-orange)]/30 rounded-2xl p-6 mb-6">
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  Una empresa de desarrollo tecnológico especializada en minería, con 
                  <span className="text-[var(--accent-orange)] font-semibold"> Software Factory</span> y 
                  <span className="text-[var(--accent-orange-bright)] font-semibold"> consultoría senior </span> 
                  para proyectos estratégicos.
                </p>
              </div>

              {/* Experience metrics compact */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[var(--accent-orange)]/20 rounded-lg p-3 text-center border border-[var(--accent-orange)]/30">
                  <div className="text-[var(--accent-orange)] font-bold text-lg">20+</div>
                  <div className="text-[var(--text-secondary)] text-xs">años</div>
                </div>
                <div className="bg-[var(--accent-orange-bright)]/20 rounded-lg p-3 text-center border border-[var(--accent-orange-bright)]/30">
                  <div className="text-[var(--accent-orange-bright)] font-bold text-lg">12</div>
                  <div className="text-[var(--text-secondary)] text-xs">meses</div>
                </div>
                <div className="bg-[var(--accent-orange)]/20 rounded-lg p-3 text-center border border-[var(--accent-orange)]/30">
                  <div className="text-[var(--accent-orange)] font-bold text-lg">Top</div>
                  <div className="text-[var(--text-secondary)] text-xs">Network</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - What do we want? */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-left"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-orange-bright)] to-[var(--accent-orange)] rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-[var(--accent-orange)] font-montserrat">
                  ¿Qué buscamos?
                </h3>
              </div>

              <div className="bg-gradient-to-br from-[var(--accent-orange)]/10 to-[var(--accent-orange-bright)]/10 border border-[var(--accent-orange)]/30 rounded-2xl p-6">
                <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[var(--accent-orange)] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <p>
                      Un <span className="text-[var(--accent-orange)] font-semibold">partner estratégico</span> para el negocio más relevante de la industria minera
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[var(--accent-orange-bright)] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <p>
                      Control operacional de <span className="text-[var(--accent-orange-bright)] font-semibold">faenas mineras críticas</span> desarrollado en tiempo récord
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[var(--accent-orange)] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <p>
                      <span className="text-[var(--accent-orange)] font-semibold">Segundo empuje financiero</span> para escalar con clientes tier-1 globales
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[var(--accent-orange-bright)] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <p>
                      <span className="text-[var(--accent-orange-bright)] font-semibold">Mayor escalabilidad del grupo</span> con visualización C-level única en la industria
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
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
                  <div className="text-[var(--text-secondary)] text-xs">= 2-5 años</div>
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
              
              <div className="bg-gradient-to-br from-[var(--accent-orange)]/10 via-[var(--accent-orange-bright)]/10 to-[var(--accent-orange)]/10 border border-[var(--accent-orange)]/30 rounded-2xl p-6">
                <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[var(--accent-orange)] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <p>
                      Buscamos un <span className="text-[var(--accent-orange)] font-semibold">partner que quiera participar</span> en uno de los negocios más relevantes para la industria minera.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[var(--accent-orange-bright)] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <p>
                      Este es uno de los <span className="text-[var(--accent-orange-bright)] font-semibold">negocios más apetecidos</span> de la industria, desarrollado en <span className="text-[var(--accent-orange)] font-semibold">tiempo récord</span>.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[var(--accent-orange)] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <p>
                      Necesitamos un <span className="text-[var(--accent-orange)] font-semibold">segundo empuje financiero</span> para escalar con clientes globales.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[var(--accent-orange-bright)] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <p>
                      <span className="text-[var(--accent-orange-bright)] font-semibold">Mayor escalabilidad del grupo</span> con visualización C-level única en la industria.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom summary */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
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
            transition={{ delay: 0.7, duration: 0.6 }}
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
                scale: 1.02,
                y: -2,
                boxShadow: "0 25px 50px -12px rgba(255, 119, 48, 0.25)"
              }}
              whileTap={{ scale: 0.98, y: 0 }}
              style={{ cursor: 'pointer' }}
            >
              <span className="flex items-center justify-center space-x-3">
                <span>Descubre más</span>
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </span>
            </motion.button>
          </motion.div>
          

        </div>
        
        {/* Decorative Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-[var(--accent-orange)]/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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
      </section>

      {/* Soluciones Ready-to-Sell Section */}
      <SlideReadyToSell />

      {/* Soluciones IA Avanzadas Section */}
      <SlideSolucionesIA />

      {/* Clientes y Prospectos Section */}
      <SlideClientesProspectos />

      {/* Ventajas Section */}
      <section id="ventajas" className="py-16 bg-[var(--dark-bg)]/95 border-t border-[var(--border-subtle)]">
        <div className="text-center max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-4 text-[var(--accent-orange)] font-montserrat"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contexto Estratégico Minero
          </motion.h2>
          <motion.div 
            className="bg-gradient-to-r from-[var(--accent-orange)]/10 to-[var(--accent-orange-bright)]/10 rounded-2xl p-6 border border-[var(--accent-orange)]/20 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 font-montserrat">Momento Crítico</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  La industria minera está en un momento clave donde automatizar, digitalizar y controlar la operación es urgente para mantener competitividad.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 font-montserrat">Necesidades Críticas</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  Las empresas requieren IA aplicada a procesos críticos: seguridad, productividad, mantenimiento predictivo, trazabilidad y eficiencia energética.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 font-montserrat">Presión Operativa</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  Necesitan aumentar inteligencia operativa y disminuir incidentes, por presión de costos, ESG y eficiencia operacional.
                </p>
              </div>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Cog,
                title: "Automatización IA",
                description: "Procesos inteligentes que optimizan la extracción",
                color: "var(--accent-orange)"
              },
              {
                icon: Shield,
                title: "Seguridad Avanzada",
                description: "Sistemas de monitoreo en tiempo real",
                color: "var(--accent-orange-bright)"
              },
              {
                icon: TrendingUp,
                title: "Eficiencia Operativa",
                description: "Reducción de costos hasta 40%",
                color: "var(--accent-orange)"
              }
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                className="bg-[var(--border-subtle)]/20 p-8 rounded-xl glass-morphism"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="mb-4" style={{ color: advantage.color }}>
                  <advantage.icon size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-4 font-montserrat">{advantage.title}</h3>
                <p className="text-[var(--text-secondary)]">{advantage.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Interactive Mining Evolution Timeline */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-6 text-center font-montserrat">
              Evolución Tecnológica de la Minería
            </h3>
            <p className="text-lg text-[var(--text-secondary)] text-center mb-8 max-w-4xl mx-auto">
              De herramientas manuales a IA operativa: La transformación digital es imparable
            </p>
            <p className="text-sm text-[var(--accent-orange)] text-center mb-6 font-medium">
              ← Desliza horizontalmente para explorar la evolución →
            </p>

            {/* Horizontal Scrollable Timeline */}
            <div className="relative overflow-hidden">
              <div className="overflow-x-auto pb-6 pt-8" style={{ scrollbarWidth: 'auto' }}>
                <div className="flex space-x-8 min-w-max px-4">
                  {[
                    {
                      year: "1850",
                      endYear: "1950",
                      title: "Era Manual",
                      subtitle: "Herramientas Básicas",
                      description: "Minería con herramientas manuales: picos, palas, explosivos simples. Productividad limitada y riesgos extremos.",
                      technologies: ["Picos manuales", "Palas", "Dinamita básica", "Carros de mina"],
                      productivity: "1x",
                      safety: "Alto riesgo",
                      icon: <Cog size={32} />,
                      status: "past",
                      color: "gray"
                    },
                    {
                      year: "1950",
                      endYear: "1990",
                      title: "Mecanización",
                      subtitle: "Revolución Industrial",
                      description: "Introducción de maquinaria pesada: excavadoras de gran escala, camiones mineros, sistemas de transporte mecanizados.",
                      technologies: ["Excavadoras", "Camiones pesados", "Cintas transportadoras", "Perforadoras hidráulicas"],
                      productivity: "15x",
                      safety: "Mejorado",
                      icon: <TrendingUp size={32} />,
                      status: "past",
                      color: "gray"
                    },
                    {
                      year: "1990",
                      endYear: "2010",
                      title: "Digitalización",
                      subtitle: "Primeros Sistemas",
                      description: "Adopción de GPS, primeros sensores digitales, software de planificación y comunicaciones por radio.",
                      technologies: ["GPS", "Sensores digitales", "Software CAD", "Comunicaciones"],
                      productivity: "35x",
                      safety: "Mucho mejor",
                      icon: <Shield size={32} />,
                      status: "past",
                      color: "gray"
                    },
                    {
                      year: "2010",
                      endYear: "2024",
                      title: "Era Digital",
                      subtitle: "IoT y Big Data",
                      description: "Internet de las Cosas, drones para mapeo, análisis de Big Data, monitoreo remoto y cloud computing.",
                      technologies: ["IoT", "Drones", "Big Data", "Monitoreo remoto", "Cloud"],
                      productivity: "60x",
                      safety: "Muy seguro",
                      icon: <TrendingUp size={32} />,
                      status: "current",
                      color: "orange"
                    },
                    {
                      year: "2024",
                      endYear: "2030",
                      title: "IA Operativa",
                      subtitle: "Machine Learning",
                      description: "Algoritmos predictivos, gemelos digitales, automatización inteligente y mantenimiento predictivo en tiempo real.",
                      technologies: ["Machine Learning", "Gemelos digitales", "IA predictiva", "Automatización inteligente"],
                      productivity: "150x",
                      safety: "Ultra seguro",
                      icon: <Cog size={32} />,
                      status: "near-future",
                      color: "blue"
                    },
                    {
                      year: "2030",
                      endYear: "2040",
                      title: "Autonomía Total",
                      subtitle: "Operaciones Sin Humanos",
                      description: "Minas completamente autónomas, IA operativa 24/7, robots mineros y sistemas de decisión autónomos.",
                      technologies: ["Minas autónomas", "IA operativa", "Robots mineros", "Decisiones autónomas"],
                      productivity: "400x",
                      safety: "Sin riesgo humano",
                      icon: <Shield size={32} />,
                      status: "future",
                      color: "purple"
                    }
                  ].map((era, index) => (
                    <motion.div
                      key={era.year}
                      className="flex-shrink-0 w-80"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {/* Timeline Era Card */}
                      <div className={`relative h-full border-2 rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                        era.status === 'current' 
                          ? 'bg-[var(--accent-orange)]/10 border-[var(--accent-orange)] shadow-xl' 
                          : era.status === 'near-future'
                          ? 'bg-blue-500/10 border-blue-400/50 hover:bg-blue-500/20'
                          : era.status === 'future'
                          ? 'bg-purple-500/10 border-purple-400/50 hover:bg-purple-500/20'
                          : 'bg-white/5 border-[var(--border-subtle)] hover:bg-white/10'
                      }`}>
                        
                        {/* Current Era Badge */}
                        {era.status === 'current' && (
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                            <div className="bg-[var(--accent-orange)] text-black px-6 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg border-2 border-[var(--accent-orange-bright)]">
                              ESTAMOS AQUÍ
                            </div>
                          </div>
                        )}

                        {/* Era Icon & Years */}
                        <div className="text-center mb-4">
                          <div className={`mb-3 flex justify-center ${
                            era.status === 'current' 
                              ? 'text-[var(--accent-orange)]' 
                              : era.status === 'near-future'
                              ? 'text-blue-400'
                              : era.status === 'future'
                              ? 'text-purple-400'
                              : 'text-[var(--text-muted)]'
                          }`}>
                            {era.icon}
                          </div>
                          <div className={`text-2xl font-bold mb-1 font-montserrat ${
                            era.status === 'current' 
                              ? 'text-[var(--accent-orange)]' 
                              : era.status === 'near-future'
                              ? 'text-blue-400'
                              : era.status === 'future'
                              ? 'text-purple-400'
                              : 'text-[var(--text-primary)]'
                          }`}>
                            {era.year}-{era.endYear}
                          </div>
                          <h4 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                            {era.title}
                          </h4>
                          <p className={`text-sm font-medium mb-4 ${
                            era.status === 'current' 
                              ? 'text-[var(--accent-orange)]' 
                              : era.status === 'near-future'
                              ? 'text-blue-400'
                              : era.status === 'future'
                              ? 'text-purple-400'
                              : 'text-[var(--text-muted)]'
                          }`}>
                            {era.subtitle}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                          {era.description}
                        </p>

                        {/* Technologies */}
                        <div className="mb-4">
                          <h5 className="text-xs font-bold text-[var(--text-primary)] mb-2 uppercase tracking-wide">
                            Tecnologías Clave
                          </h5>
                          <div className="flex flex-wrap gap-1">
                            {era.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className={`text-xs px-2 py-1 rounded-full border ${
                                  era.status === 'current' 
                                    ? 'bg-[var(--accent-orange)]/20 border-[var(--accent-orange)]/30 text-[var(--accent-orange)]' 
                                    : era.status === 'near-future'
                                    ? 'bg-blue-500/20 border-blue-400/30 text-blue-300'
                                    : era.status === 'future'
                                    ? 'bg-purple-500/20 border-purple-400/30 text-purple-300'
                                    : 'bg-white/10 border-[var(--border-subtle)] text-[var(--text-muted)]'
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Metrics */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-[var(--text-muted)]">Productividad vs 1850:</span>
                            <span className={`text-sm font-bold font-mono ${
                              era.status === 'current' 
                                ? 'text-[var(--accent-orange)]' 
                                : era.status === 'near-future'
                                ? 'text-blue-400'
                                : era.status === 'future'
                                ? 'text-purple-400'
                                : 'text-[var(--text-primary)]'
                            }`}>
                              {era.productivity}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-[var(--text-muted)]">Seguridad:</span>
                            <span className="text-sm text-[var(--text-secondary)]">{era.safety}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              className="mt-12 text-center bg-gradient-to-r from-[var(--accent-orange)]/10 to-blue-500/10 rounded-2xl p-8 border border-[var(--accent-orange)]/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold text-[var(--accent-orange)] mb-4 font-montserrat">
                La Ventana de Oportunidad es AHORA
              </h4>
              <p className="text-lg text-[var(--text-secondary)] max-w-4xl mx-auto mb-6">
                Las empresas que adopten IA operativa hoy dominarán la próxima década. 
                La automatización y digitalización de procesos son el futuro inevitable.
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--accent-orange)] font-mono mb-1">+250%</div>
                  <div className="text-[var(--text-muted)] text-sm">ROI con IA operativa</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 font-mono mb-1">2030</div>
                  <div className="text-[var(--text-muted)] text-sm">Deadline competitivo</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 font-mono mb-1">400x</div>
                  <div className="text-[var(--text-muted)] text-sm">Productividad objetivo</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Seguridad Minera Section */}
      <SlideSeguridadMinera />

      {/* Resultados Financieros Section */}
      <SlideResultadosFinancieros />

      {/* Oportunidad de Inversión Section */}
      <SlideOportunidadInversion />

      {/* Equipo Ejecutivo y Contacto Section */}
      <SlideEquipoContacto />

    </>
  );
}
