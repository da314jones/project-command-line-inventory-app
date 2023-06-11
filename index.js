const { 
    createNewData,
    destroyPuppetInfo,
    puppetUpdate,
    showPuppetInfo,
    puppetIndices,
    totalPrice,
    } = require("./popIndex");

const run = () => {
    const action = process.argv[2];
    const puppet = process.argv[3];
    let puppets = readJSONFile('./data', 'puppet_data.json')
    let writeToFile = false;
    let updatedPuppets = [];

    switch (action) {
        case "createNewData":
            console.log("Create is firing!")
            updatedPuppets = createNewData(puppets, puppet)
            writeToFile = tre;
            break;
        case "show":
            const
        case "destroy":
            updatedPuppets = destroyPuppetInfo(puppets, puppet);
            writeToFile = true;
            break;
        case "update":
            console.log(puppets, " $$$$$$ ")
            updatedPuppets = puppetUpdate(puppets, puppet, process.argv[4]);
            writeToFile = true;
            break;
        case "index":
            const allPuppets = puppetIndices(puppets)
            console.log(allPuppets);
            break;
        case "total":
            console.log(totalPrice(puppets))
            break;

    }
}