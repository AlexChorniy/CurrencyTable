import React, { useState } from 'react';
import './App.css';
import OptionItem from './components/OptionItem';
import ListItem from './components/ListItem';
import { currencies } from './config';
import { apiRequests } from './api/api';

function App() {
  const [getRates, setRates] = useState([]);

  function chgSelectHendler(event) {
    const curName = event.target.value;
    apiRequests({ curName })
      .then(
        response => {
          const parseResult = JSON.parse(response);
          const objToArr = Object.entries(parseResult.rates);
          setRates(objToArr);
        }
      ).catch(
        error => {
          setRates([[404, 'not found']]);
          console.log(`Rejected: ${error}`)
        }
      );
  }

  const selectItems = currencies.map(({ id, base }) => <OptionItem key={id} text={base} />);
  const ratesItems = getRates.map(([name, value], ind) => <ListItem key={ind} name={name} value={isNaN(value) ? value : value.toFixed(5)} />);

  return (
    <div className="App">
      <div className="header">
        <h2 className="header-title">Test task</h2>
        <select className="select" onChange={chgSelectHendler}>
          {
            selectItems
          }
        </select>
      </div>
      <div className="aside">
        {
          ratesItems
        }
      </div>
    </div>
  );
}

export default App;
