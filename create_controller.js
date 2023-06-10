const { nanoid } = require("nanoid");
const { faker } = require('@faker-js/faker');

const createMotionPuppet = (stopMotionPuppet) => {
    const puppet = {        
        puppetModelId: nanoid(4),
        productName: faker.commerce.productName(),
        puppetPriceInCents: faker.commerce.price({ min: 10000, max: 20000 }),
        inStock: faker.datatype.boolean(0.9)
    }
    return puppet
} 

console.log(createMotionPuppet())
// name
// priceInCents
// inStock


