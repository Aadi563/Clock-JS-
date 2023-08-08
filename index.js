const r = document.querySelector(':root');
let secDeg = 0;
let minDeg = 0;
let hrDeg = 0;
setInterval(()=>{
    r.style.setProperty('--secondsTransform', `${secDeg}deg`);
    secDeg += 6;
}, 1000)
setInterval(()=>{
    r.style.setProperty('--minutesTransform', `${minDeg}deg`);
    minDeg += 1/10;
}, 1000)
setInterval(()=>{
    r.style.setProperty('--hourTransform', `${hrDeg}deg`);
    hrDeg += 1/120;
}, 1000)

