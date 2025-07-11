import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Login from "@/components/Login";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Chatbot from "@/components/Chatbot";
import { createRoot } from "react-dom/client";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Renderizar chatbot en wrapper independiente cuando se autentique
  useEffect(() => {
    if (isAuthenticated) {
      const chatWrapper = document.getElementById("chat-wrapper");
      if (chatWrapper) {
        // Limpiar contenido previo
        chatWrapper.innerHTML = '';
        
        // Renderizar chatbot
        createRoot(chatWrapper).render(
          <QueryClientProvider client={queryClient}>
            <Chatbot />
          </QueryClientProvider>
        );
      }
    }
  }, [isAuthenticated]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {!isAuthenticated ? (
          <Login onLogin={handleLogin} />
        ) : (
          <>
            <Toaster />
            <Router />
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
