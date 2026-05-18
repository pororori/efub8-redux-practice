import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../counterSlice";

function Child() {
  // TODO: Redux 스토어에서 count 값을 가져오세요 (useSelector 사용)
  const count = null;
  
  // TODO: dispatch 함수를 가져오세요 (useDispatch 사용)
  const dispatch = null;

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