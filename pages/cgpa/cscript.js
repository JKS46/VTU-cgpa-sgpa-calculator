const cgpa = document.getElementById("cgpa");
const calculate = document.getElementById("calculate");
const num = 8;

calculate.addEventListener("click", function () {
    let credits = [];
    let CG = [];
    let CiGi = 0;
    let creditSum = 0;
    for (let i = 1; i <= num; i++) {
       credits[i]= parseInt(document.getElementById("credit" + i).value);
        CG[i] = parseInt(document.getElementById("CG" + i).value);

        if(credits[i] <0 || CG[i]<0){
            alert("Negative value Error in Semester " + i);
            return;
        }
        if(credits[i] == 0 && CG[i]!=0){
            alert("Credits earned cannot be 0 if CiGi is not 0 in Semester " + i);
        }
        else if(credits[i] != 0 && CG[i]==0){
            alert("CiGi cannot be 0 if Credits earned is not 0 in Semester " + i);
        }
        creditSum += credits[i];
        CiGi += CG[i];
    }
    console.log(creditSum,CiGi,CG,credits,"creditSum,CiGi,CG,credits");
  
    cgpa.textContent = (CiGi/creditSum).toFixed(2);
});
