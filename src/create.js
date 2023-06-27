const { nanoid } = require("nanoid");
const { writeJSONFile } = require('./helpers');
const puppetData = require('../data/puppet_data.json');

const createMotionPuppet = (puppetName, puppetPrice) => {
const newPuppet = {
    puppetModelId: nanoid(4),
    name: puppetName,
    puppetPriceInDollars: Number(puppetPrice),
    inStock: true
};
puppetData.push(newPuppet);
writeJSONFile('./data', 'puppet_data.json', puppetData);
console.log(`New puppet created successfully:\n${JSON.stringify(newPuppet, null, 2)}`);
};

if (process.argv[2] && process.argv[3]) {
const puppetName = process.argv[2];
const puppetPrice = process.argv[3];
createMotionPuppet(puppetName, puppetPrice);
} else {
console.log('Please enter a puppetName and puppetPrice.');
}

module.exports = {
    createMotionPuppet
}