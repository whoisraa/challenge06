const admins = require('../config/admin.json');
const CryptoJS = require('crypto-js');
const chalk = require('chalk');
const {user_game, user_game_biodata, user_game_history} = require('../models');

module.exports = {
    adminLogin: async (req, res) => {
        try {
            res.status(200).render('admin/admin-login', {
                msg: null
            });
        } catch (error) {
            console.error(error);
            res.status(500).render('errors/500');
        }
    },

    adminLoginPost: async (req, res) => {
        try {
            const {username, password} = req.body;
            const users = await user_game.findAll();
            const biodata = await user_game_biodata.findAll();
            const history = await user_game_history.findAll();
            for (let i = 0; i < admins.length; i++) {
                if (username === admins[i].username && password === admins[i].password) {
                    console.log(chalk.green(`[${admins[i].username}] logged in successfully`));
                    return res.status(200).render('admin/dashboard', {
                        admin: admins[i].username,
                        userList: users,
                        biodataList: biodata,
                        historyList: history
                    });
                } 
            }
            console.log(`Wrong credentials`);
            res.status(401).render('admin/admin-login', {
                msg: `Wrong credentials`
            });
        } catch (error) {
            console.error(error);
            res.status(500).render('errors/500');
        }
    },

    admin: async (req, res) => {
        try {
            const users = await user_game.findAll();
            const biodata = await user_game_biodata.findAll();
            const history = await user_game_history.findAll();
            res.status(200).render('admin/dashboard', {
                admin: admins.username,
                userList: users,
                biodataList: biodata,
                historyList: history
            });
        } catch (error) {
            console.error(error);
            res.status(500).render('errors/500');
        }
    },

    edit: async (req, res) => {
        try {
            const user = await user_game.findByPk(req.params.id);
            res.status(200).render('admin/action', {
                user: user
            })
        } catch (error) {
            console.error(error);
            res.status(500).render('errors/500');
        }
    },

    update: async (req, res) => {
        try {
            await user_game.update({
                username: req.body.username,
                password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS).toString(),
                email: req.body.email
            },
            {
                where: {
                    id: req.body.id
                }
            });
            res.status(302).redirect('/admin');
        } catch (error) {
            console.error(error);
            res.status(500).render('errors/500');
        }
    },

    add: async (req, res) => {
        try {
            res.status(200).render('admin/action');
        } catch (error) {
            console.error(error);
            res.status(500).render('errors/500');
        }
    },

    create: async (req, res) => {
        try {
            await user_game.create({
                username: req.body.username,
                password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS).toString(),
                email: req.body.email
            });
            res.status(302).redirect('/admin');
        } catch (error) {
            console.error(error);
            res.status(500).render('errors/500');
        }
    },

    delete: async (req, res) => {
        try {
            await user_game.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status(302).redirect('/admin');
        } catch (error) {
            console.error(error);
            res.status(500).render('errors/500');
        }
    },

    logout: async (req, res) => {
        try {
            admins.username = null;
            res.status(302).redirect('/admin');
        } catch (error) {
            console.error(error);
            res.status(500).render('errors/500');
        }
    }
}