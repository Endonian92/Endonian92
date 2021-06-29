$("#page").keypress(function(){
        var str = event.keyCode;
        setTimeout("link()", 0);
        function link(){
                location.href='main.html';
        }
});
function LoadMusic(){
        var music = new Audio('https://upload.wikimedia.org/wikipedia/commons/c/c3/Caro_Mio_Ben_-_Bryn_Williams.ogg');
        if (str == 13){
            music.play();
            music.loop = true;
        }
}
