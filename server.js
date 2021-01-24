const express = require('express');
const bodyParser = require('body-parser');
const Query = require("minecraft-query");

const app = express();
const port = process.env.PORT || 3080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.get('/api/survival', (req, res) => {
    const survival = new Query({host: 'www.s8gaming.net', port: 25512, timeout: 7500});

    survival.fullStat()
    .then(success => {
        console.log(success)
        res.send({ success});
        survival.close();
    });
});
app.get('/api/creative', (req, res) => {
    const creative = new Query({host: 'www.s8gaming.net', port: 25513, timeout: 7500});

    creative.fullStat()
    .then(success => {
        res.send({ success});
        creative.close();
    });
});
app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));