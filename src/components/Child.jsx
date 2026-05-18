import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../counterSlice";

function Child() {
  // TODO: Redux 스토어에서 count 값을 가져오세요 (useSelector 사용)
  const count = 0;
  
  // TODO: dispatch 함수를 가져오세요 (useDispatch 사용)
  const dispatch = () => {};

  return (
    <div>
      <h2>Child 컴포넌트</h2>
      <p>Count: {count}</p>
      {/* TODO: 각 버튼에 알맞은 액션을 dispatch 해보세요 */}
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}

export default Child;