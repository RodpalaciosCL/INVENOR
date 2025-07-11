import { motion } from "framer-motion";

// Helper function to track downloads
const trackDownload = async (documentName: string, url: string) => {
  try {
    await fetch('/api/download-track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ documentName })
    });
  } catch (error) {
    console.error('Failed to track download:', error);
  }
  // Open the download link
  window.open(url, '_blank');
};

export default function SlideDocumentacion() {
  return (
    <section className="min-h-screen bg-[var(--dark-bg)] flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        {/* Casos de Negocio Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
              Documentación Técnica
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
              Accede a los casos de negocio detallados y demos de nuestros proyectos exitosos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <button 
              onClick={() => trackDownload('Anglo American - Robot Autónomo Minero', 'https://res.cloudinary.com/dhobnlg73/raw/upload/v1750791860/Anglo_Robots_BC_bvwykm.xlsx')}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[var(--border-subtle)] hover:border-[var(--accent-orange)]/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl w-full text-left"
            >
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="https://www.teesport.co.uk/wp-content/uploads/2021/03/AngloAmerican_White-Maurice-Rankin.png"
                    alt="AngloAmerican"
                    className="h-36 w-auto object-contain filter brightness-100"
                  />
                </div>
                <p className="text-[var(--text-secondary)] mb-4">Robot Autónomo Minero</p>
                <div className="inline-flex items-center px-4 py-2 bg-[var(--accent-orange)]/20 rounded-full">
                  <span className="text-[var(--accent-orange)] text-sm font-medium">Excel File</span>
                </div>
              </div>
            </button>

            <button 
              onClick={() => trackDownload('BHP Spence - Sistema de Luminarias', 'https://res.cloudinary.com/dhobnlg73/raw/upload/v1750811537/BHP_SPENCE_LUMINARIAS_athssy.xlsx')}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[var(--border-subtle)] hover:border-[var(--accent-orange)]/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl w-full text-left"
            >
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/assets/bhp-logo.png"
                    alt="BHP"
                    className="h-28 w-auto object-contain"
                  />
                </div>
                <p className="text-[var(--text-secondary)] mb-4">Sistema de Luminarias</p>
                <div className="inline-flex items-center px-4 py-2 bg-[var(--accent-orange)]/20 rounded-full">
                  <span className="text-[var(--accent-orange)] text-sm font-medium">Excel File</span>
                </div>
              </div>
            </button>

            <button 
              onClick={() => trackDownload('BHP Spence - Smart Warehouse System', 'https://res.cloudinary.com/dhobnlg73/raw/upload/v1750811537/BHP_SPENCE_BC_WAREHOUSE_ravpge.xlsx')}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[var(--border-subtle)] hover:border-[var(--accent-orange)]/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl w-full text-left"
            >
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="https://serviall.cl/wp-content/uploads/2023/07/Logo-Spence-BHP.png"
                    alt="BHP Spence"
                    className="h-28 w-auto object-contain"
                  />
                </div>
                <p className="text-[var(--text-secondary)] mb-4">Smart Warehouse System</p>
                <div className="inline-flex items-center px-4 py-2 bg-[var(--accent-orange)]/20 rounded-full">
                  <span className="text-[var(--accent-orange)] text-sm font-medium">Excel File</span>
                </div>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}