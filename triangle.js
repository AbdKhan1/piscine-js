function triangle(str, num) {
    let newStr = ""
    let j = 0
    for (let i = 1; i <= num; i++) {
        if (j >= 1) {
            newStr += '\n'
        }
        for (j = 0; j < i; j++) {
            newStr += str
        }
    }
    return newStr
}