const dbConnection = require('../config/database')

const createOutlet = (body) => {
    const SQLQuery = `INSERT INTO tb_outlet(nama, alamat, tlp) VALUES ('${body.nama}','${body.alamat}','${body.tlp}')`
    return dbConnection.execute(SQLQuery)
}

const getOutlet = () => {
    const SQLQuery = `SELECT * FROM tb_outlet`
    return dbConnection.execute(SQLQuery)
}

const deleteOutlet = (params) => {
    const SQLQuery = `DELETE FROM tb_outlet WHERE id=${params}`
    return dbConnection.execute(SQLQuery)
}

const updateOutlet = (params, body) => {
    const SQLQuery = `UPDATE tb_outlet SET nama='${body.nama}',alamat='${body.alamat}',tlp='${body.tlp}' WHERE id=${params}`
    return dbConnection.execute(SQLQuery)
}

module.exports = {
    createOutlet,
    getOutlet,
    deleteOutlet,
    updateOutlet
}