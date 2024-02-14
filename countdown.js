var enddate="14 FEB 2024 4:54 PM";
document.querySelector("#changedate").innerHTML=enddate;
function clock(){
    var date=new Date(enddate);
var date2=new Date();
var diff=date-date2;
if(diff<0){
    return;
}
diff=diff/1000;
 var inputs=document.querySelectorAll("input");
 inputs[0].setAttribute("value",Math.floor((diff/(3600*24))));
 inputs[1].setAttribute("value",Math.floor((diff%(3600*24))/3600));
 inputs[2].setAttribute("value",Math.floor((diff%3600)/60));
 inputs[3].setAttribute("value",Math.floor(diff%60));
}
setInterval(clock,1000);

