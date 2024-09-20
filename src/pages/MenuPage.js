import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartActions';
import { menuData } from '../assets/menuData';
import { TabMenu } from 'primereact/tabmenu';
import 'primereact/resources/themes/saga-blue/theme.css';  // or any other theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';  // required for icons

const Menu = () => {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const categoryKeys = Object.keys(menuData.items);

  // Generate TabMenu items based on categories
  const menuItems = categoryKeys.map((categoryKey) => ({
    label: menuData.categories.find(category => category.id === categoryKey)?.name,
    command: () => setActiveIndex(categoryKeys.indexOf(categoryKey)),
  }));

  return (
    <div id="menu" className="bg-gray-400 text-2xl text-white py-16 px-4">
      {/* Menu Title */}
      <h1 className="text-center text-4xl md:text-6xl font-light mb-10">THE MENU</h1>

      {/* TabMenu for categories */}
      <div className="w-full bg-gray-200 text-gray-800 border-b border-gray-300 z-10 mb-8 shadow-md">
        <TabMenu 
          model={menuItems} 
          activeIndex={activeIndex} 
          onTabChange={(e) => setActiveIndex(e.index)} 
          className="w-full flex"
        />
      </div>

      {/* Menu Sections */}
      {categoryKeys.map((categoryKey, index) => (
        <div
          key={categoryKey}
          id={categoryKey}
          className={`bg-gray-100 text-gray-800 py-16 px-4 md:px-8 mb-16 ${activeIndex === index ? 'block' : 'hidden'}`}
        >
          <h1 className="text-center text-3xl md:text-5xl font-semibold mb-8">
            {menuData.categories.find(cat => cat.id === categoryKey)?.name}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData.items[categoryKey].map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-300">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 flex justify-between items-center">
                    {item.name}
                    <span className="bg-gray-800 text-white rounded-lg px-4 py-1 text-sm font-medium">{item.price}</span>
                  </h2>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-full bg-gray-200 text-gray-800 text-lg font-semibold py-2 rounded hover:bg-gray-300 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
