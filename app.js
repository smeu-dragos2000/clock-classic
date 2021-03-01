const deg = 6;
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');


setInterval(() => {

    let day = new Date();
    let hourRotate = day.getHours() * 30;
    let minuteRotate = day.getMinutes() * deg;
    let secondRotate = day.getSeconds() * deg;

    let today = day.getDate();
    let month = day.getMonth() + 1;
    let year = day.getFullYear();

    today = (today < 10) ? "0" + today : today;
    month = (month < 10) ? "0" + month : month;

    hour.style.transform = `rotateZ(${hourRotate + minuteRotate/12}deg)`;
    minute.style.transform = `rotateZ(${minuteRotate}deg)`;
    second.style.transform = `rotateZ(${secondRotate}deg)`;
    document.getElementById('today').innerHTML = `${today}`;
    document.getElementById('month').innerHTML = `${month}`;
    document.getElementById('year').innerHTML = `${year}`;
})







