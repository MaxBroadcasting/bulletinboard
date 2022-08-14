const express = require('express');
const PORT = 8080;
const fs = require('fs');
const bodyParser = require('body-parser');
hello
var app = express();

app.use(express.json());


app.listen(PORT, () => {
    console.log("listening on http://localhost:8080")
})

app.get('/shops', (req, res) => {
    data = JSON.parse(fs.readFileSync('./pins.json'))
    console.log(req.body.name)
    res.status(200).send(
        data.pinboard
    )
});

app.post('/shops', (req, res) => {
    console.log(req.body)

    data = JSON.parse(fs.readFileSync('./pins.json'))
    data.pinboard.push(req.body.pinboard)
    fs.writeFileSync('./pins.json', JSON.stringify(data));
    res.status(200).send(
        data
    );
});