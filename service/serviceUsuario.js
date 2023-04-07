const autenticado = ()=>
{
    return fetch("http://localhost:3000/usuario")
    .then(resposta=>{
        return resposta.json()
    })
}
 
const criaProdutos = (produto)=>
{
    return fetch(`http://localhost:3000/produtos/`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(produto)
    })
    .then(resposta=>{
        if(!resposta.ok){
            throw Error('não conseguiu')
        }
        else{
            return resposta.body
        }
    })
}

const pegarProduto = ()=>{
    return fetch("http://localhost:3000/produtos")
    .then(resposta=>{
        return resposta.json()
    })
}



export const serviceConexao ={
    autenticado,
    criaProdutos,
    pegarProduto

}







