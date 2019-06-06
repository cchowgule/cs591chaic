const express = require('express');
const request = require('request');
const config = require('../config');
const router = express.Router();

/* GET the price of gold */
router.get('/', function(req, res, next) {

    // The API will not let me pull the price of gold directly so I have
    // to reference it through the fluctuation endpoint. That is why I
    // have all this nonsense about today and yesterday.

    const options = { method: 'GET',
        url: config.metalAPIURL,
        qs:
            { start_date: config.yesterdayStr,
                end_date: config.todayStr,
                access_key: config.APIKey },
        headers: config.headers
    };

    request(options, function (error, response, body) {
        res.render('ps4', {'gold': Number((32.25806451612903/JSON.parse(body).rates.XAU.end_rate).toFixed(2)).toLocaleString('en')});
    });

});

module.exports = router;