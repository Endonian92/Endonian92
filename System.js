$("#page").keypress(function(){
        var str = event.keyCode;
        setTimeout("location.href='main.html';", 0);
});
function LoadMusic(){
        var music = new Audio('https://upload.wikimedia.org/wikipedia/commons/c/c3/Caro_Mio_Ben_-_Bryn_Williams.ogg');
        if (str == 13){
            music.play();
            music.loop = true;
        }
}
