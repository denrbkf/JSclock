
var clock = document.getElementById('clock'),
    color = document.getElementById('color');

function colorClock() {
    var time = new Date(),
        h = time.getHours().toString(),
        m = time.getMinutes().toString(),
        s = time.getSeconds().toString();
        
    if (h.length < 2) {
        h = '0' + h;
    }

    if (m.length < 2) {
        m = '0' + m;
    }

    if (s.length < 2) {
        s = '0' + s;
    }

    var clockString = h + ':' + m + ':' + s,
        colorString = '#' + h + m + s;

    clock.textContent = clockString;
    color.textContent = "Цвет фона: " + colorString;

    document.body.style.background = colorString;

}

colorClock();
setInterval(colorClock, 1000);


console.log(clockString);
