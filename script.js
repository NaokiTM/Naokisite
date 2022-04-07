function dateandtime() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    
    let time = today.getHours() + ":" + today.getMinutes()
    

    today = dd + '/' + mm + '/' + yyyy;
    titlemarquee.innerHTML = today + " " + "Naoki's certi website" + " " + time

    setInterval(everyTime, 1000);
}

function playmario() {
    var audio = new Audio("audio/mario.mp3");
    if (audio.play) {
        audio.play();
    }else{
        audio.currentTime = 0
    }
}


function playpokemon() {
    var audio = new Audio("audio/boutique.mp3");
    if (audio.paused) {
        audio.play();
    }else{
        audio.currentTime = 0
    }
}

dateandtime()

