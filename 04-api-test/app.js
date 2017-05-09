/**
 * Created by Niko on 09.05.2017.
 */
var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

// app.get('/json', function (req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.send('{"id":"2","title":123}')
// })

app.get('/api/songs', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send('[{"id":"2","title":123},{"id":"3","title":123}]')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})