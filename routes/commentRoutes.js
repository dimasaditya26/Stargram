const router = require('express').Router()
const commentController = require('./../controller/commentController')


router.post('/', commentController.addComment)
router.get('/', commentController.getAllComment)
router.put('/:commentId', commentController.updateComment)
router.delete('/:commentId', commentController.removeComment)


module.exports = router