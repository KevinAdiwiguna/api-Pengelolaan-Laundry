const jwt = require('jsonwebtoken')

function authorization(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token === null) return res.sendStatus(401)
    
    jwt.verify(token, process.env.ACCEES_TOKEN, (err, userData) => {
        if (err) return res.json({msg:err})
        console.log(req.userData);
        req.userData = userData
        next()
    })
}

module.exports = authorization