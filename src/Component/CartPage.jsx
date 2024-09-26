import React, { useState, useEffect } from 'react';

const CartPage = () => {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "3BHK Apartment", location: "Delhi", price: 35000, image: "/images/property3.jpg" },
    { id: 2, name: "2BHK Apartment", location: "Noida", price: 25000, image: "/images/property2.jpg" },
  ]);

  // Calculate total price
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  }, [cartItems]);

  // Handle removing item from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-green-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 font-serif">Your Cart</h1>

      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
        {cartItems.length === 0 ? (
          <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border-b border-gray-200">
                {/* Property Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />

                {/* Property Details */}
                <div className="flex-1 px-4">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{item.location}</p>
                </div>

                {/* Price */}
                <div className="text-lg font-bold text-slate-800">₹{item.price}</div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 m-2"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total Amount */}
            <div className="flex justify-between items-center mt-6">
              <h2 className="text-xl font-bold">Total Amount</h2>
              <p className="text-2xl font-semibold text-slate-800">₹{totalPrice}</p>
            </div>

            {/* Checkout Button */}
            <div className="text-right mt-6">
              <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-400">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;