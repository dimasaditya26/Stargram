const router = require('express').Router()
const photoController = require('./../controller/photoController')


// Route untuk menambahkan foto
router.post('/photos', photoController.addPhoto);

// Route untuk mendapatkan semua foto
router.get('/photos', photoController.getAllPhoto);

// Route untuk memperbarui foto
router.put('/photos/:photoId', photoController.updatePhoto);

// Route untuk menghapus foto
router.delete('/photos/:photoId', photoController.removePhoto);

module.exports = router