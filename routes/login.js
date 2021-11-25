const express = require('express');
const CryptoJS = require('crypto-js');
const chalk = require('chalk');
const router = express.Router();

const {user_game} = require('../models');

router.get('/login', async (req, res) => {
    try {
        res.status(200).render('login', {
            userlogin: user_game.username,
            msg: null
        });
    } catch (error) {
        console.error(error);
        res.status(500).render('errors/500');
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await user_game.findOne({where: {username: req.body.username}});
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.PASS);
        const password = bytes.toString(CryptoJS.enc.Utf8);

        if (!user) {
            console.log(`User not found`);
            return res.status(404).render('login', {
                userlogin: user_game.username,
                msg: `User not found`
            });
        } else {
            if (req.body.password === password) {
                user_game.username = user.username;
                console.log(`${req.body.username} successfully logged in`);
                return res.status(200).redirect('/');
            } else {
                console.log(`Wrong password`);
                return res.status(401).render('login', {
                    userlogin: user_game.username,
                    msg: `Please check your password again`
                });
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).render('errors/500');
    }
});

router.get('/logout', async (req, res) => {
    user_game.username = null;
    res.redirect('/');
})

module.exports = router;