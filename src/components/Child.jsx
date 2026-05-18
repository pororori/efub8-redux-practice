import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../counterSlice";

function Child() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Child 컴포넌트</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}

export default Child;