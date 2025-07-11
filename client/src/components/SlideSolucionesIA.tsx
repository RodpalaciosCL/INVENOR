import { motion } from "framer-motion";
import { Zap, Activity, Cog, Pickaxe, Brain, Cpu, Eye, BarChart4, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function SlideSolucionesIA() {
  const [showDetails, setShowDetails] = useState(false);
  const solucionesIA = [
    {
      icon: Pickaxe,
      name: "Ley del Mineral IA",
      tagline: "Identificación inteligente en tiempo real",
      description: "IA para detectar ley mineral, optimizar palas de extracción y maximizar valor por tonelada",
      category: "Computer Vision + ML",
      color: "from-blue-500 to-cyan-500",
      metrics: { accuracy: "94%", efficiency: "+32%" }
    },
    {
      icon: Activity,
      name: "Predictive Maintenance",
      tagline: "Monitoreo vibraciones y desgaste predictivo",
      description: "Alertas preventivas para molinos SAG, correas y equipos críticos usando sensores IoT + IA",
      category: "IoT + Predictive AI",
      color: "from-green-500 to-emerald-500",
      metrics: { downtime: "-80%", savings: "4-32M USD" }
    },
    {
      icon: Cog,
      name: "RPA Intelligence",
      tagline: "Automatización predictiva de procesos",
      description: "Workflows automáticos que predicen fallas y ejecutan acciones preventivas sin intervención humana",
      category: "Automation + AI",
      color: "from-purple-500 to-violet-500",
      metrics: { automation: "85%", errors: "-95%" }
    },
    {
      icon: Zap,
      name: "Neural Operations",
      tagline: "Centro de comando inteligente unificado",
      description: "Operación remota centralizada con IA para eficiencia energética y control predictivo total",
      category: "AI Operations Center",
      color: "from-orange-500 to-red-500",
      metrics: { energy: "-25%", control: "99.7%" }
    }
  ];

  return (
    <section 
      id="ia-solutions" 
      className="py-16 bg-[var(--dark-bg)] border-t border-[var(--border-subtle)] relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/5 rounded-full blur-xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <motion.div
            className="inline-flex items-center space-x-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full">
              <Brain className="text-[var(--accent-orange)]" size={32} />
            </div>
            <div className="p-3 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full">
              <Cpu className="text-[var(--accent-orange)]" size={32} />
            </div>
            <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full">
              <Eye className="text-[var(--accent-orange)]" size={32} />
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-[var(--accent-orange)] font-montserrat"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Inteligencia Artificial Avanzada
          </motion.h2>
          <motion.p 
            className="text-xl text-[var(--text-secondary)] max-w-4xl mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Tecnologías de vanguardia aplicadas a procesos críticos mineros
          </motion.p>
          <motion.div
            className="inline-flex items-center space-x-2 text-[var(--accent-orange)] font-medium mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <BarChart4 size={20} />
            <span>Machine Learning + Computer Vision + IoT</span>
          </motion.div>

          {/* Botón Ver Detalle */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-orange-bright)] hover:from-[var(--accent-orange-bright)] hover:to-[var(--accent-orange)] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {showDetails ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              {showDetails ? 'Ocultar Detalle' : 'Ver Detalle'}
            </button>
          </motion.div>
        </div>

        {/* Neural Network Style Grid - Solo visible cuando showDetails es true */}
        {showDetails && (
          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
          {solucionesIA.map((solucion, index) => (
            <motion.div
              key={solucion.name}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.1 * index, 
                duration: 0.6,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              {/* Neural Network Card */}
              <motion.div
                className="relative bg-gradient-to-br from-black/40 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated Circuit Lines */}
                <div className="absolute inset-0 opacity-20">
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    animate={{ x: [-100, 300] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-purple-400 to-transparent"
                    animate={{ x: [100, -300] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-green-400 to-transparent"
                    animate={{ y: [-100, 300] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                {/* Header with Icon and Category */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${solucion.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <solucion.icon className="text-white" size={28} />
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full font-mono">
                        {solucion.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 font-montserrat">
                    {solucion.name}
                  </h3>
                  <p className="text-[var(--accent-orange)] font-medium mb-3">
                    {solucion.tagline}
                  </p>
                </div>

                {/* AI Visualization Panel */}
                <div className="relative z-10 mb-6 aspect-video bg-black/30 rounded-xl border border-gray-600/30 overflow-hidden">
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-300 font-mono bg-black/50 px-2 py-1 rounded">Neural Engine v3.2</div>
                  </div>
                  
                  {/* Real Media Content */}
                  {(() => {
                    switch(solucion.name) {
                      case "Ley del Mineral IA":
                        return (
                          <img 
                            src="https://res.cloudinary.com/dhobnlg73/image/upload/v1750690573/ChatGPT_Image_22_jun_2025_15_40_22_lsewla.png"
                            alt="Ley del Mineral IA"
                            className="w-full h-full object-cover"
                          />
                        );
                      case "Predictive Maintenance":
                        return (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          >
                            <source src="https://res.cloudinary.com/dhobnlg73/video/upload/v1750691069/3_msvtot.mov" type="video/mp4" />
                          </video>
                        );
                      case "RPA Intelligence":
                        return (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          >
                            <source src="https://res.cloudinary.com/dhobnlg73/video/upload/v1750691060/1_gxiukm.mov" type="video/mp4" />
                          </video>
                        );
                      case "Neural Operations":
                        return (
                          <iframe
                            src="https://www.youtube.com/embed/BoHxSpEPg4Y?autoplay=1&mute=1&loop=1&playlist=BoHxSpEPg4Y&controls=0&showinfo=0&rel=0&modestbranding=1"
                            className="w-full h-full"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                          />
                        );
                      default:
                        return (
                          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                            <solucion.icon size={48} className="text-gray-400" />
                          </div>
                        );
                    }
                  })()}
                  
                  {/* Status indicators overlay */}
                  <div className="absolute bottom-3 left-3 right-3 z-20">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-6 bg-black/70 rounded border border-gray-600/50 flex items-center justify-center">
                        <div className="text-xs text-green-400 font-mono">ACTIVE</div>
                      </div>
                      <div className="h-6 bg-black/70 rounded border border-gray-600/50 flex items-center justify-center">
                        <motion.div 
                          className="text-xs text-cyan-400 font-mono"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          LEARNING
                        </motion.div>
                      </div>
                      <div className="h-6 bg-black/70 rounded border border-gray-600/50 flex items-center justify-center">
                        <div className="text-xs text-purple-400 font-mono">PREDICT</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                  {solucion.description}
                </p>

                {/* Metrics Row */}
                <div className="flex justify-between items-center relative z-10">
                  <div className="flex space-x-4">
                    {Object.entries(solucion.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-[var(--accent-orange)] font-mono">
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-medium">DEPLOYED</span>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solucion.color} opacity-5 rounded-3xl pointer-events-none`}></div>
              </motion.div>
            </motion.div>
          ))}

          {/* Bottom Impact Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
              <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <motion.div 
                    className="text-4xl font-bold text-[var(--accent-orange)] mb-3 font-montserrat"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    +40%
                  </motion.div>
                  <p className="text-[var(--text-secondary)] text-lg">
                    Eficiencia operativa
                  </p>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-4xl font-bold text-[var(--accent-orange)] mb-3 font-montserrat"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    -80%
                  </motion.div>
                  <p className="text-[var(--text-secondary)] text-lg">
                    Tiempo de parada
                  </p>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-4xl font-bold text-[var(--accent-orange)] mb-3 font-montserrat"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 1.0, duration: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    Real-time
                  </motion.div>
                  <p className="text-[var(--text-secondary)] text-lg">
                    Monitoreo continuo
                  </p>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-4xl font-bold text-[var(--accent-orange)] mb-3 font-montserrat"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 1.1, duration: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    100%
                  </motion.div>
                  <p className="text-[var(--text-secondary)] text-lg">
                    Automatización
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}