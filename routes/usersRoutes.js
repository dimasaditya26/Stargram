const UsersController = require('./../controller/usersController');
const router = require('express').Router();

const authenticationMiddleware = require('./../middlewares/auth-middleware')


router.post('/register', UsersController.signUp)
router.post('/login', UsersController.SignIn)
router.put('/:userId', authenticationMiddleware, UsersController.Update )
router.delete('/:userId', authenticationMiddleware, UsersController.Remove )

module.exports = router;