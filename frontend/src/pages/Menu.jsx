import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Menu = () => {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/restaurants/${id}/menu`);
        if (!response.ok) {
          throw new Error('Failed to fetch menu');
        }
        const data = await response.json();
        setMenuItems(data);
      } catch (err) {
        console.error('Error fetching menu:', err);
        setError('Could not load the menu. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [id]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Basic Navbar for context */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/customer-dashboard" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
            &larr; Back to Dashboard
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-xl">🛒</span>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Restaurant Menu</h1>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-700 p-8 rounded-3xl text-center border border-red-100">
            <p className="font-bold text-lg">{error}</p>
          </div>
        ) : menuItems.length === 0 ? (
          <div className="bg-white p-8 rounded-3xl text-center shadow-sm border border-slate-200">
            <p className="text-slate-500 text-lg">No menu items found for this restaurant.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems.map(item => (
              <div key={item.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col">
                <div className="h-48 w-full overflow-hidden">
                  <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                    <span className="font-bold text-primary-600 text-lg">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-slate-500 text-sm mb-6 flex-grow">{item.description}</p>
                  <button className="w-full py-3 bg-primary-600 text-white font-bold rounded-2xl hover:bg-primary-700 transition-colors shadow-md shadow-primary-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Menu;
