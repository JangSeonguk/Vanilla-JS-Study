const h1 = document.querySelector("body > h1");
const login_form = document.querySelector("#login-form");
const login_input = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_KEY = "hidden"
const USERNAME_KEY = "username"

function handleClicked(){
    h1.classList.toggle("clicked");
}

function paintGreetings(username){
    greeting.classList.toggle(HIDDEN_KEY)
    greeting.innerText = `hello ${username}`;
}
function handleloginForm(event){
    event.preventDefault();
    const username = login_input.value
    localStorage.setItem(USERNAME_KEY,username)
    login_form.classList.toggle(HIDDEN_KEY)
    paintGreetings(username)
}


h1.addEventListener("click",handleClicked);
login_form.addEventListener("submit", handleloginForm);

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername===null){
    login_form.classList.toggle(HIDDEN_KEY)
    login_form.addEventListener("submit", handleloginForm);}
    else{
        paintGreetings(savedUsername)
}