var minute = 0;
var hour = 0;
var second = 0;
var d = new Date();

setInterval(
    function(){
        d = new Date();
        minute = d.getMinutes() * 6;
        second = d.getSeconds() * 6;
        hour = d.getHours() * 30;
        document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
        document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
        document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";

    }, 1000
)
