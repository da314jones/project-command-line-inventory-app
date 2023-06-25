const { createMotionPuppet } = require("./src/create")
const { motionPuppetIndices } = require("./src/indices")
const { showMotionPuppet } = require("./src/show")
const {  } = require("./src/show")
const { destroyMotionPuppet } = require("./src/destroy")
const { totalPrice } = require("./src/total")
const { helpers } = require("./src/helpers")
const {
    readJSONFile,
    writeJSONFile
} = require("./src/helpers");


const run = () => {
  const action = process.argv[2];

  switch (action) {
    case 'create':
      const puppetName = process.argv[3];
      const puppetPrice = process.argv[4];
      createMotionPuppet(puppetName, puppetPrice);
      break;

    case 'destroy':
      const puppetId = process.argv[3];
      destroyMotionPuppet(puppetId);
      break;

    case 'indices':
        const puppetKeyToIndex = process.argv[3];
        motionPuppetIndices(puppetKeyToIndex);
      break;

    case 'show':
      const puppetIdToShow = process.argv[3];
      showMotionPuppet(puppetIdToShow);
      break;

    default:
      console.log('Please provide an inventory action (create, destroy, index, show).');
      break;
  }
};

run();
