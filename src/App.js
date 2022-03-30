import './App.css';
import CurrencyRow from './CurrencyRow';
import React, { useEffect, useState } from 'react';
const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=e0620611239864a7727f240259ba2ef9'


function App() {

  const [currencyOptions, SetCurrencyOptions] = useState([])
  const[fromCurrency, setFromCurrency] = useState();
  const[toCurrency, setToCurrency] = useState();
  const[amount,setAmount] = useState(1);

  useEffect(()=>{
    fetch(BASE_URL)
      .then(res =>res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        SetCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
      })
  }, [])

  return (
    <>
    <h1>Convert</h1>
    <CurrencyRow 
      currencyOptions = {currencyOptions}
      selectedCurrency={fromCurrency}
      onChangeCurrency={e =>setFromCurrency(e.target.value)}
    />
    <div className='equals'>=</div>
    <CurrencyRow
      currencyOptions = {currencyOptions}
      selectedCurrency={toCurrency}
      onChangeCurrency={e =>setToCurrency(e.target.value)}
    />
    </>
    
  );
}

export default App;
