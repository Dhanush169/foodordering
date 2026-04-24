import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
  // Support both camelCase (mock) and snake_case (API)
  const name = restaurant.name;
  const image = restaurant.image_url || restaurant.image;
  const category = restaurant.category;
  const rating = restaurant.rating;
  const deliveryTime = restaurant.delivery_time || restaurant.deliveryTime;
  const priceRange = restaurant.price_range || restaurant.priceRange;

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary-100/30 transition-all group">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md text-primary-600 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900">{name}</h3>
          <div className="flex items-center bg-green-50 text-green-700 px-2 py-1 rounded-lg text-sm font-bold">
            ⭐ {rating}
          </div>
        </div>
        
        <div className="flex items-center text-slate-500 text-sm mb-6 space-x-4">
          <span className="flex items-center leading-none">
            <span className="mr-1">🕒</span> {deliveryTime}
          </span>
          <span className="flex items-center leading-none">
            <span className="mr-1">💰</span> {priceRange}
          </span>
        </div>
        
        <Link 
          to={`/menu/${restaurant.id}`}
          className="block w-full py-3 bg-slate-50 text-slate-700 text-center font-bold rounded-2xl border border-slate-200 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all"
        >
          View Menu
        </Link>
      </div>
    </div>
  );
};

export default RestaurantCard;
