/*const{principal} = require('../grupo2-pdi-backend-main/src/index')

principal()*/

const express = require('express')
const app = express()
const port = 3000

app.get('/home', (req, res) => {
  res.send('Bem vindos, ao Top Acessorios')
})

app.listen(port, () => {
  console.log(`Servidor funcionando ${port}`)
})