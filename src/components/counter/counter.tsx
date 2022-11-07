import { useState, useEffect } from "react";
import "./counter.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../redux/counterSlice";
import { search } from "../../redux/searchSlice";

const Counter = () => {
  const [searchh, setSearchh] = useState("");
  const count = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  console.log("count", search);
  useEffect(() => {
    dispatch(search(searchh));
  }, [searchh]);

  return (
    <div>
      <button
        className="btn1"
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <h1>{count.value}</h1>
      <button
        className="btn2"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
      <button
        className="btn2"
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        increment by 10
      </button>
      {/* {count.value} */}
      <input
        type="text"
        onChange={(e) => {
          setSearchh(e.target.value);
        }}
      />
    </div>
  );
};

export default Counter;
