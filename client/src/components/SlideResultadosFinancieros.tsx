import { motion } from "framer-motion";
import { DollarSign, BarChart3 } from "lucide-react";

export default function SlideResultadosFinancieros() {
  const datosFinancieros = {
    margenActuales: 52,
    margenProspectos: 77.5,
    profitTotal: 5900
  };

  return (
    <section 
      id="finanzas" 
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
            Resultados Financieros y Proyecciones
          </motion.h2>
          <motion.div 
            className="bg-gradient-to-r from-[var(--accent-orange)]/10 to-[var(--accent-orange-bright)]/10 rounded-2xl p-6 border border-[var(--accent-orange)]/20 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-[var(--text-primary)] font-semibold mb-3">
              Proyección de ingresos anuales significativos, con una inversión inicial contenida.
            </p>
            <p className="text-lg text-[var(--text-secondary)]">
              Modelo probado, clientes activos, alto margen y escalabilidad sin límite físico
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--accent-orange)] mb-1">CLP $1.305M</div>
                <div className="text-sm text-[var(--text-muted)]">Utilidad anual proyectada (año 1)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--accent-orange)] mb-1">CLP $495M</div>
                <div className="text-sm text-[var(--text-muted)]">Inversión inicial requerida</div>
              </div>
            </div>
          </motion.div>
        </div>



        {/* Bottom Impact Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 bg-white/5 rounded-xl border border-[var(--border-subtle)]">
            <DollarSign className="text-[var(--accent-orange)] mx-auto mb-4" size={40} />
            <div className="text-2xl font-bold text-[var(--text-primary)] mb-2">Alto ROI</div>
            <p className="text-[var(--text-secondary)] text-sm">
              Márgenes superiores al 50% en todos los proyectos validados
            </p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-[var(--border-subtle)]">
            <BarChart3 className="text-[var(--accent-orange)] mx-auto mb-4" size={40} />
            <div className="text-2xl font-bold text-[var(--text-primary)] mb-2">Escalabilidad</div>
            <p className="text-[var(--text-secondary)] text-sm">
              Modelo digital sin límites físicos de crecimiento
            </p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-[var(--border-subtle)]">
            <DollarSign className="text-[var(--accent-orange)] mx-auto mb-4" size={40} />
            <div className="text-2xl font-bold text-[var(--text-primary)] mb-2">Validación</div>
            <p className="text-[var(--text-secondary)] text-sm">
              Clientes reales pagando por soluciones implementadas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}