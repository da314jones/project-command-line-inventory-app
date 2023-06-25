const { readJSONFile } = require('./helpers');
const puppetData = require('../data/puppet_data.json');

const showMotionPuppet = (puppetKey) => {
  const puppet = puppetData.find(
    (puppet) =>
      puppet.puppetModelId === puppetKey || puppet.name === puppetKey
  );

  if (puppet) {
    console.log(`Puppet Details:`);
    console.log(puppet);
  } else {
    console.log(`Puppet with ID/name '${puppetKey}' not found.`);
  }
};

if (process.argv[3]) {
  const puppetKey = process.argv[3];
  showMotionPuppet(puppetKey);
} else {
  console.log("Please enter the puppet ID/name.");
}

module.exports = {
  showMotionPuppet
};
