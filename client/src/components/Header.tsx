import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import aironLogo from "@assets/IRON TECH (100 x 100 px) (5 x 5 cm) (200 x 50 cm) (100 x 50 cm) (9)_1750211110012.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("introduccion");

  const navigationItems = [
    { id: "introduccion", label: "Inicio" },
    { id: "ventajas", label: "Ventajas" },
    { id: "pruebas-concepto", label: "Negocios" },
    { id: "soluciones", label: "Soluciones" },
    { id: "ia-solutions", label: "IA Avanzada" },
    { id: "clientes", label: "Clientes" },
    { id: "seguridad", label: "Seguridad" },
    { id: "finanzas", label: "Finanzas" },
    { id: "inversion", label: "Inversión" },
    { id: "contacto", label: "Contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to:', sectionId); // Debug
    const element = document.getElementById(sectionId);
    console.log('Element found:', element); // Debug
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-[var(--border-subtle)]"
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center cursor-pointer mr-8"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img 
              src={aironLogo} 
              alt="AIrontech Logo" 
              className="h-20 w-auto object-contain"
              loading="eager"
              decoding="sync"
            />
          </motion.div>
          
          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-base font-medium transition-colors duration-200 relative px-4 py-2 ${
                  activeSection === item.id 
                    ? "text-[var(--accent-orange)]" 
                    : "text-[var(--text-primary)] hover:text-[var(--accent-orange)]"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent-orange)]"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-[var(--text-primary)] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
        
        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden"
        >
          <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] space-y-3 pb-4">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left text-sm font-medium transition-colors duration-200 py-2 ${
                  activeSection === item.id 
                    ? "text-[var(--accent-orange)]" 
                    : "text-[var(--text-primary)] hover:text-[var(--accent-orange)]"
                }`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
