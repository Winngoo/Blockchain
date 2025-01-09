import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import WINNGOOBuySell from './artifacts/WINNGOOBuySell.json'; 

const App = () => {
    const [amount, setAmount] = useState(0);
    const [contract, setContract] = useState(null);
    const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE"; // Replace with your deployed contract address

    useEffect(() => {
        const loadContract = async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const buySellContract = new ethers.Contract(contractAddress, WINNGOOBuySell.abi, signer);
            setContract(buySellContract);
        };

        loadContract();
    }, []);

    const buyTokens = async () => {
        if (!contract) {
            alert("Contract not loaded.");
            return;
        }
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            const tx = await contract.creditTokens(await signer.getAddress(), amount);
            await tx.wait();
            alert("Tokens purchased successfully!");
        } catch (err) {
            console.error(err);
            alert("Transaction failed");
        }
    };

    const sellTokens = async () => {
        if (!contract) {
            alert("Contract not loaded.");
            return;
        }
        try {
            const tx = await contract.withdrawTokens(amount);
            await tx.wait();
            alert("Tokens sold successfully!");
        } catch (err) {
            console.error(err);
            alert("Transaction failed");
        }
    };

    return (
        <div>
            <h1>WINNGOO Token Buy/Sell</h1>
            <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                placeholder="Amount in Rupees" 
            />
            <button onClick={buyTokens}>Buy Tokens</button>
            <button onClick={sellTokens}>Sell Tokens</button>
        </div>
    );
};

export default App;
