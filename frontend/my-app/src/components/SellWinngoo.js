// import { useState } from 'react';
// import { ethers } from 'ethers';

// function SellWinngoo() {
//     const [amount, setAmount] = useState('');

//     const sellTokens = async () => {
//         try {
//             const provider = new ethers.providers.Web3Provider(window.ethereum);
//             const signer = provider.getSigner();

//             const tx = await contract.withdrawTokens(amount);
//             await tx.wait();
//             alert("Tokens sold successfully!");
//         } catch (err) {
//             console.error(err);
//             alert("Transaction failed");
//         }
//     };

//     return (
//         <div>
//             <h3>Sell WINNGOO Tokens</h3>
//             <input 
//                 type="text" 
//                 value={amount} 
//                 onChange={(e) => setAmount(e.target.value)} 
//                 placeholder="Enter amount of tokens to sell" />
//             <button onClick={sellTokens}>Sell Tokens</button>
//         </div>
//     );
// }

// export default SellWinngoo;
