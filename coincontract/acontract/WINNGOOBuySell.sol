// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./WINNGOOToken.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract WINNGOOBuySell is Ownable(msg.sender) {
    WINNGOOToken public token;

    uint256 public constant TOKENS_PER_RUPEE = 1 * 10 ** 18; // 1 Rupee = 1 WINNGOO for testing

    constructor(address tokenAddress) {
        token = WINNGOOToken(tokenAddress);
    }

    function creditTokens(address buyer, uint256 rupeesPaid) public onlyOwner {
        uint256 amountToCredit = rupeesPaid * TOKENS_PER_RUPEE;
        require(token.balanceOf(address(this)) >= amountToCredit, "Not enough WINNGOO tokens");

        token.transfer(buyer, amountToCredit);
    }

    function withdrawTokens(uint256 amount) public onlyOwner {
        require(token.balanceOf(address(this)) >= amount, "Not enough WINNGOO tokens");
        token.transfer(owner(), amount);
    }

    function withdrawAccidentallySentToken(address tokenAddress, uint256 amount) public onlyOwner {
        IERC20(tokenAddress).transfer(owner(), amount);
    }
}
