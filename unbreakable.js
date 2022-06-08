function split(str, splitter) {
    let newArr = []
    let tempStr = ""
    for (let i = 0, j = 0; i < str.length; i++) {
        if (str[i] != splitter) {
            tempStr += str[i]
        } else if (str[i] = splitter) {
            newArr[j] = tempStr
            tempStr = ""
            j++
        }
    }
    newArr[newArr.length] = tempStr
    return newArr
}

function join(arr, joiner) {
    let newStr = ""
    for (let i = 0; i < arr.length; i++) {
        newStr += (arr[i] + joiner)
    }
    return newStr
}