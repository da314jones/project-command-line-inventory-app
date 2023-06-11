const { readJSONFile } = require('./helpers');
const puppetData = require('../data/puppet_data.json');

 const showPuppetInfo = (puppets, puppetModelId) => {
   const foundPuppet = puppetData.find((puppets) => puppets.Id === puppetModelId);
   return foundPuppet.id + " " + foundPuppet.name + " price: " + foundPuppet.puppetPriceInDollars  
 };

 showPuppetInfo()

 module.exports = {
    showPuppetInfo,
 }