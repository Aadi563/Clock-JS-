const r = document.querySelector(':root');
let secDeg = 0;
let minDeg = 0;
let hrDeg = 0;
setInterval(()=>{
    r.style.setProperty('--secondsTransform', `${secDeg}deg`);
    r.style.setProperty('--minutesTransform', `${minDeg}deg`);
    r.style.setProperty('--hourTransform', `${hrDeg}deg`);
    secDeg += 6;
    minDeg += 1/10;
    hrDeg += 1/120;
}, 1000);
