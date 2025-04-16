import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Bem vindo a minha API')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})