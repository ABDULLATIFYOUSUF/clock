function clock(){
    var a = new Date()
    var hrs = a.getHours()
    var min = a.getMinutes()
    var sec = a.getSeconds()
    var sessions = document.getElementById("sessions")
    if(hrs >= 12){
        sessions.innerHTML = "PM"
    }else{
        sessions.innerHTML = "AM"
    }
    if(hrs > 12){
        hrs = hrs - 12
    }

    document.getElementById("hours").innerHTML = hrs
    document.getElementById("minutes").innerHTML = min
    document.getElementById("seconds").innerHTML = sec
}
setInterval(clock)