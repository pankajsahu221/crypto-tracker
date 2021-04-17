import React from 'react'
import Coin from './Coin';

function Coins({ coins }) {
    return (
        <div className="coins">

          {/* <div className="coin">
            <p className="coin__rank">Rank</p>
            <p >Image</p>
            <p className="coin__name">Name</p>
            <p className="coin__symbol">Symbol</p>
            <p className="coin__price">Price</p>
            <p className="coin__volume">Volume</p>
          </div> */}

            {coins.map( coin => {
               return <Coin key={coin.id} coin={coin}/>
            })}
        </div>
    )
}

export default Coins
