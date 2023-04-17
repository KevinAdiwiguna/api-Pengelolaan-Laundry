require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8888

const usersRoutes = require('./routes/users')
const outletRoutes = require('./routes/outlet')
const paketRoutes = require('./routes/paket')
const logRequest = require("./middleware/logs")

app.use(cors())
app.use(logRequest)
app.use(express.json())

app.use('/api/users', usersRoutes)
app.use('/api/outlet', outletRoutes)
app.use('/api/paket', paketRoutes)

app.get('/', (req, res) => {
  res.send("Selamat datang di api pengelolaan laundry silahkan pergi ke /api")
})
app.get('/api', (req, res) => {
  res.send("hallo")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})