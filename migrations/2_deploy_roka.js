const Roka = artifacts.require("Roka");

module.exports = async function (deployer, network, accounts) {
  // Deploy Roka
  await deployer.deploy(Roka);
  const roka = await Roka.deployed();
};
