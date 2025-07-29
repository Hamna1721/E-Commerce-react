import React, { useEffect, useState } from 'react';
import ProdcutCard from './ProductCard';

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductsData(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5 pt-5">
      <nav></nav>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {productsData.map((product) => (
            <ProdcutCard
              key={product.id}
              product={product}
              onAddToCart={() => {}}
              onViewDetail={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;

