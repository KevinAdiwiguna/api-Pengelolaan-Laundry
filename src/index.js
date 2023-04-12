require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8888

const usersRoutes = require('./routes/users')
const outletRoutes = require('./routes/outlet')
const paketRoutes = require('./routes/paket')
const logRequest = require("./middleware/logs")


app.use(logRequest)
app.use(express.json())

app.use('/users', usersRoutes)
app.use('/outlet', outletRoutes)
app.use('/paket', paketRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})