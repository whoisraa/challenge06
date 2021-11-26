const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();

router.get('/', controller.home);
router.get('/game', controller.game);
router.get('/register', controller.register);
router.post('/register', controller.registerPost);
router.get('/login', controller.login);
router.post('/login', controller.loginPost);
router.get('/profile', controller.profile);
router.get('/profile/edit', controller.edit);
router.post('/profile/update', controller.update);
router.get('/logout', controller.logout);

module.exports = router;