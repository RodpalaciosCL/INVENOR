import { useEffect, useState } from "react";
import { BarChart3 } from "lucide-react";

export default function AdminDashboardButton() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const userType = localStorage.getItem('userType');
    const adminCode = localStorage.getItem('adminCode');
    setIsAdmin(userType === 'admin' && adminCode === '2026123');
  }, []);

  if (!isAdmin) return null;

  const handleDashboardAccess = () => {
    const adminCode = localStorage.getItem('adminCode');
    window.open(`/analytics-dashboard?auth=${adminCode}`, '_blank');
  };

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 9999,
        opacity: 0.7
      }}
    >
      <button
        onClick={handleDashboardAccess}
        className="bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-orange-bright)] hover:from-[var(--accent-orange-bright)] hover:to-[var(--accent-orange)] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title="Dashboard Analytics (Solo Admin)"
      >
        <BarChart3 size={20} />
      </button>
    </div>
  );
}