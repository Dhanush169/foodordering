import React from 'react';

const CustomerDashboard = () => (
  <div className="min-h-screen bg-slate-50 font-sans">
    <nav className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <span className="text-2xl font-bold text-primary-600">FoodDash</span>
        <div className="flex items-center space-x-4">
          <span className="text-slate-600">Welcome, Member</span>
          <button className="text-slate-500 hover:text-slate-800">Logout</button>
        </div>
      </div>
    </nav>
    
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Customer Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
          <p className="text-slate-500 italic">No recent orders found.</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Saved Restaurants</h2>
          <p className="text-slate-500 italic">Explore and save your favorites.</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Profile Settings</h2>
          <button className="text-primary-600 font-medium">Edit Profile</button>
        </div>
      </div>
    </main>
  </div>
);

export default CustomerDashboard;
