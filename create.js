const { nanoid } = require("nanoid");
const { readJSONFile, writeJSONFile } = require('./src/helpers')

const createNewData = (puppetName, puppetPrice) => {
    const puppet = {
        puppetName: puppetName,
        puppetModelId: nanoid(4),
        puppetPriceInCents: puppetPrice,
        inStock: faker.datatype.boolean(0.9)
    }
    puppetData.push(newPuppet)
    writeJSONFile('./data','puppet_data.json', puppetData)
}


console.log("New puppet created.")

module.exports = {
    createNewData,
}