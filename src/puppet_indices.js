const { readJSONFile } = require("./helpers");

const puppetIndices = () => {
  const puppetData = readJSONFile("../data", "puppet_data.json");
  return Object.keys(puppetData);
};

module.exports = {
  puppetIndices,
};
