function split(str, splitter) {
    let newArr = []
    for (let i = 0, j = 0; i < str.length; i++) {
        if (str[i] != splitter) {
            newArr[j] += str[i]
        } else if (str[i] = splitter) {
            j++
        }
    }
    return newArr
}
console.log(split('abcdefg,qwerty,opasdf', ','))