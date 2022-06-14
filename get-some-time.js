function firstDayWeek(num, str) {
    let year = Math.floor(str);
    let month = Math.round(num / 4.3452381);
    let days = (num*7)-5
    let d = new Date(year,month,days)
    return d
}