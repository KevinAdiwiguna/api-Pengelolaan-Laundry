const userModel = require("../models/users")

const getAllUsers = async (req, res) => {
    try {
        const [data] = await userModel.getAllUser()
        res.json({
            data: data,
            messageStatus: 200
        })
    } catch (error) {
        res.status(500).json({
            messageStatus: "Server ERROR",
            serverMessage: error
        })
    }
}

const createNewUser = async (req, res) => {
    const { body } = req
    try {
        await userModel.createUser(body)
        res.json({
            data: body,
            messageStatus: res.status
        })
    } catch (error) {
        res.status(500).json({
            messageStatus: "Server ERROR",
            serverMessage: error
        })
    }
}

const getOneUser = async (req,res) => {
    const { body } = req
    try {
        await userModel.getUser(body)
        const [data] = await userModel.getUser(body)
        res.json({
            data: data,
            messageStatus: 200
        })
    } catch (error) {
        res.status(500).json({
            messageStatus: "Server ERROR",
            serverMessage: error
        })
    }
}

const deleteUserById = async (req, res) => {
    const params = req.params.id
    try {
        await userModel.deleteUser(params)
        res.json({
            data: await userModel.deleteUser(params),
            messageStatus: 200
        })
    } catch (error) {
        res.status(500).json({
            messageStatus: "Server ERROR",
            serverMessage: error
        })
    }
}



module.exports = {
    getAllUsers,
    createNewUser,
    getOneUser,
    deleteUserById
}