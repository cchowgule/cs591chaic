const express = require('express');
const request = require('request');
const config = require('../config');
//const listMaker = require('../listMaker');
const router = express.Router();

/* GET the price of gold */
router.get('/', function(req, res, next) {

    // The API will not let me pull the price of gold directly so I have
    // to reference it through the fluctuation endpoint. That is why I
    // have all this nonsense about today and yesterday.

    // const options = { method: 'GET',
    //     url: config.metalAPIURL,
    //     qs:
    //         { start_date: config.yesterdayStr,
    //             end_date: config.todayStr,
    //             access_key: config.APIKey },
    //     headers: config.headers
    // };
    //
    // request(options, function (error, response, body) {
    //     const usd = Number((32.25806451612903/JSON.parse(body).rates.XAU.end_rate).toFixed(2)).toLocaleString('en');
    //     res.send([{"day":"Today's","usd":usd}]);
    // });

    res.send([{'day':"Today's",'usd':'2,222.22'}])

});

/* GET with days from PS6 Angular */
router.get("/:days", function (req, res, next) {
    // let days = req.params['days'];
    //
    // let outList = [];
    //
    // const daysStr = listMaker(days);

    res.send([{'day':'11/11/11','usd':'1111.11'}]);
});

module.exports = router;
