const express = require('express');
const router = express.Router();

const customerControllers = require('../controllers/customerControllers');

router.get('/', customerControllers.list);
router.post('/add', customerControllers.save);
router.get('/delete/:codUsu', customerControllers.delete);
router.get('/update/:codUsu', customerControllers.edit);
router.post('/update/:codUsu', customerControllers.update);



module.exports = router