function getName() {
    let eventName = document.getElementById("event").value;
    document.getElementById("title").innerHTML=eventName;
}
function getDateDisplay() {

    return document.getElementById("dateBox").value;
}

var ms;
function getMs(date) {
   ms =  date.getTime();
}

function getDate() {
  let day= getDateDisplay().substring(8,10);
  let month= getDateDisplay().substring(5,7)-1;
  let year=getDateDisplay().substring(0,4);
  let date = new Date (year,month,day);
  getMs(date);

  var x = setInterval(
    function () {
        var today = new Date().getTime();
        var cntDown = ms - today;  
        var days = Math.floor(cntDown/(1000*60*60*24));
        var hours = Math.floor((cntDown%(1000 * 60 * 60 * 24))/(1000*60*60));
        var min = Math.floor((cntDown%(1000*60*60)/(1000*60)))
        var seconds = Math.floor(cntDown%(1000*60)/1000);

        document.getElementById("display").innerHTML=days+" : "+hours+" : "+min+" : "+seconds;

        if (cntDown<0) {
            clearInterval(x);
            document.getElementById("display").innerHTML="DATA ALCANÇADA"
        }
    },1000);
}
