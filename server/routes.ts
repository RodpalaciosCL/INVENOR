import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { AirontechChatbot } from "./chatbot.js";
import { z } from "zod";
import axios from "axios";

// Helper function to get client IP
function getClientIP(req: any): string {
  return req.headers['x-forwarded-for']?.split(',')[0] || 
         req.connection.remoteAddress || 
         req.socket.remoteAddress || 
         req.ip || 
         '127.0.0.1';
}

// Helper function to get geolocation from IP
async function getLocationFromIP(ip: string) {
  try {
    if (ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
      return { country: 'Local', city: 'Local', region: 'Local' };
    }
    
    const response = await axios.get(`http://ip-api.com/json/${ip}?fields=country,regionName,city,status`);
    if (response.data.status === 'success') {
      return {
        country: response.data.country,
        city: response.data.city,
        region: response.data.regionName
      };
    }
  } catch (error) {
    console.error('Error getting location:', error);
  }
  return { country: null, city: null, region: null };
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize chatbot instance
  const chatbot = new AirontechChatbot();

  // Chat endpoint
  const chatSchema = z.object({
    message: z.string().min(1).max(1000)
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = chatSchema.parse(req.body);
      const response = await chatbot.chat(message);
      
      res.json({ 
        success: true, 
        message: response,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Chat API error:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Error interno del servidor' 
      });
    }
  });

  // Get chat history
  app.get("/api/chat/history", (req, res) => {
    try {
      const history = chatbot.getConversationHistory();
      res.json({ success: true, history });
    } catch (error) {
      console.error('Chat history error:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Error al obtener historial' 
      });
    }
  });

  // Clear chat history
  app.post("/api/chat/clear", (req, res) => {
    try {
      chatbot.clearHistory();
      res.json({ success: true, message: 'Historial limpio' });
    } catch (error) {
      console.error('Clear chat error:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Error al limpiar historial' 
      });
    }
  });

  // Authentication endpoint
  app.post("/api/authenticate", async (req, res) => {
    const { password } = req.body;
    const INVESTOR_PASSWORD = "243678";
    const ADMIN_PASSWORD = "2026123";

    if (password === ADMIN_PASSWORD) {
      req.session.authenticated = true;
      req.session.userType = 'admin';
      req.session.password = password;
      res.json({ success: true, userType: 'admin' });
    } else if (password === INVESTOR_PASSWORD) {
      req.session.authenticated = true;
      req.session.userType = 'investor';
      req.session.password = password;
      res.json({ success: true, userType: 'investor' });
    } else {
      res.status(401).json({ success: false, error: 'Clave incorrecta' });
    }
  });

  // Login tracking endpoint
  app.post("/api/login-track", async (req, res) => {
    try {
      const ip = getClientIP(req);
      const userAgent = req.headers['user-agent'] || '';
      const location = await getLocationFromIP(ip);
      
      const visitor = await storage.logVisitor({
        ipAddress: ip,
        userAgent,
        country: location.country,
        city: location.city,
        region: location.region,
        success: true,
        eventType: 'login',
        documentName: null
      });

      console.log(`🔔 NUEVO ACCESO INVERSOR:`, {
        timestamp: visitor.timestamp,
        ip: visitor.ipAddress,
        location: `${visitor.city}, ${visitor.region}, ${visitor.country}`,
        userAgent: visitor.userAgent
      });

      res.json({ success: true, visitor });
    } catch (error) {
      console.error('Login tracking error:', error);
      res.status(500).json({ success: false, error: 'Error al registrar visita' });
    }
  });

  // Download tracking endpoint
  app.post("/api/download-track", async (req, res) => {
    try {
      const { documentName } = req.body;
      const ip = getClientIP(req);
      const userAgent = req.headers['user-agent'] || '';
      const location = await getLocationFromIP(ip);
      
      const visitor = await storage.logVisitor({
        ipAddress: ip,
        userAgent,
        country: location.country,
        city: location.city,
        region: location.region,
        success: true,
        eventType: 'download',
        documentName: documentName
      });

      console.log(`📥 DESCARGA DE DOCUMENTO:`, {
        timestamp: visitor.timestamp,
        document: documentName,
        ip: visitor.ipAddress,
        location: `${visitor.city}, ${visitor.region}, ${visitor.country}`
      });

      res.json({ success: true, visitor });
    } catch (error) {
      console.error('Download tracking error:', error);
      res.status(500).json({ success: false, error: 'Error al registrar descarga' });
    }
  });

  // Analytics dashboard endpoint (protected route - SOLO código 2026123)
  app.get("/analytics-dashboard", async (req, res) => {
    const authCode = req.query.auth;
    const ADMIN_CODE = "2026123";
    
    if (authCode !== ADMIN_CODE) {
      return res.status(401).send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Acceso Denegado - Airontech</title>
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              background: #0a0a0a; 
              color: #e0e0e0; 
              height: 100vh; 
              display: flex; 
              align-items: center; 
              justify-content: center;
              margin: 0;
            }
            .container {
              text-align: center;
              background: #1a1a1a;
              padding: 40px;
              border-radius: 12px;
              border: 1px solid #333;
              max-width: 500px;
            }
            h1 { color: #ff6b35; margin-bottom: 20px; }
            p { color: #b0b0b0; margin-bottom: 30px; }
            .btn {
              background: linear-gradient(135deg, #ff6b35, #e55a2b);
              color: white;
              padding: 12px 24px;
              border: none;
              border-radius: 8px;
              font-weight: 600;
              text-decoration: none;
              display: inline-block;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>ACCESO RESTRINGIDO</h1>
            <p>Solo el administrador con código específico puede acceder al dashboard de analytics.</p>
            <a href="/" class="btn">Volver al Login</a>
          </div>
        </body>
        </html>
      `);
    }
    try {
      const visitors = await storage.getRecentVisitors(200);
      const logins = visitors.filter(v => v.eventType === 'login');
      const downloads = visitors.filter(v => v.eventType === 'download');
      
      // Group downloads by document type
      const downloadsByDoc = downloads.reduce((acc, download) => {
        const doc = download.documentName || 'Documento Desconocido';
        acc[doc] = (acc[doc] || 0) + 1;
        return acc;
      }, {});

      // Group by country
      const countryStats = visitors.reduce((acc, visitor) => {
        const country = visitor.country || 'Desconocido';
        acc[country] = (acc[country] || 0) + 1;
        return acc;
      }, {});

      // Recent activity (last 24 hours)
      const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
      const recentActivity = visitors.filter(v => new Date(v.timestamp) > yesterday);
      
      const html = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Analytics Dashboard - Airontech</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
              color: #e0e0e0; 
              padding: 20px;
              min-height: 100vh;
            }
            .container { max-width: 1400px; margin: 0 auto; }
            .header { 
              background: linear-gradient(135deg, #ff6b35, #e55a2b);
              color: white; 
              padding: 30px; 
              border-radius: 12px; 
              margin-bottom: 30px;
              text-align: center;
              box-shadow: 0 8px 32px rgba(255, 107, 53, 0.3);
            }
            .header h1 { font-size: 2.5em; margin-bottom: 10px; }
            .header p { opacity: 0.9; font-size: 1.1em; }
            .stats-grid { 
              display: grid; 
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
              gap: 25px; 
              margin-bottom: 40px; 
            }
            .stat-card { 
              background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
              padding: 25px; 
              border-radius: 12px; 
              border: 1px solid #333;
              box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
              transition: transform 0.2s;
            }
            .stat-card:hover { transform: translateY(-2px); }
            .stat-number { 
              font-size: 3em; 
              font-weight: 700; 
              color: #ff6b35; 
              margin-bottom: 8px;
              background: linear-gradient(135deg, #ff6b35, #ffa726);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .stat-label { 
              font-size: 1.1em; 
              color: #b0b0b0; 
              font-weight: 500;
            }
            .section { 
              background: #1a1a1a; 
              border-radius: 12px; 
              margin-bottom: 30px; 
              border: 1px solid #333;
              overflow: hidden;
              box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
            }
            .section-header { 
              background: linear-gradient(135deg, #333, #444);
              padding: 20px; 
              font-weight: 600; 
              font-size: 1.3em;
              color: #ff6b35;
              border-bottom: 2px solid #ff6b35;
            }
            .table-container { overflow-x: auto; }
            .visitor-table { width: 100%; border-collapse: collapse; }
            .table-header { 
              background: #2a2a2a;
              font-weight: 600;
              color: #ff6b35;
            }
            .table-header th { 
              padding: 15px; 
              text-align: left; 
              border-bottom: 2px solid #ff6b35;
            }
            .visitor-row { border-bottom: 1px solid #333; }
            .visitor-row:hover { background: #242424; }
            .visitor-row td { 
              padding: 15px; 
              vertical-align: middle;
            }
            .timestamp { 
              color: #ff6b35; 
              font-weight: 500; 
              font-family: monospace;
            }
            .event-type { 
              display: inline-block;
              padding: 4px 12px;
              border-radius: 20px;
              font-size: 0.85em;
              font-weight: 600;
              text-transform: uppercase;
            }
            .event-login { 
              background: rgba(74, 222, 128, 0.2);
              color: #4ade80;
              border: 1px solid #4ade80;
            }
            .event-download { 
              background: rgba(96, 165, 250, 0.2);
              color: #60a5fa;
              border: 1px solid #60a5fa;
            }
            .location { 
              color: #4ade80; 
              font-weight: 500;
            }
            .ip { 
              font-family: 'Courier New', monospace; 
              color: #60a5fa; 
              background: rgba(96, 165, 250, 0.1);
              padding: 4px 8px;
              border-radius: 4px;
            }
            .document-name { 
              color: #fbbf24; 
              font-weight: 500;
              max-width: 250px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .status-success { color: #4ade80; font-weight: 600; }
            .status-error { color: #ef4444; font-weight: 600; }
            .refresh-btn { 
              background: linear-gradient(135deg, #ff6b35, #e55a2b);
              color: white; 
              border: none; 
              padding: 12px 24px; 
              border-radius: 8px; 
              cursor: pointer; 
              margin-bottom: 20px;
              font-weight: 600;
              font-size: 1em;
              box-shadow: 0 4px 16px rgba(255, 107, 53, 0.3);
              transition: all 0.2s;
            }
            .refresh-btn:hover { 
              transform: translateY(-1px);
              box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
            }
            .download-stats { 
              display: grid; 
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
              gap: 15px; 
              padding: 20px;
            }
            .download-item { 
              background: #242424;
              padding: 15px;
              border-radius: 8px;
              border-left: 4px solid #ff6b35;
            }
            .download-count { 
              font-size: 1.5em; 
              font-weight: 600; 
              color: #ff6b35;
            }
            .download-doc { 
              color: #b0b0b0; 
              margin-top: 5px;
              font-size: 0.9em;
            }
            .no-data { 
              text-align: center; 
              padding: 40px; 
              color: #666; 
              font-style: italic;
            }
            @media (max-width: 768px) {
              .stats-grid { grid-template-columns: repeat(2, 1fr); }
              .table-container { font-size: 0.9em; }
              .header h1 { font-size: 2em; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>AIRONTECH ANALYTICS</h1>
              <p>Dashboard de Monitoreo de Inversores - Acceso Restringido</p>
            </div>
            
            <button class="refresh-btn" onclick="location.reload()">Actualizar Datos</button>
            
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-number">${logins.length}</div>
                <div class="stat-label">Total Accesos</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">${downloads.length}</div>
                <div class="stat-label">Total Descargas</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">${recentActivity.length}</div>
                <div class="stat-label">Actividad 24h</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">${Object.keys(countryStats).length}</div>
                <div class="stat-label">Países Únicos</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">${new Set(visitors.map(v => v.ipAddress)).size}</div>
                <div class="stat-label">IPs Únicas</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">${Object.keys(downloadsByDoc).length}</div>
                <div class="stat-label">Documentos Diferentes</div>
              </div>
            </div>

            ${Object.keys(downloadsByDoc).length > 0 ? `
            <div class="section">
              <div class="section-header">Documentos Más Descargados</div>
              <div class="download-stats">
                ${Object.entries(downloadsByDoc)
                  .sort(([,a], [,b]) => b - a)
                  .map(([doc, count]) => `
                    <div class="download-item">
                      <div class="download-count">${count}x</div>
                      <div class="download-doc">${doc}</div>
                    </div>
                  `).join('')}
              </div>
            </div>
            ` : ''}

            <div class="section">
              <div class="section-header">Registro de Actividad Completo</div>
              <div class="table-container">
                ${visitors.length === 0 ? 
                  '<div class="no-data">No hay registros de actividad</div>' :
                  `<table class="visitor-table">
                    <thead class="table-header">
                      <tr>
                        <th>Fecha y Hora</th>
                        <th>Evento</th>
                        <th>Ubicación</th>
                        <th>Dirección IP</th>
                        <th>Documento Descargado</th>
                        <th>Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${visitors.map(visitor => `
                        <tr class="visitor-row">
                          <td class="timestamp">${new Date(visitor.timestamp).toLocaleString('es-CL', { 
                            timeZone: 'America/Santiago',
                            year: 'numeric',
                            month: '2-digit', 
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                            hour12: false
                          })}</td>
                          <td>
                            <span class="event-type ${visitor.eventType === 'login' ? 'event-login' : 'event-download'}">
                              ${visitor.eventType === 'login' ? 'LOGIN' : 'DESCARGA'}
                            </span>
                          </td>
                          <td class="location">${visitor.city || 'N/A'}, ${visitor.country || 'N/A'}</td>
                          <td class="ip">${visitor.ipAddress}</td>
                          <td class="document-name" title="${visitor.documentName || '-'}">
                            ${visitor.documentName || '-'}
                          </td>
                          <td class="${visitor.success ? 'status-success' : 'status-error'}">
                            ${visitor.success ? 'EXITOSO' : 'ERROR'}
                          </td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>`
                }
              </div>
            </div>
          </div>
          <script>
            // Auto-refresh every 30 seconds
            setTimeout(() => location.reload(), 30000);
          </script>
        </body>
        </html>
      `;
      
      res.send(html);
    } catch (error) {
      console.error('Analytics dashboard error:', error);
      res.status(500).send('Error loading analytics dashboard');
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
