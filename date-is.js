function isValid(date) {
    var dt = new Date(y, m, d, 0, 0, 0, 0);

    // get the month, day, and year from the object we just created 
    var mon = dt.getMonth();
    var day = dt.getDate();
    var yr = dt.getYear();

    // if they match then the date is valid
    if (mon == m && yr == y && day == d)
        return true;
    else
        return false;
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