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
    if (isLeapYear(date)) {
        if (d.getMonth() === 1 && d.getDate() === 29) {
            return true;
        } else {
            d.setDate(1); // going to 1st of the month
            d.setHours(-1);
            if (d == date) {
                return true;
            } else {
                return false;
            }
        }
    }
    d.setDate(1); // going to 1st of the month
    d.setHours(-1);
    if (d == date) {
        return true;
    } else {
        return false;
    }
}