import React from 'react';

const ConditionalComponent = () => {
    let isHappy = true;
    const fruits = ['apple', 'banana', 'orange', 'mango', 'strawberry'];
    return(
        isHappy ? (
        fruits.map((fruit)=>(
            <h1 key={fruit}>{fruit}</h1>
        ))
    ):(
        <h1>Condition false</h1>
    )
      
    )

  
}

export default ConditionalComponent
