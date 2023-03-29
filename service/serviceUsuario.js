const autenticado = ()=>
{
    return fetch(`http://localhost:3000/usuario`)
    .then(resposta=>{
        return resposta.json()
    })
}

const inputEmail = document.querySelector('#email')
const inputSenha = document.querySelector('#senha')
const formLogin = document.querySelector('[data-form]')

formLogin.addEventListener('submit', (evento)=>{
    evento.preventDefault()

    autenticado()
    .then((resposta=>{
        const email = resposta[0].email;
        const senha = resposta[0].senha;

        console.log(inputEmail.value)
        console.log(inputSenha.value)
        if(email==inputEmail.value && senha==inputSenha.value){
        window.location.href='../adicionarProdutos.html'
        }else{
            console.log('falso')
        }
    }))
    
})






