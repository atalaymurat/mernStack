const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 4000

const db = require('./db')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ origin: "http://localhost:8000"}))
app.use(bodyParser.json())

// Database Connections
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', function () {
    console.log(`
  --------------------------------
  MongoDb connection status [OK]')
  --------------------------------
          `)
  })

// Routes
app.get('/', (req, res) => {
  res.send('Express Server Running!')
})
const companyRoutes = require('./routes/company')
app.use("/companies", companyRoutes)

// Listen Port
app.listen(port, () => {
  console.log(`
    =====================================
    Express Server Running On Port ${port}
    =====================================
    `)
})