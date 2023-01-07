window.onload = function(){
    console.log("123")
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            chech_fun(JSON.parse(this.responseText))
        };
    };

    xhttp.open("GET", "http://127.0.0.1:8000/audio", true);
    xhttp.send();

    function  chech_fun(data){
        console.log(data)
        player = document.getElementById("audio")
        player.src = data.key;

    };
}

