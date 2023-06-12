const { readJSONFile } = require('./helpers');

 const showPuppetInfo = (puppetModelId) => {
  const puppets = readJSONFile('./data/', 'puppet_data.json');
   const foundPuppet = puppets.find((puppet) => puppet.id === puppetModelId);
   return foundPuppet;
 };

 showPuppetInfo()

 module.exports = {
    showPuppetInfo,
 }
