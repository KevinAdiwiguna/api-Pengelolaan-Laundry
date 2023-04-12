const outletModels = require("../models/outlet")

const createOneOutlet = async (req, res) => {
    const { body } = req
    try {
        await outletModels.createOutlet(body)
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

const getAllOutlet = async (req, res) => {
    try {
        const [data] = await outletModels.getOutlet()
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

const deleteOutletById = async (req, res) => {
    const params = req.params.id
    try {
        await outletModels.deleteOutlet(params)
        res.json({
            data: await outletModels.deleteOutlet(params),
            messageStatus: 200
        })
    } catch (error) {
        res.status(500).json({
            messageStatus: "Server ERROR",
            serverMessage: error
        })
    }
}

const updateOutletById = async (req, res) => {
    const params = req.params.id
    const { body } = req
    try {
        await outletModels.updateOutlet(params, body)
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


module.exports = {
    createOneOutlet,
    getAllOutlet,
    deleteOutletById,
    updateOutletById
}