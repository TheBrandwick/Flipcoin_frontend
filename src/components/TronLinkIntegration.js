import React, { useEffect, useState } from "react";
import { TronWeb } from "tronweb";

const TronLinkIntegration = () => {
    const [isTronLinkInstalled, setIsTronLinkInstalled] = useState(false);
    const [account, setAccount] = useState(null);

    const tronWeb = new TronWeb({
        fullHost: "https://api.trongrid.io",
    });


    useEffect(() => {
        if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
            setIsTronLinkInstalled(true);
            setAccount(window.tronWeb.defaultAddress.base58); // User's wallet address
        } else {
            console.log("TronLink Wallet is not installed.");
        }
    }, []);


    // const connectWallet = async () => {
    //     if (window.tronWeb) {
    //         try {
    //             const account = window.tronWeb.defaultAddress.base58;
    //             if (!account) {
    //                 console.log("Please log in to TronLink.");
    //             } else {
    //                 console.log("Wallet connected:", account);
    //                 setAccount(account);
    //             }
    //         } catch (error) {
    //             console.error("Error connecting to TronLink:", error);
    //         }
    //     } else {
    //         console.log("TronLink is not available.");
    //     }
    // };

    const connectWallet = async () => {
        console.log("TronWeb:", window.tronWeb);
        console.log("Default Address:", window.tronWeb.defaultAddress);

        if (window.tronWeb) {
            try {
                const account = window.tronWeb.defaultAddress.base58;
                if (!account) {
                    alert("Please log in to TronLink.");
                } else {
                    console.log("Wallet connected:", account);
                    setAccount(account);
                }
            } catch (error) {
                console.error("Error connecting to TronLink:", error);
            }
        } else {
            alert("TronLink Wallet is not installed. Please install it to continue.");
        }
    };


    const sendTrx = async () => {
        const recipient = "TRON_RECIPIENT_ADDRESS"; // Replace with the receiver's address
        const amount = 1000000; // Amount in SUN (1 TRX = 1,000,000 SUN)

        try {
            const transaction = await window.tronWeb.trx.sendTransaction(recipient, amount);
            console.log("Transaction successful:", transaction);
        } catch (error) {
            console.error("Transaction failed:", error);
        }
    };

    useEffect(() => {
        const handleAccountChange = () => {
            if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
                setAccount(window.tronWeb.defaultAddress.base58);
            }
        };

        window.addEventListener("message", handleAccountChange);

        return () => {
            window.removeEventListener("message", handleAccountChange);
        };
    }, []);



    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>TronLink Wallet Integration</h1>
            {account ? (
                <div>
                    <h3>Wallet Connected</h3>
                    <p><strong>Address:</strong> {account}</p>
                </div>
            ) : (
                <button
                    onClick={connectWallet}
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        backgroundColor: "#3498db",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Connect Wallet
                </button>
            )}
        </div>
    );
};

export default TronLinkIntegration;
