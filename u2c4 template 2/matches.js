// write js code here corresponding to matches.html

var scheduleArr=JSON.parse(localStorage.getItem("schedule"));
displayData(scheduleArr);

function filterChange(){
    var select = document.getElementById("filterVenue").value;
   console.log(select);
   var venueList=scheduleArr.filter(function(ele){
       return ele.venue==select;
   })
   console.log(venueList);
   displayData(venueList)
 }

var favouritesArr=JSON.parse(localStorage.getItem("favourites")) || [];

function displayData(data){
    document.querySelector("tbody").innerHTML="";

    data.forEach(function(ele){

        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=ele.matchNum;

        var td2=document.createElement("td");
        td2.innerText=ele.teamA;

        var td3=document.createElement("td");
        td3.innerText=ele.teamB;

        var td4=document.createElement("td");
        td4.innerText=ele.date;

        var td5=document.createElement("td");
        td5.innerText=ele.venue;

        var td6=document.createElement("td");
        td6.innerText="Add as Favourites";
        td6.style.color="green";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){
            favouritesArrFunction(ele);

        })
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);


       
    })
}

     function favouritesArrFunction(ele){
         favouritesArr.push(ele);
         localStorage.setItem("favourites",JSON.stringify(favouritesArr));
     }

     
    