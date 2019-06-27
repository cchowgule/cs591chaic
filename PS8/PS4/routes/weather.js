const express = require('express');
const request = require('request-promise');
const weatherConfig = require('../config/weatherConfig');
const router = express.Router();
const db = require('../mongo/mongo');

db.connect((err, client) => {
    if (err) {
        console.log(`ERR ${err}`);
    } else {
        console.log(`Connected`);
    }
});

/* GET weather at zip code */
router.get("/:zip", function (req, res, next) {

    const zip = req.params['zip'];
    let mongo = db.getDB();

    mongo.collection('weatherRest').findOne({zip: zip})
        .then(item => {
            item.cached = 'true';
            res.send(item);
        })
        .catch(err => {
            const options = {
                method : 'GET',
                url : weatherConfig.URL,
                qs : {key : weatherConfig.key, q : zip},
                headers : weatherConfig.headers
            };

            request(options)
                .then(response => {
                    const inLoc = JSON.parse(response);
                    const loc = {
                        zip : zip,
                        name : inLoc.location.name,
                        current : inLoc.current.condition.text,
                        cached : 'false'
                    };
                    mongo.collection('weatherRest').insertOne(loc)
                        .then(item => console.log(item))
                        .catch(err => console.error(err));
                    res.send(loc);
                })
                .catch( err => res.send(err));
        });

});

module.exports = router;
