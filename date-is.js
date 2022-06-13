function isValid(date) {
  return date >0 && date!=null
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
    date1 = new Date.now();
    return isValid(date) && (isAfter(date, date1));
}

function isPast(date) {
    date1 = new Date.now();
    return isValid(date) && (isBefore(date, date1));
}