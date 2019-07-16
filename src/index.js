import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import useDarkMode from '../src/hooks/useDarkMode';

import "./styles.css";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode] = useDarkMode('darkMode', false)
  const [coin, setCoin] = useState([])

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {
        console.log(res.data);
        setCoinData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const coins = coinData.map(item => [item.id, item.name])

  const changeCoin = (event) => {
    setCoin(event.target.value)
  }

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleMode={toggleMode}/>
      <div className='intro'>Select a cryptocurrency:</div>
      <select onChange={changeCoin} value={coin}>
        <option value='' disabled>Select one</option>
        {coins.map(item => <option key={item} value={item[0]}>{item[1]}</option>)}
      </select>
      <Charts darkMode={darkMode} coinData={coinData.filter(item => item.id === coin)} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
