let Web3 = require('web3');
if (process.env.REMOTE_HTTP == undefined) {
    throw "No REMOTE_HTTP environment variable found. Can not connect to blockchain";
    process.exit(1);
}
module.exports.web3 = new Web3(process.env.REMOTE_HTTP);

module.exports.loadContract = async function(web3, address, abi) {
    let contract = await new web3.eth.Contract(abi, address)

    return contract;
};

module.exports.call = async function(instance, method, address, args) {
    //let cwsRaw = await cws.methods.balanceOf(web3.currentProvider.selectedAddress).call();
    //let raw = await instance.methods[method].apply(this, args).call();
    let raw = await instance.methods[method](...args).call();
};
