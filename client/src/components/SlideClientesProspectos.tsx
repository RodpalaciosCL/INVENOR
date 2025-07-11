import { motion } from "framer-motion";
import { Building2, MapPin, DollarSign, Star, CheckCircle, Clock, Grid, List } from "lucide-react";
import { useState } from "react";

export default function SlideClientesProspectos() {
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards');
  
  const clientes = [
    { 
      name: "BHP", 
      description: "Mayor minera del mundo por capitalización bursátil. Fortune Global 500 #41.",
      highlight: "Mejor pagador de Chile",
      revenue: "$65B USD",
      country: "Australia/Chile"
    },
    { 
      name: "Anglo American", 
      description: "Líder mundial en platino y diamantes. FTSE 100 company.",
      highlight: "Top 3 mundial",
      revenue: "$34B USD",
      country: "Reino Unido/Chile"
    },
    { 
      name: "Antofagasta Minerals", 
      description: "Mayor productor de cobre de Chile. Operaciones en Centinela y Los Pelambres.",
      highlight: "Líder chileno",
      revenue: "$7.8B USD",
      country: "Chile"
    },
    { 
      name: "Codelco", 
      description: "Mayor productora de cobre del mundo. Empresa estatal chilena.",
      highlight: "N°1 mundial cobre",
      revenue: "$15.2B USD",
      country: "Chile"
    },
    { 
      name: "Sierra Gorda", 
      description: "Joint venture KGHM-Sumitomo. Operación de cobre y molibdeno de clase mundial.",
      highlight: "Operación premium",
      revenue: "$2.1B USD",
      country: "Chile"
    }
  ];

  const prospectos = [
    { 
      name: "Minera San Gerónimo", 
      description: "Operaciones de oro y plata en la región de Coquimbo. Crecimiento sostenido en el sector.",
      highlight: "Mercado en expansión",
      country: "Chile",
      status: "En negociación"
    },
    { 
      name: "Minera Carola-Coemin", 
      description: "Productora de carbón en la región de Atacama. Expansión tecnológica activa.",
      highlight: "Modernización digital",
      country: "Chile",
      status: "En negociación"
    },
    { 
      name: "Glencore", 
      description: "Commodity trading gigante. Fortune Global 500 #16. Operaciones globales.",
      highlight: "Top 20 mundial",
      country: "Suiza/Global",
      status: "Prospecto avanzado"
    },
    { 
      name: "SQM", 
      description: "Líder mundial en litio y productos químicos especiales. NYSE cotizada.",
      highlight: "Líder litio mundial",
      country: "Chile",
      status: "Prospecto avanzado"
    },
    { 
      name: "Teck", 
      description: "Diversificada canadiense en cobre, zinc y carbón metalúrgico. TSX/NYSE.",
      highlight: "Big player Canada",
      country: "Canadá",
      status: "Prospecto inicial"
    }
  ];

  const renderClientList = () => (
    <div className="bg-white/5 backdrop-blur-sm border border-[var(--border-subtle)] rounded-xl overflow-hidden">
      <div className="bg-[var(--accent-orange)]/10 px-6 py-3 border-b border-[var(--border-subtle)]">
        <div className="grid grid-cols-5 gap-4 text-sm font-semibold text-[var(--text-primary)]">
          <div>Empresa</div>
          <div>Destacado</div>
          <div>Ingresos</div>
          <div>País</div>
          <div>Estado</div>
        </div>
      </div>
      {clientes.map((cliente, index) => (
        <motion.div
          key={cliente.name}
          className="px-6 py-4 border-b border-[var(--border-subtle)]/50 hover:bg-white/5 transition-colors"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-5 gap-4 items-center text-sm">
            <div>
              <h4 className="font-bold text-[var(--text-primary)] mb-1">{cliente.name}</h4>
              <p className="text-[var(--text-secondary)] text-xs leading-tight">{cliente.description}</p>
            </div>
            <div className="text-[var(--accent-orange)] font-medium">{cliente.highlight}</div>
            <div className="text-[var(--accent-orange)] font-mono font-bold">{cliente.revenue}</div>
            <div className="text-[var(--text-muted)]">📍 {cliente.country}</div>
            <div>
              <div className="flex items-center space-x-1 bg-[var(--accent-orange)]/10 border border-[var(--accent-orange)]/20 rounded-full px-2 py-1 w-fit">
                <CheckCircle size={10} className="text-[var(--accent-orange)]" />
                <span className="text-[var(--accent-orange)] text-xs">ACTIVO</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderProspectList = () => (
    <div className="bg-white/3 backdrop-blur-sm border border-[var(--border-subtle)]/50 rounded-xl overflow-hidden">
      <div className="bg-yellow-500/10 px-6 py-3 border-b border-[var(--border-subtle)]">
        <div className="grid grid-cols-5 gap-4 text-sm font-semibold text-[var(--text-primary)]">
          <div>Empresa</div>
          <div>Destacado</div>
          <div>Estado</div>
          <div>País</div>
          <div>Pipeline</div>
        </div>
      </div>
      {prospectos.map((prospecto, index) => (
        <motion.div
          key={prospecto.name}
          className="px-6 py-4 border-b border-[var(--border-subtle)]/30 hover:bg-white/3 transition-colors"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-5 gap-4 items-center text-sm">
            <div>
              <h4 className="font-bold text-[var(--text-primary)] mb-1">{prospecto.name}</h4>
              <p className="text-[var(--text-secondary)] text-xs leading-tight">{prospecto.description}</p>
            </div>
            <div className="text-[var(--accent-orange)] font-medium">{prospecto.highlight}</div>
            <div className="text-yellow-400 font-medium">{prospecto.status}</div>
            <div className="text-[var(--text-muted)]">📍 {prospecto.country}</div>
            <div>
              <div className="flex items-center space-x-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-2 py-1 w-fit">
                <Clock size={10} className="text-yellow-400" />
                <span className="text-yellow-400 text-xs">PIPELINE</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section 
      id="clientes" 
      className="py-16 bg-[var(--dark-bg)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-[var(--accent-orange)] font-montserrat"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Clientes & Prospectos Clave
          </motion.h2>
          <motion.p 
            className="text-xl text-[var(--text-secondary)] max-w-4xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Alianzas estratégicas con las compañías mineras más importantes del mundo
          </motion.p>
          <motion.div
            className="flex items-center justify-center space-x-6 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 text-[var(--accent-orange)] font-medium">
              <DollarSign size={20} />
              <span>Portfolio combinado: +$120B USD en ingresos anuales</span>
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex items-center bg-[var(--dark-bg-light)] border border-[var(--border-subtle)] rounded-lg p-1">
              <button
                onClick={() => setViewMode('cards')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  viewMode === 'cards' 
                    ? 'bg-[var(--accent-orange)] text-black' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Grid size={16} />
                <span>Tarjetas</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-[var(--accent-orange)] text-black' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <List size={16} />
                <span>Lista</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Clientes Validados Section */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl font-bold text-[var(--text-primary)] mb-12 text-center font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Clientes Validados
          </motion.h3>

          {viewMode === 'list' ? renderClientList() : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientes.map((cliente, index) => {
                if (index === 0) {
                  // Featured card for BHP
                  return (
                    <motion.div
                      key={cliente.name}
                      className="lg:col-span-2 bg-gradient-to-br from-[var(--accent-orange)]/10 to-[var(--accent-orange)]/5 backdrop-blur-sm border-2 border-[var(--accent-orange)]/30 rounded-2xl p-8 relative overflow-hidden"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: 0.1 * index, 
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Premium badge */}
                      <div className="absolute top-6 left-6">
                        <div className="flex items-center space-x-2 bg-[var(--accent-orange)] text-black rounded-full px-3 py-2 font-bold text-xs shadow-lg">
                          <Star size={12} />
                          <span>CLIENTE ESTRELLA</span>
                        </div>
                      </div>

                      <div className="pt-12 mb-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-3xl font-bold text-[var(--text-primary)] mb-2 font-montserrat">
                              {cliente.name}
                            </h4>
                            <p className="text-[var(--accent-orange)] font-bold text-lg mb-2">
                              {cliente.highlight}
                            </p>
                            <div className="flex items-center text-[var(--text-muted)] text-sm mb-4">
                              <MapPin size={14} className="mr-2" />
                              {cliente.country}
                            </div>
                          </div>
                          <div className="text-right ml-6">
                            <div className="text-3xl font-bold text-[var(--accent-orange)] font-mono mb-1">
                              {cliente.revenue}
                            </div>
                            <div className="text-[var(--text-muted)] text-sm">
                              Ingresos anuales
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                        {cliente.description}
                      </p>

                      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[var(--accent-orange)]/5 rounded-full -mr-16 -mb-16"></div>
                    </motion.div>
                  );
                } else if (index === 1 || index === 2) {
                  // Compact vertical cards
                  return (
                    <motion.div
                      key={cliente.name}
                      className="bg-white/3 backdrop-blur-sm border border-[var(--border-subtle)] rounded-xl p-6 flex flex-col justify-between min-h-[280px]"
                      initial={{ opacity: 0, x: index === 1 ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.1 * index, 
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -8,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
                            <CheckCircle size={12} className="text-green-400" />
                            <span className="text-green-400 text-xs font-medium">ACTIVO</span>
                          </div>
                          <Building2 size={18} className="text-[var(--accent-orange)]" />
                        </div>

                        <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2 font-montserrat">
                          {cliente.name}
                        </h4>
                        <p className="text-[var(--accent-orange)] font-medium text-sm mb-3">
                          {cliente.highlight}
                        </p>
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                          {cliente.description}
                        </p>
                      </div>

                      <div>
                        <div className="flex justify-between items-end">
                          <div>
                            <div className="text-lg font-bold text-[var(--accent-orange)] font-mono">
                              {cliente.revenue}
                            </div>
                            <div className="text-[var(--text-muted)] text-xs">
                              Ingresos anuales
                            </div>
                          </div>
                          <div className="text-[var(--text-muted)] text-xs">
                            📍 {cliente.country}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                } else {
                  // Horizontal cards for remaining clients
                  return (
                    <motion.div
                      key={cliente.name}
                      className="lg:col-span-2 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur border border-gray-700/50 rounded-xl p-6 flex items-center space-x-6"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: 0.1 * index, 
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.01,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h4 className="text-xl font-bold text-[var(--text-primary)] font-montserrat">
                            {cliente.name}
                          </h4>
                          <div className="flex items-center space-x-1 bg-[var(--accent-orange)]/10 border border-[var(--accent-orange)]/20 rounded-full px-2 py-1">
                            <CheckCircle size={10} className="text-[var(--accent-orange)]" />
                            <span className="text-[var(--accent-orange)] text-xs">ACTIVO</span>
                          </div>
                        </div>
                        <p className="text-[var(--accent-orange)] font-medium text-sm mb-2">
                          {cliente.highlight}
                        </p>
                        <p className="text-[var(--text-secondary)] text-sm">
                          {cliente.description}
                        </p>
                      </div>
                      
                      <div className="text-right flex-shrink-0">
                        <div className="text-2xl font-bold text-[var(--accent-orange)] font-mono mb-1">
                          {cliente.revenue}
                        </div>
                        <div className="text-[var(--text-muted)] text-xs mb-2">
                          Ingresos anuales
                        </div>
                        <div className="text-[var(--text-muted)] text-xs">
                          📍 {cliente.country}
                        </div>
                      </div>
                    </motion.div>
                  );
                }
              })}
            </div>
          )}
        </div>

        {/* Prospectos Section */}
        <div className="mb-16">
          <motion.h3 
            className="text-3xl font-bold text-[var(--text-primary)] mb-12 text-center font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Pipeline de Prospectos
          </motion.h3>

          {viewMode === 'list' ? renderProspectList() : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {prospectos.map((prospecto, index) => {
                if (index < 2) {
                  // First two: Compact vertical cards
                  return (
                    <motion.div
                      key={prospecto.name}
                      className="bg-gradient-to-b from-yellow-500/5 to-yellow-500/10 backdrop-blur border border-yellow-500/20 rounded-lg p-4"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: 0.1 * index, 
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-1 bg-yellow-400/20 rounded-full px-2 py-1">
                          <Clock size={10} className="text-yellow-400" />
                          <span className="text-yellow-400 text-xs font-medium">PIPELINE</span>
                        </div>
                        <span className="text-[var(--text-muted)] text-xs">🇨🇱 {prospecto.country}</span>
                      </div>

                      <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1 font-montserrat">
                        {prospecto.name}
                      </h4>
                      <p className="text-[var(--accent-orange)] font-medium text-xs mb-2">
                        {prospecto.highlight}
                      </p>
                      <p className="text-[var(--text-secondary)] text-xs leading-relaxed mb-3">
                        {prospecto.description}
                      </p>
                      
                      <div className="text-xs font-medium text-yellow-400">
                        {prospecto.status}
                      </div>
                    </motion.div>
                  );
                } else if (index === 2) {
                  // Glencore: Large featured prospect
                  return (
                    <motion.div
                      key={prospecto.name}
                      className="lg:col-span-2 bg-gradient-to-br from-[var(--accent-orange)]/5 to-yellow-500/5 backdrop-blur border-2 border-yellow-500/30 rounded-xl p-6 relative"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: 0.1 * index, 
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center space-x-2 bg-yellow-400 text-black rounded-full px-3 py-1 font-bold text-xs">
                          <Star size={12} />
                          <span>PROSPECTO PREMIUM</span>
                        </div>
                      </div>

                      <div className="mb-4 pr-20">
                        <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-2 font-montserrat">
                          {prospecto.name}
                        </h4>
                        <p className="text-[var(--accent-orange)] font-bold text-base mb-2">
                          {prospecto.highlight}
                        </p>
                        <div className="flex items-center text-[var(--text-muted)] text-sm mb-3">
                          <MapPin size={14} className="mr-2" />
                          {prospecto.country}
                        </div>
                      </div>

                      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                        {prospecto.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-yellow-400 font-bold">
                          {prospecto.status}
                        </div>
                        <div className="flex items-center space-x-1 text-yellow-400 text-sm">
                          <Clock size={16} />
                          <span>En proceso</span>
                        </div>
                      </div>

                      <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-500/10 rounded-full -mr-12 -mb-12"></div>
                    </motion.div>
                  );
                } else {
                  // Remaining: Horizontal minimal cards
                  return (
                    <motion.div
                      key={prospecto.name}
                      className="lg:col-span-2 bg-white/3 backdrop-blur border border-[var(--border-subtle)]/30 rounded-lg p-4 flex items-center justify-between"
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.1 * index, 
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-bold text-[var(--text-primary)] font-montserrat">
                            {prospecto.name}
                          </h4>
                          <div className="flex items-center space-x-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-2 py-1">
                            <Clock size={8} className="text-yellow-400" />
                            <span className="text-yellow-400 text-xs">PIPELINE</span>
                          </div>
                        </div>
                        <p className="text-[var(--accent-orange)] font-medium text-sm mb-1">
                          {prospecto.highlight}
                        </p>
                        <p className="text-[var(--text-secondary)] text-sm">
                          {prospecto.description}
                        </p>
                      </div>
                      
                      <div className="text-right flex-shrink-0 ml-4">
                        <div className="text-yellow-400 font-medium text-sm mb-1">
                          {prospecto.status}
                        </div>
                        <div className="text-[var(--text-muted)] text-xs">
                          📍 {prospecto.country}
                        </div>
                      </div>
                    </motion.div>
                  );
                }
              })}
            </div>
          )}
        </div>

        {/* Bottom Summary */}
        <motion.div
          className="text-center bg-gradient-to-r from-[var(--dark-bg-light)] to-[var(--dark-bg)] border border-[var(--border-subtle)] rounded-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <motion.div 
                className="text-4xl font-bold text-[var(--accent-orange)] mb-2 font-montserrat"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                10
              </motion.div>
              <p className="text-[var(--text-secondary)]">
                Clientes y prospectos validados
              </p>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-4xl font-bold text-[var(--accent-orange)] mb-2 font-montserrat"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                5
              </motion.div>
              <p className="text-[var(--text-secondary)]">
                Fortune Global 500 companies
              </p>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-4xl font-bold text-[var(--accent-orange)] mb-2 font-montserrat"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                100%
              </motion.div>
              <p className="text-[var(--text-secondary)]">
                Tasa de retención de clientes
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}