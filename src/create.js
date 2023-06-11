const { nanoid } = require("nanoid");
const { faker } = require('@faker-js/faker');
const  puppetData  = require('../data/puppet_data.json');
const { writeJSONFile } = require('./helpers');

const createNewData = (puppetName, puppetPrice) => {
    const newPuppet = {
        puppetName: puppetName,
        puppetModelId: nanoid(4),
        puppetPriceInCents: puppetPrice,
        inStock: faker.datatype.boolean(0.8)
    }
    puppetData.push(newPuppet)
    writeJSONFile('./data','puppet_update', puppetData)
}
// console.log(puppetData.push(newPuppet))
createNewData()
console.log("New puppet created.")

module.exports = {
    createNewData,
}
