import React from "react";
import { Link } from "react-router-dom";

const Productsdetails = ({ Productsdetails }) => {
  return (
    <div className="col-3 mb-4">
      <div className="card">
        <img src={Productsdetails?.thumbnail} className="card-img-top" alt={Productsdetails?.title} />
        <div className="card-body">
          <h5 className="card-title">{Productsdetails?.title}</h5>
          <p className="card-text">{Productsdetails?.description}</p>
          <Link to={`/product/${Productsdetails.id}`} className="btn btn-primary mt-auto">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Productsdetails;

