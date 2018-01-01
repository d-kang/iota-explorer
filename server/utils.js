// const result = iota.utils.fromTrytes(transfer[0].message)
// console.log('result>>>>>>>', result);
//
// const result2 = iota.utils.toTrytes(result);
// console.log('result2>>>>>>>', result2);


const provider = 'https://iotanode.us:443';
var iota = new IOTA({ provider });

const messageToSend = 'Hello from Node.js';
var messageTrytes = iota.utils.toTrytes(JSON.stringify(messageToSend));
