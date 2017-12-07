let hoursHand = document.getElementById('hours_hand');
let minutesHand = document.getElementById('minutes_hand');
let secondsHand = document.getElementById('seconds_hand');

function setDate() {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let secondsDegrees = (seconds / 60) * 360 + 90;
    let minutesDegrees = (minutes / 60) * 360 + 90;
    let hoursDegrees = (hours / 60) * 360 + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);