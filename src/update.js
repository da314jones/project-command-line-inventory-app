const { readJSONFile, writeJSONFile } = require('./helpers');

const puppetUpdate = (puppetId, puppetName, puppetPrice) => {
    const puppets = readJSONFile('../data/puppet_data.json');

    const puppetIndex = puppets.findIndex(
        (puppet) => puppet.puppetModelId === puppetId
    );

    if (puppetIndex !== -1) {
        puppets[puppetIndex].productName = puppetName;
        puppets[puppetIndex].puppetPriceInCents = puppetPrice;

        writeJSONFile('..data/puppet_data.json', puppets);
        
        console.log("New puppet info updated.");
    } else {
        console.log("No puppet info found.");
    }
};

puppetUpdate()

module.exports = {
    puppetUpdate
}
