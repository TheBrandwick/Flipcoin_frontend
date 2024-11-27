import React from 'react';

export function GradientCard({ value, subValue, className }) {
  return (
    <div className={`rounded-full w-[263px] py-2 px-6 text-center bg-gradient-to-r from-green-400 via-yellow-300 to-pink-500 ${className}`}>
      <div className="text-xl font-bold text-white">Flipcoin</div>
      <div className="text-2xl font-bold text-white">{value} ETH</div>
      <div className="text-sm text-white/80">${subValue}</div>
    </div>
  );
}

