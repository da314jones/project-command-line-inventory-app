const { writeJSONFile } = require('./helpers');
const puppetData = require('../data/puppet_data.json');

const updateMotionPuppet = (puppetId, inStock) => {
  const puppetIndex = puppetData.findIndex((puppet) => puppet.puppetModelId === puppetId);

  if (puppetIndex !== -1) {
    puppetData[puppetIndex].inStock = inStock;
    puppetData[puppetIndex].puppetModelId = puppetId;
    writeJSONFile('./data', 'puppet_data.json', puppetData);
    console.log(`Puppet with ID '${puppetId}' has been updated.`);
    console.log(puppetData[puppetIndex]);
  } else {
    console.log(`Puppet with ID '${puppetId}' not found.`);
  }
};

if (process.argv[3]) {
  const puppetId = process.argv[3];
  const inStock = process.argv[4] === 'true';

  updateMotionPuppet(puppetId, inStock);
} else {
  console.log("Please provide the puppet ID and inStock value as command-line arguments.");
}

module.exports = {
  updateMotionPuppet
};

