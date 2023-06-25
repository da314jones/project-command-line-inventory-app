const puppetData = require('../data/puppet_data.json');

const totalPrice = (puppetIdentifiers) => {
  let totalCost = 0;

  puppetIdentifiers.forEach((identifier) => {
    const puppet = puppetData.find(
      (puppet) =>
        puppet.puppetModelId === identifier || puppet.name.toLowerCase() === identifier.toLowerCase()
    );

    if (puppet) {
      if (puppet.puppetPriceInDollars && typeof puppet.puppetPriceInDollars === 'number') {
        totalCost += puppet.puppetPriceInDollars;
      }
    }
  });

  return totalCost;
};

module.exports = {
  totalPrice,
};
