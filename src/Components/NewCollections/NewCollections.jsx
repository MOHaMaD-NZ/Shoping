import React from "react";
import "./NewCollections.css";
import new_collections from "../../assets/collections";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <section className="new-collections">
      <h1>جدیدترین ها</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, i) => {
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

export default NewCollections;
