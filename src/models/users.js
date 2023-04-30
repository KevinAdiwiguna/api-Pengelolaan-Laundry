const dbConnection = require('../config/database')


const getAllUsers = () => {
    const SQLQuery = `SELECT nama, username, password, id_outlet, role, refresh_Token FROM tb_user`
    return dbConnection.execute(SQLQuery)
}

const loginUsers = (body) => {
    const { username, password } = body
    const SQLQuery = `SELECT nama, username, password, id_outlet, role FROM tb_user WHERE username='${username}' AND password='${password}'`
    return dbConnection.execute(SQLQuery)
}

const getRefreshToken = (token) => {
    const SQLQuery = `SELECT * FROM tb_user WHERE refresh_token="${token}"`
    return dbConnection.execute(SQLQuery)
}

const checkRegsiter = (body) => {
    const { username, nama } = body
    const SQLQuery = `SELECT id, nama, username, password, id_outlet, role FROM tb_user WHERE username='${username}' OR nama='${nama}'`
    return dbConnection.execute(SQLQuery)
}

const registerUsers = (body) => {
    const { nama, username, password, id_outlet, role } = body
    const SQLQuery = `INSERT INTO tb_user(nama, username, password, id_outlet, role) VALUES ('${nama}','${username}','${password}','${id_outlet}','${role}')`
    console.log(dbConnection.execute(SQLQuery));
    return dbConnection.execute(SQLQuery)
}

const deleteUsers = (params) => {
    const SQLQuery = `DELETE FROM tb_user WHERE username="${params}"`
    return dbConnection.execute(SQLQuery)
}



module.exports = {
    getAllUsers,
    loginUsers,
    registerUsers,
    checkRegsiter,
    deleteUsers,
    getRefreshToken
}
