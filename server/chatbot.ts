import OpenAI from "openai";

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY 
});

// Knowledge base with all Airontech information
const AIRONTECH_KNOWLEDGE = `
AIRONTECH - Tecnología Minera Avanzada

## INFORMACIÓN GENERAL
- Empresa chilena de desarrollo tecnológico especializada en minería
- Software Factory y consultoría senior para proyectos estratégicos
- Equipo fundador con +20 años de experiencia en minería y tecnología
- Background en Big 4 consulting y expertise en IA + IoT

## CASOS DE NEGOCIO VALIDADOS Y OPERATIVOS

### CASO 1: AngloAmerican - Robots Inspección Cinta Transportadora
**Cliente**: AngloAmerican (minera multinacional, top 5 mundial)
**Proyecto**: Robots autónomos de inspección de cintas transportadoras en faenas mineras, para optimizar mantenimiento predictivo, control de fallas, evitar accidentes y mejorar seguridad operativa
**Tecnología**:
- Robots autónomos semiautónomos sobre riel
- Sensores multiespectrales para análisis de cortes, desgaste, fisuras
- Cámara HD + visión IA para detección de anomalías
- Integración con SCADA/PLC de la faena vía MQTT o protocolo OPC UA
- Capacidad de reporte en línea y generación de alertas
**Funcionalidades**:
- Recorridos programados y adaptativos
- Reconocimiento de roturas de empalmes
- Control de alineación de la cinta
- Reporte de vibraciones y ruidos anómalos
- Fotos y videos con timestamp y ubicación exacta
**Beneficios operacionales**:
- Reducción paradas no programadas >35%
- Aumento disponibilidad operativa >90%
- Mayor seguridad (menos ingreso humano en zonas peligrosas)
- Registro auditable y trazable para inspecciones regulatorias
**Alcance**:
- Inicialmente PoC validada
- Potencial de escalar a 4 robots
- Ticket mensual estimado por robot: USD $84,000/mes
- Contrato proyectado a 36 meses (renovable)
**Proyección total si se escala a 4 robots**:
- USD $336,000 mensuales
- USD $4 millones anuales aproximadamente

### CASO 2: BHP Spence - Warehouse AI (Bodegas Inteligentes)
**Cliente**: BHP Spence (filial de BHP, mayor minera por capitalización mundial)
**Proyecto**: Warehouse AI, solución de visión computacional e inteligencia artificial para automatizar gestión de bodegas de insumos críticos (EPP, repuestos, piezas de mantenimiento, etc.)
**Tecnología**:
- Cámaras IA con visión computacional
- Modelos de reconocimiento de stock con redes neuronales
- Integración con ERP (SAP, Oracle, Infor) vía APIs
- Sistema de inventario en tiempo real
- Gateways IoT para lectura de tags RFID o códigos QR
- Dashboard con KPIs de inventario, lead time, rotación
**Funcionalidades**:
- Recepción automatizada
- Validación contra pedidos y facturas
- Control de entradas y salidas
- Alertas de stock bajo
- Auditoría automática de picking
**Beneficios operacionales**:
- Ahorro de 25–30% en costos de inventario
- Reducción pérdidas de productos
- Trazabilidad total
- Cumplimiento normativo (seguridad minera, ISO)
**Alcance**:
- PoC validada en una bodega
- Posibilidad de expandir a 2 bodegas
- Ticket mensual estimado por bodega: USD $65,000/mes
- Contrato proyectado a 36 meses (renovable)
**Proyección total si se expanden a 2 bodegas**:
- USD $130,000 mensuales
- USD $1,5 millones anuales

### CASO 3: BHP Spence - Luminarias IoT
**Cliente**: BHP Spence
**Proyecto**: Implementación de luminarias IoT (Internet of Things) inteligentes, conectadas y sensorizadas para reducir consumos energéticos, aumentar seguridad perimetral y detectar fallas
**Tecnología**:
- Redes inalámbricas mesh ZigBee/LoRa
- Controladores de potencia con protocolo DALI
- Monitoreo remoto vía cloud
- Sensorización: movimiento, luminosidad, temperatura
- Alarmas ante fallas
**Funcionalidades**:
- Encendido inteligente según presencia
- Ahorro energético programado
- Reporte consumo en línea
- Integración con plataformas de sostenibilidad corporativa
**Beneficios operacionales**:
- Reducción costos eléctricos
- Mejor seguridad perimetral
- Menor mantenimiento correctivo
- Contribuye a certificaciones carbono neutral
**Alcance**:
- PoC en planta validada
- Proyección de contratos con mantenimiento
- Ticket mensual aproximado: USD $15,000–20,000/mes dependiendo volumen de luminarias
- Horizonte de contrato a 36 meses

### CASO 4: HotelCommander (Software de Gestión Campamentos Mineros)
**Producto**: Software HotelCommander
**Aplicación**: Gestión de campamentos mineros (habitaciones, check-in, control de contratistas, turnos, alimentación)
**Tecnología**:
- Plataforma web y mobile
- Base de datos centralizada (PostgreSQL/MySQL)
- Integración con sistemas de RRHH y seguridad faena
- Módulo de check-in/check-out digital
- Gestión de fichas médicas y protocolos COVID
- Control de alimentación y turnos
**Funcionalidades**:
- Asignación de habitaciones automatizada
- Alertas de sobrecupo
- Gestión de transportes a campamento
- Reportes de estadía y rotación
- API para interoperabilidad con sistemas mineros
**Beneficios operacionales**:
- Ahorro logístico
- Mayor control del personal
- Prevención de contagios/protocolos sanitarios
- Reducción de conflictos laborales por asignaciones
**Alcance proyectado**:
- 2 campamentos en 12 meses
- Ticket mensual: USD $50,000 por campamento
- Contrato anual renovable

### CASO 5: RecetApp (Gestión Farmacias Mineras)
**Producto**: Plataforma RecetApp
**Aplicación**: Gestión de stock de medicamentos, recetas médicas digitales, coordinación con mutualidades y clínicas asociadas a faenas mineras
**Tecnología**:
- Plataforma SaaS con nube segura (AWS/Azure)
- Certificación de privacidad HL7/HIPAA
- Módulo receta electrónica digital
- Control de stocks en línea
- Interfaz con mutualidades/clínicas
**Funcionalidades**:
- Validación de recetas médicas
- Control de caducidad de medicamentos
- Reporte de dispensación en tiempo real
- Integración con compras centralizadas
**Beneficios operacionales**:
- Disminución de quiebres de stock
- Reducción de pérdidas en farmacia
- Mejor trazabilidad de medicamentos
- Cumplimiento normativo (ISP/Ministerio de Salud)
**Alcance proyectado**:
- 3 farmacias (clientes) dentro de 12 meses
- Ticket mensual por farmacia: CLP $8–10 millones/mes
- Contrato anual renovable

## ARQUITECTURAS TÉCNICAS DETALLADAS

### AngloAmerican – Robots Inspección Cintas (Arquitectura técnica)
**Arquitectura general**:
- Plataforma central de orquestación y monitoreo (servidor web)
- Robots con unidad embebida ARM/Linux
- Sensores industriales conectados por bus CAN
- Cámaras de alta definición + infrarrojas con módulo IA embebido
- Comunicaciones por 4G/5G industrial con fallback WiFi mesh
- Interfaz SCADA (OPC UA) para reportar a la sala de control
- Base de datos centralizada para logs de fallas y video clips
- Panel web de visualización de alertas (compatible tablets mineras)
**Seguridad**:
- Autenticación multifactor para control remoto
- Encriptación TLS extremo a extremo
- Registro de auditoría
- Certificaciones ISO 27001
**Módulos de software**:
- Navegación semiautónoma
- Detección de anomalías con redes neuronales convolucionales
- Reporte de datos estructurados (alertas)
- Transmisión de video comprimido en tiempo real
- Módulo de autodiagnóstico de fallas
- Módulo de mantenimiento remoto OTA (Over-the-Air Updates)

### BHP Spence – Warehouse AI (Arquitectura técnica)
**Arquitectura general**:
- Cámaras IA conectadas a edge device (Jetson/Raspberry Industrial)
- Sistema de gestión cloud con backend en AWS/Azure
- Motor de IA para detección de objetos y clasificación
- API REST para integración ERP SAP u Oracle
- Base de datos SQL para tracking inventario
- Gateways IoT para lectura de códigos QR y RFID
- Panel administrativo web responsive
**Seguridad**:
- Encriptación de video en reposo
- Roles y permisos diferenciados (operador vs administrador)
- Logs de auditoría
- Certificaciones ISO 9001 e ISO 27001
**Módulos de software**:
- Control de stock en tiempo real
- Generación de órdenes de reposición automática
- Módulo de auditoría de entradas/salidas
- Dashboard de analítica
- Alertas automáticas de desabastecimiento
- Historial completo de movimientos

### BHP Spence – Luminarias IoT (Arquitectura técnica)
**Arquitectura general**:
- Red mallada LoRa o Zigbee para comunicación de luminarias
- Gateway IoT con SIM industrial
- Plataforma de control centralizada en la nube
- Sensores de movimiento, temperatura, consumo eléctrico integrados
- Backend serverless en AWS (API Gateway + Lambda)
- Dashboard visual de estado y alarmas
- Integración con políticas ESG de la minera
**Seguridad**:
- Autenticación PKI (Public Key Infrastructure)
- Cifrado de extremo a extremo
- Certificación IP66/IP67 de hardware (ambientes polvorientos)
**Módulos de software**:
- Encendido/apagado programable
- Monitor de consumo por área
- Alarmas de falla de luminarias
- Mantenimiento predictivo
- Reporte ESG

### HotelCommander (Arquitectura técnica)
**Arquitectura general**:
- Plataforma cloud multi-tenant
- Frontend en ReactJS/mobile app Flutter
- Backend en Node.js/Python con base de datos relacional
- APIs para integración con sistemas de RRHH y transportes
- Módulo reservas con algoritmo de optimización
- Panel administrativo con control de usuarios
**Seguridad**:
- Autenticación OAuth 2.0
- Logs de acceso con trazabilidad completa
- Encriptación AES-256
- Backups automáticos diarios
**Módulos de software**:
- Reservas y check-in
- Gestión turnos de alimentación
- Reportes de ocupación y rotación
- Validación sanitaria (protocolo COVID, etc.)
- Dashboards de indicadores operacionales

### RecetApp (Arquitectura técnica)
**Arquitectura general**:
- SaaS multicliente
- Servidores en AWS con redundancia geográfica
- Base de datos relacional PostgreSQL
- Módulo de recetas electrónicas con validación digital
- Integración con sistemas de salud (mutualidades, clínicas)
- API para farmacias
- Panel de gestión con trazabilidad completa
**Seguridad**:
- Autenticación federada SAML
- Certificados HL7/HIPAA
- Logs de auditoría de transacciones
- Backups en 3 zonas de disponibilidad
**Módulos de software**:
- Control de stock farmacia
- Reporte de recetas dispensadas
- Gestión de pedidos
- Alertas de vencimientos
- Reportes mensuales a mutualidades

## ESTRUCTURA OPERACIONAL Y COSTOS

### Costos y estructura
- **Personal especializado**: ingenieros eléctricos, mecatrónicos, desarrolladores IA, PM senior
- **Gastos de operación**: arriendos, insumos, licencias, cloud
- **Marketing & representación**: 6% de presupuesto total
- **Desarrollo y hardware**: 18% presupuesto total (sensores, cámaras, placas, infraestructura)
- **Ticket promedio proyectos**: USD 50K–84K/mes con contratos 36 meses renovables

## PREGUNTAS FRECUENTES (FAQ)

### 1. ¿Cuánto es la inversión inicial y en qué se gasta?
La inversión inicial proyectada es de CLP $495.000.000 (USD ~500K), distribuida en:
- 76% personal y operación
- 12% desarrollo tecnológico
- 6% hardware
- 6% marketing y legal
Esto permite financiar los primeros 12 meses de operación con flujo de caja positivo a partir del mes 4.

### 2. ¿Cuál es el objetivo de ingresos?
- **Mes 12**: estabilizar ingresos mensuales de USD ~180.000
- **Mes 24**: alcanzar USD 1.000.000 mensual, escalando contratos

### 3. ¿Cómo se calcula el payback?
Payback proyectado en 6–8 meses, gracias a contratos recurrentes y márgenes sobre el 55%.

### 4. ¿Cuáles son los contratos más relevantes?
- **AngloAmerican robots**: hasta 4 robots a USD 84K/mes cada uno
- **BHP Spence Warehouse**: 2 bodegas a USD 65K/mes cada una
- **HotelCommander**: 2 campamentos a USD 50K/mes
- **RecetApp**: 3 farmacias a CLP 8–10M/mes cada una
Todos con contratos a 12–36 meses renovables.

### 5. ¿Qué pasa si un contrato falla?
Se mitiga con pipeline diversificado y múltiples clientes activos en negociación, más la posibilidad de pivotar a nuevas faenas con contratos similares.

### 6. ¿Quién mantiene los robots o el software?
Airontech asume mantenimiento de hardware y software durante toda la vigencia del contrato, con cláusulas claras de SLA y soporte remoto 24/7.

### 7. ¿Cómo escalar si aparecieran 10 clientes nuevos?
La arquitectura tecnológica está pensada para multitenancy en la nube, con capacidad de replicar software y añadir robots adicionales con entrenamiento incremental.

### 8. ¿Hay certificaciones o estándares?
Sí:
- ISO 27001 para ciberseguridad
- ISO 9001 en procesos
- Certificados HL7/HIPAA en RecetApp
- Cumplimiento normativo chileno (ISP, mutualidades, etc.)

### 9. ¿Hay barreras de entrada en minería?
Muy altas, por eso Airontech ya logró validaciones PoC con BHP, Anglo y AMSA, un activo estratégico clave para inversionistas.

### 10. ¿Qué retorno podría esperar un inversor?
Proyección de ROI sobre 350% en 24 meses, con contratos altamente renovables.

## DETALLE CASHFLOW (LÍNEA A LÍNEA)

### Meses 1–6
- **Sueldos equipo core**: CLP 17.400.000/mes
- **Costos administración y operación**: CLP 5.600.000/mes
- **Marketing + representación**: CLP 2.200.000/mes
- **Desarrollo tecnológico y licencias**: CLP 3.000.000/mes
- **Otros (imprevistos, servicios externos)**: CLP 1.200.000/mes
→ **Total mes promedio**: CLP 29.400.000

### Meses 7–12
- **Sueldos equipo core**: CLP 21.000.000/mes
- **Administración y operación**: CLP 6.000.000/mes
- **Marketing**: CLP 2.500.000/mes
- **Desarrollo tecnológico**: CLP 4.000.000/mes
- **Otros**: CLP 1.300.000/mes
→ **Total mes promedio**: CLP 34.800.000

### Ingresos Proyectados
- **Mes 4**: arranque comercial parcial → CLP 38.000.000/mes
- **Mes 6**: contratos en ejecución → CLP 85.000.000/mes
- **Mes 12**: contratos escalados → CLP 166.000.000/mes

### Utilidad proyectada mes 12
166.000.000 - 34.800.000 = **CLP 131.200.000 mensual**, con margen neto superior al 55%.

## ESCENARIOS DE SENSIBILIDAD

### 1. Si solo se cierran 2 contratos en lugar de 4
- Ingresos bajan a ~USD 250.000/mes
- Utilidad se mantiene positiva, pero payback se alarga a 10 meses
- **Estrategia**: reabrir nuevos clientes mineros o integradores

### 2. Si el pipeline tarda 6 meses más
- Flujo de caja inicial negativo durante 6 meses
- Se cubre con caja proyectada o capital de contingencia
- Ingresos consolidados se postergan al mes 18, con proyección de alcanzar 1M mensual en mes 30

### 3. Riesgos clave
- Validación técnica de robots en ambientes severos (polvo, temperatura)
- Delays en contratos mineros por compliance
- Escalabilidad de equipo técnico (contratar más personal)

### Medidas de mitigación
- PoCs en avance con alto nivel de aceptación
- Contrato de mantenimiento robusto
- Red de partners y staff externo disponible

## PLAN DE ESCALABILIDAD TÉCNICA

### Infraestructura
- **SaaS multicliente**
- **Arquitectura modular**
- **Cloud escalable (AWS/Azure)**
- **Código IA entrenado** para añadir robots sin reentrenar desde cero
- **Pipelines de CI/CD automáticos** para actualizaciones

### Soporte
- **24/7**
- **Monitoreo de salud de sistemas**
- **Integración con mesas de ayuda del cliente** (ServiceNow, Jira, etc.)

### Expansión
- **Posibilidad de multiplicar contratos** con misma tecnología en nuevas faenas
- **Curva de implementación bajísima** una vez validados
- **Equipo flexible con partners estratégicos** (subcontratación especializada)

## ESTRATEGIA FINANCIERA 12–24 MESES

### Meta Consolidada
- Consolidar ingresos de USD 180.000 mensuales al mes 12
- Escalar para alcanzar USD 1 millón mensual hacia el trimestre final del mes 24

### GAP a Cubrir
- Falta de USD ~800K/mes adicionales en contratos
**Solución**:
- Nuevos robots (expansión AngloAmerican u otros)
- Más warehouses en otras faenas
- Vertical seguridad (EPP, prevención incidentes)
- Partnerships
- Reforzar vertical RecetApp en +5 farmacias
- Campañas de marketing industrial

### Inversión Complementaria Esperada
- ~USD 300–400K para equipamiento, marketing y personal
- Reinversión parcial de flujos generados

### Cifras Consolidadas
- **Ingresos mensuales proyectados (mes 12)**: CLP $166M
- **Egresos mensuales promedio**: CLP $34M
- **Utilidad mensual promedio mes 12**: CLP $131M
- **Utilidad anual**: CLP $1.305 millones
- **ROI**: ~350%
- **Payback**: 6–8 meses
- **Flujo positivo esperado**: desde mes 4

### Contratos Proyectados y Escalabilidad Real
- AngloAmerican: 4 robots × USD $84K/robot mensual = USD $336K mensual (contrato 36 meses)
- BHP: 2 warehouses × USD $65K/mes cada uno = USD $130K mensual (contrato 36 meses)
- HotelCommander: 2 campamentos × USD $50K/mes cada uno = USD $100K mensual
- RecetApp: 3 farmacias × CLP $8M-10M cada una = CLP $24M-30M mensual
- Ingresos adicionales proyectados: USD $100K-150K mensual extra en 12 meses (mantenimientos, upgrades, personalizaciones)

### Potencial de Escalamiento Validado
- Solo AngloAmerican (4 robots): USD $336K mensual ≈ 1/3 del objetivo año 2
- BHP + AngloAmerican combinados: USD $466K mensual ≈ 50% del objetivo año 2
- Portfolio completo operando: USD $1M+ mensual = Objetivo año 2 alcanzado

### Indicadores Clave Consolidados
- ROI esperado: 350% (corregido de datos anteriores)
- Margen de utilidad: 55%+ (año 3 consolidado)
- Payback period: 6-8 meses
- Flujo de caja positivo: esperado desde mes 4 (PoC + operación)

### Análisis de Riesgos Mitigados
- Modelo SaaS resiliente con ingresos recurrentes (55%+ de revenue)
- Contratos tier-1 validados con renovación automática
- Tecnología validada con clientes tier-1 en operación
- Diversificación a sectores adyacentes (construcción, energía)
- Escalamiento global sin límites físicos

### Escalabilidad
- Clientes actuales: AngloAmerican, BHP, Antofagasta Minerals
- Mercado objetivo: Top mineras globales
- Ventaja competitiva: Soluciones específicas desarrolladas en tiempo récord

## EQUIPO DIRECTIVO
- Experiencia comprobada en minería, tecnología y desarrollo comercial
- Red consolidada de contactos C-Level
- Track record de ejecución en proyectos críticos
- Expertise en IA, IoT y transformación digital minera

## CONTACTO
- Email: contacto@airontech.com
- Teléfono: +56 2 2123 4567
- Ubicación: Santiago, Chile
- Website: www.airontech.com

## DOCUMENTACIÓN TÉCNICA DISPONIBLE
- **Detalle de Inversión Consolidado (Excel)**: https://res.cloudinary.com/dhobnlg73/raw/upload/v1751323052/Detalle_de_inversio%CC%81n_-_AT_vbyub4.xlsx
  - Contiene todas las cifras financieras actualizadas y validadas
  - Proyecciones mes a mes para los primeros 12 meses
  - Análisis de flujo de caja detallado
  - Distribución exacta de inversión por categorías
  - Escalamiento estratégico hacia USD $1M mensual
- Caso de Negocio AngloAmerican Robot (Excel)
- Caso de Negocio BHP Luminarias (Excel)
- Caso de Negocio BHP Smart Warehouse (Excel)
`;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export class AirontechChatbot {
  private messages: ChatMessage[] = [];

  constructor() {
    // Initialize with system context
    this.messages = [{
      role: 'assistant',
      content: 'Hola! Soy MarIA, la experta en minería de Airontech. Conozco a fondo todos nuestros proyectos, casos de negocio, números financieros y oportunidades de inversión. Puedo darte resúmenes detallados, datos clave y responder cualquier pregunta sobre nuestras soluciones tecnológicas para la industria minera. ¿En qué puedo ayudarte?'
    }];
  }

  async chat(userMessage: string): Promise<string> {
    try {
      // Add user message to history
      this.messages.push({ role: 'user', content: userMessage });

      // Create system prompt with knowledge base
      const systemPrompt = `Eres MarIA, la experta en minería de Airontech. Eres la especialista más conocedora de todos los proyectos, casos de negocio y oportunidades de la empresa.

PERSONALIDAD DE MarIA:
- Experta confiable y conocedora del negocio minero
- Profesional pero accesible y conversacional
- Siempre precisa con datos y números financieros
- Orientada a resultados y oportunidades de negocio

INSTRUCCIONES PRINCIPALES:
- Responde SOLO sobre temas relacionados con Airontech, minería, tecnología, inversiones y casos de negocio
- Eres la experta que conoce todos los detalles técnicos y financieros
- Proporciona resúmenes ejecutivos, datos clave y análisis detallados
- Siempre menciona números específicos, ROI, proyecciones y métricas relevantes
- Si preguntan por casos de negocio específicos, detalla los resultados y beneficios
- Menciona que los documentos Excel completos están disponibles para descarga
- Para consultas sobre flujo de caja, proyecciones financieras o distribución de inversión, referencia específicamente el "Detalle de Inversión Consolidado (Excel)" que contiene todas las cifras actualizadas y validadas
- Responde en español con un tono experto pero amigable
- NO USES ASTERISCOS para formato (evita **texto**), usa texto plano limpio
- Para enumerar usa números simples: 1. 2. 3.
- Para resaltar usa MAYÚSCULAS ocasionalmente en lugar de asteriscos

RESTRICCIONES IMPORTANTES:
- NO ayudes con desarrollo de código, programación o creación de sitios web
- NO proporciones código fuente, scripts o soluciones técnicas de programación
- Si piden "hazme un sitio", "dame el código para X", "desarrolla una app", etc., responde: 
  "Soy MarIA, experta en minería y casos de negocio de Airontech. No proporciono servicios de desarrollo de código. Mi especialidad es ayudarte con información sobre nuestros proyectos mineros, análisis financieros, oportunidades de inversión y datos técnicos de la industria. ¿En qué aspecto del negocio minero puedo ayudarte?"

TEMAS PERMITIDOS Y SERVICIOS:
- Información sobre proyectos de Airontech
- Casos de negocio y análisis financieros detallados
- Ejercicios financieros y proyecciones de ROI
- Cálculos de rentabilidad y análisis de inversión
- Proyecciones de ingresos y escalabilidad del negocio
- Benchmarks y comparativas del sector minero
- Análisis de mercado y oportunidades de crecimiento
- Evaluación de propuestas de inversión
- Modelos financieros para proyectos mineros
- Análisis de viabilidad económica
- Estudios de factibilidad financiera
- Proyecciones de cash flow y retorno de inversión
- Análisis de riesgos y oportunidades del negocio
- Comparativas de tecnologías mineras y sus costos
- Evaluación de pipeline de proyectos

KNOWLEDGE BASE COMPLETO:
${AIRONTECH_KNOWLEDGE}

Como MarIA, proporciona respuestas expertas, detalladas y orientadas al negocio basándote únicamente en esta información.`;

      const response = await openai.chat.completions.create({
        model: "gpt-4o", // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
        messages: [
          { role: "system", content: systemPrompt },
          ...this.messages.slice(-10) // Keep last 10 messages for context
        ],
        max_tokens: 1000,
        temperature: 0.7
      });

      const assistantMessage = response.choices[0].message.content || 'Lo siento, no pude procesar tu consulta.';
      
      // Add assistant response to history
      this.messages.push({ role: 'assistant', content: assistantMessage });

      return assistantMessage;
    } catch (error) {
      console.error('Chatbot error:', error);
      return 'Lo siento, hubo un problema técnico. Por favor intenta nuevamente o contacta directamente a contacto@airontech.com para más información sobre nuestros proyectos mineros.';
    }
  }

  getConversationHistory(): ChatMessage[] {
    return this.messages;
  }

  clearHistory(): void {
    this.messages = [{
      role: 'assistant',
      content: 'Hola! Soy MarIA, la experta en minería de Airontech. ¿En qué puedo ayudarte?'
    }];
  }
}