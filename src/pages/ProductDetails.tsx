import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductById } from "../services/api";
import { useCart } from "../context/CartContext";
import { Product } from "../types/Products";
// Components
import Notification from "../components/Notification";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  useEffect(() => {
    const loadProduct = async () => {
      if (id) {
        const data = await fetchProductById(parseInt(id));
        setProduct(data);
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  const addToCart = () => {
    if (product) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...product, quantity: 1 },
      });
      setShowNotification(true);
    }
  };

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (!product) {
    return <p className="text-center text-red-500">Product not found.</p>;
  }

  return (
    <div className="p-8">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-500 hover:underline mb-4"
      >
        &larr; Back to Products
      </button>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="p-6 flex justify-center items-center bg-gray-100">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-96 object-contain rounded-lg animate-fadeIn"
            />
          </div>

          {/* Product Details */}
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-500 mb-4 capitalize">
              Category: {product.category}
            </p>
            <p className="text-lg text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-blue-500 mb-6">
              ${product.price.toFixed(2)}
            </p>

            <button
              onClick={addToCart}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Add to Cart
            </button>

            {/* Notification */}
            <Notification
              message="Item added to cart!"
              show={showNotification}
              onClose={handleCloseNotification}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
