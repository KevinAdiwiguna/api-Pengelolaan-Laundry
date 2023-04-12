const paketModels = require("../models/paket")

const getAllPaket = async (req, res) => {
    try {
        const [data] = await paketModels.getPaket()
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

const createOnePaket = async (req, res) => {
    const { body } = req
    try {
        await paketModels.createPaket(body)
        res.json({
            data: body,
            messageStatus: 200
        })
    } catch (error) {
        res.status(500).json({
            messageStatus: "Server ERROR",
            serverMessage: error
        })
    }
}

const updatePaketById = async (req, res) => {
    const params = req.params.id
    const { body } = req
    try {
        await paketModels.updatePaket(params, body)
        res.json({
            data: body,
            messageStatus: 200
        })
    } catch (error) {
        res.status(500).json({
            messageStatus: "Server ERROR",
            serverMessage: error
        })
    }
}

const deletePaketById = async (req, res) => {
    const params = req.params.id
    try {
        await paketModels.deletepaket(params)
        res.json({
            data: await paketModels.deletepaket(params),
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
    createOnePaket,
    getAllPaket,
    updatePaketById,
    deletePaketById
}