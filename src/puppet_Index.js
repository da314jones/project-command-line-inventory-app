const { puppetData } = require('../data/puppet_data.json');
const { readJSONFile, writeJSONFile } = require("./src/helpers");

const puppetIndices = () => {
    return puppetData.map((puppet) => puppet);
};

module.exports = {
    puppetIndices,
}