const { readJSONFile } = require('./helpers');

const showPuppetInfo = (puppetModelId) => {
  const puppetData = readJSONFile("../data", "puppet_data.json");

  const foundPuppet = puppetData.find((puppet) => puppet.puppetModelId === puppetModelId);
  if (foundPuppet) {
    return `${foundPuppet.puppetModelId} ${foundPuppet.name} price: ${foundPuppet.puppetPriceInDollars}`;
  } else {
    return 'Puppet not found.';
  }
};

module.exports = {
  showPuppetInfo,
};
