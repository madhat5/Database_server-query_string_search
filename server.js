// console.log('sim sim salabim');

var express = require('express');

var app = express();

var port = process.env.PORT || 4000;
app.listen(port);
console.log('server set on port: ' + port);

var urlData = [];
var returnedData = [];

// urlData.push({
//     somekey: "somevalue"
// });
//
// console.log(urlData);

// TEST
app.get('/test', function(req, res) {
    res.send('test');
});

app.get('/', function(req, res) {
    res.send("Connected");
});

app.get('/set', function(req, res) {
    var setQuery = req.query;
    // console.log(setQuery);
    // res.send(setQuery);

    urlData.push(setQuery);
    res.send(urlData);
    console.log(urlData);
});

// setTimeout(() => {
//     console.log(urlData);
//     // console.log(Object.keys(urlData[0]))
//
//     var objectKey = urlData[0];
//
//     console.log(Object.keys(objectKey));
// }, 5000);

app.get('/test2', function(req, res) {
    res.send(urlData);
})

app.get('/get', function(req, res) {
    var getQuery = req.query;
    // console.log(getQuery);
    // res.send(Object.keys(getQuery));

    var queryKey = Object.keys(getQuery);
    // var objectKey = Object.keys(urlData[0]);
    // console.log(objectKey);
    console.log(queryKey);
    // console.log(queryKey[0].valueOf())

    for (var x = 0; x < urlData.length; x++) {
        var objectKey = Object.keys(urlData[x]);
        console.log("---" + objectKey);

        var queryKeyVal = queryKey[0].valueOf();

        if (queryKeyVal == objectKey) {
             // res.send(urlData[x]);
             // console.log('===' + urlData[x]);
             returnedData.push(getQuery);
             res.send(getQuery);
             console.log(getQuery);
             break;
         }
         console.log('check complete, #' + x)

     // if urlData[length - 1] { res.send('nothing found')}
    }
});
