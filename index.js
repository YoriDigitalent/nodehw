'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

//PORT
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App listens to port ${port}`);
});