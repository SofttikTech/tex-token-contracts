const TheEllipsisExchange = artifacts.require('./TheEllipsisExchange.sol');

module.exports = async function (deployer, network, accounts) {

  /* The Ellipsis Exchange */
  const _decimals = 18;
  const _name = 'The Ellipsis Exchange';
  const _symbol = 'TEX';
  const _admin = (await web3.eth.getAccounts())[0];                                                     // TODO: Replace me

  await deployer.deploy(TheEllipsisExchange, _name, _symbol, _decimals);
  // await deployer.deploy(TheEllipsisExchange);

  const deployedToken = await TheEllipsisExchange.deployed();

  console.log('***************************The Ellipsis Exchange Address = ', deployedToken.address);

};

