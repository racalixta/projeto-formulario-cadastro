const form = document.querySelector("#form");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    const firstnameValue = firstname.value;
    const lastnameValue = lastname.value;
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(firstnameValue === ""){
        setErrorFor(firstname, "O nome é obrigatório");
    } else {
        setSuccessFor(firstname);
    }

    if(lastnameValue === ""){
        setErrorFor(lastname, "O sobrenome é obrigatório!");
    } else {
        setSuccessFor(lastname);
    }

    if(usernameValue === ""){
        setErrorFor(username, "O nome de usuário é obrigatório!");
    } else {
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido!");
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === ""){
        setErrorFor(password, "A senha é obrigatória!")
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres!")
    } else {
        setSuccessFor(password)
    }

    if(passwordConfirmationValue === ""){
        setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória!")
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "As senhas não conferem!")
    } else {
        setSuccessFor(passwordConfirmation)
    }


    const inputBox = form.querySelectorAll(".input-box");

    const formIsValid = [...inputBox].every((inputBox) => {
        return (inputBox.className === "input-box success")
    });

    if(formIsValid){
        console.log("Cadastro realizado com sucesso!")
    }

}

function setErrorFor(input, message) {
    const inputBox = input.parentElement;
    const small = inputBox.querySelector("small");

    small.innerText = message;
    inputBox.className = "input-box error";

    //const inp = inputBox.querySelector("input");
    //inp.setAttribute("required", "");
}

function setSuccessFor(input) {
    const inputBox = input.parentElement;
    
    inputBox.className = "input-box success";

    //const inp = inputBox.querySelector("input");
    //inp.removeAttribute("required", "");

}



// expressão regular para checar o email
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

