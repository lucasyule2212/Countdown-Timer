


function getName() {
    let eventName = document.getElementById("event").value;
    document.getElementById("title").innerHTML = eventName;
}
function getDateDisplay() {
  return document.getElementById("dateBox").value;
}
function getTitleDisplay(){
    return document.getElementById("title").innerHTML;
}

var ms;
function getMs(date) {
    ms = date.getTime();
}
function getDateObj() {
    let day = getDateDisplay().substring(8, 10);
    let month = getDateDisplay().substring(5, 7) - 1;
    let year = getDateDisplay().substring(0, 4);
    var date = new Date(year, month, day);
    return date;
}

function attMs() {
    return ms;
}

function getDate() {

    getMs(getDateObj());
    var x = setInterval(
        function () {
            var today = new Date().getTime();
            var cntDown = attMs() - today;
            var days = Math.floor(cntDown / (1000 * 60 * 60 * 24));
            var hours = Math.floor((cntDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var min = Math.floor((cntDown % (1000 * 60 * 60) / (1000 * 60)))
            var seconds = Math.floor(cntDown % (1000 * 60) / 1000); 

            var eventOk=true;
            var title = document.getElementById("title").innerHTML;
            if (title == "") {             
                alert("Nome do evento inválido!")
                clearInterval(x);  
                eventOk=false;       
            }            
            else if (days>=0&&eventOk==true) {
                document.getElementById("1").innerHTML = days;
                document.getElementById("2").innerHTML = hours;
                document.getElementById("3").innerHTML = min;
                document.getElementById("4").innerHTML = seconds;  
            }else               
            {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = ""; 
                alert("Quer voltar no tempo é?");
            }  
                  
            if (cntDown < 0) {
                clearInterval(x);
                document.getElementById("display").innerHTML = "DATA ALCANÇADA"
            }
        }, 1000);
}

var toggleMenu;

function showMenu() {

    if (toggleMenu==false) {
        document.getElementById("menuList").style.visibility="hidden";
        document.getElementById("menu").style.backgroundColor=""
        document.getElementById("menu").style.left="-1000px"
        toggleMenu=true;
    }else{
        document.getElementById("menuList").style.visibility="visible";
        document.getElementById("menu").style.backgroundColor="#343a40"
        document.getElementById("menu").style.left="-100px"
        toggleMenu=false;
    }
    
}

let saveButton=document.getElementById("save");
var arrayIndex=0;
var arrayDate=[];
function saveDate() {
    if (title != "") {
        let newDate= (getDateDisplay().substring(8, 10))+"/"+(getDateDisplay().substring(5, 7))+"/"+(getDateDisplay().substring(0, 4));
        let newTitle = getTitleDisplay();
        arrayDate.push({data: newDate,event: newTitle});
        document.getElementById("menuList").innerHTML+=`<br> <li onclick="setDate(${arrayIndex})">${arrayDate[arrayIndex].data+"<br>("+arrayDate[arrayIndex].event+")"}</li>`;
        arrayIndex++;
        
    }else{
        alert("Voce precisa definir um evento válido!");
    }
   
}
function setDate(arrayIndex) {
let day1 = arrayDate[arrayIndex].data.substring(0, 2);
let month1 = arrayDate[arrayIndex].data.substring(3, 5)-1;
let year1  = arrayDate[arrayIndex].data.substring(6, 10);
let newDate1= new Date(year1,month1,day1);
document.getElementById("title").innerHTML=arrayDate[arrayIndex].event;
getMs(newDate1);
}

