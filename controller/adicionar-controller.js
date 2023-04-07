import { serviceConexao } from "../service/serviceUsuario.js";

const form = document.querySelector('[data-form]')
const imagemProduto = document.querySelector('#inputImagem');
const categoriaProduto = document.querySelector('#inputCategoria');
const nomeProduto = document.querySelector('#inputProduto');
const precoProduto = document.querySelector('#inputPreco');
const descricaoProduto = document.querySelector('#inputDescricao');


form.addEventListener('submit', (evento)=>{
    evento.preventDefault()

    const url = imagemProduto.value
    const categoria = categoriaProduto.value
    const nome = nomeProduto.value
    const preco = precoProduto.value
    const descricao = descricaoProduto.value
    const produto = {
        url:url,
        categoria:categoria,
        nome:nome,
        preco:preco,
        descricao:descricao
    }

   serviceConexao.criaProdutos(produto)
   .then(resposta=>{
    if(resposta){
        window.location.href='/index.html'
    }else{
        alert('recarregue a pagina')
    }
   })
   
})

