const http = require('http');
const express = require('express');
var cors = require('cors');

const itemsRouter = require('./routes/items');

const app = express();
app.use(express.json());

app.use('/items', itemsRouter)
// default URL to API
app.use('/', function (req, res) {
  res.send('node-ex-api works :-)');
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug('Server listening on port ' + port);