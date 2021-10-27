import Desktop from './components/Desktop'
import Menu from './components/Menu'
import React, { useState } from 'react'
import './App.css'


function App() {

   const [marketValue, setMarketValue] = useState(7.8)

  return (
    <div className="App">
      <Desktop />
      <Menu marketValue={marketValue}/>
    </div>
  );
}

export default App;
