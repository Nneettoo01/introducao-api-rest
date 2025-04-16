import express from "express"
const app = express()
const port = 3000

app.use(express.json())

const usuarios = [
  {id: 1, nome: 'João', email:"joao@email.com"},
  {id: 2, nome: 'Ana', email:"ana@email.com"}
]
 


// Rota inicio
app.get('/', (req, res) => {
  res.send('Bem vindo a minha API')
})





// Rota cria usuario
app.post("/criarUsuario", (req, res) => {
  const { nome, email } = req.body;

  // Adicionar o usuario no banco de dados fake(lista)
  const novoUsuario = {
    id: usuarios[usuarios.length - 1].id + 1, nome: nome, email: email
  }
usuarios.push(novoUsuario)
  
  res.send(usuarios)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})