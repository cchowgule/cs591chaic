const express = require('express');
const request = require('request-promise');
const yelpConfig = require('../config/yelpConfig');
const router = express.Router();
const db = require('../mongo/mongo');

db.connect((err, client) => {
    if (err) {
        console.log(`ERR ${err}`);
    } else {
        console.log(`Connected`);
    }
});

router.get("/:zip", function (req, res, next) {

    const zip = req.params['zip'];
    let weather;
    let category = '';
    let mongo = db.getDB();

    mongo.collection('weatherRest').findOne({zip: zip})
        .then(item => {
            if (item.hasOwnProperty('restList')) {
                res.send(item.restList);
            } else {
                weather = item.current;

                if (yelpConfig.conditions.includes(weather)) {
                    category = 'foodstands';
                } else
                    category = 'comfortfood';

                const options = {
                    method: 'GET',
                    url: yelpConfig.URL,
                    qs: {
                        location: zip,
                        category: category,
                        limit: yelpConfig.limit
                    },
                    headers : yelpConfig.headers
                };

                request(options)
                    .then(response => {
                        const restaurants = JSON.parse(response);
                        let restList = [];
                        for (i = 0; i < 5; i++) {
                            restList.push(restaurants.businesses[i].name);
                        }
                        mongo.collection('weatherRest').updateOne({zip : zip}, {'$set' : {restList : restList}})
                            .then(item => console.log(item))
                            .catch(err => console.error(err));
                        res.send(restList);
                    })
                    .catch(err => res.send(err));
            }
        })
        .catch(err => console.error(err));

});


module.exports = router;
