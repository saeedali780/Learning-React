import React from 'react'
import Hello from './components/hello.jsx'

const App = () => {
  return (
    <div>
      <Hello name="Saeed" age="18"/>
      <Hello name="Jerry" age="12"/>
      <Hello name="Mike" age="20" emoji="❤"/>
    </div>
  )
}

export default App
