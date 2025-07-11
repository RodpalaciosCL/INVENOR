import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Brain, Trash2, Maximize2, Minimize2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}

export default function ChatbotSimple() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hola! Soy MarIA, la experta en minería de Airontech. ¿En qué puedo ayudarte?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    const userMessage = inputMessage.trim();
    if (!userMessage || isLoading) return;

    console.log('Enviando mensaje:', userMessage);
    
    setInputMessage('');
    setIsLoading(true);
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      console.log('Estado de respuesta:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      console.log('Datos recibidos:', data);

      const assistantMessage = data.message || data.response || 'Error procesando respuesta';
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: assistantMessage
      }]);

    } catch (error) {
      console.error('Error completo:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Error de conexión. Intenta nuevamente.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  const clearHistory = () => {
    setMessages([{
      role: 'assistant',
      content: 'Conversación reiniciada. ¿En qué puedo ayudarte?'
    }]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-orange-bright)] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Brain size={24} />
            <span className="font-medium">MarIA</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl shadow-2xl ${
              isExpanded ? 'w-96 h-96' : 'w-80 h-80'
            } flex flex-col`}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-2">
                <Brain className="text-[var(--accent-orange)]" size={20} />
                <div>
                  <h3 className="font-bold text-[var(--text-primary)]">MarIA</h3>
                  <p className="text-xs text-[var(--text-secondary)]">Experta en Minería Avanzada</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                </button>
                <button
                  onClick={clearHistory}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <Trash2 size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.role === 'user'
                        ? 'bg-[var(--accent-orange)] text-white'
                        : 'bg-[var(--bg-subtle)] text-[var(--text-primary)]'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[var(--bg-subtle)] p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[var(--accent-orange)] rounded-full animate-pulse"></div>
                      <span className="text-[var(--text-secondary)] text-xs">Pensando...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-[var(--border-subtle)] p-4">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Pregunta sobre Airontech..."
                  disabled={isLoading}
                  className="flex-1 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-orange)] text-sm"
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-[var(--accent-orange)] text-white p-2 rounded-lg hover:bg-[var(--accent-orange-bright)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}