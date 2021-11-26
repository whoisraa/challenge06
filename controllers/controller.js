const CryptoJS = require('crypto-js');
const chalk = require('chalk');
const {user_game, user_game_biodata, user_game_history} = require('../models');

module.exports = {
    home: async (req, res) => {
        try {
            res.status(200).render('index', {
                userlogin: user_game.username
            });
        } catch (error) {
            console.error(error);
            res.status(500).render('errors/500');
        }
    },

    game: async (req, res) => {
        try {
            const username = user_game.username || 'PLAYER 1';
            res.status(200).render('game', {username});
        } catch (error) {
            console.error(error);
            res.status(500).render('errors/500');
        }
    },

    profile: async (req, res) => {
        try {
            res.status(200).render('profile', {
                userlogin: user_game.username,
                name: user_game_biodata.name,
                bio: user_game_biodata.bio,
                url: user_game_biodata.url
            });
        } catch (error) {
            console.error(error);
            res.status(500).render('errors/500');
        }
    },

    edit: async (req, res) => {
        try {
            const user = await user_game_biodata.findAll();
            res.status(200).render('edit', {
                userlogin: user_game.username,
                userList: user
            })
        } catch (error) {
            console.error(error);
            res.status(500).render('errors/500');
        }
    },

    update: async (req, res) => {
        try {
            await user_game_biodata.update({
                name: req.body.name,
                bio: req.body.bio,
                url: req.body.url
            },
            {
                where: {
                    id: req.body.id
                }
            });
            res.status(302).redirect('/profile');
        } catch (error) {
            console.error(error) 
            res.status(500).render('errors/500');
        }
    },

    register: async (req, res) => {
        try {
            res.status(200).render('register', {
                userlogin: user_game.username,
                username: null,
                password: null,
                email: null,
                success: null
            });
        } catch (error) {
            console.error(error);
            res.status(500).render('errors/500');
        }
    },

    registerPost: async (req, res) => {
        try {
            const new_user_game = new user_game({
                username: req.body.username,
                password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS).toString(),
                email: req.body.email
            });

            const new_user_biodata = new user_game_biodata({
                name: 'no name',
                bio: 'description',
                url: 'web url'
            });

            const user_game_created = await new_user_game.save();
            const user_biodata_created = await new_user_biodata.save();
            
            if (user_game_created) {
                console.log(chalk.green(`[${req.body.username}] signed up successfully`));
                return res.status(200).render('register', {
                    userlogin: user_game.username,
                    username: null,
                    password: null,
                    email: null,
                    success: `Sign up successful`
                });
            }

            if (user_biodata_created) {
                console.log(user_biodata_created);
            }

        } catch (error) {    
            const {username, password, email} = req.body;
            const field_res = `Please fill this field`;
            const username_res = `Username must be at least 3 characters long`;
            const password_res = `Password must be at least 6 characters long`;
            const userName = await user_game.findOne({where: {username: req.body.username}});
            const userEmail = await user_game.findOne({where: {email: req.body.email}});
            const usernameRes = `This username already taken`;
            const emailRes = `This email already registered`;

            if (!username && !password && !email) {
                console.log(chalk.yellow(`Please enter all fields`));
                return res.status(401).render('register', {
                    userlogin: user_game.username,
                    username: field_res,
                    password: field_res,
                    email: field_res,
                    success: null
                });
            } else if (!username && email) {
                if (!password && email) {
                    console.log(chalk.yellow(`Please enter username and password`));
                    return res.status(401).render('register', {
                        userlogin: user_game.username,
                        username: field_res,
                        password: field_res,
                        email: null,
                        success: null
                    });
                } else {
                    console.log(chalk.yellow(`Please enter username`));
                    return res.status(401).render('register', {
                        userlogin: user_game.username,
                        username: field_res,
                        password: null,
                        email: null,
                        success: null
                    });
                }
            } else if (!password && username) {
                if (!email && username) {
                    console.log(chalk.yellow(`Please enter password and email`));
                    return res.status(401).render('register', {
                        userlogin: user_game.username,
                        username: null,
                        password: field_res,
                        email: field_res,
                        success: null
                    });
                } else {
                    console.log(chalk.yellow(`Please enter password`));
                    return res.status(401).render('register', {
                        userlogin: user_game.username,
                        username: null,
                        password: field_res,
                        email: null,
                        success: null
                    });
                }
            } else if (!email && password) {
                if (!username && password) {
                    console.log(chalk.yellow(`Please enter username and email`));
                    return res.status(401).render('register', {
                        userlogin: user_game.username,
                        username: field_res,
                        password: null,
                        email: field_res,
                        success: null
                    });
                } else {
                    console.log(chalk.yellow(`Please enter email`));
                    return res.status(401).render('register', {
                        userlogin: user_game.username,
                        username: null,
                        password: null,
                        email: field_res,
                        success: null
                    });
                }
            }
            
            if (username.length < 3 && password.length < 6) {
                console.log(chalk.red(`Username must be at least 3 characters long`));
                console.log(chalk.red(`Password must be at least 6 characters long`));
                return res.status(401).render('register', {
                    userlogin: user_game.username,
                    username: username_res,
                    password: password_res,
                    email: null,
                    success: null
                });
            } else if (username.length < 3) {
                console.log(chalk.red(`Username must be at least 3 characters long`));
                return res.status(401).render('register', {
                    userlogin: user_game.username,
                    username: username_res,
                    password: null,
                    email: null,
                    success: null
                });
            } else if (password.length < 6) {
                console.log(chalk.red(`Password must be at least 6 characters long`));
                return res.status(401).render('register', {
                    userlogin: user_game.username,
                    username: null,
                    password: password_res,
                    email: null,
                    success: null
                });
            } 
            
            if (userName) {
                if (userEmail) {
                    console.log(chalk.cyan(`The username [${req.body.username}] and the email [${req.body.email}] already existed`));
                    return res.status(401).render('register', {
                        userlogin: user_game.username,
                        username: usernameRes,
                        password: null,
                        email: emailRes,
                        success: null
                    });
                } else {
                    console.log(chalk.cyan(`The username [${req.body.username}] already taken`));
                    return res.status(401).render('register', {
                        userlogin: user_game.username,
                        username: usernameRes,
                        password: null,
                        email: null,
                        success: null
                    });
                }
            } else if (userEmail) {
                console.log(chalk.cyan(`The email [${req.body.email}] already registered`));
                return res.status(401).render('register', {
                    userlogin: user_game.username,
                    username: null,
                    password: null,
                    email: emailRes,
                    success: null
                });
            } else if (error) {
                console.error(error);
                return res.status(500).render('errors/500');
            }
        }
    },

    login: async (req, res) => {
        try {
            res.status(200).render('login', {
                userlogin: user_game.username,
                msg: null
            });
        } catch (error) {
            console.error(error);
            res.status(500).render('errors/500');
        }
    },

    loginPost: async (req, res) => {
        try {
            const user = await user_game.findOne({where: {username: req.body.username}});
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.PASS);
            const password = bytes.toString(CryptoJS.enc.Utf8);

            if (!user) {
                console.log(chalk.cyan(`User [${req.body.username}] not found`));
                return res.status(404).render('login', {
                    userlogin: user_game.username,
                    msg: `User not found`
                });
            } else {
                if (req.body.password === password) {
                    user_game.username = user.username;
                    console.log(chalk.green(`[${req.body.username}] successfully logged in`));
                    return res.status(302).redirect('/');
                } else {
                    console.log(chalk.cyan(`Wrong password`));
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
    },

    logout: async (req, res) => {
        try {
            user_game.username = null;
            res.status(302).redirect('/');
        } catch (error) {
            console.error(error);
            res.status(500).render('errors/500');
        }
    }
}