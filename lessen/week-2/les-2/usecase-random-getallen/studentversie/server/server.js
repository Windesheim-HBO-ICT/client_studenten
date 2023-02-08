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
    res.send("Hallo wereld!");
});

app.get('/random', (req, res) => {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    res.json({random: getRandomInt(100)});
});

app.listen(port, () => console.log(`Data API listening on port ${port}!`))
