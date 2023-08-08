const r = document.querySelector(':root');
let secDeg = 0;
let minDeg = 0;
let hrDeg = 0;
setInterval(()=>{
    r.style.setProperty('--secondsTransform', `${secDeg}deg`);
    secDeg += 6;
    minDeg += 1/10;
    hrDeg += 1/120;
}, 1000);

