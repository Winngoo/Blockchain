// import { useState } from 'react';
// import { ethers } from 'ethers';

// function BuyWinngoo() {
//     const [amount, setAmount] = useState('');

//     const buyTokens = async () => {
//         try {
//                   const provider = new ethers.providers.Web3Provider(window.ethereum);
//             const signer = provider.getSigner();

//             const tx = await contract.creditTokens(signer.getAddress(), amount);
//             await tx.wait();
//             alert("Tokens purchased successfully!");
//         } catch (err) {
//             console.error(err);
//             alert("Transaction failed");
//         }
//     };

//     return (
//         <div>
//             <h3>Buy WINNGOO Tokens</h3>
//             <input 
//                 type="text" 
//                 value={amount} 
//                 onChange={(e) => setAmount(e.target.value)} 
//                 placeholder="Enter amount in rupees" />
//             <button onClick={buyTokens}>Buy Tokens</button>
//         </div>
//     );
// }

// export default BuyWinngoo;
