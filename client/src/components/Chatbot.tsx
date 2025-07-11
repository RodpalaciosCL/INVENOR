import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Brain, Trash2, Maximize2, Minimize2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hola! Soy MarIA, la experta en minería de Airontech. Conozco a fondo todos nuestros proyectos, casos de negocio, números financieros y oportunidades de inversión. Puedo darte resúmenes detallados, datos clave y responder cualquier pregunta sobre nuestras soluciones tecnológicas para la industria minera. ¿En qué puedo ayudarte?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isInIframe, setIsInIframe] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Detect if we're in an iframe - múltiples métodos para máxima compatibilidad
  useEffect(() => {
    let inIframe = false;
    
    try {
      // Método 1: Comparar window objects
      inIframe = window.self !== window.top;
    } catch (e) {
      // Método 2: Si hay error de cross-origin, estamos en iframe
      inIframe = true;
    }
    
    // Método 3: Verificar si window.frameElement existe
    if (!inIframe) {
      try {
        inIframe = window.frameElement !== null;
      } catch (e) {
        inIframe = true;
      }
    }
    
    // Método 4: Verificar dimensiones de ventana
    if (!inIframe) {
      inIframe = window.innerWidth < screen.width || window.innerHeight < screen.height;
    }
    
    setIsInIframe(inIframe);
    
    if (inIframe) {
      document.body.classList.add('iframe-mode');
      document.documentElement.classList.add('iframe-mode');
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    console.log('sendMessage called with:', inputMessage);
    if (!inputMessage.trim() || isLoading) {
      console.log('Message rejected - empty or loading');
      return;
    }

    const userMessage = inputMessage.trim();
    console.log('Processing message:', userMessage);
    setInputMessage('');
    setIsLoading(true);

    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      console.log('Sending message:', userMessage);
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      console.log('Response status:', response.status, response.ok);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        const messageContent = data.message || data.response;
        console.log('Message content:', messageContent);
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: messageContent || 'Lo siento, no pude procesar tu mensaje.'
        }]);
      } else {
        console.log('Response not OK:', data);
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: `Error: ${data.error || 'Problema del servidor'}`
        }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `Error de conexión: ${error instanceof Error ? error.message : 'Error desconocido'}`
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearHistory = async () => {
    try {
      await fetch('/api/chat/clear', { method: 'POST' });
      setMessages([{
        role: 'assistant',
        content: 'Hola! Soy MarIA, la experta en minería de Airontech. ¿En qué puedo ayudarte?'
      }]);
    } catch (error) {
      console.error('Clear history error:', error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div 
      className={`chatbot-container ${isInIframe ? 'iframe-mode' : ''}`}
      style={{ 
        position: 'fixed',
        bottom: '20px', // CSS manejará iframe mobile específicamente
        right: '16px',
        zIndex: 2147483647,
        pointerEvents: 'auto',
        visibility: 'visible',
        opacity: 1,
        transform: 'none',
        display: 'block'
      }}
    >
      {/* Chat trigger button - responsive design */}
      {!isOpen && (
        <>
          {/* Desktop version - vertical layout */}
          <motion.div
            className="hidden md:flex flex-col items-center space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {/* Desktop: Texto "Asistente AI" arriba del botón */}
            <div className="bg-[var(--accent-orange)] text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              Asistente AI
            </div>
            
            {/* Desktop: Botón circular con cerebro */}
            <motion.button
              onClick={() => setIsOpen(true)}
              className="w-16 h-16 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-orange-bright)] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 4px 20px rgba(246, 128, 52, 0.3)",
                  "0 4px 30px rgba(246, 128, 52, 0.6)",
                  "0 4px 20px rgba(246, 128, 52, 0.3)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Brain size={28} className="animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-[var(--accent-orange)] opacity-20 animate-ping"></div>
            </motion.button>
          </motion.div>

          {/* Mobile version - ultra simple */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden w-10 h-10 bg-[var(--accent-orange)] text-white rounded-full shadow-md flex items-center justify-center"
          >
            <span className="text-xs font-bold">AI</span>
          </button>
        </>
      )}
      
      {/* Botón cuando está abierto */}
      {isOpen && (
        <motion.button
          onClick={() => setIsOpen(false)}
          className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-orange-bright)] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <X size={18} className="md:hidden" />
          <X size={20} className="hidden md:block" />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`absolute bottom-16 md:bottom-20 right-0 bg-[var(--dark-bg)] border border-[var(--border-subtle)] rounded-xl md:rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
              isExpanded 
                ? 'w-[95vw] h-[85vh] md:w-[600px] md:h-[700px]' 
                : 'w-[85vw] max-w-sm md:w-96 h-[70vh] max-h-[500px] md:h-[500px]'
            }`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-orange-bright)] p-3 md:p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Brain size={14} className="md:hidden" />
                    <Brain size={20} className="hidden md:block" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm md:text-lg">MarIA</h3>
                    <p className="text-xs opacity-90">Experto en Minería Airontech</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-white/80 hover:text-white transition-colors p-1"
                  >
                    {isExpanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                  </button>
                  <button
                    onClick={clearHistory}
                    className="text-white/80 hover:text-white transition-colors p-1"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] md:max-w-[80%] p-2 md:p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-[var(--accent-orange)] text-white'
                        : 'bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)]'
                    }`}
                  >
                    <p className="text-xs md:text-sm whitespace-pre-wrap">
                      {message.content.replace(/\*\*(.*?)\*\*/g, '$1')}
                    </p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] p-2 md:p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-[var(--accent-orange)] rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                        <div className="w-2 h-2 bg-[var(--accent-orange)] rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                        <div className="w-2 h-2 bg-[var(--accent-orange)] rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                      </div>
                      <span className="text-[var(--text-secondary)] text-xs">Pensando...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-[var(--border-subtle)] p-3 md:p-4">
              <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Pregunta sobre Airontech..."
                  disabled={isLoading}
                  className="flex-1 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-lg px-2 md:px-3 py-2 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-orange)] text-xs md:text-sm"
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-[var(--accent-orange)] text-white p-2 rounded-lg hover:bg-[var(--accent-orange-bright)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} className="md:hidden" />
                      <Send size={20} className="hidden md:block" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}