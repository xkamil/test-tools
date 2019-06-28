const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');


router.get('/uuid', (req, res) => {
    res.json({data: uuidv4()})
});

module.exports = router;