import React, { useState, useEffect } from 'react';
import * as fcl from "@onflow/fcl";

export const RealEstateContext = React.createContext();

export const RealEstateProvider = ({ children }) => {
    const [walletAddress, setWalletAddress] = useState("");
    const [walletConnected, setWalletConnected] = useState(false);
    const [data, setData] = useState({
        propertyName: "",
        location: "",
        description: "",
        price: "",
    });

    fcl.config().put("accessNode.api", "https://access-testnet.onflow.org");
    fcl.config().put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn");

    const connectWallet = () => {
        return fcl.authenticate();
    }



    const handleConnectWallet = async (e) => {
        e.preventDefault();
        try {
            await connectWallet();
            const account = (await fcl.currentUser().authorization()).account; 
            setWalletAddress(account);
            setWalletConnected(true);
        } catch (error) {
            console.error("Error connecting wallet:", error);
        }
    };

    return (
        <RealEstateContext.Provider value={{ walletAddress, walletConnected, data, setData, handleConnectWallet }}>
            {children}
        </RealEstateContext.Provider>
    );
};

