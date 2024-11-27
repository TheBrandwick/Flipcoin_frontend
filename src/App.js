import React, { useState, useEffect } from 'react';
import { Button } from "./components/Button";
import { GradientCard } from "./components/GradientCard";
import { Coin } from "./components/Coin";
import { BetAmount } from "./components/BetAmount";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [flips] = useState(6);
  const [lastFlips] = useState(['win', 'win', 'lose', 'win', 'lose']);
  const [isTelegramWebAppReady, setIsTelegramWebAppReady] = useState(false);
  const [selectedHeads,setSelectedHeads] = useState(true);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');

    // Initialize Telegram Web App
    if (window.Telegram) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
      setIsTelegramWebAppReady(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  if (!isTelegramWebAppReady) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-[#fffaee] p-4 flex flex-col items-center">
      {/* Last Flips */}
      <div className='flex justify-between flex-col lg:flex-row w-full lg:gap-4'>
      <div className="w-full flex items-center gap-2 mb-4 h-12 border p-2 border-[#2b2f32] bg-[#1e1f21] rounded-full">
        <span className="text-lg font-bold">Last Flips:</span>
        {lastFlips.map((flip, i) => (
          <div
            key={i}
            className={`rounded-full`}
          >
            <img src={flip === 'win' ? '/Heads.svg' : '/HeadsLost.svg'} />
          </div>
        ))}
      </div>
      <Button style={{ borderRadius: '9999px' }} className="w-full lg:max-w-md h-12 mb-4 bg-transparent border border-[#568CFF] hover:font-600 rounded-[9999px]">
        Connect Wallet
      </Button>
      </div>

      {/* Theme Toggle and Flips Counter */}
      {/* <div className="w-full max-w-md flex justify-between mb-4">
        <Button
          onClick={toggleTheme}
          className="text-gray-400 hover:text-white"
        >
          {isDarkMode ? '🌙' : '☀️'}
          <span className="ml-2">Light theme</span>
        </Button>
        <div className="text-sm text-gray-400">
          👥 {flips} Flipping
        </div>
      </div> */}

      {/* Flipcoin Display */}
      <GradientCard
        value="0.22472"
        subValue="740.31"
        className="w-full max-w-md mb-4"
      />
      <div className="text-sm text-center mb-4">
        you are participating in the Flipcoin lottery
      </div>

      {/* Coin Visualization */}
      <Coin />

      {/* Flipcoin ROI */}
      <div className="text-center mb-8 border border-[#2b2f32] py-2 px-5 my-5 w-[256px] rounded-full">
        <div className="text-lg font-bold">Flipcoin ROI</div>
        <div className="gradientBackground">$740.31 × 224.72%</div>
      </div>

      {/* Betting Options */}
      <div className="text-center mb-4">I bet:</div>
      <div className="flex gap-4 mb-8">
        {/* <Button className={`btnSecondaryActive h-14 w-32 border border-[#2b2f32]`}>
          Heads
        </Button>
        <Button className="w-32 bg-[#1e1f21] h-14 border border-[#2b2f32]">
          Tails
        </Button> */}
         <Button
          onClick={() => setSelectedHeads(true)}
          className={`h-14 w-32 border border-[#2b2f32] ${
            selectedHeads ? 'btnSecondaryActive' : 'bg-[#1e1f21]'
          }`}
        >
          Heads
        </Button>
        <Button
          onClick={() => setSelectedHeads(false)}
          className={`h-14 w-32 border border-[#2b2f32] ${
            !selectedHeads ? 'btnSecondaryActive' : 'bg-[#1e1f21]'
          }`}
        >
          Tails
        </Button>
      </div>

      {/* Bet Amounts */}
      <div className="grid grid-cols-3 gap-2 w-full max-w-md mb-8">
        <BetAmount amount="0.001" percentage="3.2" />
        <BetAmount amount="0.002" percentage="6.89" />
        <BetAmount amount="0.003" percentage="9.88" />
        <BetAmount amount="0.005" percentage="16.47" />
        <BetAmount amount="0.0075" percentage="24.78" />
        <BetAmount amount="0.01" percentage="32.96" />
      </div>

      {/* Bottom Buttons */}
      <div className="flex gap-4 w-full max-w-md mb-8">
        <Button className="flex-1 bg-transparent border border-[#2b2f32] btnSecondaryActive h-14">
          Connect Wallet
        </Button>
        <Button className="flex-1 bg-transparent border border-[#2b2f32] btnSecondaryActive h-14">
          Flip in Fun Mode
        </Button>
      </div>

      {/* Footer Links */}
      <div className="flex flex-col items-center gap-2 text-blue-500">
        <a href="#" className="hover:underline">Referral System</a>
        <a href="#" className="hover:underline">FAQ</a>
        <a href="#" className="hover:underline">Terms & Conditions</a>
      </div>
    </div>
  );
}

export default App;