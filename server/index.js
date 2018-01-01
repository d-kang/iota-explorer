const express = require('express');
const path = require('path');
const cors = require('cors');
const IOTA = require('iota.lib.js');
const PORT = process.env.PORT || 5000
const app = express();
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

const provider = 'https://iotanode.us:443';

var iota = new IOTA({ provider });
const seed = '';
iota.api.getAccountData(seed, (err, accountData) => {
  if (err) {
    console.error('error', err);
  } else {
    console.log("Account data", accountData);
    accountData.transfers.forEach(transfer => {
      var message = iota.utils.extractJson(transfer);
      console.log('message', message);
    })
  }
})

const messageToSend = {
  name: 'David',
  message: 'Hello from Node.js'
};
var messageTrytes = iota.utils.toTrytes(JSON.stringify(messageToSend));

var transfer = [{
  address: "",
  value: parseInt(1),
  message: messageTrytes
}];

const depth = 4;
const mwm = 14; // minWeightMagnitude

iota.api.sendTransfer(seed, depth, mwm, transfer, (e, success) => {
  if (e) {
    console.error(e)
  } else {
    console.log('sendTransfer Success!', success);
  }
})


app.get('/', (req, res) => res.send('pages/index'))

app.listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`))
