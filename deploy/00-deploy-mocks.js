// Mocking is primarily used to for unit testing.

const { network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts;
  const chainId = network.config.chainId;

  if (developmentChains.includes(chainId)) {
    console.log("Local host detected! Deploying mocks...");
  }
};
