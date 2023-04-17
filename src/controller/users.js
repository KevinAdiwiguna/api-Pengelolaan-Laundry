const userModel = require("../models/users")

const getAllUser = async (req, res) => {
    try {
        const [data] = await userModel.getAllUsers()
        res.json({
            data: data,
            serverStatus: 200
        })
    } catch (error) {
        res.json({
            data: {},
            serverStatus: 200
        })
    }
}

const loginUsers = async (req, res) => {
    const { body } = req
    try {
        await userModel.loginUsers(body)
        const [data] = await userModel.loginUsers(body)
        if (data[0].username === body.username && data[0].password == body.password) {
            res.json({
                data: data,
                loginStatus: "Login Berhasil",
                isLogin: true,
                serverStatus: 200
            })
        } else {
            res.json({
                data: error,
                loginStatus: "Login Gagal, Username || Password tidak ditemukan",
                isLogin: false,
                serverStatus: 200
            })
        }
    } catch (error) {
        res.json({
            data: error,
            loginStatus: "Login Gagal, Username || Password tidak ditemukan",
            isLogin: false,
            serverStatus: 200
        })
    }
}

const registerUsers = async (req, res) => {
    const { body } = req
    const [data] = await userModel.checkRegsiter(body)
    try {
        if (data[0] == undefined && data[0] == null) {
            await userModel.registerUsers(body)
            res.json({
                data: data,
                registerUsers: "Register Berhasil",
                usernameIsValid: false,
                namaIsValid: false,
                serverStatus: 200
            })
        } else if (data[0].username !== body.username && data[0].nama !== body.nama) {
            await userModel.registerUsers(body)
            res.json({
                data: data,
                registerUsers: "Register Berhasil",
                usernameIsValid: data[0].username === body.username,
                namaIsValid: data[0].nama === body.nama,
                serverStatus: 200
            })
        } else {
            res.json({
                data: data,
                registerUsers: "Register Gagal",
                usernameIsValid: data[0].username === body.username,
                namaIsValid: data[0].nama === body.nama,
                serverStatus: 200
            })
        }
    } catch (error) {
        res.json({
            data: error,
            registerUsers: "Register Gagal",
            usernameIsValid: false,
            namaIsValid: false,
            serverStatus: 200
        })
    }
}

const deleteUsers = async (req, res) => {
    const params = req.params.id
    try {
        await userModel.deleteUsers(params)
        res.json({
            data: {},
            message: `users berhasil dihapus`,
            errorMessage: {},
            messageStatus: 200
        })
    } catch (error) {
        res.json({
            data: {},
            message: ``,
            errorMessage: error,
            messageStatus: 200
        })
    }
}

module.exports = {
    loginUsers,
    getAllUser,
    registerUsers,
    deleteUsers
}
