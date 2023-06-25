const { createMotionPuppet } = require("./src/create");
const { motionPuppetIndices } = require("./src/indices");
const { showMotionPuppet } = require("./src/show");
const { destroyMotionPuppet } = require("./src/destroy");
const { updateMotionPuppet } = require("./src/update");
const { totalPrice } = require("./src/total");

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

    case 'update':
      const puppetIdToUpdate = process.argv[3];
      const newPuppetName = process.argv[4];
      const newPuppetPrice = process.argv[5];
      const newInStock = process.argv[6];
      updateMotionPuppet(puppetIdToUpdate, newPuppetName, newPuppetPrice, newInStock);
      break;

    case 'total':
      const puppetIds = process.argv.slice(3);
      const totalCost = totalPrice(puppetIds);
      console.log(`Total value of selected puppets: $${totalCost.toFixed(2)}`);
      break;

    default:
      console.log('Please enter a valid inventory action (create, destroy, indices, show, update, total).');
      break;
  }
};

run();
