const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const randomDataController = require("./src/server/controller/randomDataController");
const encodeDecodeController = require("./src/server/controller/encodeDecodeController");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './build')));

app.use((req, res, next) => {
    const resJson = res.json;
    res.json = (data) => {
        console.log('Response data:\n', data);
        resJson.call(res, data);
    };
    console.log(req.method + ' ' + req.url);
    console.log(req.body);
    next();
});


app.get('/api/healthcheck', (req, res) => {
    res.json({health: 'OK'});
});

app.use('/api/random', randomDataController);
app.use('/api/encodedecode', encodeDecodeController);
app.get('*', (req, res) => res.sendFile(path.join(__dirname + './build/index.html')));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log('App is listening on port ' + port));

//KEEP APP ALIVE ON HEROKU
const axios = require('axios');
setInterval(()=>{
    axios.get('https://test-tools1.herokuapp.com/api/healthcheck')
        .then(response => {
            console.log("health ok: " + JSON.stringify(response.data));
        }).catch(error => {})
}, 1000 * 60 * 10);



