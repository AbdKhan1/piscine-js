function cutFirst(str) {
    let newStr = ""
    for (let i = 2; i < str.length; i++) {
        newStr += str[i]
    }
    return newStr
}

function cutLast(str) {
    let newStr = ""
    for (let i = 0; i < str.length - 2; i++) {
        newStr += str[i]
    }
    return newStr
}

function cutFirstLast(str) {
    let newStr = ""
    for (let i = 2; i < str.length - 2; i++) {
        newStr += str[i]
    }
    return newStr
}

function keepFirst(str) {
    let newStr = ""
    if (str.length >= 2) {
        for (let i = 0; i < 2; i++) {
            newStr += str[i]
        }
        return newStr
    } else {
        return str
    }

}

function keepLast(str) {
    let newStr = ""
    if (str.length >= 2) {
        let length = str.length - 2
        for (let i = length; i < str.length; i++) {
            newStr += str[i]
        }
        return newStr
    } else {
        return str
    }
}

function keepFirstLast(str) {
    let newStr = ""
    if (str.length <= 4) {
        return str
    }
    let cut1 = keepFirst(str)
    let cut2 = keepLast(str)
    newStr += cut1 + cut2
    return newStr
}