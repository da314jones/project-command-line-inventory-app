const { writeJSONFile, readJSONFile } = require("./helpers");

const destroyPuppetInfo = (puppetId) => {
  const puppetData = readJSONFile("../data", "puppet_data.json");

  const filteredPuppets = puppetData.filter((puppet) => puppet.puppetModelId !== puppetId);

  if (filteredPuppets.length !== puppetData.length) {
    writeJSONFile("../data", "puppet_data.json", filteredPuppets);
    console.log("Puppet deleted.");
  } else {
    console.log("No puppet info found.");
  }
};

module.exports = {
  destroyPuppetInfo,
};
