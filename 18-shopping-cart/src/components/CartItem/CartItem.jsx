import React, { useState, useEffect } from "react";
import { products } from "../../data/Products";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../../store/cart";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const findDetail = products.filter(
      (product) => product.id === productId
    )[0];
    setDetail(findDetail);
  }, [productId]);
  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };
  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };
  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
      <img src={detail.image} alt="img" className="w-12" />
      <h3>{detail.name}</h3>
      <p> ₹{detail.price}</p>
      <div className="w-20 flex justify-between gap-2 flex-col">
        <div className="flex w-20 gap-2">
          <button
            className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
            onClick={handleMinusQuantity}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
            onClick={handlePlusQuantity}
          >
            +
          </button>
        </div>
        {quantity > 1 ? (
          <p className="text-center">T: ₹{detail.price * quantity}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CartItem;
