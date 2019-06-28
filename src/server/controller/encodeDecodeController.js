const express = require('express');
const router = express.Router();
const base64 = require('base-64');
const sha256 = require('sha256');


router.post('/encode/:encoding', (req, res) => {
    const encoding = req.params.encoding;
    const input = req.body.input;

    const encoded = encode(encoding, input);
    res.json({data: encoded});
});

router.post('/decode/:encoding', (req, res) => {
    const encoding = req.params.encoding;
    const input = req.body.input;

    const decoded = decode(encoding, input);
    res.json({data: decoded});
});

function encode(encoding, input) {
    switch (encoding) {
        case 'base64' :
            return base64.encode(input);
        case 'sha256' :
            return sha256(input);
    }
}

function decode(encoding, input) {
    switch (encoding) {
        case 'base64' :
            return base64.decode(input);
    }
}

module.exports = router;