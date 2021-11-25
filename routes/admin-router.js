const express = require('express');
const adminController = require('../controllers/admin-controller');
const router = express.Router();

router.get('/', adminController.adminLogin);
router.post('/', adminController.adminLoginPost)
router.get('/', adminController.admin);
router.get('/edit/:id', adminController.edit);
router.post('/update', adminController.update);
router.get('/add', adminController.add);
router.post('/create', adminController.create);
router.get('/delete/:id', adminController.delete);
router.get('/logout', adminController.logout);

module.exports = router