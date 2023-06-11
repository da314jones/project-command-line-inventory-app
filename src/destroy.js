const { readJSONFile, writeJSONFile } = require('./helpers');

const destroyPuppetInfo = (puppetId) => {
const { readJSONFile, writeJSONFile } = require("./src/helpers");
const puppetData = readJSONFile('../data/puppet_data.json');

    const filterPuppets = puppetData.filter((puppet) => puppet.puppetModelId !== puppetId
    );

    if (filterPuppets.length !== puppetData.length) {
        writeJSONFile('../data/puppet_dat.json', filterPuppets);

        console.log("Puppet deleted.");
    } else {
        console.log("No puppet info found.")
    }
};

module.exports = {
    destroyPuppetInfo,
}