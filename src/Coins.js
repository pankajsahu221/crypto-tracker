import React from 'react'
import Coin from './Coin';

function Coins({ coins }) {
    return (
        <div className="coins">

            {coins.map( coin => {
               return <Coin key={coin.id} coin={coin}/>
            })}
        </div>
    )
}

export default Coins
