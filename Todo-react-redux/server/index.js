/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.post('/todo', (req, res) => {

});

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
