import { serviceConexao } from "../service/serviceUsuario.js";


const divStar = document.querySelector('[data-star]');
const divConsoles = document.querySelector('[data-consoles]');
const divDiversos = document.querySelector('[data-diversos]');




serviceConexao.pegarProduto()
.then(resposta=>{
    

    for (let i = 0; i < resposta.length; i++) {
        const nome = resposta[i].nome
        const url = resposta[i].url
        const preco = resposta[i].preco
        const categoria = resposta[i].categoria

        const conteudo = `
        <div class="cards">
            <img src="${url}"
            alt="produto a venda"
            />
            <p class="cards__nome">${nome}</p>
            <p>R$ ${preco}</p>
            <a href="#">Ver produto</a>
        </div>`
        if(categoria =='consoles' ){
            divConsoles.innerHTML += conteudo
        }else if(categoria=='Star Wars'){
            divStar.innerHTML+= conteudo
        }else{
            divDiversos.innerHTML+= conteudo
        }
      
    }

     

})





console.log(divConsoles)
console.log(divStar)


    



