function pyramid(str, num) {
    let newStr = ""
    let j = 0
    let counter = 1
    let extraCounter = 1
    let counter2 = 0
    let extraCounter2 = 1
    for (let i = 1; i <= num; i++) {
        if (j >= 1) {
            newStr += '\n'
            for (; counter2 < num;) {
                newStr += ' '
                counter2++
            }
            while (counter > 0) {
                newStr += str
                counter--
            }
            extraCounter++
            counter = extraCounter
        }
        for (j = 0; j < i; j++) {
            for (; counter2 < num;) {
                newStr += ' '
                counter2++
            }
            newStr += str
        }
        extraCounter2++
        counter2 = extraCounter2
    }
    return newStr
}
