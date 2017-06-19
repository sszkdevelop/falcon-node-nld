var express = require('express');
var path = require('path');
var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname, '/frontend')));
// app.use('/', express.static(path.join(__dirname, '/frontend/html')));
console.log(__dirname);

app.route('/quickinsights')
    .get(function (req, res) {
        // res.send('get sumtin!');
        res.sendFile(__dirname + '/frontend/html/qid.html');
    });

app.listen(3000, function () {
    console.log('App listening on port 3000');
});