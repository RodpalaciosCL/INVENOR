import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  Shield,
  Zap,
  Globe,
} from "lucide-react";

export default function SlideHomeNew() {
  const handleExploreMore = () => {
    const element = document.getElementById("ventajas");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const stats = [
    { value: "TOP 5", label: "Mineras del mundo", subtitle: "" },
    { value: "+10", label: "Soluciones críticas", subtitle: "" },
    { value: "350%", label: "Alta rentabilidad", subtitle: "" },
  ];

  const advantages = [
    {
      icon: Users,
      text: "Buscamos un partner que quiera participar en uno de los negocios más relevantes para la industria minera.",
    },
    {
      icon: TrendingUp,
      text: "Este es uno de los negocios más específicos de la industria, desarrollado en tiempo récord.",
    },
    {
      icon: Shield,
      text: "Necesitamos un segundo empuje financiero para escalar con clientes globales.",
    },
    {
      icon: Globe,
      text: "Mayor escalabilidad del grupo con visualización C-level única en la industria.",
    },
  ];

  return (
    <section
      id="introduccion"
      className="min-h-screen relative overflow-hidden bg-[var(--dark-bg)]"
    >
      {/* Background Video - Subtle */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      >
        <source
          src="https://res.cloudinary.com/dhobnlg73/video/upload/v1750820113/23_boh179.mov"
          type="video/mp4"
        />
      </video>

      {/* Simple Overlay */}
      <div className="absolute inset-0 bg-[var(--dark-bg)]/80" />

      <div className="relative z-10 flex items-center min-h-screen pt-16 md:pt-32 pb-6 md:pb-16">
        <div className="container mx-auto px-3 md:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-center">
            {/* Left Column - Main Content (como estaba antes) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-3 md:space-y-8"
            >
              {/* Header */}
              <div className="space-y-2 md:space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold leading-tight"
                >
                  <span className="text-[var(--text-primary)]">AI</span>
                  <span className="text-[var(--accent-orange)]">rontech</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg sm:text-xl md:text-xl lg:text-2xl text-[var(--text-secondary)] font-light"
                >
                  Insight Driven & Future Ready ConsulTech for Mining Industry
                </motion.p>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-3 md:gap-8 justify-center md:justify-start"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-[var(--accent-orange)]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[var(--text-secondary)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <button
                  onClick={handleExploreMore}
                  className="group inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-orange-bright)] text-white px-3 md:px-8 py-2 md:py-4 rounded-lg md:rounded-xl font-semibold text-xs md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--accent-orange)]/25"
                >
                  Explorar Oportunidades
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Nueva propuesta simple */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3 md:space-y-6 mt-4 lg:mt-0"
            >
              {/* Simple Clean Cards */}
              <div className="bg-[var(--dark-bg)]/80 backdrop-blur-lg rounded-lg md:rounded-3xl p-3 md:p-8 border-2 border-[var(--accent-orange)]/30 shadow-xl hover:border-[var(--accent-orange)]/50 transition-all duration-300">
                <h3 className="text-base md:text-2xl font-bold text-[var(--accent-orange)] mb-2 md:mb-6">
                  ¿Quiénes somos?
                </h3>
                <p className="text-[var(--text-secondary)] text-xs md:text-lg leading-relaxed">
                  Una empresa de desarrollo tecnológico especializada en
                  minería, con{" "}
                  <span className="text-[var(--accent-orange)] font-semibold">
                    Software Factory
                  </span>{" "}
                  y{" "}
                  <span className="text-[var(--accent-orange)] font-semibold">
                    Consultoría Senior
                  </span>{" "}
                  para proyectos estratégicos.
                </p>
              </div>

              <div className="bg-[var(--dark-bg)]/80 backdrop-blur-lg rounded-lg md:rounded-3xl p-3 md:p-8 border-2 border-[var(--accent-orange)]/30 shadow-xl hover:border-[var(--accent-orange)]/50 transition-all duration-300">
                <h3 className="text-base md:text-2xl font-bold text-[var(--accent-orange)] mb-2 md:mb-6">
                  ¿Qué buscamos?
                </h3>
                <ul className="space-y-1 md:space-y-4 text-[var(--text-secondary)] text-xs md:text-lg">
                  <li className="flex items-start gap-4">
                    <span className="text-[var(--accent-orange)] font-bold text-xl">
                      •
                    </span>
                    Partner para negocios relevantes en minería
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[var(--accent-orange)] font-bold text-xl">
                      •
                    </span>
                    Negocio específico, desarrollado en tiempo récord
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[var(--accent-orange)] font-bold text-xl">
                      •
                    </span>
                    Segundo empuje financiero para escalar globalmente
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[var(--accent-orange)] font-bold text-xl">
                      •
                    </span>
                    Escalabilidad con visualización C-level única
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
