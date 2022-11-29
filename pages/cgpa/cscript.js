const cgpa = document.getElementById("cgpa");
const calculate = document.getElementById("calculate");
const num = 8;

calculate.addEventListener("click", function () {
    let sem = [];
    let nonZero = 8;
    let total = 0;
    for (let i = 1; i <= num; i++) {
        sem[i] = document.getElementById("sem" + i).value;
        total += parseFloat(sem[i]);
        if (sem[i] == 0) {
            nonZero--;
        }
    }
    cgpa.textContent = total/nonZero;
});
