// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";

contract UnityToken is ERC20, Ownable, ReentrancyGuard {
    using Math for uint256;

    uint256 public constant TOTAL_SUPPLY = 100_000_000 * 10**18; // 100 million tokens
    uint256 public constant MIN_PURCHASE = 0.1 ether;
    uint256 public constant MAX_PURCHASE = 5 ether;
    uint256 public constant TOKENS_PER_ETH = 10; // 1 ETH = 10 UNITY tokens

    uint256 public saleStart;
    uint256 public saleEnd;
    bool public saleActive;

    address public treasuryWallet;
    address public teamWallet;
    address public marketingWallet;
    address public liquidityWallet;

    event TokensPurchased(address indexed buyer, uint256 ethAmount, uint256 tokenAmount);

    constructor(
        address _treasuryWallet,
        address _teamWallet,
        address _marketingWallet,
        address _liquidityWallet
    ) ERC20("Unity Token", "UNITY") Ownable(msg.sender) {
        require(_treasuryWallet != address(0), "Invalid treasury wallet");
        require(_teamWallet != address(0), "Invalid team wallet");
        require(_marketingWallet != address(0), "Invalid marketing wallet");
        require(_liquidityWallet != address(0), "Invalid liquidity wallet");

        treasuryWallet = _treasuryWallet;
        teamWallet = _teamWallet;
        marketingWallet = _marketingWallet;
        liquidityWallet = _liquidityWallet;

        // Mint and distribute tokens according to tokenomics
        _mint(address(this), TOTAL_SUPPLY * 40 / 100); // 40% for public sale
        _mint(treasuryWallet, TOTAL_SUPPLY * 30 / 100); // 30% for community treasury
        _mint(teamWallet, TOTAL_SUPPLY * 15 / 100); // 15% for team & advisors
        _mint(marketingWallet, TOTAL_SUPPLY * 10 / 100); // 10% for marketing
        _mint(liquidityWallet, TOTAL_SUPPLY * 5 / 100); // 5% for liquidity
    }

    function startSale(uint256 durationInDays) external onlyOwner {
        require(!saleActive, "Sale already active");
        saleStart = block.timestamp;
        saleEnd = block.timestamp + (durationInDays * 1 days);
        saleActive = true;
    }

    function endSale() external onlyOwner {
        require(saleActive, "Sale not active");
        saleActive = false;
    }

    function purchaseTokens() external payable nonReentrant {
        require(saleActive, "Sale not active");
        require(block.timestamp >= saleStart && block.timestamp <= saleEnd, "Sale not open");
        require(msg.value >= MIN_PURCHASE, "Below minimum purchase");
        require(msg.value <= MAX_PURCHASE, "Exceeds maximum purchase");

        uint256 tokenAmount = msg.value * TOKENS_PER_ETH;
        require(balanceOf(address(this)) >= tokenAmount, "Insufficient tokens for sale");

        _transfer(address(this), msg.sender, tokenAmount);
        emit TokensPurchased(msg.sender, msg.value, tokenAmount);
    }

    function withdrawEth() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No ETH to withdraw");
        (bool sent, ) = payable(owner()).call{value: balance}("");
        require(sent, "Failed to withdraw ETH");
    }

    // Emergency function to recover tokens sent to the contract by mistake
    function recoverTokens(address tokenAddress) external onlyOwner {
        require(tokenAddress != address(this), "Cannot recover UNITY tokens");
        IERC20 token = IERC20(tokenAddress);
        uint256 balance = token.balanceOf(address(this));
        require(balance > 0, "No tokens to recover");
        require(token.transfer(owner(), balance), "Token transfer failed");
    }
} 