# Governance Proposal Smart Contract

This smart contract allows users to submit and view governance proposals

## Overview
  
- **Smart Contract:**  
  - Written in Solidity.
  - Allows users to create a proposal and retrieve all proposals.
  - Deployed on a test network (e.g., Sepolia).

- **Integration:**  
  - Uses Ethers.js to connect the frontend with the smart contract.
  - Reads from and writes to the blockchain.


## Setup and Installation

1. **Install Dependencies:**

    npm install

2. **Configure Environment Variables**

    Create a .env file in the Smart Contract folder with the following variables:
    
    SEPOLIA_RPC_URL=https://gateway.tenderly.co/public/sepolia
    PRIVATE_KEY="YOUR_PRIVATE_KEY"
    API_KEY="YOUR_API_KEY"

3. **Test the Smart Contract**
   
   Run the following command to test the smart contract:

    ```bash
   npx hardhat test

4. **Deploy the Smart Contract**
   
   Compile and deploy the contract using Hardhat:

    ```bash
   npx hardhat run scripts/deploy.js

5. **Verify the Smart Contract**
   
   Once you deploy the contract then verify the contract:

    ```bash
   npx hardhat verify <YOUR_SMART_CONTRACT_ADDRESS> --network sepolia

