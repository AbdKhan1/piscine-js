function isValid(date){
    return date instanceof Date && !isNaN(date.valueOf())
}

function isAfter(date1, date2) {
    if (date1 > date2)
        return true;
    else {
        return false;
    }
}

function isBefore(date1, date2) {
    if (date1 < date2)
        return true;
    else {
        return false;
    }
}

function isFuture(date) {
    return isValid(date) && (isAfter(date, Date.now()));
}

function isPast(date) {
    return isValid(date) && (isBefore(date, Date.now()));
}