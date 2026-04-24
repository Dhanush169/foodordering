import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard';

const CustomerDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/restaurants');
        if (!response.ok) {
          throw new Error('Failed to fetch restaurants');
        }
        const data = await response.json();
        setRestaurants(data);
      } catch (err) {
        console.error('Error fetching restaurants:', err);
        setError('Could not load restaurants. Please ensure the backend is running.');
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <span className="text-2xl font-bold text-primary-600">FoodDash</span>
          <div className="flex items-center space-x-6">
            <div className="hidden sm:flex items-center bg-slate-100 px-4 py-2 rounded-2xl">
              <span className="text-slate-400 mr-2">📍</span>
              <span className="text-sm font-medium text-slate-700">Deliver to: Home</span>
            </div>
            <div className="flex items-center space-x-4 border-l border-slate-200 pl-6">
              <span className="hidden sm:inline text-slate-600 font-medium">Hello, {user?.fullName || 'Customer'}</span>
              <button 
                onClick={handleLogout}
                className="bg-slate-900 text-white px-5 py-2.5 rounded-2xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Browse Local Flavors</h1>
          <p className="text-xl text-slate-500">Pick from our curated selection of top-rated restaurants near you.</p>
        </div>

        {/* Filter Tags */}
        <div className="flex overflow-x-auto pb-8 space-x-3 no-scrollbar">
          {['All', 'Burgers', 'Italian', 'Japanese', 'Indian', 'Mexican', 'Salads'].map(tag => (
            <button key={tag} className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${tag === 'All' ? 'bg-primary-600 text-white shadow-lg shadow-primary-200' : 'bg-white text-slate-600 border border-slate-200 hover:border-primary-600 hover:text-primary-600'}`}>
              {tag}
            </button>
          ))}
        </div>
        
        {/* Restaurant Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-700 p-8 rounded-3xl text-center border border-red-100">
            <p className="font-bold text-lg">{error}</p>
            <button onClick={() => window.location.reload()} className="mt-4 text-red-600 underline font-medium">Try again</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default CustomerDashboard;
