import React from 'react';



export function BetAmount({ amount, percentage, isSelected, onClick, className }) {
  return (
    <button
      className={`p-4 rounded-lg text-white ${className} ${isSelected ? 'btnSecondary' : 'bg-[#1e1f21] border-[#2b2f32]'}`}
      onClick={() => onClick(amount)}
    >
      <div>{amount} ETH</div>

      <div>{percentage}%</div>
    </button>
  );
}

