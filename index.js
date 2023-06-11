const { createNewData } = require("./src/create");
const { destroyPuppetInfo } = require("./src/destroy");
const { puppetUpdate } = require("./src/update");
const { showPuppetInfo } = require("./src/show");
const { puppetIndices } = require("./src/puppet_Index");
const { totalPrice } = require("./src/total");
const { writeJSONFile } = require("./src/helpers");
const { readJSONFile } = require('./src/helpers');

const run = () => {
    const action = process.argv[2];
    const puppet = process.argv[3];
    const puppets = readJSONFile('./data', 'puppet_data.json')
    let writeToFile = false;
    let updatedPuppets = [];

    switch (action) {
        case "create":
            console.log("Create is firing!")
            updatedPuppets = createNewData(puppet, process.argv[4])
            writeToFile = true;
            break;
        case "show":
            const foundPuppet = showPuppetInfo(puppets, puppet);
            console.log(foundPuppet);
            break;
        case "destroy":
            updatedPuppets = destroyPuppetInfo(puppet);
            writeToFile = true;
            break;
        case "update":
            console.log(puppets, " $$$$$$ ")
            updatedPuppets = puppetUpdate(puppets, process.argv[5], process.argv[6]);
            writeToFile = true;
            break;
        case "index":
            const allPuppets = puppetIndices()
            console.log(allPuppets);
            break;
        case "total":
            console.log(totalPrice(puppets))
            break;
        default :
        console.log("An error occurred: Action failed to process the data.");
    }
    if (writeToFile) {
        console.log("new data accepted ...updating")
            writeJSONFile("./data", "puppet_update.json", updatedPuppets)
    }
}

run()