const botaoEnviarMessagem = document.querySelector('[data-falaConosco]');



botaoEnviarMessagem.addEventListener('click', (evento)=>{
    evento.preventDefault();
    const nome = document.querySelector('#nome').value;
    const mensagem = document.querySelector('#mensagem').value;

    console.log(nome,mensagem)
})