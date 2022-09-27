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
    document.getElementById('title').innerHTML = "+1.2"
}

if (days < 2859) {
    document.getElementById('auguri').innerHTML = "";
}



},1000); 
