const express = require('express');
const path = require('path');
const cors = require('cors');
const IOTA = require('iota.lib.js');
const PORT = process.env.PORT || 5000
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const provider = 'https://iotanode.us:443';
var iota = new IOTA({ provider });


app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/api/leaderboard/seedSubmit', (req, res) => {
  const { seed } = req.body;
  iota.api.getAccountData(seed, (err, accountData) => {
    if (err) {
      console.error('error', err);
    } else {
      console.log("Account data", accountData);

      const messages = [];
      accountData.transfers.forEach(transfer => {
        const sentMsg = iota.utils.extractJson(transfer);
        if (sentMsg !== null) {
          const { name, message } = JSON.parse(sentMsg);
          const newTx = {
            name:name,
            message: message,
            value: transfer[0].value
          }
          messages.push(newTx);
        }
      })
      res.send(messages);
    }
  })
})


app.post('/api/send/seedSubmit', (req, res) => {
  const { seed } = req.body;
  iota.api.getAccountData(seed, (err, accountData) => {
    if (err) {
      console.error('error', err);
    } else {
      console.log("Account data", accountData);
      const { balance, latestAddress } = accountData;
      const data = { seed, balance };
      console.log('data', data);
      res.send(data);
    }
  })
})

app.post('/api/send/sendTransfer', (req, res) => {
  console.log('/api/send/sendTransfer req.body>>>', req.body);
  const { name, value, address, message, seed } = req.body
  const messageToSend = { name, message };
  var messageTrytes = iota.utils.toTrytes(JSON.stringify(messageToSend));

  var transfer = [{
    address,
    value: parseInt(value),
    message: messageTrytes,
  }];
  console.log('transfer', transfer);
  const depth = 4;
  const mwm = 14; // minWeightMagnitude

  iota.api.sendTransfer(seed, depth, mwm, transfer, (e, success) => {
    if (e) {
      console.error(e)
      res.send(e)
    } else {
      console.log('sendTransfer Success!', success);
      res.send(success);
    }
  })
})


app.get('/', (req, res) => res.send('pages/index'))

app.listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`))
