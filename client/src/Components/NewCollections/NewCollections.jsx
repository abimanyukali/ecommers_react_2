import React from 'react'
import './newCollections.css';
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';
import "./newCollections.css"
const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>new collections</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
};
export default NewCollections;
