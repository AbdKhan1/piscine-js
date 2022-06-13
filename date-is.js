function isValid(date) {
    if (date instanceof Date) {
        let timeInMilliSecond = date.valueOf();
        let isInvalidDate = isNaN(timeInMilliSecond);
        if (isInvalidDate) {
            return false; // if timeInMilliSecond = NaN means it is an invalid date
        }
        return true; // valid date value
    }
    return false; // obj is not an Date object
}

function isAfter(date1, date2) {
    var date1 = new Date();
    var date2 = new Date();
    if (date1.getTime() > date2.getTime())
        return true;
    else {
        return false;
    }
}

function isBefore(date1, date2) {
    var date1 = new Date();
    var date2 = new Date();
    if (date1.getTime() < date2.getTime())
        return true;
    else {
        return false;
    }
}

function isFuture(date) {
    if (isValid(date) == true) {
        date1 = new Date.now();
        return (isAfter(date, date1));
    } else {
        return false;
    }
}

function isPast(date) {
    if (isValid(date) == true) {
        date1 = new Date.now();
        return (isBefore(date, date1));
    } else {
        return false;
    }
}