function dateandtime() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    
    let time = today.getHours() + ":" + today.getMinutes()
    

    today = dd + '/' + mm + '/' + yyyy;
    titlemarquee.innerHTML = today + " " + "Naoki's certi website" + " " + time

    setInterval(everyTime, 60000);
}

dateandtime()
