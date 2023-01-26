import { useState } from "react";

const StateHook = () =>{
  const [count, setCount] = useState(0);

  // decrement
  const handleDecrement = () =>{
    setCount(prevCount => prevCount - 1);
  }

  // increment
  const handleIncrement = () =>{
    setCount(prevCount => prevCount + 1);
  }

  return(
    <div>
      <h3>useState Hook</h3>
      <div className="counter">
        <button onClick={handleDecrement}>-</button>
        <p>{count}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  )
}

export default StateHook;