"use client";
import { cartAction } from "@/redux/ShoppingCart/CartSlice";
import { useAppDispatch } from "@/redux/store";
import { useState } from "react";
import { IProducts } from "./SanityInterface";
import { AiOutlineShoppingCart } from "react-icons/ai";

type IProps = {
  product: IProducts;
  quantity: number;
}

export default function AddtoCart(props: IProps) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  function subtract() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function add() {
    setQuantity(quantity + 1);
  }

  function addToCart() {
    dispatch(
      cartAction.addToCart({ product: props.product, quantity: quantity })
    );
  }

  return (
    <>
      <div className="flex items-center py-10 gap-x-3">
        <h1 className="text-lg font-bold">Quantity:</h1>
        <button
          onClick={subtract}
          className="bg-gray-200 rounded-full w-9 h-9 ml-5">
          -
        </button>
        {quantity}
        <button
          onClick={add}
          className="border-2 border-black rounded-full w-9 h-9">
          +
        </button>
      </div>
      <button onClick={addToCart}
        className="flex items-center justify-center  text-white bg-black px-5 py-2 gap-x-2 
          border-2 border-t-slate-400 border-l-slate-400 border-b-black border-r-black">
        <AiOutlineShoppingCart size={25} />
        Add to Cart
      </button>
    </>
  );
}
