const dbConnection = require('../config/database')

const createPaket = (body) => {
    const SQLQuery = `INSERT INTO tb_paket(id_outlet, jenis, nama_paket, harga) VALUES ('${body.id_outlet}','${body.jenis}','${body.nama_paket}','${body.harga}')`
    return dbConnection.execute(SQLQuery)
}

const getPaket = () => {
    const SQLQuery = `SELECT * FROM tb_paket`
    return dbConnection.execute(SQLQuery)
}

const updatePaket = (parmas, body) => {
    const SQLQuery = `UPDATE tb_paket SET jenis='${body.jenis}',nama_paket='${body.nama_paket}',harga='${body.harga}' WHERE id=${parmas}`
    return dbConnection.execute(SQLQuery)
}

const deletepaket = (params) => {
    const SQLQuery = `DELETE FROM tb_paket WHERE id=${params}`
    return dbConnection.execute(SQLQuery)
}

module.exports = {
    createPaket,
    getPaket,
    updatePaket,
    deletepaket
}