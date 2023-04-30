const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const dbConnection = require("../config/database")

const refreshToken = async (req, res, next) => {
    try {
        const refreshToken = req.cookies.refreshToken
        if (!refreshToken) return res.sendStatus(401)
        const user = await dbConnection.execute(`SELECT * FROM tb_user WHERE refresh_token="${refreshToken}"`)

        if (!user[0]) return res.sendStatus(403)

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, decode) => {
            if (err) res.sendStatus(403)
            const nama = user[0].nama
            const username = user[0].username
            const password = user[0].password
            const id_outlet = user[0].id_outlet
            const role = user[0].role
            const accTOKEN = jwt.sign({ nama, username, password, id_outlet, role }, process.env.ACCEES_TOKEN, {
                expiresIn: '15s'
            })
            res.json({
                acc_token: accTOKEN
            })

        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = refreshToken