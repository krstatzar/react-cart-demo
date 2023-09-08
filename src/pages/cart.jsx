import React, { useContext } from "react";
import { PRODUCTS } from "../products";
import {Product}  from "./product"
import { ShopContext } from '../shop-context';
import { CartItem } from '../components/cart-item';
import { useNavigate} from 'react-router-dom';
import cart from "../assets/cart.svg";

export const Cart = () => {

    const {cartItems, getTotalCartAmount } = useContext(ShopContext);
const totalAmount = getTotalCartAmount();
const navigate = useNavigate();



    return(
        <div className="cart">
            <div><h1>Your Cart Items</h1></div>
            
            <div className="cartItems">


            {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                    return <CartItem data={product}/>
                }

            })}

            </div>

            <div className="summary">
            {totalAmount > 0 ? (
            <div className="checkout">
                <p className="total"> Total: ${totalAmount.toFixed(2)}</p>
                
                <button onClick={() => navigate("/")}> Continue Shopping</button>
                <button>Checkout </button>

            </div>
            ) : (
                <div className="empty">
                    <img src={cart} alt="cart" />
                    <h1>The Cart is Empty</h1>
                </div>
                
            )}
            </div>
        </div>
    )
};

