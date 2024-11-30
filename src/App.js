import React, { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { GradientCard } from "./components/GradientCard";
import { Coin } from "./components/Coin";
import { BetAmount } from "./components/BetAmount";
import CoinGreyIcon from "./components/Icons/CoinGreyIcon";
import HeadsLost from "./components/Icons/HeadsLost.jsx";
import Tails from "./components/Icons/Tails.jsx";
import TailsLost from "./components/Icons/TailsLost.jsx";
import Heads from "./components/Icons/HeadsIcon.jsx";
import { useWallet, WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import { WalletDisconnectedError, WalletError, WalletNotFoundError } from '@tronweb3/tronwallet-abstract-adapter';
import toast, { Toaster } from 'react-hot-toast';
import WalletConnect from "./components/WalletConnect.js";
import WalletConnectButton from "./WalletConnectButton.js";

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(true);
  // const [flips] = useState(6);
  const [isTelegramWebAppReady, setIsTelegramWebAppReady] = useState(false);
  const [selectedHeads, setSelectedHeads] = useState(true);
  const [flipCoin, setFlipCoin] = useState(false);
  const [lastFlips, setLastFlips] = useState([
    { chose: "heads", result: "win" },
    { chose: "tails", result: "lose" },
    { chose: "heads", result: "lose" },
    { chose: "tails", result: "win" },
    { chose: "heads", result: "win" },
  ]);
  const [flipResult, setFlipResult] = useState({});
  const [showResult, setShowResult] = useState(false);

  const [selectedAmount, setSelectedAmount] = useState("0.001");

  const betAmounts = [
    { amount: "0.001", percentage: "3.2" },
    { amount: "0.002", percentage: "6.89" },
    { amount: "0.003", percentage: "9.88" },
    { amount: "0.005", percentage: "16.47" },
    { amount: "0.0075", percentage: "24.78" },
    { amount: "0.01", percentage: "32.96" },
  ];

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
  };

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");

    // Initialize Telegram Web App
    if (window.Telegram) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
      setIsTelegramWebAppReady(true);
    }
  }, []);

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  //   document.documentElement.classList.toggle("dark");
  // };

  if (!isTelegramWebAppReady) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const handleCoinFlip = () => {
    setFlipCoin(true);
    setShowResult(true);
    const randomResult = Math.random() > 0.5 ? "win" : "lose";
    const chosenSide = selectedHeads ? "heads" : "tails";

    setTimeout(() => {
      setFlipCoin(false);
      setFlipResult({ chose: chosenSide, result: randomResult });
      setLastFlips((prevFlips) => [
        { chose: chosenSide, result: randomResult },
        ...prevFlips,
      ]);
    }, 5000);
  };

  const handleResetFlip = () => {
    setShowResult(false);
    setFlipResult({});
  };

  // 
  // const tronWeb = new TronWeb({
  //   fullHost: 'https://api.trongrid.io',
  //   privateKey: 'd92a4a1e-46e7-4f94-9377-84a124b90187'
  // });

  // handle connect tronlink wallet
  // const handleConnectWallet = async () => {
  //   if (window.tronWeb) {
  //     const tronWebState = await tronWeb.trx.getAccount();
  //     console.log('Connected to TronLink!', tronWebState);
  //   } else {
  //     console.log('TronLink not installed');
  //   }
  // }



  return (
    <div className="min-h-screen bg-black text-[#fffaee] p-4 flex flex-col items-center">
      {/* Last Flips */}
      <div className="flex justify-between flex-col lg:flex-row w-full lg:gap-4">
        <div className="w-full flex items-center gap-2 mb-4 h-12 border p-2 border-[#2b2f32] bg-[#1e1f21] rounded-full">
          <span className="text-lg font-bold whitespace-nowrap">
            Last Flips:
          </span>
          <div className="flex overflow-x-scroll gap-2 no-scrollbar">
            {lastFlips.map((flip, i) => (
              <div key={i} className="rounded-full flex-shrink-0">
                {flip.chose === "heads" ? (
                  //   <img
                  //   src={flip.result === "win" ? "/Heads.svg" : "/HeadsLost.svg"}
                  //   alt={`Flip ${i}`}
                  // />
                  flip?.result === "win" ? (
                    <Heads />
                  ) : (
                    <HeadsLost />
                  )
                ) : // <img
                  //     src={flip.result === "win" ? "/Tails.svg" : "/TailsLost.svg"}
                  //     alt={`Flip ${i}`}
                  //   />
                  flip?.result === "win" ? (
                    <Tails />
                  ) : (
                    <TailsLost />
                  )}
              </div>
            ))}
          </div>
        </div>

        {/* <TronLinkIntegration /> */}
        {/* <WalletConnect /> */}
        <WalletConnectButton />
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
        value="0.47222"
        subValue="467.31"
        className="w-full max-w-md mb-4"
      />
      <div className="text-sm text-center mb-4">
        you are participating in the Flipcoin lottery
      </div>

      {/* Coin Visualization */}
      <Coin flipCoin={flipCoin} flipResult={flipResult} />

      {/* Flipcoin ROI */}
      <div className="text-center mb-8 border border-[#2b2f32] py-2 px-5 my-5 w-[256px] rounded-full">
        <div className="text-lg font-bold">Flipcoin ROI</div>
        <div className="gradientBackground">$467.31 × 224.72%</div>
      </div>

      {/* Betting Options */}
      {!showResult ? (
        <>
          <div className="text-center mb-4">I bet:</div>
          <div className="flex gap-4 mb-8">
            <Button
              onClick={() => setSelectedHeads(true)}
              className={`h-14 w-32 border border-[#2b2f32] ${selectedHeads ? "btnSecondaryActive" : "bg-[#1e1f21]"
                }`}
            >
              Heads
            </Button>
            <Button
              onClick={() => setSelectedHeads(false)}
              className={`h-14 w-32 border border-[#2b2f32] ${!selectedHeads ? "btnSecondaryActive" : "bg-[#1e1f21]"
                }`}
            >
              Tails
            </Button>
          </div>

          {/* Bet Amounts */}
          <div className="grid grid-cols-3 gap-2 w-full max-w-md mb-8">
            {betAmounts.map((bet) => (
              <BetAmount
                key={bet.amount}
                amount={bet.amount}
                percentage={bet.percentage}
                isSelected={bet.amount === selectedAmount}
                onClick={handleAmountClick}
                className={
                  bet.amount === selectedAmount ? "btnSecondaryActive" : ""
                }
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <Button
            onClick={handleResetFlip}
            className="bg-transparent border border-[#2b2f32] w-full my-3 btnSecondaryActive h-14 max-w-md"
          >
            Try Again
          </Button>
        </>
      )}

      {/* Bottom Buttons */}
      <div className="flex gap-4 w-full max-w-md mb-8">
        <Button className="flex-1 bg-transparent border border-[#2b2f32] btnSecondaryActive h-14">
          Connect Wallet
        </Button>
        <Button
          onClick={handleCoinFlip}
          className="flex-1 bg-transparent border border-[#2b2f32] btnSecondaryActive h-14"
        >
          Flip in Fun Mode
        </Button>
      </div>

      {/* Footer Links */}
      {/* <div className="flex flex-col items-center gap-2 text-blue-500">
        <a href="#" className="hover:underline">
          Referral System
        </a>
        <a href="#" className="hover:underline">
          FAQ
        </a>
        <a href="#" className="hover:underline">
          Terms & Conditions
        </a>
      </div> */}
      <div className="flex flex-col items-center gap-2 text-blue-500">
        <a href="/referral-system" className="hover:underline">
          Referral System
        </a>
        <a href="/faq" className="hover:underline">
          FAQ
        </a>
        <a href="/terms-and-conditions" className="hover:underline">
          Terms & Conditions
        </a>
      </div>
    </div>
  );
}

function ConnectComponent() {
  const { connect, disconnect, select, connected } = useWallet();
  return (<div>
    <button type="button" onClick={() => select('TronLink Adapter')}> Select TronLink</button>
    <button type="button" disabled={connected} onClick={connect}>Connect</button><br />
    <button type="button" disabled={!connected} onClick={disconnect}>Disconnect</button>
  </div>);
}
function Profile() {
  const { address, connected, wallet } = useWallet();
  return (<div>
    <p> <span>Connection Status:</span> {connected ? 'Connected' : 'Disconnected'}</p>
    <p> <span>Your selected Wallet:</span> {wallet?.adapter.name} </p>
    <p> <span>Your Address:</span> {address} </p>
  </div>);
}

export default App;
