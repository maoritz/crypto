import Desktop from './components/Desktop'
import Menu from './components/Menu'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'


function App() {
  const [marketValue, setMarketValue] = useState(7.8)
   
  const axiosOptions = {
    headers: {'user-access-token': '55a9b1f7-d694-463e-9853-7a035952ecf9'}
  };
  
  const data = async () => {
    const response = await  axios.get('https://api.sprintt.co/crypto/', axiosOptions)

    if (!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = response.data
    console.log(data)
  }
 
  data().catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message)
  })
  // .then(res=>console.log(res.data.HELLO))
  // .catch(err => console.log(err))


  
  return (
    <div className="App">
      <Desktop />
      <Menu marketValue={marketValue}/>
    </div>
  );
}

export default App;
