// import React from 'react';

// export function Coin({ flipCoin, flipResult}) {
//   return (
//     <div className="relative w-48 h-48 my-8">
//       {!flipResult.chose && <img src='/Coin.svg' className={`coinWaiting ${flipCoin ? 'flipAnimation' : ''}`}/>}
//       {flipResult.chose === 'heads' ? <img src={flipResult.result=== 'win' ? '/Heads.svg' : '/HeadsLost.svg'}/> : <img src={flipResult.result=== 'win' ? '/Tails.svg' : '/TailsLost.svg'} className={}/>}
//     </div>
//   );
// }

import React from 'react';

export function Coin({ flipCoin, flipResult }) {
  return (
    <div className="relative w-48 h-48 my-8">
      {/* Display coin image when no result has been chosen */}
      {!flipResult?.chose ? (
        <img
          src="/Coin.svg"
          className={`coinWaiting ${flipCoin ? "flipAnimation" : ""}`}
          alt="coin"
        />
      ) : (
        // Show result based on the flipResult
        flipResult.chose === "heads" ? (
          <img
            src={flipResult.result === "win" ? "/Heads.svg" : "/HeadsLost.svg"}
            alt="heads result"
            className='w-full object-cover'
          />
        ) : (
          <img
            src={flipResult.result === "win" ? "/Tails.svg" : "/TailsLost.svg"}
            alt="tails result"
            className='w-full object-cover'
          />
        )
      )}
    </div>
  );
}
