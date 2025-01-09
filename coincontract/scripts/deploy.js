async function main() {
  // We get the contract to deploy
  const WINNGOOToken = await ethers.getContractFactory("WINNGOOToken");
  const WINNGOOBuySell = await ethers.getContractFactory("WINNGOOBuySell");

  // Deploy WINNGOOToken contract with an initial supply
  const token = await WINNGOOToken.deploy(ethers.utils.parseUnits("1000000", 18));
  await token.deployed();
  console.log("WINNGOOToken deployed to:", token.address);

  // Deploy WINNGOOBuySell contract and link it with the WINNGOOToken
  const buySell = await WINNGOOBuySell.deploy(token.address);
  await buySell.deployed();
  console.log("WINNGOOBuySell deployed to:", buySell.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
