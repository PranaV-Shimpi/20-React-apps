import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { toggleStatusTab } from "../../store/cart";
import { products } from "../../data/Products"; // Import the products data

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = carts.reduce((total, item) => {
    const product = products.find((product) => product.id === item.productId);
    return total + product.price * item.quantity;
  }, 0);

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div
      className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] 
  transform transition-transform duration-500
  ${statusTab === false ? "translate-x-full" : ""}
  `}
    >
      <h2 className="p-5 text-white text-2xl">Shopping Cart</h2>
      <div className="p-5 overflow-y-auto hide-scrollbar ">
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </div>
      <div className="p-5 text-white text-xl">
        <div className="flex justify-between">
          <span>Total:</span>
          <span>₹. {totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <button className="bg-black text-white" onClick={handleCloseTabCart}>
          CLOSE
        </button>
        <button className="bg-amber-600 text-white">CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartTab;

