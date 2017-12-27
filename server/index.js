const express = require('express');
const path = require('path')
const IOTA = require('iota.lib.js');
const PORT = process.env.PORT || 5000
const app = express();

const iota = new IOTA({
  host: 'http://localhost',
  port: PORT,
  provider: `http://localhost:${PORT}`,
  sandbox: true
});

console.log('iota', iota);

app
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => res.send('pages/index'))
  .listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`))
