const { readJSONFile } = require('./helpers');

const totalPrice = (puppetNames) => {
  const puppetData = readJSONFile("../data", "puppet_data.json");

  let total = 0;

  for (const puppet of puppetData) {
    if (puppetNames.includes(puppet.name)) {
      total += parseFloat(puppet.puppetPriceInDollars);
    }
  }

  return total.toFixed(2);
};

module.exports = {
  totalPrice,
};
