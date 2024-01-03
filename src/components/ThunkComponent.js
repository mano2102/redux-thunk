import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncrementByAsync } from "../redux/counterThunk";

const ThunkComponent = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <br></br>
      <br></br>
      <p>Counter using thunk</p>
      <p>Count:{count}</p>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => dispatch(fetchIncrementByAsync())}
      >
        Thunk async increment
      </button>
    </div>
  );
};

export default ThunkComponent;
