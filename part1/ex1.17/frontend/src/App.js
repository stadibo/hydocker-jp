import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const App = props => {
  const [data, setData] = useState({ message: '' });
  
  useEffect(() => {
    fetch('/api/ping').then(res => res.json()).then(jsonResponse => {
      if (!jsonResponse.message) return
      setData(jsonResponse)
    })
  }, [])

  return (
    <BrowserRouter>
      <Route exact path='/' render={() => <h1>{`Hello skeleton! ${data.message}`}</h1> } />
    </BrowserRouter>
  )
}

export default App