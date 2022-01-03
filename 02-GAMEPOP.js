window.onload=function(){
    var img = document.getElementById("popver1");
    var audio = new Audio("sound/catsound.mp3");

    img.addEventListener('mousedown', function(){
        img.src ='picture/game pop/02.jfif'
        audio.play();

    })
    img.addEventListener('mouseup', function(){
        img.src="picture/game pop/01.webp"
        audio.play();
    })
}