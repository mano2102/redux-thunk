import React from "react";
import "../assets/card.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";
const Card = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="card-wrapper">
      <div className="card-header">
        <h1>Cart</h1>
      </div>
      <div className="card-body">
        <img src="" alt="no image available" />
      </div>
      <div className="card-footer">
        <button className="green" onClick={() => dispatch(increment())}>
          +
        </button>
        {count}
        <button className="red" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </div>
  );
};

export default Card;
