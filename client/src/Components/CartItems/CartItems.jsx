import React, { useContext } from 'react';
import './cartItems.css';
import remove_icon from '../Assets/cart_cross_icon.png';
import { ShopContext } from '../../Context/shopContext';
const CartItems = () => {
  const { all_product, cartItems, removeCart,getTotalCartAmount  } = useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {/* <div className="cartItems-format">
          <img src="" alt="" className="cartIcon-product-icon" />
          <p></p>
          <p></p>
          <button className="cartItems-quantity"></button>
          <p></p>
          <img
            src={remove_icon}
            onClick={() => {
              removeFromCart();
            }}
            alt=""
          />
        </div>
        <hr /> */}
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div>
                <div className="cartItems-format cartItems-format-main">
                  <img src={e.image} alt="" className="cartIcon-product-icon" />
                  <p>{e.name}</p>
                  <p>{e.new_price}</p>
                  <button className="cartItems-quantity">
                    {cartItems[e.id]}
                  </button>
                  <p>${e.new_price * cartItems[e.id]}</p>
                  <img
                    className="cartItems-remove-icon"
                    src={remove_icon}
                    onClick={() => {
                      removeCart(e.id);
                    }}
                    alt=" "
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        <div className="cartItems-down">
          <div className="cartItems-total">
            <h1>cart Totals</h1>
            <div className="cartItems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className="cartItems-promoCode">
          <p>if you have a promo code , Enter it here</p>
          <div className="cartItems-promoBox">
            <input type="text " placeholder="promo code " />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
