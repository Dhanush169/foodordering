import React from 'react';

const RestaurantDashboard = () => (
  <div className="min-h-screen bg-slate-50 font-sans">
    <nav className="bg-slate-900 text-white px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <span className="text-2xl font-bold">FoodDash <span className="text-primary-500">Business</span></span>
        <div className="flex items-center space-x-4">
          <span className="opacity-80">Owner Dashboard</span>
          <button className="text-primary-400 hover:text-primary-300">Logout</button>
        </div>
      </div>
    </nav>
    
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Restaurant Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold mb-6">Manage Menu</h2>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-2xl flex justify-between items-center">
              <span>Classic Burger</span>
              <span className="text-primary-600 font-bold">$12.99</span>
            </div>
            <button className="w-full py-3 border-2 border-dashed border-slate-300 rounded-2xl text-slate-500 hover:bg-slate-50">+ Add New Item</button>
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold mb-6">Active Orders</h2>
          <div className="text-center py-8">
            <span className="text-4xl mb-4 block">🍳</span>
            <p className="text-slate-500">No active orders right now.</p>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default RestaurantDashboard;
