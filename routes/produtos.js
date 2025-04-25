import express, { Router } from "express";

const router = express.Router();

const produtos = [
  { id: 1, nome: "Canabbis", preco: 10 },
  { id: 2, nome: "Djamba", preco: 35 },
];

router.get("/", (req, res) => {
  res.status(200).json(produtos);
});

router.post("/addProduto", (req, res) => {
  const { nome, preco } = req.body;

  const novoProduto = {
    id: produtos[produtos.length - 1].id + 1,
    nome: nome,
    preco: preco,
  };
  produtos.push(novoProduto);
  res.status(201).json(produtos);
});

router.put("/attProduto/:id", (req, res) => {
  const { id } = req.params;
  const { novoNome, novoPreco } = req.body;

  const indice = produtos.findIndex((produto) => {
    return produto.id == id;
  });
  if (indice === -1) {
    return res.status(404).json({ erro: "Produto não encontrado!" });
  }

  produtos[indice].nome = novoNome;
  produtos[indice].preco = novoPreco;
  res.send(produtos);
});

router.delete("/delProduto/:id", (req, res) => {
  const { id } = req.params;

  const index = produtos.findIndex((produto) => {
    return produto.id === id;
  });
  if (index === -1) {
    res.status(404).json({ erro: "Produto não encontrado" });
  }
  produtos.splice(index, 1);
  res.status(200).json({ messagem: "Produto deletado com sucesso!" });
});

router.get("/produto/:id", (req, res) => {
  const { id } = req.params;

  const index = produtos.findIndex((produto) => {
    return produto.id === +id;
  });
  if (index === -1) {
    return res.status(404).json({ erro: "Produto não encontrado!" });
  }
  res.json(produtos[index]);
});

export default router;
