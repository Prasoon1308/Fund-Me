# Fund-Me

We use AggregatorV3Interface to provide Application Binary Interface(ABI) to the FundMe smart contract. Use: import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol"; to give ABI to the contract directly from the github repository.

Price Converter is used as a library for conversion of amount between the wei, ether and USD. Rinkeby chain address is used to track exact conversion rates between ether and USD. Visit: https://docs.chain.link/docs/get-the-latest-price/ for the example.
