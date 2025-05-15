import React from 'react'

const Fruit = ({name,color,taste,price,emoji,soldOut}) => {
  return (
    <>
        {/* {name} {color} {taste} {price} */}
        {price > 0  ? <li>{emoji} {name} {color} {taste} {price} {soldOut ? "soldOut" :""}</li> : ""}
    </>
  )
}

export default Fruit
