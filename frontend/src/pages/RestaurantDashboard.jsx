import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const RestaurantDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-white">
      <nav className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">FoodDash</span>
            <span className="bg-primary-600 text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full font-bold">Business</span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="opacity-80 font-medium text-sm">Restaurant Manager: {user?.fullName || 'Owner'}</span>
            <button 
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-black mb-6 tracking-tight">Manage Your Business</h1>
          <p className="text-xl text-slate-400 mb-12">Track your sales, manage your menu, and grow your local presence with ease.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6">Menu Overview</h2>
            <div className="p-6 bg-slate-700/50 rounded-2xl border border-slate-600 border-dashed text-center">
              <p className="text-slate-400 italic">No menu items added yet.</p>
              <button className="mt-4 text-primary-400 font-bold hover:underline">+ Add First Item</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RestaurantDashboard;
