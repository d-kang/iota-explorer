const express = require('express');
const path = require('path')
const IOTA = require('iota.lib.js');
const PORT = process.env.PORT || 5000
const app = express();


var iotaProxy = require('../lib/iotaproxy.js');

iotaProxy.start(
  {
    host: 'http://iota.bitfinex.com',
    port: 80,
    localPort: 14265,
    overrideAttachToTangle: true,
    timeout: 15
  }
);



const iota = new IOTA({
  host: 'http://localhost',
  port: PORT,
  provider: `http://localhost:${PORT}`,
  sandbox: true
});
// console.log('iota.api', iota.api);
//
//
// iota.api.getTips((err, success) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('success', success);
//   }
// })

const value = 12000;
const fromUnit = 'Mi';
const toUnit = 'Gi';


const result = iota.utils.convertUnits(value, fromUnit, toUnit)
console.log('result', result);

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.send('pages/index'))

app.listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`))
