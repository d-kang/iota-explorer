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

app.post('/api/seedSubmit', (req, res) => {
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





// const messageToSend = {
//   name: 'David',
//   message: 'Hello from Node.js'
// };
// var messageTrytes = iota.utils.toTrytes(JSON.stringify(messageToSend));
//
// var transfer = [{
//   address: "",
//   value: parseInt(1),
//   message: messageTrytes
// }];
//
// const depth = 4;
// const mwm = 14; // minWeightMagnitude
//
// iota.api.sendTransfer(seed, depth, mwm, transfer, (e, success) => {
//   if (e) {
//     console.error(e)
//   } else {
//     console.log('sendTransfer Success!', success);
//   }
// })


app.get('/', (req, res) => res.send('pages/index'))

app.listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`))
