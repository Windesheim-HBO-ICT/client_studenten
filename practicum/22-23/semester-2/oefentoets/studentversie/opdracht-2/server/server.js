const express = require('express');

const app = express();
const port = 3000;
let cors = require('cors')
app.use(cors());
app.use(express.json());

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Welkom to the REST api.");
});

app.get('/boodschappen', (req, res) => {
    res.json(['melk', 'brood', 'eieren']);
});

app.listen(port, () => console.log(`Data API listening on port ${port}!`))
