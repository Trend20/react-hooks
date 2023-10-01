import { useState } from "react";
// import axios from 'axios';

const StateHook = () =>{
  const [count, setCount] = useState(0);

  const [users, setUsers] = useState([]);

  // get all users 
  const getUser = () =>{

  }

  // decrement
  const handleDecrement = () =>{
    setCount(prevCount => prevCount - 1);
  }

  // increment
  const handleIncrement = () =>{
    setCount(prevCount => prevCount + 1);
  }

  // using useState when dealing with objects
  const [isModalOpen, setIsModalOpen] = useState({
    save: false,
    discard: false,
    edit: false
  })

  // updating the state object
  const handleModalStateUpdate = () =>{
    setIsModalOpen({...isModalOpen, save: true, discard: true, edit: true})
  }

  return(
    <div>
      <h3>useState Hook</h3>
      <div className="counter">
        <button onClick={handleDecrement}>-</button>
        <p>{count}</p>
        <button onClick={handleIncrement}>+</button>

        <button onClick={handleModalStateUpdate}>Modal State Update</button>
      </div>
    </div>
  )
}

export default StateHook;