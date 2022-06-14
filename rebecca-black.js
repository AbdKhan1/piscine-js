function isFriday(date) {
    let d = new Date(date)
    if (d.getDay() === 5) {
        return true
    } else {
        return false
    }
}

function isWeekend(date) {
    let d = new Date(date)
    if (d.getDay() === 6 || 0) {
        return true
    } else {
        return false
    }
}

function isLeapYear(date) {
    let d = new Date(date)
    if (d.getFullYear() % 4 === 0) {
        return true;
    } else {
        return false
    }
}

function isLastDayOfMonth(date) {
    let d = new Date(date)
    var lastDay = (d.getFullYear(), d.getMonth() + 1, 0);
    if (lastDay == date) {
        return true;
    } else {
        return false
    }
}