const { createNewData } = require("./src/create");
const { destroyPuppetInfo } = require("./src/destroy");
const { puppetUpdate } = require("./src/update");
const { showPuppetInfo } = require("./src/show");
const { puppetIndices } = require("./src/puppet_Index");
const { totalPrice } = require("./src/total");
const { readJSONFile, writeJSONFile } = require("./src/helpers");

const run = () => {
    const action = process.argv[2];
    const puppet = process.argv[3];
    const puppets = readJSONFile('./data', 'puppet_data.json')
    const firstPuppet = puppets[0];
    const keys = Object.keys(firstPuppet)
    console.log(keys)
    let writeToFile = false;
    let updatedPuppets = [];

    switch (action) {
        case "create":
            const newName = process.argv[4];
            const newPrice = process.argv[5];
            if (!newName || !newPrice) {
                console.log("Enter new puppet name and price");
                break;
            }
            console.log("Create is firing!")
            updatedPuppets = createNewData(puppets, newName, parseFloat(newPrice));
            writeToFile = true;
            break;
        case "show":
            if (puppet) {
                const foundPuppet = showPuppetInfo(puppets, puppet);
                if (foundPuppet) {
                    console.log(foundPuppet);
                } else {
                    console.log("Puppet not found");
                }
            } else {
                console.log("Enter puppet name to show.");
            }
            break;
        case "destroy":
            updatedPuppets = destroyPuppetInfo(puppets);
            writeToFile = true;
            break;
        case "update":
            console.log(puppets, " $$$$$$ ")
            updatedPuppets = puppetUpdate(puppets, process.argv[4], process.argv[5]);
            writeToFile = true;
            break;
        case "index":
            const allPuppets = puppetIndices();            
            if (puppet === "all") {
                console.log(Object.keys(allPuppets))
            } else {
                const index = parseInt(puppet);
                if (!isNaN(index) && index >= 0 && index < puppets.length) {
                    console.log(puppets[index]);
                } else {
                    console.log("Invalid inventory location.");
                }
            }
            break;
        case "total":
            console.log(totalPrice(puppets))
            break;
        default:
            console.log("An error occurred: Action failed to process the data.");
    }

    if (writeToFile) {
        console.log("new data accepted ...updating")
        writeJSONFile("./data", "puppet_update.json", updatedPuppets)
    }
}

run();
