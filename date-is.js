function isValid(date) {
    var date_regex = new RegExp('/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/');
    if (!(date_regex.test(date))) {
        return false;
    } else {
        return true
    }
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