import React,{ useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
import Coins from './Coins.js';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      );
      
      console.log(response.data);
      setCoins(response.data);
      return response;
    }
    fetchData();
  }, []);

  const handleChange = (e)=>{
     setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  })


  return (
    <div className="app">
        <div className="coin__search">
           <h3 className="coin__text">Search a currency</h3>
           <form>
               <input type="text" className="coin__input" placeholder="Seach " value={search} onChange={handleChange}/>
           </form>
        </div>

        <Coins coins={filteredCoins}/>

    </div>
  )
}

export default App
