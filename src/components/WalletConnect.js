import React, { useEffect } from 'react';
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';

const WalletConnect = () => {
    const { wallets, select, connect, disconnect, connected, address, connecting, wallet } = useWallet();


    useEffect(() => {
        console.log('Available wallets:', wallets); // Debugging available wallets

        wallets.forEach((wallet) => {
            console.log(`Wallet: ${wallet.name}`);
            console.log(`Ready: ${wallet.ready}`);
            console.log(`Ready State: ${wallet.readyState}`);
        });
    }, [wallets]);

    // debugging
    useEffect(() => {
        if (wallets.length === 0) {
            console.log('No wallets found.');
            return;
        }

        wallets.forEach((w, index) => {
            console.log(`Wallet [${index}]:`, w?.adapter?.name || 'Unknown');
            console.log(`Ready State:`, w?.adapter?.readyState || 'Unknown');
            console.log(`State:`, w?.state || 'Unknown');
        });

        if (wallet) {
            console.log('Current Wallet:', wallet.adapter.name);
            console.log('Wallet Connected:', connected);
        } else {
            console.log('No wallet connected.');
        }
    }, [wallets, wallet, connected]);
    // debugging

    const handleConnect = async () => {
        try {
            const walletName = 'TronLink'; // Replace with the exact name from console logs
            const selectedWallet = wallets.adapter.find((wallet) => wallet.name === walletName);

            if (!selectedWallet || !selectedWallet.ready) {
                alert(`${walletName} is not available. Please install or enable it.`);
                return;
            }

            await select(walletName);
            await connect();
        } catch (error) {
            if (error.name === 'WalletNotSelectedError') {
                alert('Please select a wallet before connecting.');
            } else {
                console.error('Error connecting wallet:', error.message);
            }
        }
    };

    return (
        <div>
            <h1>Tron Wallet Connect</h1>
            {connected ? (
                <p>Connected Wallet Address: {address}</p>
            ) : (
                <button onClick={handleConnect} disabled={connecting}>
                    {connecting ? 'Connecting...' : 'Connect Wallet'}
                </button>
            )}
            {connected && <button onClick={disconnect}>Disconnect</button>}
        </div>
    );
};

export default WalletConnect;
