const express = require('express');
const router = express.Router();

/* GET a string */
router.get('/', (req, res) => res.render('ps3', { str: 'Hello World' }));

/* POST a string */
router.post('/', (req, res) => {
  req.body['strLength'] = req.body.str.length;
  res.render('ps3', req.body);
});

module.exports = router;
