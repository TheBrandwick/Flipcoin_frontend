import React from 'react';

export function BetAmount({ amount, percentage, onClick }) {
  return (
    <button
      className="p-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors"
      onClick={onClick}
    >
      <div className="text-sm font-medium text-white">{amount} ETH</div>
      <div className="text-xs text-blue-400">{percentage}%</div>
    </button>
  );
}

