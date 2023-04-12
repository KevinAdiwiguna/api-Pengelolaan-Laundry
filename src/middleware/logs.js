const logRequest = (req, res, next) => {
    console.log("Request on Path:", req.path)
    next()
}

module.exports = logRequest