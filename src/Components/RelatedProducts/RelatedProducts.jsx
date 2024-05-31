import React from "react";
import "./relatedproducts.css";
import data_product from "../../assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <section className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RelatedProducts;
