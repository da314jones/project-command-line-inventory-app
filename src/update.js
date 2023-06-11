const { readJSONFile, writeJSONFile } = require('./helpers');

const puppetUpdate = (puppetId, puppetName, puppetPrice) => {
    const puppetData = require('../data/puppet_data.json');

    const puppetIndex = puppetData.findIndex(
        (puppet) => puppet.puppetModelId === puppetId
    );

    if (puppetIndex !== -1) {
        puppetData[puppetIndex].productName = puppetName;
        puppetData[puppetIndex].puppetPriceInCents = puppetPrice;

        writeJSONFile('..data/puppet_data.json', puppetData);
        
        console.log("New puppet info updated.");
    } else {
        console.log("No puppet info found.");
    }
};

puppetUpdate()

module.exports = {
    puppetUpdate
}
