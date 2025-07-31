import React from "react";
import { NavLink, useNavigate } from "react-router";
const cart = [];
const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  }
  const Addtocart = (product) => {
    const cartitem = JSON.parse(localStorage.getItem("cart")) || [];
    cartitem.push(product);
    console.log("Cart:", cartitem);
    localStorage.setItem("cart", JSON.stringify(cartitem));
alert(`${product.title} has been added to your cart.`);
  }
  return (
    <div className="col-3 mb-4">
      <div className="card" style={{ height: '575px' }}>
        <img src={product?.thumbnail} className="card-img-top" alt={product?.title} />
        <div className="card-body">
          <h5 className="card-title">{product?.title}</h5>
          <p className="card-text">{product?.description}</p>
          <div class="d-flex justify-content-between mt-auto">
            <div className="btn btn-primary" onClick={() => { handleClick(product.id) }}>
              Details
            </div>
            <div className="btn btn-primary" onClick={() => { Addtocart(product) }}>
              add to cart
            </div>
          </div>
          {/* <NavLink to={`/product/${product.id}`} className="btn btn-primary mt-auto">
            Details
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

