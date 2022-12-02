const sgpa = document.getElementById("sgpa");
const calculate = document.getElementById("calculate");
const add = document.getElementById("add");
const CG = document.getElementById("CG");
const earnedCredits = document.getElementById("earnedCredits");
const regCredits = document.getElementById("regCredits");

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

    let totalCredits = 0;
    let CiGi = 0;
    let actualCredits = 0;

    for(let i = 1; i <= totalSubjects; i++) {

        marks[i] = parseInt(document.getElementById("mark" + i).value);
        credits[i] = parseInt(document.getElementById("credit" + i).value);
        outcome[i] = parseInt(document.getElementById("result" + i).value);

        if(credits[i] == 0) {
            alert("Zero credits are not allowed for subject "+i);
            return;
        }
        if(marks[i]<0 || credits[i]<0) {
            alert("Negative value error in subject "+i);
            return;
        }
        if(marks[i]<40 && outcome[i] == 1) {
            alert("Marks of subject "+i+" is less than 40,which is considered as Fail. Change the outcome to continue");
            return;
        }
        else if(marks[i]>100){
            alert("Marks of subject "+i+"is greater than 100,which is not possible. Change the marks to continue");
            return;
        }
        if(marks[i]>=90) {
            marks[i] = 10;
        }
        else if(marks[i]>=80 && marks[i]<90) {
            marks[i] = 9;
        }
        else if(marks[i]>=70 && marks[i]<80) {
            marks[i] = 8;
        }
        else if(marks[i]>=60 && marks[i]<70) {
            marks[i] = 7;
        }
        else if(marks[i]>=45 && marks[i]<60) {
            marks[i] = 6;
        }
        else if(marks[i]>=40 && marks[i]<45) {
            marks[i] = 4;
        }
        
        totalCredits += credits[i];

        if(outcome[i] == 0) {
            marks[i] = 0;
            credits[i] = 0;
        }

        CiGi += marks[i]*credits[i];
        actualCredits += credits[i];
    }
    console.log(marks, credits, outcome," marks, credits, outcome");

    regCredits.textContent = totalCredits;
    CG.textContent = CiGi;
    earnedCredits.textContent = actualCredits;
    sgpa.textContent = (CiGi/totalCredits).toFixed(2);
});

