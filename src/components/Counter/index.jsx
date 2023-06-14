import { BiMinus, BiPlus } from "react-icons/bi";
import { Container } from "./styles";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(1);
  
  return (
    <Container>
      <div className="counter">
        <BiMinus 
          onClick={() => setCount(count - 1)}
        />
        <span>{count}</span>
        <BiPlus 
          onClick={() => setCount(count + 1)}
        />
      </div>
    </Container>
  )
}

