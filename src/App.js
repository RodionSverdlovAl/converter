import './App.css';
import CurrencyRow from './CurrencyRow';
import React, { useEffect, useState } from 'react';
const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=e0620611239864a7727f240259ba2ef9'


function App() {

  const [currencyOptions, SetCurrencyOptions] = useState([])

  console.log(currencyOptions)

  useEffect(()=>{
    fetch(BASE_URL)
      .then(res =>res.json())
      .then(data => {
        SetCurrencyOptions([data.base, ...Object.keys(data.rates)])
      })
  }, [])

  return (
    <>
    <h1>Convert</h1>
    <CurrencyRow 
      currencyOptions = {currencyOptions}
    />
    <div className='equals'>=</div>
    <CurrencyRow
      currencyOptions = {currencyOptions}
    />
    </>
    
  );
}

export default App;
