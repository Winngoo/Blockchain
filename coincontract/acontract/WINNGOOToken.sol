// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract WINNGOOToken is ERC20, Ownable(msg.sender) {
    constructor(uint256 initialSupply) ERC20("WINNGOO", "WNGO") {
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}
