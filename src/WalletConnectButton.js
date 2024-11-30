import React from 'react';
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
import { Button } from './components/Button';
import CoinGreyIcon from './components/Icons/CoinGreyIcon';

const WalletConnectButton = () => {
    const { wallets, select, connect, disconnect, connected, wallet } = useWallet();

    const handleConnect = async () => {
        try {
            const walletName = 'TronLink'; // Ensure this matches the adapter's name
            const targetWallet = wallets.find((w) => w?.adapter?.name === walletName);
            console.log('Wallets:', wallets);

            if (!targetWallet) {
                alert('TronLink is not available. Please install or enable it.');
                return;
            }

            // Select the wallet
            await select(walletName);
            console.log('Wallet selected:', walletName);

            // Connect the wallet
            await connect();
            console.log('Wallet connected:', wallet.adapter?.name || 'Unknown');
        } catch (error) {
            console.error('Error during wallet connection:', error);
        }
    };

    const handleDisconnect = async () => {
        try {
            await disconnect();
            console.log('Wallet disconnected.');
        } catch (error) {
            console.error('Error disconnecting wallet:', error);
        }
    };

    return (
        <div className="flex gap-4 w-full max-w-md mb-8">
            {!connected ? (

                <Button onClick={() => handleConnect()}
                    style={{ borderRadius: "9999px" }}
                    className="w-full lg:w-fit whitespace-nowrap px-10 lg:max-w-md h-12 flex gap-3 mb-4 bg-transparent border border-[#568CFF] hover:font-semibold rounded-[9999px]"
                >
                    Connect Wallet <CoinGreyIcon />
                    {/* <img src="/coingray.svg" alt="coingray" /> */}
                </Button>
            ) : (
                <button onClick={handleDisconnect}>Disconnect Wallet</button>
            )}
            {wallet && connected && (
                <p>Connected Wallet: {wallet.adapter?.name}</p>
            )}


        </div>
    );
};

export default WalletConnectButton;
