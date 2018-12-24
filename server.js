const express = require('express');

const app = express();

const port = 3002;

app.use(express.static('static'));

app.use('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(port, () => console.log('listening on ' + port));
