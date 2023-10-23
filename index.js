let hourEl = document.querySelector(".hour");
let minuteEl = document.querySelector(".minute");
let secondEl = document.querySelector(".second");

// UPDATE CLOCK FUNCTION CODING.
const updateClock = () => {
    const currentDate = new Date();
    setTimeout(updateClock, 1000);
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const hourDeg = (hour / 12) * 360;
    const minuteDeg = (minute / 60) * 360;
    const secondDeg = (second / 60) * 360;

    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

updateClock();
