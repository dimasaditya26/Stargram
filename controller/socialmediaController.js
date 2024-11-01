const {SocialMedia, User} = require('./../models')

class socialmediaController {

    static async addSocialMedia(req, res, next){

        const UserId = req.users.id
        const {name, social_media_url} = req.body
        const data =  {name, social_media_url, UserId}
        try {
            const socialmedias = await SocialMedia.create(data)
            if (!socialmedias) throw { name: 'SequelizeValidationError' }
            res.status(201).json({social_media:socialmedias})
        } catch (error) {
            next(error)
        }
    }

    static async getAllSocialMedia(req, res, next){
        try {
            const socialmedias = await SocialMedia.findAll({
                where:{UserId:req.users.id},
                include:[{
                    model:User,
                    attributes:['id','username','profile_image_url']
                }]
            })
            if(!socialmedias) throw {name:"DataNotFound"}
            res.status(200).json({social_medias:socialmedias})
        } catch (error) {
            next(error)
        }
    } 

    static async updateSocialMedia(req, res, next){ 
        const {socialMediaId} = req.params
        const id = socialMediaId
        
        const {name, social_media_url} = req.body 
        const data = {name, social_media_url}
        try {
            const socialmedias = await SocialMedia.update(data, {where:{id, UserId:req.users.id}, returning: true}) 
            if(socialmedias[0]===0) throw ({name:"cantUpdate"})
            if (!socialmedias) throw { name: 'SequelizeValidationError' }
            const datas = socialmedias[1][0] 
            res.status(200).json({social_media:datas})
        } catch (error) {
            next(error)
        }
    } 

    static async removeSocialMedia(req,res, next){ 
        const {socialMediaId} = req.params
        const id = socialMediaId
        
        try {
            const socialmedias = await SocialMedia.destroy({ where: {id, UserId:req.users.id} })
            if (!socialmedias) throw { name: 'ErrNotFound' }
            res.status(200).json({message:"Your social media has been succesfully deleted"})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = socialmediaController