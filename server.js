const express = require('express');
const path = require('path');
const app = express();

const randomDataController = require("./src/server/controller/randomDataController");

app.use(express.static(path.join(__dirname, './build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

app.use('/api/random', randomDataController);

// Handles any requests that don't match the ones above
app.get('*', (req, res) => res.sendFile(path.join(__dirname + './build/index.html')));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log('App is listening on port ' + port));

