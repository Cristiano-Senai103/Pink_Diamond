const form = document.getElementById("PC");
const btnEnviar = document.getElementById("btn-enviar");
const nome = document.getElementById("name");
const telefone = document.getElementById("tel");
const email = document.getElementById("email");
const interesses = document.getElementById("int");
const item = {nome, telefone, email, interesses};


form.addEventListener("submit", function (event){
    event.preventDefault();
    if(nome.value === "") {
        alert("Preencha o campo Nome")
        
       }else if(telefone.value === "") {
        alert("preecha o campo Telefone")
        
       }else if(email.value === "") {
        alert("preencha o campo E-mail")
        
       } else if(interesses.value === "") {
        alert("Preencha o campo Interesses")
        
       } else {
        alert("campo preenchido")
       }
    
});

