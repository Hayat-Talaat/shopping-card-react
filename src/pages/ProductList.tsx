import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../services/api";
import { Product } from "../types/Products";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    loadProducts();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-blue-500 font-bold">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
