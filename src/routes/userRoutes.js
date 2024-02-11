const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validationMiddleware = require('../middlewares/validationMiddleware');

router.post('/', validationMiddleware.validateUser, userController.createUser);
router.get('/',userController.getUserByEmail);
router.get('/:id',userController.getUserById);
router.get('/',userController.getAllUsers);

module.exports = router;