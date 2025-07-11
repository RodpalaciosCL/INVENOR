import { motion } from "framer-motion";
import { Shield, Eye, FileText, CheckSquare } from "lucide-react";

export default function SlideSeguridadMinera() {
  const solucionesSeguridad = [
    {
      icon: Shield,
      title: "Control Integral de EPP",
      subtitle: "Equipos de Protección Personal",
      description: [
        "Registro digital automatizado del uso de EPP",
        "Seguimiento en tiempo real del cumplimiento",
        "Alertas inmediatas ante incumplimientos o riesgos"
      ]
    },
    {
      icon: Eye,
      title: "Trackeo Digital de Procesos",
      subtitle: "Procesos Operativos",
      description: [
        "Monitoreo en tiempo real de actividades críticas",
        "Visibilidad completa de tareas diarias en faena",
        "Registro automático de actividad para auditorías internas"
      ]
    },
    {
      icon: FileText,
      title: "Auditoría Digital Automática",
      subtitle: "de Incidentes",
      description: [
        "Reporte inmediato y digital de incidentes",
        "Trazabilidad completa desde registro hasta resolución",
        "Informes automatizados para prevención y gestión de riesgos"
      ]
    },
    {
      icon: CheckSquare,
      title: "Checklist Digital Automatizado",
      subtitle: "Control de Procesos",
      description: [
        "Checklists personalizados para cada actividad operativa",
        "Digitalización y eliminación de papel y errores manuales",
        "Registro histórico y análisis para mejorar procesos y prevenir accidentes"
      ]
    }
  ];

  return (
    <section 
      id="seguridad" 
      className="py-16 bg-[var(--dark-bg)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-[var(--accent-orange)] font-montserrat"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Seguridad Minera: Imperativo Crítico
          </motion.h2>
          <motion.div 
            className="max-w-5xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-[var(--text-secondary)] mb-4">
              La seguridad en minería no es negociable. Cada accidente tiene un costo humano y económico devastador.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-red-400">300K USD</div>
                <div className="text-sm text-red-300">Costo promedio por fatalidad</div>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400">47%</div>
                <div className="text-sm text-yellow-300">Reducción de accidentes con IA</div>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">+20M USD</div>
                <div className="text-sm text-green-300">Ahorro anual por mina mayor</div>
              </div>
            </div>
          </motion.div>
        </div>



        {/* Compact Solutions Grid */}
        <div className="grid lg:grid-cols-4 gap-6">
          {solucionesSeguridad.map((solucion, index) => (
            <motion.div
              key={solucion.title}
              className="bg-white/5 backdrop-blur-sm border border-[var(--border-subtle)] rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.1 * index, 
                duration: 0.4
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              {/* Compact Icon and Title */}
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-orange-bright)] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <solucion.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1 font-montserrat">
                  {solucion.title}
                </h3>
                <p className="text-sm text-[var(--accent-orange)] font-medium">
                  {solucion.subtitle}
                </p>
              </div>

              {/* Compact Description */}
              <div className="space-y-2">
                {solucion.description.slice(0, 2).map((bullet, bulletIndex) => (
                  <div
                    key={bulletIndex}
                    className="flex items-start text-[var(--text-secondary)] text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-[var(--accent-orange)] rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    <span>{bullet}</span>
                  </div>
                ))}
                {solucion.description.length > 2 && (
                  <div className="text-xs text-[var(--text-muted)] mt-2">
                    +{solucion.description.length - 2} funcionalidades más
                  </div>
                )}
              </div>

              {/* Compact Badge */}
              <div className="mt-4 flex justify-center">
                <div className="inline-flex items-center px-3 py-1 bg-[var(--accent-orange)]/10 border border-[var(--accent-orange)]/20 rounded-full">
                  <div className="w-1.5 h-1.5 bg-[var(--accent-orange)] rounded-full mr-2"></div>
                  <span className="text-[var(--accent-orange)] font-medium text-xs">
                    IA + IoT
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 bg-[var(--accent-orange)]/5 rounded-xl p-8 border border-[var(--accent-orange)]/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
            Transformamos la Seguridad Minera en Ventaja Competitiva
          </h3>
          <p className="text-[var(--text-secondary)] max-w-3xl mx-auto">
            No solo cumplimos regulaciones: creamos ecosistemas de seguridad que reducen costos, 
            aumentan productividad y, más importante, salvan vidas.
          </p>
        </motion.div>

        {/* Bottom Impact Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <motion.div 
                className="text-4xl font-bold text-[var(--accent-orange)] mb-3 font-montserrat"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                -65%
              </motion.div>
              <p className="text-[var(--text-secondary)] text-lg">
                Reducción de accidentes
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
                100%
              </motion.div>
              <p className="text-[var(--text-secondary)] text-lg">
                Digitalización de procesos
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
                24/7
              </motion.div>
              <p className="text-[var(--text-secondary)] text-lg">
                Monitoreo continuo
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-orange-bright)] rounded-full">
              <Shield className="text-white mr-2" size={20} />
              <span className="text-white font-semibold">
                Vertical Estratégica Prioritaria
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}