
## Installation and Configuration

- Install all dependencies by running following code
  ```bash
  npm i
- Set the smart contract address which you deployed here: src/app/lib/constant.ts
- You can find abi file in src/app/data
- Change the rpc url here: src/app/lib/config.ts

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## User Interaction

- First click the Connect Button.
- Second connect with your wallet.
- Governance approach
    - If you want to make new proposal, fill in the inputs of title and description and hit Send Proposal Button
    - You can see the list of the proposals which are already deployed on the net

## Further Implementation

Since it is a test project, more features should be implemented to enhance the project

- Implement error handling in more detailed way.
    - When submitting proposal, handling errors to call the smart contract
    - When fetching proposals due to misconfiguration, handling errors
- Improve UI
    - Show the top 5 proposals and make others hidden until user click Show More button
    - Add Page/section functionality to handle large amounts of proposals