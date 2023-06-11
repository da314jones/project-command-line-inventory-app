const puppetData = require('../data/puppet_data.json');
const { readJSONFile, writeJSONFile } = require("./helpers");

const puppetIndices = () => {
    return puppetData.map((puppet) => puppet);
};

puppetIndices()

module.exports = {
    puppetIndices,
}