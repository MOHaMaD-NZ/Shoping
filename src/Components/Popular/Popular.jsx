import React from "react";
import "./popular.css";
import data_product from "../../assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <section className="popular">
      <h1>مدترین ها</h1>
      <hr />
      <div className="popular-item">
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

export default Popular;
