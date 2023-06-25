const { writeJSONFile } = require('./helpers');
const puppetData = require('../data/puppet_data.json');

const destroyMotionPuppet = (puppetKey) => {
  let deletedPuppet = null;

    const index = puppetData.findIndex(
    (puppet) =>
        puppet.puppetModelId === puppetKey || puppet.name === puppetKey
    );

    if (index !== -1) {
    deletedPuppet = puppetData.splice(index, 1)[0];
    writeJSONFile('./data', 'puppet_data.json', puppetData);
    console.log(`Puppet '${deletedPuppet.name}' with ID '${deletedPuppet.puppetModelId}' has been deleted.`);
    console.log(deletedPuppet);
    } else {
    console.log(`Puppet with ID/name '${puppetIdentifier}' not found.`);
    }
};

if (process.argv[2]) {
    const puppetIdentifier = process.argv[2];
    destroyMotionPuppet(puppetIdentifier);
} else {
    console.log("Please enter the puppet ID/name.");
}

module.exports = {
    destroyMotionPuppet
};
