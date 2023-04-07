import { serviceConexao } from "../service/serviceUsuario.js"

const inputEmail = document.querySelector('#email')
const inputSenha = document.querySelector('#senha')
const formLogin = document.querySelector('[data-form]')

formLogin.addEventListener('submit', (evento)=>{
    evento.preventDefault()

    serviceConexao.autenticado()
    .then((resposta=>{
        const email = resposta[0].email;
        const senha = resposta[0].senha;

        if(email==inputEmail.value && senha==inputSenha.value)
        {
        window.location.href='../adicionarProdutos.html'
        }else
        {
            alert('usuário não cadastrado')
        }
    }))
    
})




