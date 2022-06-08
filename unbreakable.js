function split(str, splitter, num) {
    let newArr = []
    let tempStr = ""
    for (let i = 0, j = 0; i < str.length; i++) {
        if (str[i] != splitter) {
            tempStr += str[i]
        } else if (str[i] = splitter) {
            if (num == j + 1) {
                return newArr
            }
            newArr[j] = tempStr
            tempStr = ""
            j++
        }
    }
    newArr[newArr.length] = tempStr
    return newArr
}
// console.log(split('a b c', ','))

function join(arr, joiner) {
    let newStr = ""
    for (let i = 0; i < arr.length; i++) {
        newStr += (arr[i] + joiner)
    }
    return newStr
}