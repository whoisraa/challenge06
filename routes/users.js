const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.status(200).send('respond with list of users');
    } catch (error) {
        console.error(error);
        res.status(500).render('errors/500');
    }
});

module.exports = router;