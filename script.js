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

},1000); 



var date = new Date("Mar 28 2023, 00:00:00").getTime()
var a = setInterval(function() {
    var ora = new Date().getTime();
    var distances = date - ora;
    var day = Math.floor(distances / (1000 * 60 * 60 * 24 ))
    var hour = Math.floor((distances % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60))
    var minute = Math.floor((distances % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((distances % (1000 * 60)) / 1000)

var spanafter, span, days1, hours1, minutes1, seconds1, titoli;
spanafter = document.getElementById("spann");
span = document.getElementById("span");
days1 = document.getElementById("days1");
hours1 = document.getElementById('hours1');
minutes1 = document.getElementById('minutes1');
seconds1 = document.getElementById('seconds1');
titoli = document.querySelector("h5");

document.getElementById('days1').innerHTML = day;
document.getElementById('hours1').innerHTML = hour;
document.getElementById('minutes1').innerHTML = minute;
document.getElementById('seconds1').innerHTML = second;

if (day <= 00 && hour <= 00 && minute <= 01 && second == 59) {

    seconds1.classList.toggle("minus-ten");
    days1.style.display = "none";
    minutes1.style.display = "none";
    hours1.style.display = "none";

} else if (day <= 00 && hour <= 00 && minute <= 00 && second == 30 && !seconds1.classList.contains("minus-ten") ) {
    seconds1.classList.toggle("minus-ten");
    days1.style.display = "none";
    minutes1.style.display = "none";
    hours1.style.display = "none";

} else if (day <= 00 && hour <= 00 && minute <= 00 && second == 10 && !seconds1.classList.contains("minus-ten")) {
    seconds1.classList.toggle("minus-ten");
    days1.style.display = "none";
    minutes1.style.display = "none";
    hours1.style.display = "none";
}


if (day <= 00 && hour <= 00 && minute <= 00 && second <= 00) {
    spanafter.style.display = "none";
    titoli.style.display = "block";
    titoli.style.marginTop = "-30px";
    hearts()
                function hearts() {
        const container = document.querySelector(".container");
        const creat = document.createElement("div");
        creat.classList.add("cuori");
        creat.innerHTML = "💙";
        creat.style.left = Math.random() * 100 + "vw";
        creat.style.animationDuration = Math.random()* 3 + 2 + "s";
        container.appendChild(creat);
        setTimeout(() => {
            creat.remove()
        }, 10000);

        if (new Date().getDate() != 03) {
            setTimeout(() => {
                creat.remove();
                titoli.remove();
            }, 000000001)

        }

    }setInterval(100);
}
},1000);

