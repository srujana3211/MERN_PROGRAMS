import React from "react";

function ProductCard(props) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" , borderRadius:"10px"}}>
      <h2 style={{color:"blue"}}>Product: {props.name}</h2>
      <h3>Price: ₹{props.price}</h3>
    </div>
  );
}

export default ProductCard;