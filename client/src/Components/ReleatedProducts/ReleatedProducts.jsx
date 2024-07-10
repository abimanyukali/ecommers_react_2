import React from 'react';
import './relatedProducts.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';
function RelatedProduct() {
  return (
    <div className="relatedProducts">
      <h1>Telated Products</h1>
      <hr />
      <div className="relatedProducts-item">
        {data_product.map((item, i) => {
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
}
export default RelatedProduct;
