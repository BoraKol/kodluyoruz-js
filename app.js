const task= document.querySelector("#task");
const list= document.querySelector("#list");
let toastElement = document.querySelector('#liveToastBtn');

var myNodeList=document.getElementsByTagName("LI");
for(var i=0;i<myNodeList.length;i++){
    var span=document.createElement("SPAN");
    var text=document.createTextNode("x");
    span.className="close";
    span.appendChild(text);
    myNodeList[i].appendChild(span);
}

var close=document.getElementsByClassName("close");
for(var i=0;i<close.length;i++){
    close[i].onclick=function(){
        this.parentElement.style.display="none";

    }
}

function newElement(){
    var li=document.createElement("li");
    var inputValue=document.getElementById("task").value;
    var text=document.createTextNode(inputValue);
    li.appendChild(text);

    if(inputValue==""){
        $(".error").toast("show");
    }
    else{
        $('.success').toast("show");
        document.getElementById("list").appendChild(li);
        li.className="list-group-item";
    } 

    document.getElementById("task").value="";
    var span=document.createElement("SPAN");
    var text=document.createTextNode("x");
    span.className="close";
    span.appendChild(text);
    li.appendChild(span);

    for(var i=0;i<close.length;i++){
        close[i].onclick=function(){
            this.parentElement.style.display="none";
    
        }
    }    

}

task.addEventListener("keydown" , (value)=> {
    if(value.key=== "Enter"){
        toastElement.click();
    }
})
