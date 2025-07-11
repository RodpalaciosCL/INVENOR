import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Clock, DollarSign, Users, Zap, Play, X, FileText, Download, Building } from "lucide-react";
import { useState } from "react";

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
  
  // Create a temporary link element to trigger download
  const link = document.createElement('a');
  link.href = url;
  link.download = documentName;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function SlidePruebasConcepto() {
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; videoUrl: string; title: string }>({
    isOpen: false,
    videoUrl: '',
    title: ''
  });
  const [showBusinessCase, setShowBusinessCase] = useState(false);
  const [showLuminariasBusinessCase, setShowLuminariasBusinessCase] = useState(false);
  const [showWarehousePoCBusinessCase, setShowWarehousePoCBusinessCase] = useState(false);
  const pruebasConcepto = [
    {
      id: 1,
      titulo: "Smart Warehouse",
      cliente: "BHP",
      descripcion: "Plataforma y software aprobados por BHP. Tiempos de ejecución validados por BHP. Equipo acreditado y autorizado en faena.",
      estado: "Aprobado",
      valor: "CLP 85.000.000 mensuales x 24-36 meses",
      costo: "CLP 38.000.000 mensuales",
      nextStep: "Instalación de hardware en bodegas. Prueba de concepto: 3 semanas",
      imagen: "https://res.cloudinary.com/dhobnlg73/video/upload/v1750713204/warehouse_sgukjf.mp4?t=" + Date.now(),
      thumbnail: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750713204/warehouse_sgukjf.jpg?t=" + Date.now()
    },
    {
      id: 2,
      titulo: "Robot Gestión Crítica Cintas Transportadoras",
      cliente: "Angloamerican",
      descripcion: "Prueba de concepto de robot. Tareas asignadas. Presupuesto de continuidad.",
      estado: "Aprobado",
      valor: "CLP 85.000.000 mensuales x 36 meses",
      costo: "CLP 38.000.000 mensuales",
      nextStep: "Visita técnica con proveedor. Implementación POC. Medición funcionamiento para VB KPI",
      imagen: "https://res.cloudinary.com/dhobnlg73/video/upload/v1750713284/inspeccion_2_fbfcbx.mp4?t=" + Date.now(),
      thumbnail: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750713284/inspeccion_2_fbfcbx.jpg?t=" + Date.now()
    },
    {
      id: 3,
      titulo: "Automatización Luminaria Campamento Spence BHP",
      cliente: "BHP",
      descripcion: "IoT para control inteligente de iluminación en campamentos mineros",
      estado: "Aprobado",
      valor: "CLP 38.000.000 mensuales x 24-36 meses",
      costo: "CLP 5.473.333 mensuales",
      nextStep: "Escalamiento a otras faenas BHP. Expansión Codelco y Antofagasta Minerals",
      imagen: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750700423/edge_computing_unearths_new_value_for_mining_applications_fpvdr7.jpg",
      hasBusinessCase: true,
      businessCase: {
        title: "Caso de Negocio – Automatización de Luminarias Campamento Spence BHP",
        investment: {
          total: "65.120.000 CLP",
          period: "24-36 meses (renovable)",
          modality: "Financiamiento mensual"
        },
        indicators: {
          roi: "600%",
          margin: "85%",
          payback: "≈ 2 meses",
          cashFlow: "Positivo desde mes 1"
        },
        components: [
          { label: "Personal & Operación", pct: 46, total: "30.000.000 CLP", payment: "2,5 M/mes" },
          { label: "Software & Licencias", pct: 42, total: "27.600.000 CLP", payment: "2,3 M/mes" },
          { label: "Hardware IoT", pct: 6, total: "4.000.000 CLP", payment: "0,33 M/mes" },
          { label: "Logística & Registro", pct: 6, total: "3.720.000 CLP", payment: "Pago inicial" }
        ],
        projection: {
          monthlyCosts: "5.426.667 CLP",
          monthlyRevenue: "38.000.000 CLP",
          monthlyProfit: "32.526.667 CLP",
          annualCosts: "65.120.000 CLP",
          annualRevenue: "456.000.000 CLP",
          annualProfit: "390.700.000 CLP"
        },
        strengths: [
          "Cliente corporativo sólido (BHP)",
          "Flujo de caja positivo inmediato",
          "ROI ≈ 600%",
          "Pay-back ≈ 2 meses",
          "Interés Codelco & AMSA",
          "Escalable a contratos globales"
        ],
        excelUrl: "https://res.cloudinary.com/dhobnlg73/raw/upload/v1750811537/BHP_SPENCE_LUMINARIAS_athssy.xlsx"
      }
    },
    {
      id: 4,
      titulo: "RecetAPP",
      cliente: "Farmacias Cruz Verde",
      descripcion: "Gestor de recetas online para más de 1.000 sucursales de Farmacias Cruzverde. Sistema completo de gestión y distribución digital.",
      estado: "Aprobado",
      valor: "CLP 12.000.000 mensuales x 12 meses renovable",
      costo: "CLP 1.000.000 mensuales",
      nextStep: "Escalabilidad y nuevas funcionalidades",
      imagen: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750700350/Captura_de_pantalla_2025-06-23_a_la_s_13.38.17_ogvepm.png"
    }
  ];

  const openVideoModal = (videoUrl: string, title: string) => {
    setVideoModal({ isOpen: true, videoUrl, title });
  };

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, videoUrl: '', title: '' });
  };

  const isVideo = (url: string) => {
    return url.includes('.mp4') || url.includes('.mov');
  };

  const clientes = [
    {
      nombre: "BHP",
      proyectos: ["PoC Smart Warehouse", "HydroCommander, PrelCommander, Control Documental"]
    },
    {
      nombre: "Angloamerican",
      proyectos: ["PoC Robot Gestión Crítica Cintas Transportadoras"]
    },
    {
      nombre: "Antofagasta Minerals",
      proyectos: ["Gemelo digital patio residuos"]
    },
    {
      nombre: "Codelco", 
      proyectos: ["Transformación digital de remates de excedentes mineros"]
    },
    {
      nombre: "Farmacias Cruz Verde",
      proyectos: ["RecetAPP - Gestor digital para 1.000+ sucursales"]
    },
    {
      nombre: "Sierra Gorda",
      proyectos: ["Digitalización Patio"]
    }
  ];

  return (
    <section 
      id="pruebas-concepto" 
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
            Pruebas de Concepto Aprobadas
          </motion.h2>
          <motion.div 
            className="bg-gradient-to-r from-[var(--accent-orange)]/15 to-[var(--accent-orange-bright)]/15 rounded-2xl p-8 border-2 border-[var(--accent-orange)]/30 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-[var(--text-primary)] font-semibold mb-3">
              Estado Actual: Validación Técnica y Comercial Completada
            </p>
            <p className="text-lg text-[var(--text-secondary)]">
              Tres proyectos aprobados por clientes tier-1 con presupuestos confirmados y cronogramas definidos
            </p>
          </motion.div>
        </div>

        {/* Pruebas de Concepto Cards */}
        <div className="space-y-8 mb-16">
          {pruebasConcepto.map((prueba, index) => (
            <motion.div
              key={prueba.id}
              className="bg-white/5 backdrop-blur-sm border border-[var(--accent-orange)]/15 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_20px_40px_-12px_rgba(249,115,22,0.2)] transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="grid lg:grid-cols-5 gap-0 min-h-[350px]">
                {/* Media Section */}
                <div className="lg:col-span-2 relative h-64 lg:h-auto cursor-pointer group">
                  {isVideo(prueba.imagen) ? (
                    <div 
                      className="relative w-full h-full bg-cover bg-center cursor-pointer group"
                      style={{
                        backgroundImage: prueba.cliente === 'Angloamerican' 
                          ? `url("https://www.anybotics.com/wp-content/uploads/2019/08/anymal-c-legged-robot-inspection-transparent.png")`
                          : prueba.cliente === 'BHP' && prueba.titulo.includes('Warehouse')
                          ? `url("https://cdn.prod.website-files.com/668026bd6ba918352b4b09d2/668c1c12e8a58030d5568f21_642d7a5f4d77d19c2f6fa8c2_xzGehktapAgabSW56yhCmigLzY3uCWACMrR6p4lkLfw.jpeg")`
                          : 'none'
                      }}
                      onClick={() => openVideoModal(prueba.imagen, prueba.titulo)}
                    >
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-all duration-300">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Play size={24} className="text-black ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={prueba.imagen} 
                      alt={prueba.titulo}
                      className={`w-full h-full ${prueba.cliente === 'Farmacias Cruz Verde' ? 'object-contain bg-white p-2' : 'object-cover'}`}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <span className="bg-gradient-to-r from-green-500/80 to-green-600/80 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center shadow-md backdrop-blur-sm">
                      <CheckCircle size={14} className="mr-1.5" />
                      {prueba.estado}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                    <div className="bg-black/60 backdrop-blur-md rounded-xl px-4 py-2 border border-white/10">
                      <p className="text-[var(--accent-orange)] font-semibold text-lg">
                        {prueba.cliente}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-[var(--text-primary)] mb-4 font-montserrat leading-tight">
                      {prueba.titulo}
                    </h3>

                    <p className="text-[var(--text-secondary)] mb-6 leading-relaxed text-base">
                      {prueba.descripcion}
                    </p>
                  </div>

                  {/* Enhanced Progress Steps */}
                  <div className="space-y-4">
                    {/* Status Row */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl p-4 backdrop-blur-sm">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500/80 to-green-600/80 rounded-full flex items-center justify-center mr-3 shadow-md">
                            <CheckCircle size={16} className="text-white" />
                          </div>
                          <div>
                            <span className="font-semibold text-[var(--text-primary)] text-base block">Estado</span>
                            <span className="text-green-400 font-medium text-xs">Validado y Presupuestado</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-[var(--accent-orange)]/10 to-[var(--accent-orange-bright)]/5 border border-[var(--accent-orange)]/20 rounded-xl p-4 backdrop-blur-sm">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-[var(--accent-orange)]/80 to-[var(--accent-orange-bright)]/80 rounded-full flex items-center justify-center mr-3 shadow-md">
                            <ArrowRight size={16} className="text-white" />
                          </div>
                          <div>
                            <span className="font-semibold text-[var(--text-primary)] text-base block">Próximo Paso</span>
                            <span className="text-[var(--accent-orange)] font-medium text-xs">En Proceso</span>
                          </div>
                        </div>
                        <p className="text-[var(--text-secondary)] text-xs leading-relaxed pl-11">{prueba.nextStep}</p>
                      </div>
                    </div>

                    {/* Financial Information */}
                    <div className="bg-gradient-to-br from-[var(--text-primary)]/10 to-[var(--text-primary)]/3 border border-[var(--text-primary)]/15 rounded-xl p-5 backdrop-blur-sm">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-[var(--text-primary)]/80 to-[var(--text-primary)]/60 rounded-full flex items-center justify-center mr-3 shadow-md">
                          <DollarSign size={16} className="text-white" />
                        </div>
                        <span className="font-semibold text-[var(--text-primary)] text-base">Información Financiera</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 pl-11">
                        <div className="space-y-1">
                          <p className="text-[var(--accent-orange)] font-semibold text-sm leading-tight">{prueba.valor}</p>
                          <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider">Valor del Servicio</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[var(--text-secondary)] font-medium text-sm">{prueba.costo}</p>
                          <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider">Costo de Implementación</p>
                        </div>
                      </div>
                      {prueba.cliente === 'Angloamerican' && (
                        <div className="mt-4 pl-11">
                          <button
                            onClick={() => setShowBusinessCase(true)}
                            className="flex items-center space-x-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-lg px-3 py-2 transition-colors text-sm"
                          >
                            <FileText size={14} className="text-blue-400" />
                            <span className="text-blue-400 font-medium">Ver Caso de Negocio</span>
                          </button>
                        </div>
                      )}
                      {prueba.cliente === 'BHP' && prueba.titulo.includes('Luminaria') && (
                        <div className="mt-4 pl-11">
                          <button
                            onClick={() => setShowLuminariasBusinessCase(true)}
                            className="flex items-center space-x-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-lg px-3 py-2 transition-colors text-sm"
                          >
                            <FileText size={14} className="text-blue-400" />
                            <span className="text-blue-400 font-medium">Ver Caso de Negocio</span>
                          </button>
                        </div>
                      )}
                      {prueba.cliente === 'BHP' && prueba.titulo.includes('Warehouse') && (
                        <div className="mt-4 pl-11">
                          <button
                            onClick={() => setShowWarehousePoCBusinessCase(true)}
                            className="flex items-center space-x-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-lg px-3 py-2 transition-colors text-sm"
                          >
                            <FileText size={14} className="text-blue-400" />
                            <span className="text-blue-400 font-medium">Ver Caso de Negocio</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clientes y Proyectos */}
        <motion.div
          className="bg-gradient-to-r from-[var(--accent-orange)]/10 to-[var(--accent-orange-bright)]/10 rounded-2xl p-8 border border-[var(--accent-orange)]/20 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center font-montserrat">
            Clientes y Proyectos Confirmados
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientes.map((cliente, index) => (
              <div key={cliente.nombre} className="bg-white/5 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-orange-bright)] rounded-lg flex items-center justify-center mr-4">
                    <Users className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-[var(--text-primary)]">{cliente.nombre}</h4>
                </div>
                <div className="space-y-2">
                  {cliente.proyectos.map((proyecto, idx) => (
                    <div key={idx} className="flex items-center">
                      <ArrowRight className="text-[var(--accent-orange)] mr-2" size={16} />
                      <span className="text-[var(--text-secondary)] text-sm">{proyecto}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Próximos Pasos */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-[var(--border-subtle)] rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center font-montserrat">
            Próximos Pasos: Implementación POC's
          </h3>
          
          <div className="max-w-5xl mx-auto">
            {/* Timeline Simplificado */}
            <div className="col-span-2">
              <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center">Cronograma de Desarrollo</h4>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[var(--dark-bg)]/60 backdrop-blur-sm rounded-2xl p-6 border border-[var(--accent-orange)]/20 text-center">
                  <div className="text-2xl font-bold text-[var(--accent-orange)] mb-3">Q3 2025</div>
                  <p className="text-[var(--text-secondary)]">Desarrollo de las POC's de cada proyecto</p>
                </div>
                
                <div className="bg-[var(--dark-bg)]/60 backdrop-blur-sm rounded-2xl p-6 border border-[var(--accent-orange)]/20 text-center">
                  <div className="text-2xl font-bold text-[var(--accent-orange)] mb-3">Q4 2025</div>
                  <p className="text-[var(--text-secondary)]">Rentabilidad y crecimiento con soluciones desarrolladas y probadas</p>
                </div>
                
                <div className="bg-[var(--dark-bg)]/60 backdrop-blur-sm rounded-2xl p-6 border border-[var(--accent-orange)]/20 text-center">
                  <div className="text-2xl font-bold text-[var(--accent-orange)] mb-3">Q1 2026</div>
                  <p className="text-[var(--text-secondary)]">Expansión comercial + desarrollo nuevas soluciones</p>
                </div>
              </div>
            </div>


          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-orange-bright)] rounded-full">
            <Zap className="text-white mr-2" size={20} />
            <span className="text-white font-semibold">
              Validación Comercial Completada - Listos para Escalar
            </span>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {videoModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full h-full max-w-6xl max-h-[80vh] m-4">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              <X size={24} />
            </button>
            
            {/* Video Container */}
            <div className="w-full h-full bg-black rounded-2xl overflow-hidden">
              <video
                src={videoModal.videoUrl}
                controls
                autoPlay
                muted
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Business Case Modal */}
      {showBusinessCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-[var(--dark-bg)] border border-[var(--border-subtle)] rounded-xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowBusinessCase(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              <X size={20} />
            </button>
            
            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[90vh] p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[var(--accent-orange)] mb-2">Caso de Negocio - Anglo American</h2>
                <p className="text-lg text-[var(--text-secondary)]">Proyecto de Robots Industriales</p>
              </div>

              {/* Anglo American - Client Strength */}
              <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center">
                  <Building className="mr-2 text-blue-400" size={20} />
                  ¿Por qué Anglo American es un Cliente Estratégico?
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-[var(--text-secondary)]">Una de las 10 mineras más grandes del mundo</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-[var(--text-secondary)]">Ingresos anuales superiores a $34 mil millones USD</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-[var(--text-secondary)]">Operaciones en Chile, Sudáfrica, Perú y Brasil</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-[var(--text-secondary)]">Líder en innovación y tecnología minera</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-[var(--text-secondary)]">Compromiso con la digitalización</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-[var(--text-secondary)]">Solvencia financiera AAA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contract Details */}
              <div className="mb-8 p-6 bg-gradient-to-r from-[var(--accent-orange)]/10 to-[var(--accent-orange)]/5 rounded-xl border border-[var(--accent-orange)]/20">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center">
                  <FileText className="mr-2 text-[var(--accent-orange)]" size={20} />
                  Detalles del Contrato
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="text-[var(--accent-orange)] font-semibold">Duración:</p>
                    <p className="text-[var(--text-secondary)]">36 meses renovable</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[var(--accent-orange)] font-semibold">Escalabilidad:</p>
                    <p className="text-[var(--text-secondary)]">Alta probabilidad de extensión</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[var(--accent-orange)] font-semibold">Expansión:</p>
                    <p className="text-[var(--text-secondary)]">Más robots y frentes adicionales</p>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <p className="text-green-400 font-semibold text-sm">Oportunidad de Crecimiento:</p>
                  <p className="text-[var(--text-secondary)] text-sm">Anglo American está evaluando implementar esta tecnología en sus 8 operaciones en Chile, lo que podría multiplicar el valor del contrato por 4-6x.</p>
                </div>
              </div>

              {/* Investment Overview */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-gradient-to-br from-[var(--accent-orange)]/10 to-[var(--accent-orange)]/5 rounded-xl border border-[var(--accent-orange)]/20">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Inversión Requerida</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Inversión Total (36 meses):</span>
                      <span className="text-[var(--accent-orange)] font-bold">$427,600,000 CLP</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Período:</span>
                      <span className="text-[var(--text-primary)]">36 meses renovable</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Modalidad:</span>
                      <span className="text-[var(--text-primary)]">Financiamiento mensual</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl border border-green-500/20">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Indicadores Clave</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">ROI Anual:</span>
                      <span className="text-green-400 font-bold">133%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Margen de Utilidad:</span>
                      <span className="text-green-400 font-bold">57%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Recuperación:</span>
                      <span className="text-green-400 font-bold">9 meses</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Renovación:</span>
                      <span className="text-green-400 font-bold">Alta probabilidad</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investment Components */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Componentes de la Inversión</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="text-blue-400 font-bold">49%</div>
                    <div className="text-[var(--text-primary)] font-semibold text-sm">Robots</div>
                    <div className="text-[var(--text-secondary)] text-xs">2 robots industriales</div>
                    <div className="text-blue-400 text-xs">$260M CLP</div>
                  </div>
                  
                  <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <div className="text-purple-400 font-bold">39%</div>
                    <div className="text-[var(--text-primary)] font-semibold text-sm">Personal</div>
                    <div className="text-[var(--text-secondary)] text-xs">Recursos humanos</div>
                    <div className="text-purple-400 text-xs">$167M CLP</div>
                  </div>
                  
                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="text-green-400 font-bold">4%</div>
                    <div className="text-[var(--text-primary)] font-semibold text-sm">Software</div>
                    <div className="text-[var(--text-secondary)] text-xs">Licencias y tecnología</div>
                    <div className="text-green-400 text-xs">$18M CLP</div>
                  </div>
                  
                  <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                    <div className="text-orange-400 font-bold">8%</div>
                    <div className="text-[var(--text-primary)] font-semibold text-sm">Otros</div>
                    <div className="text-[var(--text-secondary)] text-xs">Movilización e insumos</div>
                    <div className="text-orange-400 text-xs">$34.6M CLP</div>
                  </div>
                </div>
              </div>

              {/* Financial Projection */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Proyección Financiera (36 meses)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border border-[var(--border-subtle)] rounded-lg overflow-hidden">
                    <thead className="bg-[var(--accent-orange)]/10">
                      <tr>
                        <th className="px-4 py-3 text-left text-[var(--text-primary)] font-semibold border-b border-[var(--border-subtle)]">Concepto</th>
                        <th className="px-4 py-3 text-right text-[var(--text-primary)] font-semibold border-b border-[var(--border-subtle)]">Mensual (CLP)</th>
                        <th className="px-4 py-3 text-right text-[var(--text-primary)] font-semibold border-b border-[var(--border-subtle)]">Anual (CLP)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[var(--border-subtle)]/30">
                        <td className="px-4 py-3 text-[var(--text-secondary)]">Costos Totales</td>
                        <td className="px-4 py-3 text-right text-red-400 font-mono">$35,550,000</td>
                        <td className="px-4 py-3 text-right text-red-400 font-mono">$426,600,000</td>
                      </tr>
                      <tr className="border-b border-[var(--border-subtle)]/30">
                        <td className="px-4 py-3 text-[var(--text-secondary)]">Ingresos Proyectados</td>
                        <td className="px-4 py-3 text-right text-[var(--accent-orange)] font-mono">$83,000,000</td>
                        <td className="px-4 py-3 text-right text-[var(--accent-orange)] font-mono">$996,000,000</td>
                      </tr>
                      <tr className="bg-green-500/10">
                        <td className="px-4 py-3 text-[var(--text-primary)] font-semibold">UTILIDAD NETA</td>
                        <td className="px-4 py-3 text-right text-green-400 font-bold font-mono">$47,450,000</td>
                        <td className="px-4 py-3 text-right text-green-400 font-bold font-mono">$568,400,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Utilidad Total 36 Meses - 1 Robot */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Utilidad Total Acumulada (36 meses) - 1 Robot</h3>
                <div className="bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-xl p-6 border border-green-500/30">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">$1,708M CLP</div>
                    <div className="text-[var(--text-secondary)]">Utilidad total en 36 meses con 1 robot</div>
                    <div className="text-sm text-green-300 mt-2">($47.45M mensual × 36 meses)</div>
                  </div>
                </div>
              </div>

              {/* Proyecciones de Escalamiento */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Proyecciones de Escalamiento desde Año 2</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {/* 2 Robots */}
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">2 Robots</div>
                      <div className="text-sm text-[var(--text-secondary)] mb-3">Desde mes 13</div>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-[var(--text-primary)]">Utilidad mensual:</span>
                          <div className="text-blue-400 font-bold">$94.9M CLP</div>
                        </div>
                        <div>
                          <span className="text-[var(--text-primary)]">Utilidad adicional 24 meses:</span>
                          <div className="text-blue-400 font-bold">$2,278M CLP</div>
                        </div>
                        <div className="border-t border-blue-500/20 pt-2">
                          <span className="text-[var(--text-primary)]">Total acumulado 3 años:</span>
                          <div className="text-green-400 font-bold">$2,846M CLP</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3 Robots */}
                  <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-2">3 Robots</div>
                      <div className="text-sm text-[var(--text-secondary)] mb-3">Desde mes 13</div>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-[var(--text-primary)]">Utilidad mensual:</span>
                          <div className="text-purple-400 font-bold">$142.35M CLP</div>
                        </div>
                        <div>
                          <span className="text-[var(--text-primary)]">Utilidad adicional 24 meses:</span>
                          <div className="text-purple-400 font-bold">$3,416M CLP</div>
                        </div>
                        <div className="border-t border-purple-500/20 pt-2">
                          <span className="text-[var(--text-primary)]">Total acumulado 3 años:</span>
                          <div className="text-green-400 font-bold">$3,985M CLP</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Utilidad 3 Años */}
                  <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-lg p-4 border border-orange-500/20">
                    <div className="text-center">
                      <div className="text-xl font-bold text-[var(--accent-orange)] mb-2">Utilidad 3 Años</div>
                      <div className="text-sm text-[var(--text-secondary)] mb-3">1 Robot completo</div>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-[var(--text-primary)]">Utilidad año 1:</span>
                          <div className="text-[var(--accent-orange)] font-bold">$568M CLP</div>
                        </div>
                        <div>
                          <span className="text-[var(--text-primary)]">Utilidad años 2-3:</span>
                          <div className="text-green-400 font-bold">$1,137M CLP</div>
                        </div>
                        <div className="border-t border-orange-500/20 pt-2">
                          <span className="text-[var(--text-primary)]">Total 3 años:</span>
                          <div className="text-yellow-400 font-bold text-lg">$1,705M CLP</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fortalezas */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Fortalezas del Proyecto</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-500/10 rounded-lg border border-green-500/20">
                    <CheckCircle className="text-green-400" size={16} />
                    <span className="text-[var(--text-primary)] text-sm">Cliente Tier 1 (Anglo American)</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-500/10 rounded-lg border border-green-500/20">
                    <CheckCircle className="text-green-400" size={16} />
                    <span className="text-[var(--text-primary)] text-sm">Contrato a 36 meses renovable</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-500/10 rounded-lg border border-green-500/20">
                    <CheckCircle className="text-green-400" size={16} />
                    <span className="text-[var(--text-primary)] text-sm">Alta probabilidad de expansión</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-500/10 rounded-lg border border-green-500/20">
                    <CheckCircle className="text-green-400" size={16} />
                    <span className="text-[var(--text-primary)] text-sm">ROI anual 133% - Margen 57%</span>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="text-center">
                <button
                  onClick={() => trackDownload('Anglo American - Robot Cintas Transportadoras', 'https://res.cloudinary.com/dhobnlg73/raw/upload/v1750791860/Anglo_Robots_BC_bvwykm.xlsx')}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-orange-bright)] text-white px-5 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm"
                >
                  <Download size={16} />
                  <span>Descargar Excel Completo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Luminarias Business Case Modal */}
      {showLuminariasBusinessCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-[var(--dark-bg)] border border-[var(--border-subtle)] rounded-xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowLuminariasBusinessCase(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              <X size={20} />
            </button>
            
            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[90vh] p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[var(--accent-orange)] mb-2">Caso de Negocio - BHP Spence</h2>
                <p className="text-lg text-[var(--text-secondary)]">Proyecto de Luminarias Inteligentes IoT</p>
              </div>

              {/* BHP - Client Strength */}
              <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center">
                  <Building className="mr-2 text-blue-400" size={20} />
                  ¿Por qué BHP es un Cliente Estratégico?
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-[var(--text-secondary)]">La minera más grande del mundo por capitalización</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-[var(--text-secondary)]">Ingresos anuales superiores a $65 mil millones USD</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-[var(--text-secondary)]">Operaciones en Chile, Australia y América</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-[var(--text-secondary)]">Líder mundial en sostenibilidad minera</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-[var(--text-secondary)]">Compromiso con digitalización e IoT</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-[var(--text-secondary)]">Solidez financiera AAA+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contract Details */}
              <div className="mb-8 p-6 bg-gradient-to-r from-[var(--accent-orange)]/10 to-[var(--accent-orange)]/5 rounded-xl border border-[var(--accent-orange)]/20">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center">
                  <FileText className="mr-2 text-[var(--accent-orange)]" size={20} />
                  Detalles del Contrato
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="text-[var(--accent-orange)] font-semibold">Duración:</p>
                    <p className="text-[var(--text-secondary)]">24-36 meses renovable</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[var(--accent-orange)] font-semibold">Escalabilidad:</p>
                    <p className="text-[var(--text-secondary)]">Alta demanda de expansión</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[var(--accent-orange)] font-semibold">Expansión:</p>
                    <p className="text-[var(--text-secondary)]">Más luminarias y plantas adicionales</p>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <p className="text-green-400 font-semibold text-sm">Oportunidad de Crecimiento:</p>
                  <p className="text-[var(--text-secondary)] text-sm">BHP tiene interés en implementar esta tecnología IoT en sus 14 operaciones globales, multiplicando el potencial por 10-15x.</p>
                </div>
              </div>

              {/* Investment Overview */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-gradient-to-br from-[var(--accent-orange)]/10 to-[var(--accent-orange)]/5 rounded-xl border border-[var(--accent-orange)]/20">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Inversión Requerida</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Inversión Total (24-36 meses):</span>
                      <span className="text-[var(--accent-orange)] font-bold">$65,120,000 CLP</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Período:</span>
                      <span className="text-[var(--text-primary)]">24-36 meses renovable</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Modalidad:</span>
                      <span className="text-[var(--text-primary)]">Financiamiento mensual</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl border border-green-500/20">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Indicadores Clave</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">ROI Anual:</span>
                      <span className="text-green-400 font-bold">600%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Margen de Utilidad:</span>
                      <span className="text-green-400 font-bold">85%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Recuperación:</span>
                      <span className="text-green-400 font-bold">≈ 2 meses</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Flujo de Caja:</span>
                      <span className="text-green-400 font-bold">Positivo desde mes 1</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investment Components */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">Componentes de la Inversión</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="text-blue-400 font-bold text-lg">46%</div>
                    <div className="text-[var(--text-primary)] font-semibold">Personal & Operación</div>
                    <div className="text-[var(--text-secondary)] text-sm">2,5 M/mes</div>
                    <div className="text-blue-400 text-sm">$30M CLP</div>
                  </div>
                  
                  <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <div className="text-purple-400 font-bold text-lg">42%</div>
                    <div className="text-[var(--text-primary)] font-semibold">Software & Licencias</div>
                    <div className="text-[var(--text-secondary)] text-sm">2,3 M/mes</div>
                    <div className="text-purple-400 text-sm">$27.6M CLP</div>
                  </div>
                  
                  <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="text-green-400 font-bold text-lg">6%</div>
                    <div className="text-[var(--text-primary)] font-semibold">Hardware IoT</div>
                    <div className="text-[var(--text-secondary)] text-sm">0,33 M/mes</div>
                    <div className="text-green-400 text-sm">$4M CLP</div>
                  </div>
                  
                  <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                    <div className="text-orange-400 font-bold text-lg">6%</div>
                    <div className="text-[var(--text-primary)] font-semibold">Logística & Registro</div>
                    <div className="text-[var(--text-secondary)] text-sm">Pago inicial</div>
                    <div className="text-orange-400 text-sm">$3.72M CLP</div>
                  </div>
                </div>
              </div>

              {/* Financial Projection */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">Proyección Financiera (12 meses)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border border-[var(--border-subtle)] rounded-lg overflow-hidden">
                    <thead className="bg-[var(--accent-orange)]/10">
                      <tr>
                        <th className="px-4 py-3 text-left text-[var(--text-primary)] font-semibold border-b border-[var(--border-subtle)]">Concepto</th>
                        <th className="px-4 py-3 text-right text-[var(--text-primary)] font-semibold border-b border-[var(--border-subtle)]">Mensual (CLP)</th>
                        <th className="px-4 py-3 text-right text-[var(--text-primary)] font-semibold border-b border-[var(--border-subtle)]">Anual (CLP)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[var(--border-subtle)]/30">
                        <td className="px-4 py-3 text-[var(--text-secondary)]">Costos Totales</td>
                        <td className="px-4 py-3 text-right text-red-400 font-mono">$5,426,667</td>
                        <td className="px-4 py-3 text-right text-red-400 font-mono">$65,120,000</td>
                      </tr>
                      <tr className="border-b border-[var(--border-subtle)]/30">
                        <td className="px-4 py-3 text-[var(--text-secondary)]">Ingresos Proyectados</td>
                        <td className="px-4 py-3 text-right text-[var(--accent-orange)] font-mono">$38,000,000</td>
                        <td className="px-4 py-3 text-right text-[var(--accent-orange)] font-mono">$456,000,000</td>
                      </tr>
                      <tr className="bg-green-500/10">
                        <td className="px-4 py-3 text-[var(--text-primary)] font-semibold">UTILIDAD NETA</td>
                        <td className="px-4 py-3 text-right text-green-400 font-bold font-mono">$32,526,667</td>
                        <td className="px-4 py-3 text-right text-green-400 font-bold font-mono">$390,700,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Strengths */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">Fortalezas del Proyecto</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <CheckCircle className="text-green-400" size={20} />
                    <span className="text-[var(--text-primary)]">Cliente corporativo sólido (BHP)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <CheckCircle className="text-green-400" size={20} />
                    <span className="text-[var(--text-primary)]">Flujo de caja positivo inmediato</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <CheckCircle className="text-green-400" size={20} />
                    <span className="text-[var(--text-primary)]">ROI ≈ 600%</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <CheckCircle className="text-green-400" size={20} />
                    <span className="text-[var(--text-primary)]">Pay-back ≈ 2 meses</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <CheckCircle className="text-green-400" size={20} />
                    <span className="text-[var(--text-primary)]">Interés Codelco & AMSA</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <CheckCircle className="text-green-400" size={20} />
                    <span className="text-[var(--text-primary)]">Escalable a contratos globales</span>
                  </div>
                </div>
              </div>

              {/* Recommendation */}
              <div className="mb-8 p-6 bg-gradient-to-r from-[var(--accent-orange)]/20 to-[var(--accent-orange-bright)]/20 rounded-xl border border-[var(--accent-orange)]/30">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Recomendación</h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  Este proyecto presenta una oportunidad de inversión altamente atractiva con:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)] mb-4">
                  <li>Rentabilidad anual superior al 180%</li>
                  <li>Flujo de caja estable y predecible</li>
                  <li>Tecnología con fuerte potencial de escalabilidad</li>
                  <li>Cliente de clase mundial</li>
                </ul>
                <p className="text-[var(--text-primary)] font-semibold">
                  Viabilidad técnica y financiera asegurada con alto potencial de crecimiento.
                </p>
              </div>

              {/* Download Button */}
              <div className="text-center">
                <button
                  onClick={() => trackDownload('BHP Spence - Sistema de Luminarias IoT', 'https://res.cloudinary.com/dhobnlg73/raw/upload/v1750811537/BHP_SPENCE_LUMINARIAS_athssy.xlsx')}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-orange-bright)] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <Download size={20} />
                  <span>Descargar Excel Completo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Warehouse PoC Business Case Modal */}
      {showWarehousePoCBusinessCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-[var(--dark-bg)] border border-[var(--border-subtle)] rounded-xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowWarehousePoCBusinessCase(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              <X size={20} />
            </button>
            
            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[90vh] p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[var(--accent-orange)] mb-2">Caso de Negocio - BHP Spence</h2>
                <p className="text-lg text-[var(--text-secondary)]">Proyecto Warehouse - Digitalización de Bodegas</p>
              </div>

              {/* BHP - Client Strength */}
              <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center">
                  <Building className="mr-2 text-blue-400" size={20} />
                  ¿Por qué BHP es un Cliente Estratégico?
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-[var(--text-secondary)]">La minera más grande del mundo por capitalización</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-[var(--text-secondary)]">Ingresos anuales superiores a $65 mil millones USD</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-[var(--text-secondary)]">Operaciones en Chile, Australia y América</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-[var(--text-secondary)]">Líder mundial en digitalización industrial</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-[var(--text-secondary)]">Compromiso con trazabilidad y automatización</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-[var(--text-secondary)]">Solidez financiera AAA+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contract Details */}
              <div className="mb-8 p-6 bg-gradient-to-r from-[var(--accent-orange)]/10 to-[var(--accent-orange)]/5 rounded-xl border border-[var(--accent-orange)]/20">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center">
                  <FileText className="mr-2 text-[var(--accent-orange)]" size={20} />
                  Detalles del Contrato
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="text-[var(--accent-orange)] font-semibold">Duración:</p>
                    <p className="text-[var(--text-secondary)]">12 meses renovable</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[var(--accent-orange)] font-semibold">Escalabilidad:</p>
                    <p className="text-[var(--text-secondary)]">Estructura tecnológica escalable</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[var(--accent-orange)] font-semibold">Expansión:</p>
                    <p className="text-[var(--text-secondary)]">Múltiples bodegas y operaciones</p>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <p className="text-green-400 font-semibold text-sm">Oportunidad de Crecimiento:</p>
                  <p className="text-[var(--text-secondary)] text-sm">Desarrollo a medida con potencial de implementación en todas las bodegas de BHP globalmente, expandiendo la solución de trazabilidad.</p>
                </div>
              </div>

              {/* Investment Overview */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-gradient-to-br from-[var(--accent-orange)]/10 to-[var(--accent-orange)]/5 rounded-xl border border-[var(--accent-orange)]/20">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Inversión Requerida</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Inversión Total (12 meses):</span>
                      <span className="text-[var(--accent-orange)] font-bold">$212,202,000 CLP</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Período:</span>
                      <span className="text-[var(--text-primary)]">12 meses renovable</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Modalidad:</span>
                      <span className="text-[var(--text-primary)]">Financiamiento mensual</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl border border-green-500/20">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Indicadores Clave</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">ROI Anual:</span>
                      <span className="text-green-400 font-bold">354%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Margen de Utilidad:</span>
                      <span className="text-green-400 font-bold">76%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Recuperación:</span>
                      <span className="text-green-400 font-bold">3.4 meses</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Flujo de Caja:</span>
                      <span className="text-green-400 font-bold">Positivo desde mes 1</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investment Components */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">Componentes de la Inversión</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <div className="text-purple-400 font-bold text-lg">82%</div>
                    <div className="text-[var(--text-primary)] font-semibold">Desarrollo Tecnológico</div>
                    <div className="text-[var(--text-secondary)] text-sm">Software operativo completo</div>
                    <div className="text-purple-400 text-sm">$96M CLP</div>
                    <div className="text-xs text-[var(--text-secondary)] mt-1">$8M mensuales</div>
                  </div>
                  
                  <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="text-blue-400 font-bold text-lg">18%</div>
                    <div className="text-[var(--text-primary)] font-semibold">Hardware & Equipamiento</div>
                    <div className="text-[var(--text-secondary)] text-sm">Cámaras, tablets, UPS, switches, etc.</div>
                    <div className="text-blue-400 text-sm">$20.75M CLP</div>
                    <div className="text-xs text-[var(--text-secondary)] mt-1">Pago único inicial</div>
                  </div>
                </div>
              </div>

              {/* Financial Projection */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">Proyección Financiera (12 meses)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border border-[var(--border-subtle)] rounded-lg overflow-hidden">
                    <thead className="bg-[var(--accent-orange)]/10">
                      <tr>
                        <th className="px-4 py-3 text-left text-[var(--text-primary)] font-semibold border-b border-[var(--border-subtle)]">Concepto</th>
                        <th className="px-4 py-3 text-right text-[var(--text-primary)] font-semibold border-b border-[var(--border-subtle)]">Mensual (CLP)</th>
                        <th className="px-4 py-3 text-right text-[var(--text-primary)] font-semibold border-b border-[var(--border-subtle)]">Anual (CLP)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[var(--border-subtle)]/30">
                        <td className="px-4 py-3 text-[var(--text-secondary)]">Costos Totales</td>
                        <td className="px-4 py-3 text-right text-red-400 font-mono">$17,683,500</td>
                        <td className="px-4 py-3 text-right text-red-400 font-mono">$212,202,000</td>
                      </tr>
                      <tr className="border-b border-[var(--border-subtle)]/30">
                        <td className="px-4 py-3 text-[var(--text-secondary)]">Ingresos Proyectados</td>
                        <td className="px-4 py-3 text-right text-[var(--accent-orange)] font-mono">$75,000,000</td>
                        <td className="px-4 py-3 text-right text-[var(--accent-orange)] font-mono">$900,000,000</td>
                      </tr>
                      <tr className="bg-green-500/10">
                        <td className="px-4 py-3 text-[var(--text-primary)] font-semibold">UTILIDAD NETA</td>
                        <td className="px-4 py-3 text-right text-green-400 font-bold font-mono">$57,316,500</td>
                        <td className="px-4 py-3 text-right text-green-400 font-bold font-mono">$687,798,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Strengths */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">Fortalezas del Proyecto</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <CheckCircle className="text-green-400" size={20} />
                    <span className="text-[var(--text-primary)]">Cliente corporativo sólido (BHP)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <CheckCircle className="text-green-400" size={20} />
                    <span className="text-[var(--text-primary)]">Flujo de caja positivo inmediato</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <CheckCircle className="text-green-400" size={20} />
                    <span className="text-[var(--text-primary)]">Estructura tecnológica escalable</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <CheckCircle className="text-green-400" size={20} />
                    <span className="text-[var(--text-primary)]">Proyecto con bajo riesgo operativo</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <CheckCircle className="text-green-400" size={20} />
                    <span className="text-[var(--text-primary)]">Trazabilidad y eficiencia logística</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <CheckCircle className="text-green-400" size={20} />
                    <span className="text-[var(--text-primary)]">Desarrollo a medida con alto valor</span>
                  </div>
                </div>
              </div>

              {/* Recommendation */}
              <div className="mb-8 p-6 bg-gradient-to-r from-[var(--accent-orange)]/20 to-[var(--accent-orange-bright)]/20 rounded-xl border border-[var(--accent-orange)]/30">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Recomendación</h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  Este proyecto ofrece una solución tecnológica sólida y rentable con:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)] mb-4">
                  <li>Flujo de caja predecible y estable</li>
                  <li>Desarrollo a medida con alto valor agregado</li>
                  <li>Perfectamente alineado con automatización industrial</li>
                  <li>Retorno controlado recuperable en menos de un año</li>
                </ul>
                <p className="text-[var(--text-primary)] font-semibold">
                  Proyecto respaldado por cliente estratégico con necesidades reales en terreno.
                </p>
              </div>

              {/* Download Button */}
              <div className="text-center">
                <button
                  onClick={() => trackDownload('BHP Spence - Smart Warehouse System PoC', 'https://res.cloudinary.com/dhobnlg73/raw/upload/v1750811537/BHP_SPENCE_BC_WAREHOUSE_ravpge.xlsx')}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-orange-bright)] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <Download size={20} />
                  <span>Descargar Excel Completo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}