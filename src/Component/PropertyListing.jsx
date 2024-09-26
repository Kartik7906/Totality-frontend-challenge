import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const PropertyListing = () => {
  const location = useLocation();
  const { location: loc, bedrooms, pricerange } = location.state || {};

  // State to manage favorite and cart items
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  // Mock data for property listings
  const properties = [
    { id: 1, image: '../../public/property1.jpg', location: "Lucknow", bedrooms: "1BHK", price: 15000 },
    { id: 2, image: '../../public/property1.jpg', location: "Noida", bedrooms: "2BHK", price: 25000 },
    { id: 3, image: '../../public/property1.jpg', location: "Delhi", bedrooms: "3BHK", price: 35000 },
    { id: 4, image: '../../public/property1.jpg', location: "Mumbai", bedrooms: "1BHK", price: 12000 },
    { id: 5, image: '../../public/property1.jpg', location: "Lucknow", bedrooms: "2BHK", price: 28000 },
    { id: 6, image: '../../public/property1.jpg', location: "Noida", bedrooms: "3BHK", price: 32000 },
    { id: 7, image: '../../public/property1.jpg', location: "Delhi", bedrooms: "1BHK", price: 11000 },
    { id: 8, image: '../../public/image-8.jpeg', location: "Mumbai", bedrooms: "2BHK", price: 22000 },
    { id: 9, image: '../../public/image-9.jpg', location: "Lucknow", bedrooms: "3BHK", price: 38000 },
    { id: 10, image: '../../public/image-10.jpeg', location: "Noida", bedrooms: "1BHK", price: 14000 },
    { id: 11, image: '../../public/image-11.jpeg', location: "Delhi", bedrooms: "2BHK", price: 29000 },
    { id: 12, image: '../../public/image-12.jpeg', location: "Mumbai", bedrooms: "3BHK", price: 37000 },
    { id: 13, image: '../../public/image-13.jpeg', location: "Lucknow", bedrooms: "1BHK", price: 13000 },
    { id: 14, image: '../../public/image-14.jpeg', location: "Noida", bedrooms: "2BHK", price: 24000 },
    { id: 15, image: '../../public/image-15.jpeg', location: "Delhi", bedrooms: "3BHK", price: 36000 },
    { id: 16, image: '../../public/image-6.jpeg', location: "Mumbai", bedrooms: "1BHK", price: 15000 },
    { id: 17, image: '../../public/image-5.jpeg', location: "Lucknow", bedrooms: "2BHK", price: 25000 },
    { id: 18, image: '../../public/image-4.jpeg', location: "Noida", bedrooms: "3BHK", price: 31000 },
    { id: 19, image: '../../public/image-3.jpeg', location: "Delhi", bedrooms: "1BHK", price: 16000 },
    { id: 20, image: '../../public/image-2.webp', location: "Mumbai", bedrooms: "2BHK", price: 23000 },
    { id: 21, image: '../../public/image-1.jpg', location: "Lucknow", bedrooms: "3BHK", price: 34000 },
  ];

  // Handle adding/removing from favorites
  const toggleFavorite = (propertyId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(propertyId)
        ? prevFavorites.filter((id) => id !== propertyId)
        : [...prevFavorites, propertyId]
    );
  };

  // Handle adding/removing from cart
  const toggleCart = (propertyId) => {
    setCart((prevCart) =>
      prevCart.includes(propertyId)
        ? prevCart.filter((id) => id !== propertyId)
        : [...prevCart, propertyId]
    );
  };

  // Filter properties based on location, bedrooms, and price range
  const filteredProperties = properties.filter((property) => {
    const matchesLocation = !loc || property.location === loc;
    const matchesBedrooms = !bedrooms || property.bedrooms === bedrooms;
    const matchesPrice = !pricerange || property.price <= pricerange;

    return matchesLocation && matchesBedrooms && matchesPrice;
  });

  return (
    <div className="h-screen w-full bg-gray-100">
      <header className="bg-white p-4 shadow-md flex justify-between">
        <h1 className="text-center text-2xl font-bold text-slate-700">
          Property Listings
        </h1>
        <Link to="/">
          <h1>Home</h1>
        </Link>

        <span>Favourite</span>

        <div className="flex gap-1 items-center">
          <FontAwesomeIcon icon={faShoppingCart} />
          <Link to="/cartpage">
            <span>Cart</span>
          </Link>
        </div>
      </header>
      <main className="p-6">
        {/* Display properties */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <div key={property.id} className="border rounded-lg shadow-md bg-white relative">
                {/* Property image */}
                <img
                  src={property.image}
                  alt="Property"
                  className="w-full h-40 object-cover rounded-t-lg"
                />

                {/* Property info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-slate-800">
                    ₹{property.price}
                  </h3>
                  <p className="mb-2 text-slate-500">
                    {property.location}, {property.bedrooms}
                  </p>
                  <p className="text-slate-500 mb-4">Price: ₹{property.price}</p>
                </div>

                {/* Favorite and Cart Icons */}
                <div className="absolute top-2 right-2 flex space-x-2">
                  {/* Toggle Favorite */}
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      favorites.includes(property.id)
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>

                  {/* Toggle Cart */}
                  <button
                    onClick={() => toggleCart(property.id)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      cart.includes(property.id)
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No properties match your search criteria.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default PropertyListing;