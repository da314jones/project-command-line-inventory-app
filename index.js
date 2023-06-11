const { 
    createNewData,
    destroyPuppetInfo,
    showPuppetInfo,
    puppetIndices,
    puppetUpdate,
    } = require("./popIndex");

const run = () => {
    const action = process.argv[2];
    const puppet = process.argv[3];
    let puppets = readJSONFile('./data', 'puppet_data.json')
    let writeToFile = false;
    let updatedPuppets = [];

    switch (action) {
        case "index":
            const allPuppets = puppetIndices(puppets)
            console.log(allPuppets);
            break;
        case "createNewData":
            console.log("Create is firing!")
            updatedPuppets = create(puppets, puppet)
            writeToFile = tre;
            break;
        case "show":
            console.log(puppets, " $$$$$$ ")
            updatedPuppets = update(puppets, puppet, process.argv[4]);
            writeToFile = true;
            break;
        case "destroy":
            updatedPuppets = destroy(puppets, puppet);
            writeToFile = true;
            break;
        case
    }
}