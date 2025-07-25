import React, { useEffect, useState } from 'react';
import Productsdetails from './Productsdetails';

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
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {productsData.map((product) => (
            <Productsdetails
              key={product.id}
              Productsdetails={product}
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

