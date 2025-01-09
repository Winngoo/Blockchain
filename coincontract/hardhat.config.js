require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.18", 
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/11be0934c3c34f29b5d92a09169b50fb", // Infura project ID
      accounts: [`0x0ee34bf2a628146e9eb0ecaeec46af2d8a7fd98d0b17b51c763cea97c875d4c6`] // Your private key
    }
  }
};
