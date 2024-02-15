const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validationMiddleware = require('../middlewares/validationMiddleware');

router.post('/', validationMiddleware.validateUser, userController.createUser);
router.get('/:id',userController.getUserById);
router.get('/',userController.getAllUsers);
router.delete('/:id',userController.deleteUser);
router.put('/:id',userController.updateUser);
router.get('/email/:email',userController.getUserByEmail);
router.get('/name/:name',userController.getUserByName);


module.exports = router;