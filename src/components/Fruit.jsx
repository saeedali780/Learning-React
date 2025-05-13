import React from 'react'

const Fruit = () => {
    const fruits =["apple","mango","Banana","Orange"];
  return (
    <div>
        <ul>
        {fruits.map((fruit)=>(
            <li key={fruit}>{fruit}</li>
        ))}
        </ul>
    </div>
  )
}

export default Fruit
