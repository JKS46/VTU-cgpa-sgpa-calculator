const cgpa = document.getElementById("cgpa");
let total = 0;
const calculate = document.getElementById("calculate");

calculate.addEventListener("click", function () {
    let sem1 = document.getElementById("sem1").value;
    let sem2 = document.getElementById("sem2").value;
    let sem3 = document.getElementById("sem3").value;
    let sem4 = document.getElementById("sem4").value;
    let sem5 = document.getElementById("sem5").value;
    let sem6 = document.getElementById("sem6").value;
    let sem7 = document.getElementById("sem7").value;
    let sem8 = document.getElementById("sem8").value;
    console.log("clicked");
    total = (sem1/1 + sem2/1 + sem3/1 + sem4/1 + sem5/1 + sem6/1 + sem7/1 + sem8/1) / 8;
    cgpa.value = total;
    console.log(total);
    cgpa.textContent = total;
    });
