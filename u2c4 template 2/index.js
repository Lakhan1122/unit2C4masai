// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("#masaiForm").addEventListener("submit",masaiSubmit);
var scheduleArr=JSON.parse(localStorage.getItem("schedule")) || [];

function masaiSubmit(){
    event.preventDefault();

    var scheduleObj={
        matchNum:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value
     
    };

    scheduleArr.push(scheduleObj);
    console.log(scheduleArr);
    localStorage.setItem("schedule",JSON.stringify(scheduleArr));
    window.location.href="matches.html";

}