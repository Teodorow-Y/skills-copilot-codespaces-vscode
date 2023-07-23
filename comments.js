// Create web server
// <node comments.js>
// <http://localhost:8080/>
// <http://localhost:8080/comments>
// <http://localhost:8080/comments?user=1>

var express = require('express');
var app = express();

// http://localhost:8080/comments?user=1
app.get('/comments', function (req, res) {
    var user = req.query.user;
    if (user) {
        res.send('User: ' + user);
    } else {
        res.send('Comments');
    }
});

// http://localhost:8080/
app.get('/', function (req, res) {
    res.send('Hello world!');
});

// http://localhost:8080/exit
app.get('/exit', function (req, res) {
    res.send('Bye!');
    setTimeout(function () {
        process.exit(0);
    }, 1000);
});

app.listen(8080, function () {
    console.log('Server started on port 8080');
});