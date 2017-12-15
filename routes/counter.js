var express = require('express');
var router = express.Router();



var counter = 0;

router.get('/', function(req, res, next) {
    res.json({counter:counter});
});

router.post('/add', function(req, res, next) {
     counter++
    res.json({counter: counter});
    });

router.post('/substract', function(req, res, next) {
    counter--;
    res.json({counter:counter});
    });

    router.post('/reset', function(req, res, next) {
        counter = 0;
        res.json({counter:counter});
        });










module.exports = router;