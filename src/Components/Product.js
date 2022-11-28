import React, {useState, useEffect } from "react";
import Header from "./Header";


function Product() {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  }, []);

  return (
    <div className="dashboard">
      <Header />
      {console.log(product)}
      <div className="container">
       {product.map((e,i)=>{
        return(
          <div className="card" key={i}>
            <img className="img" src={e.image.url} alt="product"/>
            <div>{e.category}</div>
            <div>{e.name}</div>
            <div>{e.price}</div>
          </div>
        )
       })}
      </div>
    </div>
  );
}

export default Product;
