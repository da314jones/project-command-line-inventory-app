const { nanoid } = require("nanoid");
const { faker } = require('@faker-js/faker');
const { readJSONFile,writeJSONFile } = require('./helpers');

const createNewData = (puppetName, puppetPrice) => {
    const puppets = readJSONFile('./data/', 'puppet_data.json');
    const newPuppet = {
        puppetName: puppetName,
        puppetModelId: nanoid(4),
        puppetPriceInCents: puppetPrice,
        inStock: faker.datatype.boolean(0.8)
    }
    puppets.push(newPuppet)
    writeJSONFile('./data','puppet_update', puppets)
    return puppets;
}
// console.log(puppetData.push(newPuppet))
createNewData()
console.log("New puppet created.")

module.exports = {
    createNewData,
}
