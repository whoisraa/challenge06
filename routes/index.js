const express = require('express');
const router = express.Router();

const {user_game} = require('../models');

router.get('/', async (req, res) => {
    try {
        res.status(200).render('index', {
            userlogin: user_game.username
        });
    } catch (error) {
        console.error(error);
        res.status(500).render('errors/500');
    }
});

module.exports = router;