import React from 'react';

export function BetAmount({ amount, percentage, onClick , className }) {
  return (
    <button
      className={`p-2 rounded bg-[#1e1f21] border-[#2b2f32] hover:bg-gray-700 transition-colors ${className}`}
      onClick={onClick}
    >
      <div className="text-sm font-medium text-white">{amount} ETH</div>
      <div className="text-xs text-blue-400">{percentage}%</div>
    </button>
  );
}

