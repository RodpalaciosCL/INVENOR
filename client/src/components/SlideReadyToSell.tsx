import { motion } from "framer-motion";
import { Building2, Shield, Camera, BarChart3, Monitor, Droplets, Lightbulb, Zap, Settings, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function SlideReadyToSell() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  
  const products = [
    {
      icon: Building2,
      name: "HotelCommander",
      tagline: "Gestión hotelera integral de campamentos mineros",
      description: "Check-in digital, control de contratistas y dashboards de ocupación en tiempo real",
      category: "Gestión Operativa",
      mockupType: "dashboard"
    },
    {
      icon: Shield,
      name: "SafeApp",
      tagline: "Plataforma digital de seguridad minera",
      description: "Checklist digital, registro de incidentes y control automático de EPP",
      category: "Seguridad Minera",
      mockupType: "mobile"
    },
    {
      icon: Camera,
      name: "WAIhouse",
      tagline: "Automatización de bodegas con IA",
      description: "Inventarios automáticos por visión computacional e integración ERP",
      category: "Automatización IA",
      mockupType: "warehouse"
    },
    {
      icon: BarChart3,
      name: "Mining360",
      tagline: "Dashboard centralizado de KPIs mineros",
      description: "Control en tiempo real de procesos operativos e insights basados en Big Data",
      category: "Business Intelligence",
      mockupType: "analytics"
    },
    {
      icon: Droplets,
      name: "Control Hídrico de Faena",
      tagline: "Sistema Inteligente para control de flujo y consumo",
      description: "Monitoreo y gestión automatizada del recurso hídrico con optimización predictiva",
      category: "Resource Management",
      mockupType: "water",
      metrics: { savings: "30%", roi: "ROI" },
      images: [
        "https://res.cloudinary.com/dhobnlg73/image/upload/v1750693432/Captura_de_pantalla_2025-06-23_a_la_s_11.42.11_rw4lpf.png",
        "https://res.cloudinary.com/dhobnlg73/image/upload/v1750693432/Captura_de_pantalla_2025-06-23_a_la_s_11.42.21_vvpzft.png"
      ],
      clickable: true
    },
    {
      icon: Lightbulb,
      name: "Mining Lights",
      tagline: "Sistema inteligente de control eficiente energético",
      description: "Sistema automatizado de gestión lumínica con mantenimiento predictivo y eficiencia energética",
      category: "Smart Infrastructure",
      mockupType: "lighting",
      images: [
        "https://res.cloudinary.com/dhobnlg73/image/upload/v1750694512/Captura_de_pantalla_2025-06-23_a_la_s_12.01.42_dof0qh.png"
      ],
      clickable: true
    },
    {
      icon: Droplets,
      name: "Secure & Secure",
      tagline: "Acceso seguro",
      description: "Control visitas e internos. Prevención acoso",
      category: "Security Systems",
      mockupType: "hydro",
      images: [
        "https://res.cloudinary.com/dhobnlg73/image/upload/v1750693911/Captura_de_pantalla_2025-06-23_a_la_s_11.51.34_c8xmcy.png"
      ],
      clickable: true
    },
    {
      icon: Shield,
      name: "Accesspress",
      tagline: "Control inteligente de acceso seguro",
      description: "Sistema integral de control de accesos y gestión de personal con identificación biométrica",
      category: "Security Systems",
      mockupType: "access",
      images: [
        "https://res.cloudinary.com/dhobnlg73/image/upload/v1750694512/Captura_de_pantalla_2025-06-23_a_la_s_12.01.42_dof0qh.png"
      ],
      clickable: true
    }
  ];

  return (
    <section 
      id="soluciones" 
      className="py-16 bg-[var(--dark-bg)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-[var(--accent-orange)] font-montserrat"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Portafolio de Soluciones Ready-to-Sell
          </motion.h2>
          <motion.p 
            className="text-xl text-[var(--text-secondary)] max-w-4xl mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Productos desarrollados, validados y listos para escalar en la industria minera
          </motion.p>
          <motion.div
            className="inline-flex items-center space-x-2 text-[var(--accent-orange)] font-medium mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Monitor size={20} />
            <span>Tecnología en producción</span>
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

        {/* Products Showcase Grid - Solo visible cuando showDetails es true */}
        {showDetails && (
          <motion.div 
            className="grid md:grid-cols-2 gap-12 mb-16"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.1 * index, 
                duration: 0.6,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              {/* Laptop Mockup Container */}
              <div className="relative">
                <motion.div
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl p-3 shadow-2xl"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Laptop Top Bar */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1 bg-gray-700 rounded-full h-6 flex items-center px-4">
                      <span className="text-gray-400 text-xs font-mono">
                        {(() => {
                          switch(product.name) {
                            case "Mining Lights":
                              return "mininglights.airontech.com";
                            case "Secure & Secure":
                              return "secure.airontech.com";
                            case "Accesspress":
                              return "accesspress.airontech.com";
                            default:
                              return `${product.name.toLowerCase()}.airontech.com`;
                          }
                        })()}
                      </span>
                    </div>
                  </div>

                  {/* Screen Content */}
                  <div 
                    className={`bg-white rounded-lg aspect-video relative overflow-hidden ${product.clickable ? 'cursor-pointer hover:scale-105 transition-transform duration-300' : ''}`}
                    onClick={() => {
                      if (product.clickable && product.images && product.images.length > 0) {
                        setSelectedImage(product.images[0]);
                      }
                    }}
                  >
                    {/* Real Product Images */}
                    {(() => {
                      // Handle new products with multiple images
                      if (product.images && product.images.length > 0) {
                        if (product.images.length > 1) {
                          // Auto-rotating slideshow for multiple images
                          return (
                            <div className="h-full w-full relative">
                              {product.images.map((imageUrl, imgIndex) => (
                                <motion.img
                                  key={imgIndex}
                                  src={imageUrl}
                                  alt={`${product.name} - Vista ${imgIndex + 1}`}
                                  className="w-full h-full object-cover rounded-lg absolute inset-0"
                                  initial={{ opacity: imgIndex === 0 ? 1 : 0 }}
                                  animate={{ 
                                    opacity: [
                                      imgIndex === 0 ? 1 : 0,
                                      imgIndex === 0 ? 1 : 0,
                                      imgIndex === 0 ? 0 : 1,
                                      imgIndex === 0 ? 0 : 1
                                    ]
                                  }}
                                  transition={{ 
                                    duration: 4, 
                                    repeat: Infinity, 
                                    repeatType: "loop",
                                    times: [0, 0.45, 0.55, 1]
                                  }}
                                />
                              ))}
                            </div>
                          );
                        } else {
                          // Single image
                          return (
                            <img 
                              src={product.images[0]}
                              alt={`${product.name} - ${product.tagline}`}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          );
                        }
                      }

                      // Original products logic
                      let imageUrl = "";
                      switch(product.name) {
                        case "HotelCommander":
                          imageUrl = "https://res.cloudinary.com/dhobnlg73/image/upload/v1750620086/reservations_calendar_highquality_mdxwqp.webp";
                          break;
                        case "SafeApp":
                          imageUrl = "https://res.cloudinary.com/dhobnlg73/image/upload/v1750620085/banner-blog-10-1024x576_g3buzv.jpg";
                          break;
                        case "WAIhouse":
                          imageUrl = "https://res.cloudinary.com/dhobnlg73/image/upload/v1750620085/668c1c12e8a58030d5568f21_642d7a5f4d77d19c2f6fa8c2_xzGehktapAgabSW56yhCmigLzY3uCWACMrR6p4lkLfw_owddtl.jpg";
                          break;
                        case "Mining360":
                          imageUrl = "https://res.cloudinary.com/dhobnlg73/image/upload/v1750620085/Underground_Tracking_pg6jlu.webp";
                          break;
                        default:
                          imageUrl = "";
                      }
                      
                      return (
                        <div className="h-full w-full relative">
                          {imageUrl && (
                            <img 
                              src={imageUrl}
                              alt={`${product.name} - ${product.tagline}`}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          )}
                          
                          {/* Fallback if no image */}
                          {!imageUrl && (
                            <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                              <product.icon size={48} className="text-gray-400" />
                            </div>
                          )}
                        </div>
                      );
                    })()}

                    {/* Product Header Overlay */}
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-3 z-10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-[var(--accent-orange)] rounded-lg flex items-center justify-center">
                            <product.icon className="text-white" size={12} />
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-xs">{product.name}</h4>
                            <p className="text-xs text-gray-200 text-[10px]">{product.category}</p>
                          </div>
                        </div>
                        <div className="text-xs text-gray-300">v2.1.0</div>
                      </div>
                    </div>

                    {/* Click indicator for new products */}
                    {product.clickable && (
                      <div className="absolute bottom-2 right-2 bg-[var(--accent-orange)] text-white text-xs px-2 py-1 rounded-full z-10">
                        Click para ampliar
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Laptop Base */}
                <div className="bg-gradient-to-b from-gray-700 to-gray-800 h-4 rounded-b-2xl shadow-lg relative">
                  <div className="absolute left-1/2 top-1 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                </div>
              </div>

              {/* Product Information */}
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 font-montserrat">
                  {product.name}
                </h3>
                <p className="text-[var(--accent-orange)] font-medium mb-3 text-base">
                  {product.tagline}
                </p>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4 max-w-sm mx-auto text-sm">
                  {product.description}
                </p>
                
                {/* Custom Metrics for new products */}
                {product.metrics && (
                  <div className="flex justify-center space-x-4 mb-3">
                    {Object.entries(product.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-[var(--accent-orange)] font-mono">
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 capitalize">
                          {key === 'savings' ? 'Ahorro' : key === 'roi' ? 'ROI' : key}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Status Badge */}
                <div className="inline-flex items-center space-x-2 bg-[var(--accent-orange)]/10 border border-[var(--accent-orange)]/20 rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-[var(--accent-orange)] rounded-full animate-pulse"></div>
                  <span className="text-[var(--accent-orange)] font-medium text-xs">Ready to Sell</span>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Bottom Summary Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-[var(--text-secondary)] mb-6">
              Soluciones altamente demandadas por el mercado
            </p>
            <motion.div
              className="inline-flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-orange-bright)] rounded-full border-2 border-[var(--dark-bg)] flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-xs">✓</span>
                  </div>
                ))}
              </div>
              <span className="text-[var(--text-primary)] font-medium">
                Más de 10 clientes mineros validados en necesidades críticas
              </span>
            </motion.div>
          </motion.div>
          </motion.div>
        )}
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 z-20 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-colors duration-200 shadow-lg"
            >
              <X size={20} />
            </button>
            
            {/* Full Size Image */}
            <img 
              src={selectedImage}
              alt="Vista detallada"
              className="w-full h-full object-contain"
            />
            
            {/* Image Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-center">
                Click fuera de la imagen para cerrar
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}