import { useState } from 'react'


const SideMenu = () => {
  const [count, setCount] = useState(0);

  const increment = () =>{
    setCount(count+1);
  }

  const decrement = () =>{
    setCount(count-1);
  }

  return (
    <div>
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        <a href="#" className="list-group-item">Category 1</a>
        <a href="#" className="list-group-item">Category 2</a>
        <a href="#" className="list-group-item">Category 3</a>
      </div>

      <div>
        <button onClick={increment} className="btn btn-primary">Inctement number</button>
        <button onClick={decrement} className="btn btn-primary">Dectement number</button>
        <div>count {count}</div>
      </div>

    </div>
  )
}
  
  export default SideMenu