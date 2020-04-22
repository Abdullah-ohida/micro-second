setInterval(loadTime, 1000)
const micro_secDiv = document.getElementById('micro_sec');
const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');

function loadTime() {
    let date = new Date();
    let micro_sec = date.getMilliseconds() / 60;
    let sec = date.getSeconds() / 60;
    let min = date.getMinutes() / 60;
    console.log(date.getMilliseconds() / 60)

    micro_secDiv.style.transform = "rotate(" + (micro_sec * 360) + "deg)";
    secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
    minDiv.style.transform = "rotate(" + (min * 360) + "deg)";
}

loadTime();
console