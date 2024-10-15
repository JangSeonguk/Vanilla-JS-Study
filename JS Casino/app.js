const compareLabel = document.querySelector("#compare")
const generate_input = document.querySelector("#generate-form input")
const guess_form = document.querySelector("#guess-form")
const guess_input = document.querySelector("#guess-form input")
const result = document.querySelector("#result")

function play(event){
    event.preventDefault();

    if (!generate_input.value) {
        alert("Please enter a Max number.");
        return;
    }
    const max_input = parseInt(generate_input.value)+1
    const guess_number = parseInt(guess_input.value)

    if(max_input<guess_number){
        alert("Guess Number is out of the allowed range!");
        return;
    }
    const random_number = Math.floor(Math.random()*(max_input))
    compareLabel.textContent = `You chose : ${guess_input.value} ,the machine chose: ${random_number}.`
    console.log(compareLabel)

    if (guess_number === random_number){
        result.innerText = "You Won!"
    }else{
        result.innerText = "You lost!"
    }
}

guess_form.addEventListener("submit",play)
