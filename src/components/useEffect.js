import {useState, useEffect} from 'react'

const EffectHook = () => {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems]= useState([]);

  // side effect
  useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType]);


  return (
   <div>
    <h3>Effect Hook</h3>
    <button onClick={() => setResourceType('posts')}>Posts</button>
    <button onClick={() => setResourceType('users')}>Users</button>
    <button onClick={() => setResourceType('comments')}>Comments</button>
    <h1>{resourceType}</h1>
    {
      items.map((item, index) =>{
        return <div key={index}>{JSON.stringify(item)}</div>
      })
    }
   </div>
  )
}

export default EffectHook;