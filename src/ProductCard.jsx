import React from "react";
import { NavLink, useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = (id)=>{
      navigate(`/product/${id}`);
  }
  return (
    <div className="col-3 mb-4">
      <div className="card">
        <img src={product?.thumbnail} className="card-img-top" alt={product?.title} />
        <div className="card-body">
          <h5 className="card-title">{product?.title}</h5>
          <p className="card-text">{product?.description}</p>
          <div className="btn btn-primary mt-auto" onClick={()=>{handleClick(product.id)}}>
            Details
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

