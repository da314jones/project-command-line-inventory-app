const { writeJSONFile } = require("./helpers");
const  puppetData  = require('../data/puppet_data.json');

const destroyPuppetInfo = (puppetId) => {

    const filterPuppets = puppetData.filter((puppet) => puppet.puppetModelId !== puppetId
    );

    if (filterPuppets.length !== puppetData.length) {
        writeJSONFile('../data/puppet_data.json', filterPuppets);

        console.log("Puppet deleted.");
    } else {
        console.log("No puppet info found.")
    }
};

destroyPuppetInfo()

module.exports = {
    destroyPuppetInfo,
}
