const { readJSONFile, writeJSONFile } = require('./helpers');
const { puppetData } = require('../data/puppet_data.json');

const totalPrice = (puppets) => {
    const total = puppetData.reduce((a, b) => (a + b.puppetPriceInDollars))
    return total
};

totalPrice();

module.exports = {
    totalPrice,
}
