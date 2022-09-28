var data = new Date("Jul 28 2030, 00:00:00").getTime()
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = data - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24 ))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

document.getElementById('days').innerHTML = days;
document.getElementById('hours').innerHTML = hours;
document.getElementById('minutes').innerHTML = minutes;
document.getElementById('seconds').innerHTML = seconds;

if (days == 2859) {
    document.getElementById('auguri').innerHTML = "Buon 28 settembre +1.2 <3";
    document.getElementById('ciao').style.color = "blue";
    document.getElementById('auguri').style.textShadow = "0px 0px 22px blue"
}


//animazione finale:
if (days < 2859) {
    document.getElementById('auguri').innerHTML = "";    
    document.getElementById('title').innerHTML = "<3"
    document.getElementById('ciao').style.color = "white";
    document.getElementById('auguri').style.textShadow = ""
}

if (days == 2859 && hours <= 00 && minutes <= 00 && seconds < 10) {
    document.getElementById('span').style.animation = "span 6s"
    document.getElementById('days').style.animation = "division 6s";
    document.getElementById('seconds').style.animation = "division 6s";
    document.getElementById('hours').style.animation = "division-mid 6s";
    document.getElementById('seconds').style.animation = "division-mid 6s";
}


if (days == 2859 && hours == 00 && minutes == 00 && seconds <= 5) {
    document.getElementById('span').style.animationPlayState = "paused"
    document.getElementById('days').style.animationPlayState = "paused"
    document.getElementById('hours').style.animationPlayState = "paused"
    document.getElementById('minutes').style.animationPlayState = "paused"
    document.getElementById('seconds').style.animationPlayState = "paused"
}


},1000); 

var date = new Date("Sep 28 2022, 00:00:00").getTime()
var a = setInterval(function() {
    var ora = new Date().getTime();
    var distances = date - ora;
    var day = Math.floor(distances / (1000 * 60 * 60 * 24 ))
    var hour = Math.floor((distances % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60))
    var minute = Math.floor((distances % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((distances % (1000 * 60)) / 1000)

document.getElementById('days1').innerHTML = day;
document.getElementById('hours1').innerHTML = hour;
document.getElementById('minutes1').innerHTML = minute;
document.getElementById('seconds1').innerHTML = second;

if (day <= 00 && hour <= 00 && minute <= 00 && second <= 00) {
    var doc = document.getElementById('spann');
    while (doc.hasChildNodes()) {
    doc.removeChild(doc.firstChild)
}
doc.remove()
document.getElementById('auguri').style.marginTop = "-19%"
}


},1000);
