const { User } = require("./../models")
const { compare } = require("./../helpers/hash")
const { sign } = require("./../helpers/jwt")


class UserController {
    static async signUp(req, res, next) {
        const { email, full_name, username, password, profile_image_url, age, phone_number } = req.body
        const data = { email, full_name, username, password, profile_image_url, age, phone_number }
        try {
            const users = await User.create(data)
            if (!users) throw { name: 'SequelizeValidationError' }
            res.status(201).json({
                email: users.email,
                full_name: users.full_name,
                username : users.username,
                profile_image_url : users.profile_image_url,
                age: users.age,
                phone_number: users.phone_number 
            })
        } catch (error) {
            next(error)
        }
    }

    static async SignIn(req, res, next) {
        const { email, password } = req.body
        try {
            const users = await User.findOne({ where: { email } })
            if (!users) throw { name: "EmailNotFound" }
            if (!compare(password, users.password)) throw { name: "WrongPassword" }
            const token = sign({ id: users.id, email: users.email })
            res.status(200).json({ token })

        } catch (error) {
            next(error)
        }
    }

    static async Update(req, res, next) {

        const { userId } = req.params
        const id = userId

        const { email, full_name, username, profile_image_url, age, phone_number } = req.body
        const data = { email, full_name, username, profile_image_url, age, phone_number }
        try {

            if (id != req.users.id) throw { name: "notUserId" }
            const users = await User.update(data, { where: { id }, returning: true })
            if (users[0] === 0) throw ({ name: "cantUpdate" })
            if (!users) throw ({name : "SequelizeValidationError"})
            const datas = users[1][0]
            res.status(200).json({
                user: {
                    email: datas.email,
                    full_name: datas.full_name,
                    username: datas.username,  
                    profile_image_url: datas.profile_image_url,
                    age: datas.age,
                    phone_number: datas.phone_number
                }
            })
        } catch (error) {
            next(error)
        }
    }

    static async Remove(req, res, next) {
        const { userId } = req.params
        const id = userId
        // console.log(id)
        try {
            if (id != req.users.id) throw { name: "notUserId" }
            const users = await User.destroy({ where: { id } })
            if (!users) throw { name: 'cantDelete' }
            res.status(200).json({ message: "Your account has been succesfully deleted" })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController