import { motion } from "framer-motion";
import { DollarSign, Target, Clock, PieChart, FileText, Download, CheckCircle, X } from "lucide-react";
import { useState } from "react";

export default function SlideOportunidadInversion() {
  const [showInvestmentDetail, setShowInvestmentDetail] = useState(false);
  
  const usoFondos = [
    {
      categoria: "Sueldos",
      porcentaje: 40,
      color: "var(--accent-orange)"
    },
    {
      categoria: "Desarrollos",
      porcentaje: 30,
      color: "var(--accent-orange-bright)"
    },
    {
      categoria: "Operación",
      porcentaje: 30,
      color: "var(--text-primary)"
    }
  ];

  const investmentComponents = [
    {
      percentage: 76,
      title: "Personal & Operación",
      subtitle: "Equipo técnico, implementación y operación consolidada",
      amount: "CLP $376.162.500",
      color: "#3B82F6"
    },
    {
      percentage: 12,
      title: "Desarrollo Tecnológico", 
      subtitle: "I+D, mejoras de producto y escalabilidad hacia USD $1M/mes",
      amount: "CLP $59.394.000",
      color: "#8B5CF6"
    },
    {
      percentage: 6,
      title: "Hardware & Habilitaciones",
      subtitle: "Infraestructura, servidores y equipamiento para robots/warehouses",
      amount: "CLP $29.697.000",
      color: "#10B981"
    },
    {
      percentage: 6,
      title: "Marketing & Legal",
      subtitle: "Comercialización tier-1, marketing y aspectos legales",
      amount: "CLP $29.697.000",
      color: "#F59E0B"
    }
  ];

  const monthlyProjection = [
    { concept: "Egresos Promedio (Mes 12)", monthly: "CLP $34.595.000", annual: "Operación estabilizada", color: "#EF4444" },
    { concept: "Ingresos Proyectados (Mes 12)", monthly: "CLP $166.000.000", annual: "~USD $180K/mes", color: "#10B981" },
    { concept: "UTILIDAD NETA (Mes 12)", monthly: "CLP $131.000.000", annual: "CLP $1.305 millones", color: "#22C55E" }
  ];

  const projectStrengths = [
    "AngloAmerican: 4 robots × USD $84K = USD $336K mensual proyectado",
    "BHP: 2 warehouses × USD $65K = USD $130K mensual confirmado",
    "HotelCommander: 2 campamentos × USD $50K = USD $100K mensual",
    "Portfolio completo proyecta USD $1M+ mensual hacia año 2",
    "Contratos tier-1 con renovación automática 3 años",
    "Solo 2-3 contratos activos alcanzan objetivo de escalamiento"
  ];

  const handleDownloadExcel = async () => {
    try {
      await fetch('/api/download-track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ documentName: 'Detalle de Inversión Consolidado - Airontech' })
      });
    } catch (error) {
      console.error('Failed to track download:', error);
    }
    window.open("https://res.cloudinary.com/dhobnlg73/raw/upload/v1751323052/Detalle_de_inversio%CC%81n_-_AT_vbyub4.xlsx", "_blank");
  };

  return (
    <section 
      id="inversion" 
      className="py-16 bg-[var(--dark-bg)] border-t border-[var(--border-subtle)] relative overflow-hidden"
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
            Oportunidad de Inversión
          </motion.h2>

          {/* Botón Ver Detalle Principal */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setShowInvestmentDetail(true)}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-orange-bright)] hover:from-[var(--accent-orange-bright)] hover:to-[var(--accent-orange)] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FileText size={20} />
              Ver Detalle de Inversión
            </button>
          </motion.div>

          <motion.div 
            className="relative overflow-hidden bg-gradient-to-br from-[var(--accent-orange)]/20 via-[var(--accent-orange-bright)]/15 to-purple-500/10 rounded-3xl p-10 border border-[var(--accent-orange)]/40 backdrop-blur-sm max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent-orange)]/5 to-transparent animate-pulse"></div>
            <div className="absolute top-4 right-4 w-32 h-32 bg-[var(--accent-orange)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-[var(--accent-orange)]/20 border border-[var(--accent-orange)]/30 rounded-full mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <span className="text-[var(--accent-orange)] font-semibold text-sm uppercase tracking-wider">Escalabilidad Comprobada</span>
                </motion.div>
                <h3 className="text-4xl font-bold text-[var(--text-primary)] mb-4 bg-gradient-to-r from-[var(--text-primary)] to-[var(--accent-orange)] bg-clip-text text-transparent">
                  Ecosistema de Alto Potencial
                </h3>
              </div>

              <div className="relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="border-l-4 border-[var(--accent-orange)] pl-6">
                      <h4 className="text-xl font-bold text-[var(--accent-orange)] mb-2">Pipeline exclusivo</h4>
                      <p className="text-[var(--text-secondary)]">sin considerar proyectos cruzados del grupo de inversores</p>
                    </div>
                    <div className="border-l-4 border-[var(--accent-orange)] pl-6">
                      <h4 className="text-xl font-bold text-[var(--accent-orange)] mb-2">+$200M USD</h4>
                      <p className="text-[var(--text-secondary)]">en oportunidades identificadas para 2026</p>
                    </div>
                    <div className="border-l-4 border-[var(--accent-orange)] pl-6">
                      <h4 className="text-xl font-bold text-[var(--accent-orange)] mb-2">Modelo probado</h4>
                      <p className="text-[var(--text-secondary)]">con clientes Tier 1 ya operando</p>
                    </div>
                  </div>

                  <div className="relative">
                    {/* Main $1M Container - Simplified */}
                    <div className="bg-black/30 rounded-2xl p-12 text-center border border-[var(--accent-orange)]/30">
                      <div className="text-7xl font-black text-[var(--accent-orange)] mb-4">$1M</div>
                      <div className="text-2xl font-bold text-white mb-2">USD Mensual</div>
                      <div className="text-[var(--accent-orange)] font-medium">Entre los 22-30 meses</div>
                    </div>


                  </div>
                </div>
              </div>
            </div>


          </motion.div>
        </div>

        {/* Oportunidades de Crecimiento */}
        <motion.div
          className="bg-gradient-to-r from-[var(--accent-orange)]/10 to-[var(--accent-orange-bright)]/10 rounded-2xl p-8 border border-[var(--accent-orange)]/20 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center font-montserrat">
            Pipeline de Oportunidades - Camino al Millón USD Mensual
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Columna 1: Soluciones Robot y Warehouse */}
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6 border border-[var(--accent-orange)]/20">
                <h4 className="text-xl font-bold text-[var(--accent-orange)] mb-4">Robots Autónomos</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--text-secondary)]">4-5 Robots proyectados</span>
                    <span className="text-[var(--text-primary)] font-bold">$85-120K c/u mensual</span>
                  </div>
                  <div className="text-sm text-[var(--accent-orange)]">
                    Potencial: $340-600K USD mensuales
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 border border-[var(--accent-orange)]/20">
                <h4 className="text-xl font-bold text-[var(--accent-orange)] mb-4">Smart Warehouses</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--text-secondary)]">2 Warehouses adicionales</span>
                    <span className="text-[var(--text-primary)] font-bold">$50-70K c/u mensual</span>
                  </div>
                  <div className="text-sm text-[var(--accent-orange)]">
                    Potencial: $100-140K USD mensuales
                  </div>
                </div>
              </div>
            </div>

            {/* Columna 2: Nuevas Líneas de Negocio */}
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6 border border-[var(--accent-orange)]/20">
                <h4 className="text-xl font-bold text-[var(--accent-orange)] mb-4">Gemelos Digitales</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--text-secondary)]">Proyectos mensuales</span>
                    <span className="text-[var(--text-primary)] font-bold">$50K USD mensual</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 border border-[var(--accent-orange)]/20">
                <h4 className="text-xl font-bold text-[var(--accent-orange)] mb-4">Seguridad y Control</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--text-secondary)]">Servicios continuos</span>
                    <span className="text-[var(--text-primary)] font-bold">$50-70K USD mensual</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 border border-[var(--accent-orange)]/20">
                <h4 className="text-xl font-bold text-[var(--accent-orange)] mb-4">Gestión de Campamentos</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--text-secondary)]">2 proyectos en mira</span>
                    <span className="text-[var(--text-primary)] font-bold">$70K USD c/u mensual</span>
                  </div>
                  <div className="text-sm text-[var(--accent-orange)]">
                    Potencial: $140K USD mensuales
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Investment Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Investment Request - Rediseñado */}
          <div className="bg-white/5 border border-[var(--accent-orange)]/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 text-center">
              Monto Solicitado
            </h3>
            
            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-[var(--accent-orange)] mb-2">
                $495M
              </div>
              <p className="text-lg text-[var(--text-secondary)]">
                Pesos chilenos (CLP)
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-[var(--accent-orange)]/10 rounded-lg">
                <span className="text-[var(--text-primary)] font-medium">Plazo de Financiamiento</span>
                <span className="text-[var(--accent-orange)] font-semibold">12 meses</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-[var(--accent-orange)]/10 rounded-lg">
                <span className="text-[var(--text-primary)] font-medium">Ingresos Proyectados</span>
                <span className="text-[var(--text-secondary)]">Desde mes 2</span>
              </div>
            </div>
          </div>

          {/* Fund Distribution Chart */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-[var(--border-subtle)] rounded-2xl p-8 glass-morphism"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-orange-bright)] to-[var(--accent-orange)] rounded-lg flex items-center justify-center mr-4">
                <PieChart className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] font-montserrat">
                Distribución de Fondos
              </h3>
            </div>

            <div className="space-y-4 mb-6">
              {usoFondos.map((item, index) => (
                <motion.div
                  key={item.categoria}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--text-primary)] font-medium text-sm">
                      {item.categoria}
                    </span>
                    <span className="text-[var(--text-primary)] font-bold">
                      {item.porcentaje}%
                    </span>
                  </div>
                  <div className="w-full bg-[var(--border-subtle)] rounded-full h-3">
                    <motion.div 
                      className="h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.porcentaje}%` }}
                      transition={{ delay: 0.6 + (index * 0.1), duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Botón Ver Detalle */}
            <div className="text-center">
              <button
                onClick={() => setShowInvestmentDetail(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-orange-bright)] hover:from-[var(--accent-orange-bright)] hover:to-[var(--accent-orange)] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <FileText size={16} />
                Ver Detalle
              </button>
            </div>
          </motion.div>
        </div>



        {/* Proyección de Contratos Escalables */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-[var(--border-subtle)] rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center font-montserrat">
            Proyección de Contratos Escalables
          </h3>
          <div className="bg-gradient-to-r from-[var(--accent-orange)]/10 to-[var(--accent-orange-bright)]/10 rounded-xl p-6 border border-[var(--accent-orange)]/20 mb-8">
            <p className="text-lg text-[var(--text-primary)] font-semibold text-center mb-2">
              Con solo 2-3 de estos contratos transformados, escalamos rápidamente a USD $1 millón mensual hacia el segundo año
            </p>
            <p className="text-sm text-[var(--text-secondary)] text-center">
              Proyecciones basadas en negociaciones actuales y potencial confirmado con clientes tier-1
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* AngloAmerican Robots */}
            <div className="bg-[var(--dark-bg)]/60 rounded-xl p-6 border border-blue-500/20">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <h4 className="text-lg font-bold text-[var(--text-primary)]">AngloAmerican - Robots Inspección</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Robots proyectados:</span>
                  <span className="text-blue-400 font-bold">3-4 unidades</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Ticket mensual:</span>
                  <span className="text-blue-400 font-bold">USD $84,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Contrato:</span>
                  <span className="text-[var(--text-primary)]">3 años renovable</span>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3 mt-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-400">USD $336,000</div>
                    <div className="text-xs text-[var(--text-secondary)]">Mensual con 4 robots (meta 12 meses)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* BHP Warehouse */}
            <div className="bg-[var(--dark-bg)]/60 rounded-xl p-6 border border-green-500/20">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h4 className="text-lg font-bold text-[var(--text-primary)]">BHP - Warehouse AI</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Bodegas proyectadas:</span>
                  <span className="text-green-400 font-bold">2 warehouses</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Por bodega:</span>
                  <span className="text-green-400 font-bold">USD $65,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Contrato:</span>
                  <span className="text-[var(--text-primary)]">3 años renovable</span>
                </div>
                <div className="bg-green-500/10 rounded-lg p-3 mt-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-400">USD $130,000</div>
                    <div className="text-xs text-[var(--text-secondary)]">Mensual con 2 warehouses (meta 12 meses)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* HotelCommander */}
            <div className="bg-[var(--dark-bg)]/60 rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                <h4 className="text-lg font-bold text-[var(--text-primary)]">HotelCommander - Campamentos</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Campamentos:</span>
                  <span className="text-purple-400 font-bold">2 proyectos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Por campamento:</span>
                  <span className="text-purple-400 font-bold">USD $50,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Contrato:</span>
                  <span className="text-[var(--text-primary)]">Anual renovable</span>
                </div>
                <div className="bg-purple-500/10 rounded-lg p-3 mt-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-400">USD $100,000</div>
                    <div className="text-xs text-[var(--text-secondary)]">Mensual con 2 campamentos (meta 12 meses)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RecetApp */}
            <div className="bg-[var(--dark-bg)]/60 rounded-xl p-6 border border-orange-500/20">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                <h4 className="text-lg font-bold text-[var(--text-primary)]">RecetApp - Farmacias</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Farmacias meta:</span>
                  <span className="text-orange-400 font-bold">3 sucursales</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Por farmacia:</span>
                  <span className="text-orange-400 font-bold">CLP $8M-10M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Contrato:</span>
                  <span className="text-[var(--text-primary)]">Anual renovable</span>
                </div>
                <div className="bg-orange-500/10 rounded-lg p-3 mt-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-orange-400">CLP $24M-30M</div>
                    <div className="text-xs text-[var(--text-secondary)]">Mensual con 3 farmacias (meta 12 meses)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ingresos Adicionales */}
          <div className="bg-gradient-to-r from-[var(--accent-orange)]/5 to-[var(--accent-orange-bright)]/5 rounded-xl p-6 border border-[var(--accent-orange)]/10 mb-8">
            <h4 className="text-lg font-bold text-[var(--text-primary)] mb-4 text-center">Ingresos Adicionales Proyectados</h4>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-[var(--accent-orange)]">USD $100K-150K</div>
                <div className="text-sm text-[var(--text-secondary)]">Mensual extra en 12 meses</div>
              </div>
              <div>
                <div className="text-lg text-[var(--text-primary)] font-semibold">Mantenimientos</div>
                <div className="text-sm text-[var(--text-secondary)]">Upgrades y personalizaciones</div>
              </div>
              <div>
                <div className="text-lg text-[var(--text-primary)] font-semibold">36 meses</div>
                <div className="text-sm text-[var(--text-secondary)]">Contratos complementarios</div>
              </div>
            </div>
          </div>

          {/* Resumen de Escalamiento */}
          <div className="bg-gradient-to-r from-green-500/10 to-green-400/10 rounded-xl p-6 border border-green-500/20">
            <h4 className="text-xl font-bold text-[var(--text-primary)] mb-4 text-center">Potencial de Escalamiento Real</h4>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400 mb-2">Solo AngloAmerican</div>
                <div className="text-sm text-[var(--text-secondary)] mb-2">4 robots operando</div>
                <div className="text-lg font-bold text-[var(--text-primary)]">USD $336K mensual</div>
                <div className="text-xs text-green-300">≈ 1/3 del objetivo año 2</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-2">BHP + Anglo</div>
                <div className="text-sm text-[var(--text-secondary)] mb-2">Combinación de proyectos</div>
                <div className="text-lg font-bold text-[var(--text-primary)]">USD $466K mensual</div>
                <div className="text-xs text-green-300">≈ 50% del objetivo año 2</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-2">Portfolio Completo</div>
                <div className="text-sm text-[var(--text-secondary)] mb-2">Todos los contratos activos</div>
                <div className="text-lg font-bold text-[var(--text-primary)]">USD $1M+ mensual</div>
                <div className="text-xs text-green-300">Objetivo año 2 alcanzado</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Financial Projections */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-[var(--border-subtle)] rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center font-montserrat">
            Cronograma de Crecimiento
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <div className="text-center bg-[var(--dark-bg)]/60 rounded-xl p-6 border border-[var(--accent-orange)]/20">
              <div className="text-3xl font-bold text-[var(--accent-orange)] mb-2">Meses 1-12</div>
              <div className="text-lg text-[var(--text-primary)] mb-2">Ramp-up</div>
              <div className="text-sm text-[var(--text-secondary)]">Flujo positivo desde mes 4</div>
              <div className="text-sm text-[var(--accent-orange)] mt-2">Meta: CLP $166M mensual (~USD $180K)</div>
            </div>
            <div className="text-center bg-[var(--dark-bg)]/60 rounded-xl p-6 border border-[var(--accent-orange)]/20">
              <div className="text-3xl font-bold text-[var(--accent-orange)] mb-2">Meses 12-24</div>
              <div className="text-lg text-[var(--text-primary)] mb-2">Consolidación</div>
              <div className="text-sm text-[var(--text-secondary)]">Escalamiento comercial</div>
              <div className="text-sm text-[var(--accent-orange)] mt-2">Meta: USD $1M mensual (trimestre final)</div>
            </div>
            <div className="text-center bg-[var(--dark-bg)]/60 rounded-xl p-6 border border-[var(--accent-orange)]/20">
              <div className="text-3xl font-bold text-[var(--accent-orange)] mb-2">Año 1</div>
              <div className="text-lg text-[var(--text-primary)] mb-2">CLP $1.305M</div>
              <div className="text-sm text-[var(--text-secondary)]">Utilidad anual proyectada</div>
              <div className="text-sm text-[var(--accent-orange)] mt-2">ROI 350%</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-xl p-6">
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-4">Estrategia Financiera</h4>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                <li>• Inversión financia primeros 12 meses completos</li>
                <li>• Flujo positivo esperado desde mes 4</li>
                <li>• Mes 12: Meta CLP $166M mensual (~USD $180K) estabilizado</li>
                <li>• Meses 12-24: Escalamiento a USD $1M mensual (GAP ~USD $800K)</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-4">Distribución de $495M CLP</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Personal y Operación:</span>
                  <span className="text-[var(--accent-orange)] font-bold">76% - CLP $376M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Desarrollo Tecnológico:</span>
                  <span className="text-[var(--accent-orange)] font-bold">12% - CLP $59M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Hardware y Marketing:</span>
                  <span className="text-[var(--accent-orange)] font-bold">12% - CLP $59M</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scenarios Analysis */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-[var(--border-subtle)] rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center font-montserrat">
            Análisis de Escenarios
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <div className="text-green-400 font-bold text-lg mb-3">Escenario Optimista</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Facturación Año 3:</span>
                  <span className="font-bold">USD $18M</span>
                </div>
                <div className="flex justify-between">
                  <span>Margen:</span>
                  <span className="font-bold">65%</span>
                </div>
                <div className="flex justify-between">
                  <span>ROI:</span>
                  <span className="font-bold">36x</span>
                </div>
              </div>
              <div className="text-xs text-green-300 mt-3">
                Penetración acelerada en mercado internacional
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <div className="text-yellow-400 font-bold text-lg mb-3">Escenario Base</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Facturación Año 3:</span>
                  <span className="font-bold">USD $12M</span>
                </div>
                <div className="flex justify-between">
                  <span>Margen:</span>
                  <span className="font-bold">55%+</span>
                </div>
                <div className="flex justify-between">
                  <span>ROI:</span>
                  <span className="font-bold">350%</span>
                </div>
              </div>
              <div className="text-xs text-yellow-300 mt-3">
                Crecimiento orgánico sostenido
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <div className="text-red-400 font-bold text-lg mb-3">Escenario Conservador</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Facturación Año 3:</span>
                  <span className="font-bold">USD $8M</span>
                </div>
                <div className="flex justify-between">
                  <span>Margen:</span>
                  <span className="font-bold">50%</span>
                </div>
                <div className="flex justify-between">
                  <span>ROI:</span>
                  <span className="font-bold">16x</span>
                </div>
              </div>
              <div className="text-xs text-red-300 mt-3">
                Desafíos en adopción tecnológica
              </div>
            </div>
          </div>
        </motion.div>

        {/* Strategic Objectives */}
        <motion.div
          className="bg-gradient-to-r from-[var(--accent-orange)]/10 to-[var(--accent-orange-bright)]/10 rounded-2xl p-8 border border-[var(--accent-orange)]/20 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 text-center font-montserrat">
            Objetivos Estratégicos del Financiamiento
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--accent-orange)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  Escalamiento Operacional
                </h4>
                <p className="text-[var(--text-secondary)]">
                  Consolidar infraestructura tecnológica y equipos para soportar crecimiento exponencial proyectado
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--accent-orange)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  Expansión Estratégica
                </h4>
                <p className="text-[var(--text-secondary)]">
                  Expandir desarrollo tecnológico, reforzar equipo comercial y aumentar esfuerzos de marketing
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Risk Analysis */}
        <motion.div
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center font-montserrat">
            Matriz de Riesgos y Estrategias de Mitigación
          </h3>
          
          {/* Risk Matrix Overview */}
          <div className="bg-white/5 rounded-xl p-6 mb-8">
            <h4 className="text-lg font-bold text-[var(--text-primary)] mb-4 text-center">
              Evaluación Cuantitativa de Riesgos
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <div className="text-red-400 font-bold text-sm">ALTO RIESGO</div>
                <div className="text-xs text-red-300 mt-1">Probabilidad {'>'}30% | Impacto {'>'}$2M</div>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <div className="text-yellow-400 font-bold text-sm">RIESGO MEDIO</div>
                <div className="text-xs text-yellow-300 mt-1">Probabilidad 15-30% | Impacto $500K-$2M</div>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <div className="text-green-400 font-bold text-sm">RIESGO BAJO</div>
                <div className="text-xs text-green-300 mt-1">Probabilidad {'<'}15% | Impacto {'<'}$500K</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* High Risk */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-red-400">RIESGO ALTO - Concentración de Clientes</h4>
                <div className="flex items-center space-x-3">
                  <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs font-bold">25% Prob.</span>
                  <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs font-bold">$3.5M Impacto</span>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <div className="font-semibold text-[var(--text-primary)] mb-2">Descripción del Riesgo</div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">
                    68% de facturación concentrada en BHP, Anglo American y Antofagasta. 
                    Pérdida de un cliente mayor podría reducir ingresos en 20-35%.
                  </p>
                  <div className="text-xs text-red-300">
                    <strong>Trigger:</strong> Cambios en políticas de procurement, fusiones, crisis sectorial
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-[var(--text-primary)] mb-2">Estrategia de Mitigación</div>
                  <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                    <li>• Diversificación agresiva: 12 nuevos clientes tier-2 en 18 meses</li>
                    <li>• Contratos multi-año con cláusulas de penalización por término anticipado</li>
                    <li>• Desarrollo de productos complementarios para clientes existentes</li>
                    <li>• Expansión geográfica: Perú, Colombia, Brasil</li>
                  </ul>
                  <div className="mt-3 text-xs">
                    <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
                      Reducción a 15% probabilidad en 24 meses
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Risk */}
            <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-yellow-400">RIESGO MEDIO - Volatilidad del Sector Minero</h4>
                <div className="flex items-center space-x-3">
                  <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-bold">20% Prob.</span>
                  <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-bold">$1.8M Impacto</span>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <div className="font-semibold text-[var(--text-primary)] mb-2">Descripción del Riesgo</div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">
                    Ciclos económicos y caída en precios del cobre/litio pueden reducir CAPEX minero 
                    en 15-40%, afectando nuevos proyectos de tecnología.
                  </p>
                  <div className="text-xs text-yellow-300">
                    <strong>Histórico:</strong> Crisis 2008 (-35% CAPEX), COVID 2020 (-28% CAPEX)
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-[var(--text-primary)] mb-2">Estrategia de Mitigación</div>
                  <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                    <li>• Modelo SaaS resiliente con ingresos recurrentes (55%+ de revenue)</li>
                    <li>• Foco en eficiencia operacional vs. nuevos proyectos</li>
                    <li>• Contratos "crisis-proof" con pagos garantizados</li>
                    <li>• Diversificación a sectores adyacentes (construcción, energía)</li>
                  </ul>
                  <div className="mt-3 text-xs">
                    <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
                      Modelo defensivo implementado
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Low Risk */}
            <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-green-400">RIESGO BAJO - Competencia Tecnológica Disruptiva</h4>
                <div className="flex items-center space-x-3">
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-bold">12% Prob.</span>
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-bold">$800K Impacto</span>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <div className="font-semibold text-[var(--text-primary)] mb-2">Descripción del Riesgo</div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">
                    Entrada de gigantes tecnológicos (Google, Microsoft, AWS) o competidores 
                    internacionales especializados con soluciones superiores.
                  </p>
                  <div className="text-xs text-green-300">
                    <strong>Ventaja:</strong> 5 años de experiencia específica en minería chilena
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-[var(--text-primary)] mb-2">Estrategia de Mitigación</div>
                  <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                    <li>• I+D continuo: 22% de revenue reinvertido en innovación</li>
                    <li>• Alianzas estratégicas con universidades y centros de investigación</li>
                    <li>• Patentes y propiedad intelectual robusta</li>
                    <li>• Conocimiento profundo del mercado local como barrera de entrada</li>
                  </ul>
                  <div className="mt-3 text-xs">
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                      Ventaja competitiva sostenible
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Score */}
          <div className="mt-8 bg-white/5 rounded-xl p-6 text-center">
            <h4 className="text-lg font-bold text-[var(--text-primary)] mb-4">Puntuación de Riesgo Consolidada</h4>
            <div className="flex justify-center items-center space-x-8">
              <div>
                <div className="text-3xl font-bold text-[var(--accent-orange)]">7.2</div>
                <div className="text-sm text-[var(--text-secondary)]">Score de Riesgo</div>
                <div className="text-xs text-[var(--text-muted)]">(Escala 1-10)</div>
              </div>
              <div className="h-12 w-px bg-[var(--border-subtle)]"></div>
              <div>
                <div className="text-lg font-bold text-green-400">FAVORABLE</div>
                <div className="text-sm text-[var(--text-secondary)]">para inversión</div>
                <div className="text-xs text-green-300">Riesgos gestionables</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Investment Highlights */}
        <motion.div
          className="grid md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center bg-white/5 rounded-xl p-6">
            <motion.div 
              className="text-3xl font-bold text-[var(--accent-orange)] mb-2 font-montserrat"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
            >
              495M
            </motion.div>
            <p className="text-[var(--text-secondary)]">
              Pesos chilenos
            </p>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Financiamiento solicitado
            </p>
          </div>

          <div className="text-center bg-white/5 rounded-xl p-6">
            <motion.div 
              className="text-3xl font-bold text-[var(--accent-orange)] mb-2 font-montserrat"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
            >
              6-8
            </motion.div>
            <p className="text-[var(--text-secondary)]">
              Meses payback
            </p>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Recuperación de inversión
            </p>
          </div>

          <div className="text-center bg-white/5 rounded-xl p-6">
            <motion.div 
              className="text-3xl font-bold text-[var(--accent-orange)] mb-2 font-montserrat"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.6, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
            >
              55%+
            </motion.div>
            <p className="text-[var(--text-secondary)]">
              Margen objetivo
            </p>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Año 3 consolidado
            </p>
          </div>

          <div className="text-center bg-white/5 rounded-xl p-6">
            <motion.div 
              className="text-3xl font-bold text-[var(--accent-orange)] mb-2 font-montserrat"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.7, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
            >
              350%
            </motion.div>
            <p className="text-[var(--text-secondary)]">
              ROI proyectado
            </p>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Retorno sobre inversión
            </p>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-orange-bright)] rounded-full">
            <Target className="text-white mr-2" size={20} />
            <span className="text-white font-semibold">
              Oportunidad de Inversión Estratégica
            </span>
          </div>
        </motion.div>
      </div>

      {/* Modal de Detalle de Inversión */}
      {showInvestmentDetail && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[var(--dark-bg)] border border-[var(--border-subtle)] rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header del Modal */}
            <div className="sticky top-0 bg-[var(--dark-bg)] border-b border-[var(--border-subtle)] p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-orange-bright)] rounded-lg flex items-center justify-center">
                  <FileText className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                  Distribución y Detalle de Inversión
                </h2>
              </div>
              <button
                onClick={() => setShowInvestmentDetail(false)}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <X className="text-[var(--text-secondary)]" size={24} />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Inversión Requerida e Indicadores */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Inversión Requerida */}
                <div className="bg-white/5 border border-[var(--border-subtle)] rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[var(--accent-orange)] mb-6">Inversión Requerida</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Inversión Total Anual Estimada:</span>
                      <span className="text-[var(--accent-orange)] font-bold">CLP $494.950.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Período:</span>
                      <span className="text-[var(--text-primary)]">12 meses (renovable)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Modalidad:</span>
                      <span className="text-[var(--text-primary)]">Financiamiento mensual</span>
                    </div>
                  </div>
                </div>

                {/* Indicadores Clave */}
                <div className="bg-white/5 border border-[var(--border-subtle)] rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[var(--accent-orange)] mb-6">Indicadores Clave</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">ROI Esperado:</span>
                      <span className="text-green-400 font-bold">~350%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Margen de Utilidad:</span>
                      <span className="text-green-400 font-bold">Sobre 55%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Payback Proyectado:</span>
                      <span className="text-green-400 font-bold">6 a 8 meses</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Flujo de Caja:</span>
                      <span className="text-green-400 font-bold">Positivo esperado desde mes 4</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Componentes de la Inversión */}
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">Componentes de la Inversión</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {investmentComponents.map((component, index) => (
                    <div key={index} className="bg-white/5 border border-[var(--border-subtle)] rounded-lg p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-2" style={{ color: component.color }}>
                          {component.percentage}%
                        </div>
                        <div className="text-[var(--text-primary)] font-semibold mb-1">
                          {component.title}
                        </div>
                        <div className="text-sm text-[var(--text-secondary)] mb-2">
                          {component.subtitle}
                        </div>
                        <div className="text-sm font-bold" style={{ color: component.color }}>
                          {component.amount}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Proyección Financiera */}
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">Proyección Financiera (12 meses)</h3>
                <div className="bg-white/5 border border-[var(--border-subtle)] rounded-xl overflow-hidden">
                  <div className="grid grid-cols-3 bg-[var(--accent-orange)]/10 p-4 font-bold text-[var(--text-primary)]">
                    <div>Concepto</div>
                    <div className="text-center">Mensual (CLP)</div>
                    <div className="text-center">Anual (CLP)</div>
                  </div>
                  {monthlyProjection.map((item, index) => (
                    <div key={index} className="grid grid-cols-3 p-4 border-t border-[var(--border-subtle)]">
                      <div className="text-[var(--text-primary)] font-medium">{item.concept}</div>
                      <div className="text-center font-bold" style={{ color: item.color }}>
                        {item.monthly}
                      </div>
                      <div className="text-center font-bold" style={{ color: item.color }}>
                        {item.annual}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fortalezas del Proyecto */}
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">Fortalezas del Proyecto</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {projectStrengths.map((strength, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 border border-green-500/20 rounded-lg">
                      <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                      <span className="text-[var(--text-primary)]">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recomendación */}
              <div className="bg-gradient-to-r from-[var(--accent-orange)]/10 to-[var(--accent-orange-bright)]/10 border border-[var(--accent-orange)]/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[var(--accent-orange)] mb-4">Recomendación de Inversión</h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  Oportunidad única de participar en uno de los negocios más escalables de la industria minera:
                </p>
                <ul className="text-[var(--text-secondary)] space-y-2 mb-6">
                  <li>• Solo AngloAmerican proyecta USD $336K mensual (1/3 del objetivo año 2)</li>
                  <li>• BHP + Anglo combinados: USD $466K mensual (50% del objetivo)</li>
                  <li>• Portfolio completo alcanza USD $1M+ mensual hacia año 2</li>
                  <li>• Contratos tier-1 validados con renovación automática</li>
                  <li>• Escalamiento global sin límites físicos</li>
                </ul>
                <div className="text-[var(--text-primary)] font-bold text-lg">
                  Potencial real validado: con solo 2-3 contratos transformados, la meta de USD $1 millón mensual es completamente alcanzable.
                </div>
              </div>

              {/* Botón de Descarga */}
              <div className="text-center">
                <button
                  onClick={handleDownloadExcel}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-orange-bright)] hover:from-[var(--accent-orange-bright)] hover:to-[var(--accent-orange)] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Download size={20} />
                  Descargar Detalle Completo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}