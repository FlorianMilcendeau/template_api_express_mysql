const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();
const logger = require('morgan');

/** Middleware */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  res.status(200).send('Welcome to Express js');
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Express server listening on ${PORT}`);
  }
});
