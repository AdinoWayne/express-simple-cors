import 'dotenv/config';
import cors from 'cors';
import express from 'express';
var rp = require('request-promise');

const app = express();

app.use(cors());

app.get('/*', (req, res) => {
  var options = {
      uri: 'https://gogoanime.herokuapp.com' + req.originalUrl,
      json: true
  };
  rp(options)
      .then(function (repos) {
        res.json(repos)
      })
      .catch(function (err) {
        res.json(err)
      });
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
