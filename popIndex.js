const { nanoid } = require("nanoid");
const { faker } = require('@faker-js/faker');
const { readJSONFile,writeJSONFile } = require('./src/helpers')

const createMotionPuppet = (dataPopulation) => {
    const puppets = [];
    
    for (let i = 0; i < dataPopulation; i++) {
        const puppet = {        
        puppetModelId: nanoid(4),
        name: `${faker.word.adverb()} ${faker.word.adjective()}`,
        puppetPriceInDollars: `$${((faker.commerce.price({ min: 10000, max: 20000 })) / 100).toFixed(2)}`,
        inStock: faker.datatype.boolean(0.9)
    }
    puppets.push(puppet)
}
    return puppets
} 

console.log(createMotionPuppet())


const run = () => {
    const puppetData = readJSONFile("./data", "puppet_data.json");
    console.log(puppetData);

    if (process.argv[2]) {
        const puppetInventory = createMotionPuppet(Number(process.argv[2]));
        puppetData.push(...puppetInventory);
        console.log(puppetData);
    }
    else {
        console.log("Please provide a puppet parameter.");
    }
    writeJSONFile('./data', 'puppet_data.json', puppetData)
}

run()

module.exports  = {
    createMotionPuppet,
    
}
// name
// priceInCents
// inStock
