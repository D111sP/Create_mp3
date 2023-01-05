doc = document
console.log("123")
let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        chech_fun(this.responseText)
    };
};

xhttp.open("GET", "http://127.0.0.1:8000/audio", true);
xhttp.send();

function  chech_fun(data){
    doc.getElementById("audio").src = "data:audio/mpeg;base64," + data
    doc.load();
};
