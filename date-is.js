function isValid(date) {
    return date > 0 && date != null
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
    date1 = new Date.now();
    return isValid(date) && (isAfter(date, date1));
}

function isPast(date) {
    date1 = new Date.now();
    return isValid(date) && (isBefore(date, date1));
}