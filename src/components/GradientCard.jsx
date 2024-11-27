import React from 'react';

export function GradientCard({ value, subValue, className }) {
  return (
    <div className={`rounded-full max-w-[263px] h-[75px] px-6 text-center ${className}`}
    style={{
        background: 'linear-gradient(to right, #efff36, #b3f47e, #45e0f7, #69fa6e, #f1fb4b, #ff3539, #ff2cea) padding-box, linear-gradient(to bottom, #272a2d, #9fa1a4) border-box',
      }}
    >
      <div className="text-lg font-bold text-black">Flipcoin</div>
      <div className="text-xl font-bold text-black">{value} ETH</div>
      <div className="text-xs text-black">${subValue}</div>
    </div>
  );
}

