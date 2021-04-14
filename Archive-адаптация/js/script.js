// date top news

function getLastWeekDate() {

    let d = new Date();
    let p = new Date(d.getTime() - 7 * 86400000);
    let monthA = "01,02,03,04,05,06,07,08,09,10,11,12".split(",");

    let dateLastWeek = document.querySelector('.date-last-week');
    let lastWeek = document.querySelector('.last-week-date');
    let date = document.querySelector('.last-week');

    dateLastWeek.innerHTML = ` ${p.getDate()}/${monthA[p.getMonth()]}/${d.getFullYear()},`;
    lastWeek.innerHTML = ` ${p.getDate()}/${monthA[p.getMonth()]}/${d.getFullYear()}`;
    date.innerHTML = ` ${p.getDate()}/${monthA[p.getMonth()]}/${d.getFullYear()}`;
}

function getCurrentDate() {

    let d = new Date();
    let p = new Date(d.getTime() + 0 * 86400000);
    let monthA = "01,02,03,04,05,06,07,08,09,10,11,12".split(",");

    let currentDate = document.querySelector('.current-date');
    let currentWeek = document.querySelector('.current-week');
    let date = document.getElementById('current-date');
    let fullYear = document.querySelector('.footer__year')

    currentDate.innerHTML = ` ${p.getDate()}/${monthA[p.getMonth()]}/${d.getFullYear()} `;
    currentWeek.innerHTML = ` ${p.getDate()}/${monthA[p.getMonth()]}/${d.getFullYear()} `;
    date.innerHTML = ` ${p.getDate()}/${monthA[p.getMonth()]}/${d.getFullYear()} `;
    fullYear.innerHTML = `${d.getFullYear()}`;
}


function getNextDay() {
    let d = new Date();
    let p = new Date(d.getTime() + 1 * 86400000);
    let monthA = "01,02,03,04,05,06,07,08,09,10,11,12".split(",");

    let nextDay = document.getElementById('next-day');
    let tomorowDay = document.querySelector('.next-day');

    nextDay.innerHTML = ` ${p.getDate()}/${monthA[p.getMonth()]}/${d.getFullYear()}`;
    tomorowDay.innerHTML = ` ${p.getDate()}/${monthA[p.getMonth()]}/${d.getFullYear()}`;
}

// Timer


let timeIs = new Date();

let sec = 59 - timeIs.getSeconds();
let min = 59 - timeIs.getMinutes();
let hour = 23 - timeIs.getHours();

function refresh() {
    sec--;
    if (sec == -01) {
        sec = 59;
        min = min - 1;
    } else {
        min = min;
    }
    if (sec <= 9) {
        sec = "0" + sec;
    }
    if (min == -01) {
        min = 59;
        hour = hour - 1;
    } else {
        hour = hour;
    }
    if (document.getElementById) {
        hour1.innerHTML = hour <= 9 ? "0" + hour : hour;
        min1.innerHTML = min <= 9 ? "0" + min : min;
        sec1.innerHTML = sec;
    }
    inter = setTimeout(refresh, 1000);
    if (hour == "00" && min == "00" && sec == "00") {
        sec = "00";
        clearInterval(inter);
    }
}


refresh();
getLastWeekDate();
getCurrentDate();
getNextDay();