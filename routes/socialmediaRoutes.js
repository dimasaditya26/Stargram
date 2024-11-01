const router = require('express').Router()
const socialmediaController = require('./../controller/socialmediaController')


router.post('/', socialmediaController.addSocialMedia)
router.get('/', socialmediaController.getAllSocialMedia)
router.put('/:socialMediaId', socialmediaController.updateSocialMedia)
router.delete('/:socialMediaId', socialmediaController.removeSocialMedia)


module.exports = router