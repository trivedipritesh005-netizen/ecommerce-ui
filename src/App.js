import React,{useState} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";

function App(){
const [cart,setCart] = useState([]);
function addToCart(product){
setCart([...cart,product]);
}
return(
<div>
<Navbar cartCount={cart.length}/>
<Hero/>
<Products addToCart={addToCart}/>
</div>
);
}

export default App;