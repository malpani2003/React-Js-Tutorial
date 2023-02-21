import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate=useNavigate();
    function handleClick(){
    navigate("order-confirmed");
  }
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handleClick}>Place Order</button>
    </div>
  )
}

export default Home