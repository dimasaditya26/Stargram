const router = require('express').Router(); 
const usersRoutes = require('./usersRoutes'); 
const photoRoutes = require('./photosRoutes')
const socialmediaRoutes = require('./socialmediaRoutes')
const commentRoutes = require('./commentRoutes')

const authenticationMiddleware = require('./../middlewares/auth-middleware')
const errorMiddleware = require('./../middlewares/error-middleware')

router.use('/users', usersRoutes)
router.use('/photos',authenticationMiddleware , photoRoutes)
router.use('/socialmedias',authenticationMiddleware , socialmediaRoutes)
router.use('/comments',authenticationMiddleware , commentRoutes)

router.use((req, res, next) => {
    next({ name: 'PageNotFound' });
});   

router.use(errorMiddleware)

module.exports = router;