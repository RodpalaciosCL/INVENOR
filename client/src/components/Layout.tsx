import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--dark-bg)] text-[var(--text-primary)] overflow-x-hidden">
      <Header />
      <main className="relative">
        {children}
      </main>
    </div>
  );
}
