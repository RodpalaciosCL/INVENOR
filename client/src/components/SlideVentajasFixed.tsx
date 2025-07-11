import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Cog, TrendingUp, Shield, Cpu, Building2, ChevronRight } from "lucide-react";

export default function SlideVentajasFixed() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleUserScroll = () => {
      const newProgress = container.scrollLeft / (container.scrollWidth - container.clientWidth);
      setProgress(Math.max(0, Math.min(1, newProgress)));
    };

    container.addEventListener('scroll', handleUserScroll);

    return () => {
      container.removeEventListener('scroll', handleUserScroll);
    };
  }, []);

  const timelineData = [
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
      title: "Automatización",
      subtitle: "Sistemas Inteligentes",
      description: "Implementación de IoT masivo, automatización de procesos, vehículos autónomos y sistemas de monitoreo predictivo.",
      technologies: ["IoT Industrial", "Vehículos autónomos", "Big Data", "Cloud Mining"],
      productivity: "50x",
      safety: "Excelente",
      icon: <Cpu size={32} />,
      status: "current",
      color: "blue"
    },
    {
      year: "2024",
      endYear: "2030+",
      title: "IA Operativa",
      subtitle: "Futuro Presente",
      description: "IA aplicada en tiempo real: predicción de fallas, optimización autónoma, seguridad preventiva y gestión integral inteligente.",
      technologies: ["IA Predictiva", "Machine Learning", "Digital Twins", "Quantum Computing"],
      productivity: "100x",
      safety: "Cero incidentes",
      icon: <Building2 size={32} />,
      status: "future",
      color: "orange"
    }
  ];

  return (
    <section 
      id="ventajas" 
      className="py-16 bg-[var(--dark-bg)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Strategic Context Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--accent-orange)] font-montserrat">
            Ventajas Estratégicas
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl mx-auto leading-relaxed">
            Posicionamiento único en el mercado minero con soluciones probadas y demanda creciente
          </p>
        </motion.div>

        {/* Key Strategic Points */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[var(--dark-bg)]/90 to-[var(--dark-bg)]/70 rounded-2xl p-8 border border-[var(--accent-orange)]/20">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 font-montserrat">Demanda Tecnológica</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Las empresas requieren IA aplicada a procesos críticos: seguridad, productividad, mantenimiento predictivo, trazabilidad y eficiencia energética.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[var(--dark-bg)]/90 to-[var(--dark-bg)]/70 rounded-2xl p-8 border border-[var(--accent-orange)]/20">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 font-montserrat">Presión Operativa</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Necesitan aumentar inteligencia operativa y disminuir incidentes, por presión de costos, ESG y eficiencia operacional.
            </p>
          </div>
        </motion.div>

        {/* Interactive Mining Evolution Timeline */}
        <div className="mt-16 mb-16 bg-gradient-to-br from-[var(--dark-bg)]/90 to-[var(--dark-bg)]/70 rounded-3xl p-8 border border-[var(--accent-orange)]/20">
          <h3 className="text-3xl font-bold text-[var(--accent-orange)] mb-6 text-center font-montserrat">
            Evolución Tecnológica de la Minería
          </h3>
          <p className="text-lg text-[var(--text-secondary)] text-center mb-8 max-w-4xl mx-auto">
            De herramientas manuales a IA operativa: La transformación digital es imparable
          </p>

          {/* Horizontal Scrollable Timeline */}
          <div className="relative overflow-hidden">
            <div 
              ref={scrollRef}
              className="overflow-x-auto pb-6 pt-8 scroll-smooth cursor-grab active:cursor-grabbing" 
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
              onMouseDown={(e) => {
                e.preventDefault();
                const container = e.currentTarget;
                const startX = e.pageX - container.offsetLeft;
                const scrollLeft = container.scrollLeft;
                
                const handleMouseMove = (e: MouseEvent) => {
                  const x = e.pageX - container.offsetLeft;
                  const walk = (x - startX) * 2;
                  container.scrollLeft = scrollLeft - walk;
                };
                
                const handleMouseUp = () => {
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                  container.style.cursor = 'grab';
                };
                
                container.style.cursor = 'grabbing';
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
            >
              <div className="flex space-x-6 min-w-max px-4">
                {timelineData.map((era, index) => (
                  <motion.div
                    key={era.year}
                    className={`
                      min-w-[308px] max-w-[308px] w-[308px] rounded-lg p-3 border transition-all duration-300 hover:scale-105 cursor-default
                      ${era.status === 'future' 
                        ? 'bg-gradient-to-br from-[var(--accent-orange)]/20 to-[var(--accent-orange-bright)]/10 border-[var(--accent-orange)] shadow-lg shadow-[var(--accent-orange)]/20' 
                        : era.status === 'current'
                        ? 'bg-gradient-to-br from-blue-500/20 to-blue-400/10 border-blue-400 shadow-lg shadow-blue-400/20'
                        : 'bg-[var(--card-bg)] border-gray-600'
                      }
                    `}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Year Badge */}
                    <div className={`
                      inline-flex items-center px-4 py-2 rounded-full text-sm font-bold mb-4
                      ${era.status === 'future' 
                        ? 'bg-[var(--accent-orange)] text-black' 
                        : era.status === 'current'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-600 text-white'
                      }
                    `}>
                      {era.year} - {era.endYear}
                    </div>

                    {/* Icon */}
                    <div className={`
                      w-14 h-14 rounded-full flex items-center justify-center mb-4
                      ${era.status === 'future' 
                        ? 'bg-[var(--accent-orange)]/20 text-[var(--accent-orange)]' 
                        : era.status === 'current'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-gray-600/20 text-gray-400'
                      }
                    `}>
                      {era.icon}
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2 font-montserrat">
                      {era.title}
                    </h4>
                    <p className={`
                      text-base font-medium mb-4
                      ${era.status === 'future' 
                        ? 'text-[var(--accent-orange)]' 
                        : era.status === 'current'
                        ? 'text-blue-400'
                        : 'text-gray-400'
                      }
                    `}>
                      {era.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                      {era.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="text-sm font-bold text-[var(--text-primary)] mb-3">Tecnologías:</h5>
                      <div className="flex flex-wrap gap-2">
                        {era.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className={`
                              px-3 py-1 rounded-full text-xs font-medium
                              ${era.status === 'future' 
                                ? 'bg-[var(--accent-orange)]/20 text-[var(--accent-orange)]' 
                                : era.status === 'current'
                                ? 'bg-blue-500/20 text-blue-400'
                                : 'bg-gray-600/20 text-gray-400'
                              }
                            `}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-600/30">
                      <div>
                        <p className="text-xs text-[var(--text-secondary)] mb-1">Productividad:</p>
                        <p className={`
                          font-bold
                          ${era.status === 'future' 
                            ? 'text-[var(--accent-orange)]' 
                            : era.status === 'current'
                            ? 'text-blue-400'
                            : 'text-gray-400'
                          }
                        `}>
                          {era.productivity}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[var(--text-secondary)] mb-1">Seguridad:</p>
                        <p className={`
                          font-bold
                          ${era.status === 'future' 
                            ? 'text-[var(--accent-orange)]' 
                            : era.status === 'current'
                            ? 'text-blue-400'
                            : 'text-gray-400'
                          }
                        `}>
                          {era.safety}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}