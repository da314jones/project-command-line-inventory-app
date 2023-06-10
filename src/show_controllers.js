
 const showPuppetInfo = (puppet, puppetModelId) => {
    const currentPuppet = puppet.find((puppet) => puppet.puppetModelId === puppetModelId);
    return `${currentPuppet.puppetModelId}/n ${currentPuppet.puppetName}/n ${puppet.puppetPriceInDollars}/n ${puppet.inStock}`
}
createMotionPuppet()
console.log(showPuppetInfo)