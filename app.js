const h1 = document.querySelector("body > h1")
const login_input = document.querySelector("#login-form input")
const login_button = document.querySelector("#login-form button")
function handleClicked(){
    h1.classList.toggle("clicked");
}
function handleloginBtn(){
    const username = login_input.value
    console.log(username)
}

h1.addEventListener("click",handleClicked);
login_button.addEventListener("click", handleloginBtn)