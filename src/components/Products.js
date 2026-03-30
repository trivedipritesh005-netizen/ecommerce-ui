import React, { useState } from "react";
import ProductCard from "./ProductCard";

function Products({ addToCart }) {

  const [search, setSearch] = useState("");

const products = [
{
name: "Laptop",
price: 50000,
image: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
},
{
name: "Smartphone",
price: 20000,
image: "https://cdn-icons-png.flaticon.com/512/15/15874.png"
},
{
name: "Headphones",
price: 2000,
image: "https://cdn-icons-png.flaticon.com/512/5977/5977590.png"
},
{
name: "Camera",
price: 30000,
image: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
},
{
name: "Speaker",
price: 4000,
image: "https://cdn-icons-png.flaticon.com/512/727/727245.png"
},
{
name: "Smart Watch",
price: 5000,
image: "https://cdn-icons-png.flaticon.com/512/747/747376.png"
}
];
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">Products</h2>

      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

    </div>
  );
}

export default Products;