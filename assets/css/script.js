let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

/*

function validarNome() {
    if (nome.value.length < 3) {
        alert('Nome invalido')
    }
}



function validarEmail() {
    let email = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1) {  
    alert('Email invalido! Digite um email valido com @.') }
}

*/

function validarNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome valido'
        txtNome.style.color = 'black'
    }
}

function validarEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if ( email.value.indexOf ('@') == -1 || email.value.indexOf ('.') ==  -1 ) {
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email valido'
        txtEmail.style.color = 'black'
    }
}

function validarAssunto() {
    let txtAssunto =  document.querySelector("#txtAssunto")
    if (assunto.value.length >= 50) {
        txtAssunto.innerHTML = 'Assunto inválido'
        txtAssunto.style.color = 'red'
    } else {
        txtAssunto.innerHTML = 'Assunto valido'
        txtAssunto.style.color = 'black'
    }
}
