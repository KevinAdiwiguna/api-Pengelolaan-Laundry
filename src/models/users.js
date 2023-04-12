const dbConnection = require('../config/database')

const getAllUser = () => {
    const SQLQuery = "SELECT * FROM tb_user"
    return dbConnection.execute(SQLQuery)
}
const createUser = (body) => {
    const SQLQuery = `INSERT INTO tb_user(nama, username, password, role, id_outlet) VALUES ('${body.nama}','${body.username}','${body.password}','${body.role}', '${body.id_outlet}')`
    return dbConnection.execute(SQLQuery)
}
const getUser = (body) => {
    const SQLQuery = `SELECT username, password, role FROM tb_user WHERE username='${body.username}' AND password='${body.password}'`
    return dbConnection.execute(SQLQuery)
}
const deleteUser = (params) => {
    const SQLQuery = `DELETE FROM tb_user WHERE id=${params}`
    return dbConnection.execute(SQLQuery)
}


module.exports = {
    getAllUser,
    createUser,
    getUser,
    deleteUser
}