const clock = document.querySelector("h2#clock")

function dDay(targetDate){
    const now = new Date();
    const target = new Date(targetDate);

    const defTime = target - now;

    const dDays = Math.floor(defTime / (1000 * 60 * 60 * 24));
    const dHours = Math.floor((defTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const dMin = Math.floor((defTime % (1000 * 60 * 60)) / (1000 * 60));
    const dsec = Math.floor((defTime % (1000 * 60)) / 1000);

    clock.innerText = `${dDays}d ${dHours}h ${dMin}m ${dsec}s`
}

const curYear = new Date().getFullYear();
console.log(curYear)
const targetDate = `${curYear}-12-25`;
dDay(targetDate);
setInterval(() => dDay(targetDate), 1000);