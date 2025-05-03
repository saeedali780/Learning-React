import React from 'react'

const Hello = ({name,age,emoji}) => {

  return (
    <div>
      <h1>Hello {name} my Age is {+age} {emoji}</h1>
    </div>
  )
}

export default Hello
