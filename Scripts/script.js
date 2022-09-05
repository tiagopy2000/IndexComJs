function logar(){

var login = document.getElementById('login').value;
var senha = document.getElementById('senha').value;


if(login =="admin" && senha =="admin"){
    alert('sucesso');
    location.href = "index.html";
}else{
    alert('Usuario ou senha incorretos');
}

}

const rolagem = document.querySelector('#rolagem')

rolagem.addEventListener('click', () =>{
    window.scroll({top: window.innerHeight, behavior: "smooth"})

    rolagem.style.display='none'
})

