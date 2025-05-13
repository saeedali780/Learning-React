import React from 'react'

const ConditionalComponent = () => {
    let isHappy = true;
  
     return   isHappy ? <h1>mesaageOne</h1> : <h1>messageTwo</h1>;

  
}

export default ConditionalComponent
