import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, Download } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleDownloadPDF = () => {
    // Create a simple PDF content summary
    const pdfContent = `
AIRONTECH - PITCH PARA INVERSIONISTAS

SOLUCIONES READY-TO-SELL:
• HotelCommander - Gestión hotelera campamentos
• SafeApp - Plataforma seguridad minera  
• WAIhouse - Automatización bodegas con IA
• Mining360 - Plataforma unificada gestión

CLIENTES ACTUALES:
• BHP Spence • Anglo American • Antofagasta Minerals

PROYECCIÓN FINANCIERA:
• Ventas totales: $3,300M CLP
• Profit proyectado: $5,900M CLP
• Márgenes: 52-77.5%

INVERSIÓN SOLICITADA: $300M CLP

CONTACTO: rodrigo.palacios@airontech.com
    `;
    
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Airontech-Pitch-Deck-Resumen.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/airontech",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:info@airontech.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+56987654321",
      label: "Teléfono"
    },
    {
      icon: Download,
      href: "#",
      label: "Descargar Resumen",
      onClick: handleDownloadPDF
    }
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[var(--dark-bg)] border-t border-[var(--border-subtle)] py-8"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-[var(--text-secondary)] text-sm">
              Airontech © <span className="font-medium">{currentYear}</span>. Todos los derechos reservados.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-6"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href === "#" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--accent-orange)] transition-colors duration-200"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                aria-label={link.label}
                onClick={link.onClick || undefined}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
