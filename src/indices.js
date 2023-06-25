const puppetData = require('../data/puppet_data.json');

const motionPuppetIndices = (puppetKey) => {
  const puppetIndex = puppetData.findIndex(
    (puppet) =>
      puppet.puppetModelId === puppetKey || puppet.name === puppetKey
  );

  if (puppetIndex !== -1) {
    console.log(`Puppet Index: ${puppetIndex}`);
  } else {
    console.log(`Puppet with ID/name '${puppetKey}' not found.`);
  }
};

if (process.argv[2]) {
  const puppetKey = process.argv[2];
  motionPuppetIndices(puppetKey);
} else {
  console.log("Please enter the puppet ID/name.");
}

module.exports = {
  motionPuppetIndices
};
