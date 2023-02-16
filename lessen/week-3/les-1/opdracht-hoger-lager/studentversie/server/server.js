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


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const getalOmTeRaden = getRandomInt(100);

app.get('/getal', (req, res) => {

    if(req.query.gok > getalOmTeRaden){
        res.json({result: "lager"});
    }else if(req.query.gok < getalOmTeRaden){
        res.json({result: "hoger"});
    }else{
        res.json({result: "juist"});
    }

});

app.listen(port, () => console.log(`Data API listening on port ${port}!`))
