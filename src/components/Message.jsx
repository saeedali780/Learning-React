import React from 'react'

const Message = () => {
    const myFunc = ()=>{
        console.log("Button Clicked");
        
    }
  return (
    <div>
      <button onClick={myFunc}>Click here to get a message</button>
    </div>
  )
}

export default Message
