import React from 'react'

const Hello = (props) => {
    const {name,age} = props
  return (
    <div>
      <h1>Hello {name} my Age is {+age}</h1>
    </div>
  )
}

export default Hello
