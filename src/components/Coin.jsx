// import React from 'react';

// export function Coin({ flipCoin, flipResult}) {
//   return (
//     <div className="relative w-48 h-48 my-8">
//       {!flipResult.chose && <img src='/Coin.svg' className={`coinWaiting ${flipCoin ? 'flipAnimation' : ''}`}/>}
//       {flipResult.chose === 'heads' ? <img src={flipResult.result=== 'win' ? '/Heads.svg' : '/HeadsLost.svg'}/> : <img src={flipResult.result=== 'win' ? '/Tails.svg' : '/TailsLost.svg'} className={}/>}
//     </div>
//   );
// }

import React from "react";
import CoinIcon from "./Icons/Coin";
import HeadsLost from "./Icons/HeadsLost";
import Tails from "./Icons/Tails";
import TailsLost from "./Icons/TailsLost";
import Heads from "./Icons/HeadsIcon";

export function Coin({ flipCoin, flipResult }) {
  return (
    <div className="relative w-48 h-48 my-8">
      {/* Display coin image when no result has been chosen */}
      {!flipResult?.chose ? (
        <CoinIcon flipCoin={flipCoin} />
      ) : // Show result based on the flipResult
      flipResult.chose === "heads" ? (
        // <img
        //   src={flipResult.result === "win" ? "/Heads.svg" : "/HeadsLost.svg"}
        //   alt="heads result"
        //   className='w-full object-cover'
        // />
        flipResult?.result === "win" ? (
          <Heads height={192} width={192} />
        ) : (
          <HeadsLost height={192} width={192} />
        )
      ) : // <img
      //   src={flipResult.result === "win" ? "/Tails.svg" : "/TailsLost.svg"}
      //   alt="tails result"
      //   className='w-full object-cover'
      // />
      flipResult?.result === "win" ? (
        <Tails height={192} width={192} />
      ) : (
        <TailsLost height={192} width={192} />
      )}
    </div>
  );
}
