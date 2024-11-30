import { useState } from "react";
export function App () {
    const [count, setCount] = useState(0); //standart syntax gsn 
  
    const addCount = () => {
      setCount(count-1);
    }

    return (
      <div>
        <button className="next-button" onClick={addCount}>Next</button>
        <p>{count}</p>
      </div>
    );
  }; 
  
