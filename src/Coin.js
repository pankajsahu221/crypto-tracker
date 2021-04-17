import React from 'react'
import './Coin.css';

function Coin({ coin }) {
    return (
        <div className="coin">
            <div className="coin__det2 cn">
                <p className="coin__rank cn">{coin.market_cap_rank}</p>
                <img src={coin.image} alt="logo" className="coin__logo cn"/>
                <h1 className="coin__name cn">{coin.name}</h1>
            </div>

            <div className="coin__det2">
                <p className="coin__symbol cn">{coin.symbol.toUpperCase()}</p>
            </div>
            
            <div className="coin__det2">
                <p className={`coin__price__change__prcnt  cn ${coin.price_change_percentage_24h > 0 ? "col__green": "col__red"}`}>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                <p className="coin__price cn">Rs.{coin.current_price}</p>
                <p className="coin__volume cn">{coin.total_volume}</p>
            </div>
        </div>
    )
}

export default Coin
