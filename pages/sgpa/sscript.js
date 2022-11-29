const sgpa = document.getElementById("sgpa");
const calculate = document.getElementById("calculate");
const add = document.getElementById("add");

let marks = [];
let credits = [];
let outcome = [];
let totalSubjects = 5;

for(let i = 1; i <= totalSubjects; i++) {
    marks[i] = document.getElementById("marks" + i);
    credits[i] = document.getElementById("credits" + i);
    outcome[i] = document.getElementById("outcome" + i);
}

add.addEventListener("click", addSubject);

function addSubject() {
    totalSubjects++;
   /*  let newSubject = document.createElement("div");
    newSubject.classList.add("subject");
    newSubject.innerHTML = `
        <div class="subject">
            <input type="number" id="marks${totalSubjects}" placeholder="Marks">
            <input type="number" id="credits${totalSubjects}" placeholder="Credits">
            <div id="outcome${totalSubjects}"></div>
        </div>
    `;
    document.getElementById("subjects").appendChild(newSubject);
    marks[totalSubjects] = document.getElementById("marks" + totalSubjects);
    credits[totalSubjects] = document.getElementById("credits" + totalSubjects);
    outcome[totalSubjects] = document.getElementById("outcome" + totalSubjects); */
}

calculate.addEventListener("click", function () {
    add.removeEventListener("click", addSubject);
   /*  let total = 0;
    let totalCredits = 0;
    for (let i = 1; i <= totalSubjects; i++) {
        outcome[i].textContent = marks[i].value * credits[i].value;
        total += parseFloat(outcome[i].textContent);
        totalCredits += parseFloat(credits[i].value);
    }
    sgpa.textContent = total/totalCredits; */
});

