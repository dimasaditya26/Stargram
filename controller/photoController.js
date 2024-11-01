const {Photo, User, Comment} = require('./../models')


class PhotoController {

    static async addPhoto(req, res, next){
        const UserId = req.users.id
        const {poster_image_url, title, caption} = req.body
        const data =  {poster_image_url, title, caption, UserId}
        try {
            const photos = await Photo.create(data)
            if (!photos) throw { name: 'SequelizeValidationError' }
            res.status(201).json({photo:photos})
        } catch (error) {
            // if (error.name === 'SequelizeValidationError') {
            //     const ValidationError = error.errors.map((error) => {
            //         return error.message
            //     })
            //     res.status(400).json({ message: ValidationError })
            // } else {
            //     res.status(500).json({ message: 'internal server error' })
            // }
            next(error)
        }
    }
    
    static async getAllPhoto(req, res, next){
        try {
            const photos = await Photo.findAll({
                where:{UserId:req.users.id},
                include:[{
                    model:Comment,
                    attributes:['comment'],
                    include:{
                        model:User,
                        attributes:['username']
                    }
                },{
                    model:User,
                    attributes:['id','username','profile_image_url']
                }]
            })
            if(!photos) throw {name:"DataNotFound"}
            res.status(200).json({photos})
        } catch (error) {
            next(error)
        }
    } 
     
    static async updatePhoto(req, res, next){ 
        const {photoId} = req.params
        const id = photoId
        
        const {title, caption, poster_image_url} = req.body 
        const data = {title, caption, poster_image_url}
        try {
            const photos = await Photo.update(data, {where:{id, UserId:req.users.id}, returning: true}) 
            if(photos[0]===0) throw ({name:"cantUpdate"})
            if (!photos) throw { name: 'SequelizeValidationError' }
            const datas = photos[1][0]
            res.status(200).json({photo:datas})
        } catch (error) {
            next(error)
        }
    } 
     
    static async removePhoto(req,res, next){ 
        const {photoId} = req.params
        const id = photoId
        // console.log(id);
        try {
            const photos = await Photo.destroy({ where: {id, UserId:req.users.id} })
            if (!photos) throw { name: 'ErrNotFound' }
            res.status(200).json({message:"Your photos has been succesfully deleted"})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = PhotoController