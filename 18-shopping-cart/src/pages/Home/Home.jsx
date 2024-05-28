import React from "react";
import { Products, products } from "../../data/Products";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl my-5">List Prodducts</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {products.map((products, key)=>{
            <>
            </>
        })}
      </div>
    </div>
  );
};

export default Home;
