const { createMotionPuppet } = require("./src/create")
const { index } = require("./src/puppet_indices")
const { show } = require("./src/show")
const { destroy } = require("./src/show")
const { update } = require("./src/destroy")
const { totalPrice } = require("./src/total")
const { helpers } = require("./src/helpers")
const {
    readJSONFile,
    writeJSONFile
} = require("./src/helpers");


const run = () => {
    const action = process.argv[2];
    const puppetName = process.argv[3];
    let puppets = readJSONFile("./data", "puppet_data.json");
    let writeToFile = false;
    let updatedPuppets = [];

    switch (action) {
        case "index":
            const allPuppets = index(puppets);
            console.log(allPuppets);
            break;
        case "create":
            const puppetName = process.argv[3];
            const puppetPrice = process.argv[4];
            createMotionPuppet(puppetName, puppetPrice);
            break;
        case "show":
            const foundPuppet = show(puppets, puppetName);
            console.log(foundPuppet);
            break;
        case "update":
            console.log(puppetName, " %%%%%%% ");
            updatedPuppets = update(puppets, puppetName, process.argv[4]);
            writeToFile = true;
            break;
        case "destroy":
            updatedPuppets = destroy(puppets, puppetName);
            writeToFile = true;
            break;
            default:
            console.log("Hey, there was an error.");
        }
        
        if (writeToFile) {
            console.log("New data detected - updating");
            writeJSONFile("./data", "puppet_data.json", updatedPuppets);
        }
};
        
        run();
