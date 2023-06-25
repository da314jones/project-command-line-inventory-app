const { writeJSONFile, readJSONFile } = require('./helpers');

const puppetUpdate = (puppetId, puppetName, puppetPrice) => {
  const puppetData = readJSONFile("../data", "puppet_data.json");

  const puppetIndex = puppetData.findIndex((puppet) => puppet.puppetModelId === puppetId);

  if (puppetIndex !== -1) {
    puppetData[puppetIndex].name = puppetName;
    puppetData[puppetIndex].puppetPriceInDollars = puppetPrice;

    writeJSONFile("../data", "puppet_data.json", puppetData);

    console.log("Puppet info updated.");
  } else {
    console.log("No puppet with this ID found.");
  }
};

module.exports = {
  puppetUpdate
};
