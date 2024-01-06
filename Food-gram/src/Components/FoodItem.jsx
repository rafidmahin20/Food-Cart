import { useState } from 'react';


const FoodItem = ({ item, addToCart, isAdded }) => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleAddToCart = () => {
    setLoading(true);

    setTimeout(() => {
      addToCart({ ...item, quantity });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={`mb-4 p-4 border rounded-md transition transform hover:shadow-lg hover:scale-105 ${loading ? 'animate-pulse' : ''}`}>
      <div className={`mb-2 ${loading ? 'bg-gray-300' : ''} rounded-md ${loading ? 'animate-pulse' : ''}`}>
        {loading ? (
          <div className="h-32 bg-gray-300"></div>
        ) : (
          <img src={item.image} alt={item.name} className='w-full h-32 object-cover rounded-md'/>
        )}
      </div>
      <h2 className={`text-xl font-bold ${loading ? 'bg-gray-300 h-6 w-3/4' : ''} ${loading ? 'animate-pulse' : ''}`}>
        {loading ? '' : item.name}    
      </h2>
      <p className={`${loading ? 'bg-gray-300 h-4 w-2/3' : ''} ${loading ? 'animate-pulse' : ''}`}>
        {loading ? '' : item.description} 
      </p> 
      <p className={`text-gray-700 ${loading ? 'bg-gray-300 h-4 w-1/4' : ''} ${loading ? 'animate-pulse' : ''}`}>
        {loading ? '' : `${item.price.toFixed(2)}`}
      </p>
      <div className={`flex items-center mt-2 ${loading ? 'bg-gray-300 h-10' : ''} ${loading ? 'animate-pulse' : ''}`}>
        <input
          type='number'
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
          className={`mr-2 p-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300 transition ${loading ? 'bg-gray-300' : ''} ${loading ? 'animate-pulse' : ''}`}
        />
        <button
          onClick={handleAddToCart}
          disabled={isAdded || loading}
          className={`bg-blue-500 text-white px-3 py-1 rounded-md ${isAdded ? 'opacity-50 cursor-not-allowed' : loading ? 'bg-gray-300' : 'hover:bg-blue-700'} transition ${loading ? 'animate-pulse' : ''}`}
        >
          {loading ? 'Adding...' : isAdded ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
