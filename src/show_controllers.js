const { readJSONFile } = require('./helpers');

 const showPuppetInfo = () => {
    const puppyData = readJSONFile('../data/puppet_data.json');
    console.log("Puppet Info:", puppetData)
 };

 showPuppetInfo()

 module.exports = {
    showPuppetInfo
 }