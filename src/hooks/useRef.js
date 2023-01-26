import React, {useState, useEffect, useRef} from 'react'

const RefHook = () => {
  const [name, setName]= useState('');
  const renderCount = useRef(0);

  useEffect(() =>{
    renderCount.current = renderCount.current + 1;
  })
  return (
    <div>
      <h3>Ref Hook</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>My name is {name}</p>
      <p>I rendered {renderCount.current} times</p>
    </div>
  )
}

export default RefHook;