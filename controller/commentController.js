const {Photo, User, Comment} = require('./../models')



class commentController {

    static async addComment(req, res, next){

        const UserId = req.users.id
        const {comment, PhotoId} = req.body
        const data =  {comment, UserId, PhotoId}
        try {
            const comments = await Comment.create(data, {returning: true})
            if (!comments) throw { name: 'SequelizeValidationError' }
            res.status(201).json({comment:comments})
        } catch (error) {
            next(error)
        }
    }
    
    static async getAllComment(req, res, next){
        try {
            const comments = await Comment.findAll({
                where:{UserId:req.users.id},
                include:[{
                    model:Photo,
                    attributes:['id', 'title', 'caption', 'poster_image_url'],
                },{
                    model:User,
                    attributes:['id','username','profile_image_url', 'phone_number']
                }]
            })
            if(!comments) throw {name:"DataNotFound"}
            res.status(200).json({comments})
        } catch (error) {
            next(error)
        }
    } 
      
    static async updateComment(req, res, next){ 
        const {commentId} = req.params
        const id = commentId
        
        const {comment, PhotoId} = req.body 
        const data = {comment, PhotoId}
        try {
            const comments = await Comment.update(data, {where:{id, UserId:req.users.id}, returning: true}) 
            if(comments[0]===0) throw ({name:"cantUpdate"})
            if (!comments) throw { name: 'SequelizeValidationError' }
            const datas = comments[1][0]
            res.status(200).json({comment:datas})
        } catch (error) {
            next(error)
        }
    } 
     
    static async removeComment(req, res, next){ 
        const {commentId} = req.params
        const id = commentId
        
        try {
            const comments = await Comment.destroy({ where: {id, UserId:req.users.id} })
            if (!comments) throw { name: 'ErrNotFound' }
            res.status(200).json({message:"Your Comments has been succesfully deleted"})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = commentController