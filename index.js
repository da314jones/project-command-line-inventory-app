const { 
    createNewData,
    destroyPuppetInfo,
    showPuppetInfo,
    puppetUpdate,
    } = require("./popIndex");

const run = () => {
    const action = process.argv[2];
    const puppet = process.argv[3];
    let puppets = readJSONFile('./data', 'puppet_data.json')
    let writeToFile = false;
    let updatedPuppet = [];

    switch (action) {
        case 
    }
}