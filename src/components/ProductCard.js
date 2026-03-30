import React from "react";

function ProductCard({ product, addToCart }) {

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">

      <div className="card h-100 shadow-sm product-card">

        <img
          src={product.image}
          className="card-img-top product-img"
          alt={product.name}
        />

        <div className="card-body text-center">

          <h5>{product.name}</h5>

          <p className="text-success fw-bold">
            ₹{product.price}
          </p>
          <button
            className="btn btn-primary w-100"
            onClick={()=>addToCart(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;