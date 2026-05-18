import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Parent 컴포넌트</h2>
      <Child count={count} setCount={setCount} />
    </div>
  );
}

export default Parent;