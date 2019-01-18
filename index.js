const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const port = 8000

const models = require("./models")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.get("/", (req, res) => {
  res.send({
    data: ""
  })
})

app.get("/users", (req, res) => {
  models.User.findAll()
    .then(users => {
      res.send({
        data: users
      })
    })
    .catch(error => {
      res.status(400).send({
        error: error
      })
    })
})

models.sequelize.sync().then(function() {
  app.listen(port, err => {
    console.log(`Server running at http://localhost:${port}`)
  })
})
