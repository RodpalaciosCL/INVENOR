import { motion } from "framer-motion";
import { User, Mail, Phone, Linkedin, MessageCircle, Building2, Globe, ArrowUp } from "lucide-react";
import benjaminPhoto from "@assets/1532021851122_1750253881224.jpeg";

export default function SlideEquipoContacto() {
  const teamMembers = [
    {
      name: "Rodrigo Palacios",
      position: "CTO & Co-Founder",
      bio: "Ejecutivo con amplia experiencia en consultoría, desarrollo de soluciones de negocio y estrategia empresarial para un alto porcentaje de empresas del fortune 500, trabajando y liderando equipos en las big four y big tech más importantes del mundo. Con más de 20 años de experiencia y un extenso track récord, Rodrigo es una pieza fundamental para traccionar las tecnologías y soluciones que la industria necesita.",
      expertise: [],
      photo: "https://obtienearchivo.bcn.cl/obtieneimagen?id=documentos/10221.1/79448/rodrigo-palacios-pwc-robotica-G.jpg",
      linkedin: "https://www.linkedin.com/in/rodpalacios/"
    },
    {
      name: "Benjamín Ramírez",
      position: "CCO & Co-Founder",
      bio: "Más de 20 años desarrollando negocios en las industrias más relevantes del globo. Benjamín cuenta con varios exit relevantes y con una carrera internacional donde las alianzas, exigencias y resultados obtenidos han sido clave para incluso estandarizar el cómo la industria funciona desde el lado del negocio y la rapidez y relevancia que se necesita.",
      expertise: [],
      photo: benjaminPhoto,
      linkedin: "https://www.linkedin.com/in/benjaminramirezc/"
    }
  ];

  const handleContactClick = () => {
    const subject = encodeURIComponent("Interés en Invertir en Airontech");
    const body = encodeURIComponent(`Estimado equipo Airontech,

He revisado el pitch deck de Airontech y estoy interesado en conocer más sobre la oportunidad de inversión.

Me gustaría agendar una reunión para discutir los detalles.

Saludos cordiales,`);
    
    window.location.href = `mailto:contacto@airontech.com?subject=${subject}&body=${body}`;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      id="contacto" 
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
            Equipo Ejecutivo y Contacto
          </motion.h2>
          <motion.p 
            className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Liderazgo experto con experiencia comprobada en transformación digital minera
          </motion.p>
        </div>

        {/* Team Members */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white/5 backdrop-blur-sm border border-[var(--border-subtle)] rounded-xl p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-6">
                {/* Profile Picture */}
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-[var(--accent-orange)] relative">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.fallback-avatar') as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="fallback-avatar absolute inset-0 w-full h-full bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-orange-bright)] rounded-full flex items-center justify-center" style={{display: 'none'}}>
                    <User className="text-white" size={32} />
                  </div>
                </div>

                <div className="flex-1">
                  {/* Name and Position */}
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1 font-montserrat">
                    {member.name}
                  </h3>
                  <p className="text-lg text-[var(--accent-orange)] font-medium mb-3">
                    {member.position}
                  </p>

                  {/* Expertise Tags - Only show if expertise array has items */}
                  {member.expertise.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {member.expertise.map((skill: string, skillIndex: number) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-[var(--accent-orange)]/10 border border-[var(--accent-orange)]/20 rounded-full text-xs font-medium text-[var(--accent-orange)] text-center"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bio */}
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* LinkedIn Button */}
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#0077B5] text-white px-4 py-2 rounded-lg hover:bg-[#005885] transition-all duration-300 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          className="bg-gradient-to-r from-[var(--accent-orange)]/10 to-[var(--accent-orange-bright)]/10 rounded-2xl p-8 border border-[var(--accent-orange)]/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Message */}
            <div>
              <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-6 font-montserrat">
                Conversemos sobre tu inversión
              </h3>
              <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                Equipo fundador con experiencia comprobada en minería, tecnología y desarrollo comercial. 
                Red consolidada de contactos C-Level y track record de ejecución en proyectos críticos.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--accent-orange)] rounded-full"></div>
                  <span className="text-[var(--text-secondary)]">Due diligence completo y transparent</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--accent-orange)] rounded-full"></div>
                  <span className="text-[var(--text-secondary)]">Proyecciones financieras detalladas y validadas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--accent-orange)] rounded-full"></div>
                  <span className="text-[var(--text-secondary)]">Plan de crecimiento y escalabilidad</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/5 rounded-xl p-8 border border-[var(--border-subtle)]">
              <h4 className="text-xl font-bold text-[var(--text-primary)] mb-6 text-center">
                Información de Contacto
              </h4>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[var(--accent-orange)]/20 rounded-lg flex items-center justify-center">
                    <Building2 className="text-[var(--accent-orange)]" size={24} />
                  </div>
                  <div>
                    <div className="text-[var(--text-primary)] font-semibold">Airontech</div>
                    <div className="text-[var(--text-secondary)] text-sm">Tecnología Minera Avanzada</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[var(--accent-orange)]/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-[var(--accent-orange)]" size={24} />
                  </div>
                  <div>
                    <div className="text-[var(--text-primary)] font-medium">contacto@airontech.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[var(--accent-orange)]/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-[var(--accent-orange)]" size={24} />
                  </div>
                  <div>
                    <div className="text-[var(--text-primary)] font-medium">+56 2 2123 4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[var(--accent-orange)]/20 rounded-lg flex items-center justify-center">
                    <Globe className="text-[var(--accent-orange)]" size={24} />
                  </div>
                  <div>
                    <div className="text-[var(--text-primary)] font-medium">www.airontech.com</div>
                    <div className="text-[var(--text-secondary)] text-sm">Luis Carrera 1263, Vitacura</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-8">
                <motion.button
                  onClick={handleContactClick}
                  className="w-full bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-orange-bright)] text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(255, 119, 48, 0.25)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle size={20} />
                  <span>Iniciar Conversación</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Value Proposition */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-xl italic text-[var(--text-secondary)] max-w-4xl mx-auto border-l-4 border-[var(--accent-orange)] pl-6">
            "Buscamos socios estratégicos que compartan nuestra visión de transformar la minería 
            hacia un futuro más seguro, eficiente y rentable. Juntos podemos escalar globalmente."
          </blockquote>
          <div className="mt-4 text-[var(--accent-orange)] font-medium">
            — Equipo Fundador Airontech
          </div>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center bg-white/5 rounded-lg p-6">
            <div className="text-2xl font-bold text-[var(--accent-orange)] mb-2">20+</div>
            <div className="text-sm text-[var(--text-secondary)]">Más de 20 años de experiencia</div>
          </div>
          <div className="text-center bg-white/5 rounded-lg p-6">
            <div className="text-2xl font-bold text-[var(--accent-orange)] mb-2">C-Level</div>
            <div className="text-sm text-[var(--text-secondary)]">Red de contactos mineros</div>
          </div>
          <div className="text-center bg-white/5 rounded-lg p-6">
            <div className="text-2xl font-bold text-[var(--accent-orange)] mb-2">Big 4</div>
            <div className="text-sm text-[var(--text-secondary)]">Background consultoría</div>
          </div>
          <div className="text-center bg-white/5 rounded-lg p-6">
            <div className="text-2xl font-bold text-[var(--accent-orange)] mb-2">IA+IoT</div>
            <div className="text-sm text-[var(--text-secondary)]">Expertise tecnológico</div>
          </div>
        </motion.div>



        {/* Back to Top Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-orange-bright)] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              y: -2,
              boxShadow: "0 15px 30px -10px rgba(255, 119, 48, 0.3)"
            }}
            whileTap={{ scale: 0.95, y: 0 }}
          >
            <ArrowUp size={20} />
            <span>Volver al Inicio</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}