let userName=prompt("Adinizi girin:")

let myUserName=document.getElementById('myName')
let myClock= document.getElementById('myClock')
let clock=document.querySelector(".clock")

const weekDay=['Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi','Pazar'];

const date= new Date();
let day=weekDay[date.getDate()];

myUserName.innerHTML=userName;
clock.innerHTML=day;

function showTime(){
    
    const now=new Date()
    let hour=now.getHours()
    let minute=now.getMinutes()
    let second=now.getSeconds()

    minute = checkTime(minute);
    second = checkTime(second);

    myClock.innerHTML=`${hour} : ${minute} : ${second}`;
    setTimeout=(showTime,1000);
}

function checkTime(i) {
    if ( i < 10 ) { i = "0" + i } ;
    return i ;
  }

    showTime()

