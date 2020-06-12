const express = require('express');
const router = express.Router();
const User = require('../routes/user');

router.get('/', (req, res) => {
    res.send("We are on posts");
})
router.get('/specific', (req, res) => {
    res.send("We are on posts specific");
})
router.get('/abc', (req, res) => {
    res.send('jksdfhjsdk');
})


module.exports = router;