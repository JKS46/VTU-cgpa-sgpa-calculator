const sgpa = document.getElementById("sgpa");
const calculate = document.getElementById("calculate");
const add = document.getElementById("add");

let marks = [];
let credits = [];
let outcome = [];
let totalSubjects = 5;

add.addEventListener("click", addSubject);

function addSubject() {
    totalSubjects++;
    let newSubject = document.createElement("p");
    let lineBreak = document.createElement("hr");
    newSubject.innerText = "Sub "+totalSubjects;
    document.querySelector(".subjects").appendChild(newSubject);
    document.querySelector(".subjects").appendChild(lineBreak);

    let newCredits = document.createElement("input");
    let lineBreak2 = document.createElement("hr");
    newCredits.setAttribute("type", "number");
    newCredits.setAttribute("id", "credit"+totalSubjects);
    newCredits.setAttribute("min", "1");
    newCredits.setAttribute("max", "10");
    newCredits.setAttribute("value","0");
    document.querySelector(".credits").appendChild(newCredits);
    document.querySelector(".credits").appendChild(lineBreak2);

    let newMarks = document.createElement("input");
    let lineBreak3 = document.createElement("hr");
    newMarks.setAttribute("type", "number");
    newMarks.setAttribute("id", "mark"+totalSubjects);
    newMarks.setAttribute("min", "0");
    newMarks.setAttribute("max", "100");
    newMarks.setAttribute("value", "0");
    document.querySelector(".marks").appendChild(newMarks);
    document.querySelector(".marks").appendChild(lineBreak3);

    let newOutcome = document.createElement("select");
    let lineBreak4 = document.createElement("hr");
    newOutcome.setAttribute("id", "result"+totalSubjects);
    newOutcome.innerHTML = "<option value='1'>Pass</option><option value='0'>Fail</option>";
    document.querySelector(".outcome").appendChild(newOutcome);
    document.querySelector(".outcome").appendChild(lineBreak4);
}

calculate.addEventListener("click", function () {
    add.removeEventListener("click", addSubject);
    for(let i = 1; i <= totalSubjects; i++) {
        marks[i] = document.getElementById("mark" + i).value;
        credits[i] = document.getElementById("credit" + i).value;
        outcome[i] = document.getElementById("result" + i).value;
        console.log(marks[i]);
    }
    console.log(marks, credits, outcome);
    let total = 0;
    let totalCredits = 0;
    /* for (let i = 1; i <= totalSubjects; i++) {
        outcome[i].textContent = marks[i].value * credits[i].value;
        total += parseFloat(outcome[i].textContent);
        totalCredits += parseFloat(credits[i].value);
    }
    sgpa.textContent = total/totalCredits; */
});

